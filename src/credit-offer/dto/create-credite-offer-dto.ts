export class CreateCrediteOfferDto {
  readonly title: string;
  readonly amount: number;
  readonly periodInMonths: number;
  readonly firstPay: number;
  readonly percentSum: number;
  readonly bankId: number;
  readonly creditId: number;
  readonly clientId: number;
}