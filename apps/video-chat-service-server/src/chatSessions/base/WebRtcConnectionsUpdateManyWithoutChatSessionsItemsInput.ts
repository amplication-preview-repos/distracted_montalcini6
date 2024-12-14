/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WebRtcConnectionsWhereUniqueInput } from "../../webRtcConnections/base/WebRtcConnectionsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WebRtcConnectionsUpdateManyWithoutChatSessionsItemsInput {
  @Field(() => [WebRtcConnectionsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WebRtcConnectionsWhereUniqueInput],
  })
  connect?: Array<WebRtcConnectionsWhereUniqueInput>;

  @Field(() => [WebRtcConnectionsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WebRtcConnectionsWhereUniqueInput],
  })
  disconnect?: Array<WebRtcConnectionsWhereUniqueInput>;

  @Field(() => [WebRtcConnectionsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WebRtcConnectionsWhereUniqueInput],
  })
  set?: Array<WebRtcConnectionsWhereUniqueInput>;
}

export { WebRtcConnectionsUpdateManyWithoutChatSessionsItemsInput as WebRtcConnectionsUpdateManyWithoutChatSessionsItemsInput };
