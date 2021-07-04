export class CreateCrediteOfferDto {
  readonly title: string;
  readonly amount: number;
  readonly periodInMonths: number;
  readonly firstPay: Date;
  readonly percentSum: number;
  readonly bankId: number;
  readonly creditId: number;
  readonly clientId: number;
}