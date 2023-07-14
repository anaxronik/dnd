import { Injectable } from "@nestjs/common";
import { ConfigService } from "src/config/config.service";
import { LoggerService } from "src/logger/logger.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Injectable()
export class TodosService {
  constructor(
    private loggerService: LoggerService,
    private config: ConfigService
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return "This action adds a new todo";
  }

  findAll() {
    console.log(this.config.string);

    this.loggerService.success({ m: "find allll", count: 1 });
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
