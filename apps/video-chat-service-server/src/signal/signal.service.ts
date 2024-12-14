import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SignalServiceBase } from "./base/signal.service.base";

@Injectable()
export class SignalService extends SignalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
