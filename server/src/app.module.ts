import { Module } from "@nestjs/common";
import { LoggerService } from "./logger/logger.service";
import { TodosModule } from "./todos/todos.module";

@Module({
  imports: [TodosModule],
  controllers: [],
  providers: [LoggerService],
})
export class AppModule {}
