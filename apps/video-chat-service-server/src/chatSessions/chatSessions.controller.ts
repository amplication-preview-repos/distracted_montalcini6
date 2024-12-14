import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChatSessionsService } from "./chatSessions.service";
import { ChatSessionsControllerBase } from "./base/chatSessions.controller.base";

@swagger.ApiTags("chatSessions")
@common.Controller("chatSessions")
export class ChatSessionsController extends ChatSessionsControllerBase {
  constructor(
    protected readonly service: ChatSessionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
