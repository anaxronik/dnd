import * as fs from "fs";
import * as path from "path";

import { Injectable } from "@nestjs/common";

export type TLogType = "error" | "success";
export type TLogMessage = string | number | boolean | object;

@Injectable()
export class LoggerService {
  async error(message: TLogMessage) {
    const log = this.createLog("error", message);
    await this.saveToDisk(log);
  }

  async success(message: TLogMessage) {
    const log = this.createLog("success", message);
    await this.saveToDisk(log);
  }

  serialize = (message: string | number | boolean | object) => {
    return JSON.stringify(message);
  };

  private createLog(type: TLogType, message: TLogMessage) {
    return {
      timestamp: Date.now(),
      time: new Date().toLocaleTimeString(),
      type,
      message,
    };
  }

  private async saveToDisk(log: object) {
    try {
      const fileName = String(new Date().toISOString()).split("T")[0];
      const folderPath = path.resolve(__dirname, "../..", "logs");
      const filePath = path.resolve(folderPath, `${fileName}.log`);
      if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
      fs.appendFileSync(filePath, JSON.stringify(log) + "\n");
    } catch (error: any) {
      console.error(error);
    }
  }
}
