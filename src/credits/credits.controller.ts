import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreateCreditDto } from './dto/create-credit.dto';

@Controller('credits')
export class CreditsController {

  constructor(private creditService: CreditsService) { }

  @Post()
  createClient(@Body() dto: CreateCreditDto) {
    return this.creditService.createClient(dto);
  }

  @Get()
  getAllCredits() {
    return this.creditService.getAllCredits();
  }

  @Get("/:id")
  getCreditsByBank(@Param("id") id: number) {
    return this.creditService.getCreditsByBank(id);
  }

}
