import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SignalService } from "./signal.service";
import { SignalControllerBase } from "./base/signal.controller.base";

@swagger.ApiTags("signals")
@common.Controller("signals")
export class SignalController extends SignalControllerBase {
  constructor(
    protected readonly service: SignalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
