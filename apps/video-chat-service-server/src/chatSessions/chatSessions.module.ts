import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChatSessionsModuleBase } from "./base/chatSessions.module.base";
import { ChatSessionsService } from "./chatSessions.service";
import { ChatSessionsController } from "./chatSessions.controller";
import { ChatSessionsResolver } from "./chatSessions.resolver";

@Module({
  imports: [ChatSessionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChatSessionsController],
  providers: [ChatSessionsService, ChatSessionsResolver],
  exports: [ChatSessionsService],
})
export class ChatSessionsModule {}
