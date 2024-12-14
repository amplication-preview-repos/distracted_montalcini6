import { SortOrder } from "../../util/SortOrder";

export type WebRtcConnectionsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isActive?: SortOrder;
  connectionId?: SortOrder;
  userId?: SortOrder;
  chatSessionId?: SortOrder;
};
