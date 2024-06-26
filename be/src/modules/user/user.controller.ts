import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common'
import { UserService } from './user.service'
import { Response } from 'src/utils/response.type'
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard'
import { Authorization } from 'src/decorator/authorization.decorator'
import { actionEnum } from '../permission/permission.entity'
import { UpdateUserDto } from './dto/update-user.dto'
import { FilterUserDto } from './dto/filter-user.dto'
import { ListFilterDto } from '../base/filter.dto'
import { JwtPayload } from '../auth/interfaces/jwt.payload.interface'
import { GetCurrentUser } from 'src/decorator/authentication.decorator'

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getListUsers(@Query() query: FilterUserDto) {
    try {
      const result = await this.userService.getListUsers(query)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result,
      })
    } catch (e) {
      throw e
    }
  }

  @Get('/profile')
  async getProfile(@GetCurrentUser() user: JwtPayload) {
    try {
      const result = await this.userService.getProfile(user.userId)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }

  @Get('/list-user')
  async getUsersPagination(@Query() filter: ListFilterDto) {
    try {
      const result = await this.userService.getDemo(filter)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.userService.deleteUserById(id)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result,
      })
    } catch (e) {
      throw e
    }
  }

  @Get('/:id')
  @Authorization('user', actionEnum.READ)
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.userService.getUserById(id)
      return Response({
        message: 'Delete user success',
        statusCode: HttpStatus.OK,
        result,
      })
    } catch (e) {
      throw e
    }
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const result = await this.userService.updateUserById(id, updateUserDto)

      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result,
      })
    } catch (e) {
      throw e
    }
  }
}
