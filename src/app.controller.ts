import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { YerOldTo } from './yer-old.dto';
import { UpdateTodo } from './update.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get')
  getHello(@Query('user_name') user_name: string): string {
    return this.appService.getHello(user_name);
  }
  @Post('create')
  createHello(@Body() createDto: YerOldTo) {
    return this.appService.createHello(createDto.value);
  }
  @Put('update')
  putHello(@Body() UpdateTo: UpdateTodo) {
    return this.appService.putHello(UpdateTo.title);
  }
}
