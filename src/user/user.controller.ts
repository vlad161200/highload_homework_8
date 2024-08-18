import { Controller, Get, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserQueryDto } from "./dto/user.query.dto";
import { UserFilterDto } from "./dto/user.filter.dto";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getPage(@Query() query: UserQueryDto) {
    const filterOptions = new UserFilterDto(
      query.startBirthDate,
      query.endBirthDate,
    );
    return this.userService.getPage(query.page, query.pageSize, filterOptions);
  }

  @Post()
  async create() {
    return this.userService.create();
  }
}
