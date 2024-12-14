import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WebRtcConnectionsTitle } from "../webRtcConnections/WebRtcConnectionsTitle";

export const ChatSessionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
