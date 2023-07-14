import { Module } from "@nestjs/common";
import { LoggerService } from "./logger/logger.service";
import { TodosModule } from "./todos/todos.module";
import { ConfigService } from './config/config.service';

@Module({
  imports: [TodosModule],
  controllers: [],
  providers: [LoggerService, ConfigService],
})
export class AppModule {}
