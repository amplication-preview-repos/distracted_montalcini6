import { InputJsonValue } from "../../types";

export type SignalUpdateInput = {
  senderId?: string | null;
  receiverId?: string | null;
  signal?: InputJsonValue;
  sessionId?: string | null;
};
