import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreditOfferService } from './credit-offer.service';
import { CreateCrediteOfferDto } from './dto/create-credite-offer-dto';

@Controller('credit-offer')
export class CreditOfferController {

  constructor(private creditOfferService: CreditOfferService) { }

  @Post()
  async saveCreditOffer(@Body() dto: CreateCrediteOfferDto) {
    return await this.creditOfferService.saveCreditOffer(dto);
  }

  @Get("/:id")
  async getCreditOffer(@Param("id") id: string) {
    return await this.creditOfferService.getCreditOffer(id);
  }

  @Delete("/:id")
  async deleteCreditOffer(@Param("id") id: string) {
    await this.creditOfferService.deleteCreditOffer(id);
  }

  @Post("/:id")
  async findByClientId(@Param("id") id: string) {
    return await this.creditOfferService.findByClientId(id);
  }

}
