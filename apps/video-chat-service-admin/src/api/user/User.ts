import { JsonValue } from "type-fest";
import { WebRtcConnections } from "../webRtcConnections/WebRtcConnections";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  webRtcConnectionsItems?: Array<WebRtcConnections>;
};
