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
import { WebRtcConnections } from "./WebRtcConnections";
import { WebRtcConnectionsCountArgs } from "./WebRtcConnectionsCountArgs";
import { WebRtcConnectionsFindManyArgs } from "./WebRtcConnectionsFindManyArgs";
import { WebRtcConnectionsFindUniqueArgs } from "./WebRtcConnectionsFindUniqueArgs";
import { CreateWebRtcConnectionsArgs } from "./CreateWebRtcConnectionsArgs";
import { UpdateWebRtcConnectionsArgs } from "./UpdateWebRtcConnectionsArgs";
import { DeleteWebRtcConnectionsArgs } from "./DeleteWebRtcConnectionsArgs";
import { User } from "../../user/base/User";
import { ChatSessions } from "../../chatSessions/base/ChatSessions";
import { WebRtcConnectionsService } from "../webRtcConnections.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WebRtcConnections)
export class WebRtcConnectionsResolverBase {
  constructor(
    protected readonly service: WebRtcConnectionsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WebRtcConnections",
    action: "read",
    possession: "any",
  })
  async _webRtcConnectionsItemsMeta(
    @graphql.Args() args: WebRtcConnectionsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WebRtcConnections])
  @nestAccessControl.UseRoles({
    resource: "WebRtcConnections",
    action: "read",
    possession: "any",
  })
  async webRtcConnectionsItems(
    @graphql.Args() args: WebRtcConnectionsFindManyArgs
  ): Promise<WebRtcConnections[]> {
    return this.service.webRtcConnectionsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WebRtcConnections, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WebRtcConnections",
    action: "read",
    possession: "own",
  })
  async webRtcConnections(
    @graphql.Args() args: WebRtcConnectionsFindUniqueArgs
  ): Promise<WebRtcConnections | null> {
    const result = await this.service.webRtcConnections(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WebRtcConnections)
  @nestAccessControl.UseRoles({
    resource: "WebRtcConnections",
    action: "create",
    possession: "any",
  })
  async createWebRtcConnections(
    @graphql.Args() args: CreateWebRtcConnectionsArgs
  ): Promise<WebRtcConnections> {
    return await this.service.createWebRtcConnections({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        chatSession: args.data.chatSession
          ? {
              connect: args.data.chatSession,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WebRtcConnections)
  @nestAccessControl.UseRoles({
    resource: "WebRtcConnections",
    action: "update",
    possession: "any",
  })
  async updateWebRtcConnections(
    @graphql.Args() args: UpdateWebRtcConnectionsArgs
  ): Promise<WebRtcConnections | null> {
    try {
      return await this.service.updateWebRtcConnections({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          chatSession: args.data.chatSession
            ? {
                connect: args.data.chatSession,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => WebRtcConnections)
  @nestAccessControl.UseRoles({
    resource: "WebRtcConnections",
    action: "delete",
    possession: "any",
  })
  async deleteWebRtcConnections(
    @graphql.Args() args: DeleteWebRtcConnectionsArgs
  ): Promise<WebRtcConnections | null> {
    try {
      return await this.service.deleteWebRtcConnections(args);
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
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: WebRtcConnections
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ChatSessions, {
    nullable: true,
    name: "chatSession",
  })
  @nestAccessControl.UseRoles({
    resource: "ChatSessions",
    action: "read",
    possession: "any",
  })
  async getChatSession(
    @graphql.Parent() parent: WebRtcConnections
  ): Promise<ChatSessions | null> {
    const result = await this.service.getChatSession(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}