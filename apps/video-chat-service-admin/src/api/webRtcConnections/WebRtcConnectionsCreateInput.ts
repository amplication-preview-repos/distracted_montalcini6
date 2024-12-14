import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ChatSessionsWhereUniqueInput } from "../chatSessions/ChatSessionsWhereUniqueInput";

export type WebRtcConnectionsCreateInput = {
  isActive?: boolean | null;
  connectionId?: string | null;
  user?: UserWhereUniqueInput | null;
  chatSession?: ChatSessionsWhereUniqueInput | null;
};
