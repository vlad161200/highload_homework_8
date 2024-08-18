import { IsOptional, Max, Min } from "class-validator";
import { Type } from "class-transformer";

export class PaginableParams {
  @IsOptional()
  @Max(100)
  @Min(1)
  @Type(() => Number)
  pageSize: number = 20;

  @IsOptional()
  @Min(1)
  @Type(() => Number)
  page: number = 1;
}
