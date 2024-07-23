import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebRtcConnectionsListRelationFilter } from "../webRtcConnections/WebRtcConnectionsListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  webRtcConnectionsItems?: WebRtcConnectionsListRelationFilter;
};
