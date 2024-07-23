import { WebRtcConnections } from "../webRtcConnections/WebRtcConnections";

export type ChatSessions = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  user1: string | null;
  user2: string | null;
  sessionId: string | null;
  webRtcConnectionsItems?: Array<WebRtcConnections>;
};
