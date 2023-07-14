import { Module } from "@nestjs/common";
import { ConfigService } from "src/config/config.service";
import { LoggerService } from "src/logger/logger.service";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";

@Module({
  controllers: [TodosController],
  providers: [TodosService, LoggerService, ConfigService],
})
export class TodosModule {}
