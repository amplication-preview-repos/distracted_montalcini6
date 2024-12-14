import { WebRtcConnections as TWebRtcConnections } from "../api/webRtcConnections/WebRtcConnections";

export const WEBRTCCONNECTIONS_TITLE_FIELD = "connectionId";

export const WebRtcConnectionsTitle = (record: TWebRtcConnections): string => {
  return record.connectionId?.toString() || String(record.id);
};
