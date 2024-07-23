import { InputJsonValue } from "../../types";

export type SignalCreateInput = {
  senderId?: string | null;
  receiverId?: string | null;
  signal?: InputJsonValue;
  sessionId?: string | null;
};
