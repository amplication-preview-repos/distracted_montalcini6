import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SignalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="senderId" source="senderId" />
        <TextField label="receiverId" source="receiverId" />
        <TextField label="signal" source="signal" />
        <TextField label="sessionId" source="sessionId" />
      </SimpleShowLayout>
    </Show>
  );
};
