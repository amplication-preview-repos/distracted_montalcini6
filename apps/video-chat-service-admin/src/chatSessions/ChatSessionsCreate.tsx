import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WebRtcConnectionsTitle } from "../webRtcConnections/WebRtcConnectionsTitle";

export const ChatSessionsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="startTime" source="startTime" />
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="user1" source="user1" />
        <TextInput label="user2" source="user2" />
        <TextInput label="sessionId" source="sessionId" />
        <ReferenceArrayInput
          source="webRtcConnectionsItems"
          reference="WebRtcConnections"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebRtcConnectionsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
