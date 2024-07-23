import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WebRtcConnectionsService } from "./webRtcConnections.service";
import { WebRtcConnectionsControllerBase } from "./base/webRtcConnections.controller.base";

@swagger.ApiTags("webRtcConnections")
@common.Controller("webRtcConnections")
export class WebRtcConnectionsController extends WebRtcConnectionsControllerBase {
  constructor(
    protected readonly service: WebRtcConnectionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
