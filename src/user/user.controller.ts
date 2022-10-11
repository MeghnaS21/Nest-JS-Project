import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';


@Controller('/user')
export class UserController {
  constructor(private userService: UserService) { };


  @Get()
  getUser() {
    return this.userService.get();
  }

  @Post()
  store(@Req() req: Request) {
    return this.userService.create(req);
  }

  @Patch('/:userId')
  update(@Req() req: Request, @Param() param: {userId: number}) {
    return this.userService.update(req, param);
  }

  @Get('/:userId')
  getUserId(@Param() param: {userId: number}) {
    return this.userService.show(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: {userId: number}) {
    return this.userService.delete( param);
  }
}