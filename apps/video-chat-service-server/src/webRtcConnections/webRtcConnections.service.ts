import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebRtcConnectionsServiceBase } from "./base/webRtcConnections.service.base";

@Injectable()
export class WebRtcConnectionsService extends WebRtcConnectionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
