import { User } from "../user/User";
import { ChatSessions } from "../chatSessions/ChatSessions";

export type WebRtcConnections = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean | null;
  connectionId: string | null;
  user?: User | null;
  chatSession?: ChatSessions | null;
};
