import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // Mapping endpoint dan panggil method di service
  @Post()
  create(@Req() req: Request, @Body() dto: CreateTaskDto) {
    return this.tasksService.create((req as any).user.sub, dto);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.tasksService.findAll((req as any).user.sub);
  }

  // Yang diminta id task dari parameter dan juga body untuk update
  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto,
    @Req() req: any,
  ) {
    return this.tasksService.updateTask(+id, req.user.id, dto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string, @Req() req: any) {
    return this.tasksService.deleteTask(+id, req.user.id);
  }
}
