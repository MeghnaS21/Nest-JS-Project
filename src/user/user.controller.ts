import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';


@Controller('/user')
export class UserController{
    @Get()
    getUser(){
        return 'I am from user Controller';
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
  getUserId(@Param() userId: number){
    return userId;
  }

  @Delete('/:userId')
  deleteUser(@Param() userId: number){
    return userId;
  }
}