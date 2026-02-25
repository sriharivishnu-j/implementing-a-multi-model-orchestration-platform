import { Controller, Get, LoggerService } from '@nestjs/common';
import { MainService } from './main.service';

@Controller('main')
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Get()
  getStatus(): string {
    return this.mainService.getStatus();
  }
}
