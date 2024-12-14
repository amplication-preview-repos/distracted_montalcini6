import { InputJsonValue } from "../../types";
import { WebRtcConnectionsCreateNestedManyWithoutUsersInput } from "./WebRtcConnectionsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  webRtcConnectionsItems?: WebRtcConnectionsCreateNestedManyWithoutUsersInput;
};
