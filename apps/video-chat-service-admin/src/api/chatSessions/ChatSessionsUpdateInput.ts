import { WebRtcConnectionsUpdateManyWithoutChatSessionsItemsInput } from "./WebRtcConnectionsUpdateManyWithoutChatSessionsItemsInput";

export type ChatSessionsUpdateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  user1?: string | null;
  user2?: string | null;
  sessionId?: string | null;
  webRtcConnectionsItems?: WebRtcConnectionsUpdateManyWithoutChatSessionsItemsInput;
};
