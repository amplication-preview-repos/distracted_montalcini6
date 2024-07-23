import { ChatSessionsWhereInput } from "./ChatSessionsWhereInput";
import { ChatSessionsOrderByInput } from "./ChatSessionsOrderByInput";

export type ChatSessionsFindManyArgs = {
  where?: ChatSessionsWhereInput;
  orderBy?: Array<ChatSessionsOrderByInput>;
  skip?: number;
  take?: number;
};
