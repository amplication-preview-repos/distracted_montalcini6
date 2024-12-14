import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WebRtcConnectionsModuleBase } from "./base/webRtcConnections.module.base";
import { WebRtcConnectionsService } from "./webRtcConnections.service";
import { WebRtcConnectionsController } from "./webRtcConnections.controller";
import { WebRtcConnectionsResolver } from "./webRtcConnections.resolver";

@Module({
  imports: [WebRtcConnectionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [WebRtcConnectionsController],
  providers: [WebRtcConnectionsService, WebRtcConnectionsResolver],
  exports: [WebRtcConnectionsService],
})
export class WebRtcConnectionsModule {}
