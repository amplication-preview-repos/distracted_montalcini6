import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChatSessionsList } from "./chatSessions/ChatSessionsList";
import { ChatSessionsCreate } from "./chatSessions/ChatSessionsCreate";
import { ChatSessionsEdit } from "./chatSessions/ChatSessionsEdit";
import { ChatSessionsShow } from "./chatSessions/ChatSessionsShow";
import { WebRtcConnectionsList } from "./webRtcConnections/WebRtcConnectionsList";
import { WebRtcConnectionsCreate } from "./webRtcConnections/WebRtcConnectionsCreate";
import { WebRtcConnectionsEdit } from "./webRtcConnections/WebRtcConnectionsEdit";
import { WebRtcConnectionsShow } from "./webRtcConnections/WebRtcConnectionsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SignalList } from "./signal/SignalList";
import { SignalCreate } from "./signal/SignalCreate";
import { SignalEdit } from "./signal/SignalEdit";
import { SignalShow } from "./signal/SignalShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VideoChatService"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ChatSessions"
          list={ChatSessionsList}
          edit={ChatSessionsEdit}
          create={ChatSessionsCreate}
          show={ChatSessionsShow}
        />
        <Resource
          name="WebRtcConnections"
          list={WebRtcConnectionsList}
          edit={WebRtcConnectionsEdit}
          create={WebRtcConnectionsCreate}
          show={WebRtcConnectionsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Signal"
          list={SignalList}
          edit={SignalEdit}
          create={SignalCreate}
          show={SignalShow}
        />
      </Admin>
    </div>
  );
};

export default App;
