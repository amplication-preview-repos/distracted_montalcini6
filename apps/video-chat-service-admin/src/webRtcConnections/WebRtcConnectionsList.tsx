import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CHATSESSIONS_TITLE_FIELD } from "../chatSessions/ChatSessionsTitle";

export const WebRtcConnectionsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WebRTCConnectionsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="connectionId" source="connectionId" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="chatSession"
          source="chatsessions.id"
          reference="ChatSessions"
        >
          <TextField source={CHATSESSIONS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
