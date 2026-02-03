import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Req() req: Request, @Body() dto: CreateTaskDto) {
    return this.tasksService.create((req as any).user.sub, dto);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.tasksService.findAll((req as any).user.sub);
  }
}
