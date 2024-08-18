import { PaginableParams } from "../../dto/paginable.params";
import { Transform } from "class-transformer";
import { IsOptional } from "class-validator";

export class UserQueryDto extends PaginableParams {
  @IsOptional()
  @Transform(({ value }) => value && new Date(value))
  startBirthDate: Date;

  @IsOptional()
  @Transform(({ value }) => value && new Date(value))
  endBirthDate: Date;
}
