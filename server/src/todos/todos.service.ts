import { Injectable } from "@nestjs/common";
import { LoggerService } from "src/logger/logger.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Injectable()
export class TodosService {
  constructor(private loggerService: LoggerService) {}

  create(createTodoDto: CreateTodoDto) {
    return "This action adds a new todo";
  }

  findAll() {
    this.loggerService.success("find allll");
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
