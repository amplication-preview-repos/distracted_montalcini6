import { SortOrder } from "../../util/SortOrder";

export type SignalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  senderId?: SortOrder;
  receiverId?: SortOrder;
  signal?: SortOrder;
  sessionId?: SortOrder;
};
