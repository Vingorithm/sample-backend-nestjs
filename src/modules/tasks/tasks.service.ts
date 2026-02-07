import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  // Pake function dari prisma yaitu create
  create(userId: number, dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        userId,
      },
    });
  }

  // Pake function dari prisma yaitu findMany
  findAll(userId: number) {
    return this.prisma.task.findMany({
      where: { userId },
    });
  }

  async updateTask(taskId: number, userId: number, dto: UpdateTaskDto) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    if (task.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    return this.prisma.task.update({
      where: { id: taskId },
      data: dto,
    });
  }

  async deleteTask(taskId: number, userId: number) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    if (task.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    await this.prisma.task.delete({
      where: { id: taskId },
    });

    return {
      message: 'Task berhasil dihapus',
    };
  }
}
