import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ChatSessionsWhereUniqueInput } from "../chatSessions/ChatSessionsWhereUniqueInput";

export type WebRtcConnectionsUpdateInput = {
  isActive?: boolean | null;
  connectionId?: string | null;
  user?: UserWhereUniqueInput | null;
  chatSession?: ChatSessionsWhereUniqueInput | null;
};
