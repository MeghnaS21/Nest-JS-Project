import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  store(@Req() req: Request){
    return req.body;
  }

  @Patch('/:userId')
  update(@Req() req: Request){
    return req.body;
  }

  @Get('/:userId')
  getUser(@Param() userId: number){
    return userId;
  }

  @Delete('/:userId')
  deleteUser(@Param() userId: number){
    return userId;
  }
}
