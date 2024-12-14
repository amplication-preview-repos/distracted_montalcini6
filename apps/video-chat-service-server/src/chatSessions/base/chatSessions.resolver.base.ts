/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { ChatSessions } from "./ChatSessions";
import { ChatSessionsCountArgs } from "./ChatSessionsCountArgs";
import { ChatSessionsFindManyArgs } from "./ChatSessionsFindManyArgs";
import { ChatSessionsFindUniqueArgs } from "./ChatSessionsFindUniqueArgs";
import { CreateChatSessionsArgs } from "./CreateChatSessionsArgs";
import { UpdateChatSessionsArgs } from "./UpdateChatSessionsArgs";
import { DeleteChatSessionsArgs } from "./DeleteChatSessionsArgs";
import { WebRtcConnectionsFindManyArgs } from "../../webRtcConnections/base/WebRtcConnectionsFindManyArgs";
import { WebRtcConnections } from "../../webRtcConnections/base/WebRtcConnections";
import { ChatSessionsCreateInput } from "./ChatSessionsCreateInput";
import { ChatSessionsService } from "../chatSessions.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChatSessions)
export class ChatSessionsResolverBase {
  constructor(
    protected readonly service: ChatSessionsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ChatSessions",
    action: "read",
    possession: "any",
  })
  async _chatSessionsItemsMeta(
    @graphql.Args() args: ChatSessionsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ChatSessions])
  @nestAccessControl.UseRoles({
    resource: "ChatSessions",
    action: "read",
    possession: "any",
  })
  async chatSessionsItems(
    @graphql.Args() args: ChatSessionsFindManyArgs
  ): Promise<ChatSessions[]> {
    return this.service.chatSessionsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ChatSessions, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ChatSessions",
    action: "read",
    possession: "own",
  })
  async chatSessions(
    @graphql.Args() args: ChatSessionsFindUniqueArgs
  ): Promise<ChatSessions | null> {
    const result = await this.service.chatSessions(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ChatSessions)
  @nestAccessControl.UseRoles({
    resource: "ChatSessions",
    action: "create",
    possession: "any",
  })
  async createChatSessions(
    @graphql.Args() args: CreateChatSessionsArgs
  ): Promise<ChatSessions> {
    return await this.service.createChatSessions({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ChatSessions)
  @nestAccessControl.UseRoles({
    resource: "ChatSessions",
    action: "update",
    possession: "any",
  })
  async updateChatSessions(
    @graphql.Args() args: UpdateChatSessionsArgs
  ): Promise<ChatSessions | null> {
    try {
      return await this.service.updateChatSessions({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ChatSessions)
  @nestAccessControl.UseRoles({
    resource: "ChatSessions",
    action: "delete",
    possession: "any",
  })
  async deleteChatSessions(
    @graphql.Args() args: DeleteChatSessionsArgs
  ): Promise<ChatSessions | null> {
    try {
      return await this.service.deleteChatSessions(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [WebRtcConnections], {
    name: "webRtcConnectionsItems",
  })
  @nestAccessControl.UseRoles({
    resource: "WebRtcConnections",
    action: "read",
    possession: "any",
  })
  async findWebRtcConnectionsItems(
    @graphql.Parent() parent: ChatSessions,
    @graphql.Args() args: WebRtcConnectionsFindManyArgs
  ): Promise<WebRtcConnections[]> {
    const results = await this.service.findWebRtcConnectionsItems(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Mutation(() => ChatSessionsCreateInput)
  async CreateChatSession(
    @graphql.Args()
    args: ChatSessionsCreateInput
  ): Promise<ChatSessionsCreateInput> {
    return this.service.CreateChatSession(args);
  }

  @graphql.Query(() => [ChatSessionsFindManyArgs])
  async GetAllChatSessions(
    @graphql.Args()
    args: ChatSessionsFindManyArgs
  ): Promise<ChatSessionsFindManyArgs[]> {
    return this.service.GetAllChatSessions(args);
  }
}
