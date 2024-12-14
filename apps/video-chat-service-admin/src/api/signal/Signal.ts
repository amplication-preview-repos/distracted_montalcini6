import { JsonValue } from "type-fest";

export type Signal = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  senderId: string | null;
  receiverId: string | null;
  signal: JsonValue;
  sessionId: string | null;
};
