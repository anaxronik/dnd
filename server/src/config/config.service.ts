import * as dotenv from "dotenv";

import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
  constructor() {
    dotenv.config();
  }

  /** Сборка для разработки */
  get isDev(): boolean {
    return false;
  }

  get string(): string {
    return process.env.STRING || "default string";
  }
}
