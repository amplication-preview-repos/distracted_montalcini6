import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SignalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="senderId" source="senderId" />
        <TextInput label="receiverId" source="receiverId" />
        <div />
        <TextInput label="sessionId" source="sessionId" />
      </SimpleForm>
    </Create>
  );
};
