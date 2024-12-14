import { SortOrder } from "../../util/SortOrder";

export type ChatSessionsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  user1?: SortOrder;
  user2?: SortOrder;
  sessionId?: SortOrder;
};
