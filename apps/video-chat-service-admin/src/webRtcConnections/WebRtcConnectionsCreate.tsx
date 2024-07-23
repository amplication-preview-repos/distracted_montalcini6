import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ChatSessionsTitle } from "../chatSessions/ChatSessionsTitle";

export const WebRtcConnectionsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="connectionId" source="connectionId" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="chatSession.id"
          reference="ChatSessions"
          label="chatSession"
        >
          <SelectInput optionText={ChatSessionsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
