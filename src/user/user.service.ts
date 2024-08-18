import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFilterDto } from "./dto/user.filter.dto";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getPage(page, pageSize, filterOptions: UserFilterDto) {
    return this.prismaService.user.findMany({
      take: pageSize,
      orderBy: { birthDate: "desc" },
      where: filterOptions,
    });
  }

  getRandomDate() {
    const start = new Date(1954, 0, 1).getTime(); // January 1, 1954
    const end = new Date(2024, 11, 31).getTime(); // December 31, 2024
    const randomTime = start + Math.random() * (end - start);
    return new Date(randomTime).toISOString();
  }

  async create() {
    return this.prismaService.user.create({
      data: { birthDate: this.getRandomDate() },
    });
  }

  async createMany() {
    for (let i = 0; i < 20000000 / 50000; i++) {
      const batchSize = 10;
      const promises = [];
      for (let i = 0; i < batchSize; i++) {
        const users = Array.from({ length: 30000 }, () => {
          return { birthDate: this.getRandomDate() };
        });
        promises.push(
          this.prismaService.user.createMany({
            data: users,
          }),
        );
      }
      await Promise.all(promises);
    }
  }
}
