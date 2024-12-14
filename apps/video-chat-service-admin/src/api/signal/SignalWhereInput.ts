import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SignalWhereInput = {
  id?: StringFilter;
  senderId?: StringNullableFilter;
  receiverId?: StringNullableFilter;
  signal?: JsonFilter;
  sessionId?: StringNullableFilter;
};
