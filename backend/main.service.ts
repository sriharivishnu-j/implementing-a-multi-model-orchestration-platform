import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
  getStatus(): string {
    return 'Service is running';
  }
}
