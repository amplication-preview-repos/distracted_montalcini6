import { WebRtcConnectionsCreateNestedManyWithoutChatSessionsItemsInput } from "./WebRtcConnectionsCreateNestedManyWithoutChatSessionsItemsInput";

export type ChatSessionsCreateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  user1?: string | null;
  user2?: string | null;
  sessionId?: string | null;
  webRtcConnectionsItems?: WebRtcConnectionsCreateNestedManyWithoutChatSessionsItemsInput;
};
