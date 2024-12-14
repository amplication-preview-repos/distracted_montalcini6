import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChatSessionsResolverBase } from "./base/chatSessions.resolver.base";
import { ChatSessions } from "./base/ChatSessions";
import { ChatSessionsService } from "./chatSessions.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChatSessions)
export class ChatSessionsResolver extends ChatSessionsResolverBase {
  constructor(
    protected readonly service: ChatSessionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
