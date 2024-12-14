import { ChatSessions as TChatSessions } from "../api/chatSessions/ChatSessions";

export const CHATSESSIONS_TITLE_FIELD = "user1";

export const ChatSessionsTitle = (record: TChatSessions): string => {
  return record.user1?.toString() || String(record.id);
};
