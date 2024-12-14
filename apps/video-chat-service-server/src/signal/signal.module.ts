import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SignalModuleBase } from "./base/signal.module.base";
import { SignalService } from "./signal.service";
import { SignalController } from "./signal.controller";
import { SignalResolver } from "./signal.resolver";

@Module({
  imports: [SignalModuleBase, forwardRef(() => AuthModule)],
  controllers: [SignalController],
  providers: [SignalService, SignalResolver],
  exports: [SignalService],
})
export class SignalModule {}
