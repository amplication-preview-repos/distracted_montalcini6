import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ChatSessionsWhereUniqueInput } from "../chatSessions/ChatSessionsWhereUniqueInput";

export type WebRtcConnectionsWhereInput = {
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  connectionId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  chatSession?: ChatSessionsWhereUniqueInput;
};
