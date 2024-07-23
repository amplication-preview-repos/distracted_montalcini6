import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatSessionsServiceBase } from "./base/chatSessions.service.base";

@Injectable()
export class ChatSessionsService extends ChatSessionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
