import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(user_name: string): string {
    return 'Hello World!' + user_name;
  }
  createHello(yer: number) {
    return 2024 - yer;
  }
  putHello(title: string) {
    return title.substring(2, title.length);
  }
}
