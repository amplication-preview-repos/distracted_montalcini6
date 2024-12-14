import { WebRtcConnectionsWhereInput } from "./WebRtcConnectionsWhereInput";
import { WebRtcConnectionsOrderByInput } from "./WebRtcConnectionsOrderByInput";

export type WebRtcConnectionsFindManyArgs = {
  where?: WebRtcConnectionsWhereInput;
  orderBy?: Array<WebRtcConnectionsOrderByInput>;
  skip?: number;
  take?: number;
};
