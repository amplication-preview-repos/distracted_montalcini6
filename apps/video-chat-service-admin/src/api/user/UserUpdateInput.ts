import { InputJsonValue } from "../../types";
import { WebRtcConnectionsUpdateManyWithoutUsersInput } from "./WebRtcConnectionsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  webRtcConnectionsItems?: WebRtcConnectionsUpdateManyWithoutUsersInput;
};
