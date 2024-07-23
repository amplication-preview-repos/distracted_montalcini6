import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SignalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="senderId" source="senderId" />
        <TextInput label="receiverId" source="receiverId" />
        <div />
        <TextInput label="sessionId" source="sessionId" />
      </SimpleForm>
    </Edit>
  );
};
