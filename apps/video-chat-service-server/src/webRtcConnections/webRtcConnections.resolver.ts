import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WebRtcConnectionsResolverBase } from "./base/webRtcConnections.resolver.base";
import { WebRtcConnections } from "./base/WebRtcConnections";
import { WebRtcConnectionsService } from "./webRtcConnections.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WebRtcConnections)
export class WebRtcConnectionsResolver extends WebRtcConnectionsResolverBase {
  constructor(
    protected readonly service: WebRtcConnectionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
