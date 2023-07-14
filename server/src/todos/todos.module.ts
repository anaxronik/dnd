import { Module } from "@nestjs/common";
import { LoggerService } from "src/logger/logger.service";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";

@Module({
  controllers: [TodosController],
  providers: [TodosService, LoggerService],
})
export class TodosModule {}
