export class UserFilterDto {
  constructor(startBirthDate: Date, endBirthDate: Date) {
    this.birthDate = {
      lte: endBirthDate,
      gte: startBirthDate,
    };
  }
  birthDate: {
    lte: Date;
    gte: Date;
  };
}
