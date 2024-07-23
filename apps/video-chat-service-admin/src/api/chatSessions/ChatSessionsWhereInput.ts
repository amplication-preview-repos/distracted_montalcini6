import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebRtcConnectionsListRelationFilter } from "../webRtcConnections/WebRtcConnectionsListRelationFilter";

export type ChatSessionsWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
  sessionId?: StringNullableFilter;
  webRtcConnectionsItems?: WebRtcConnectionsListRelationFilter;
};
