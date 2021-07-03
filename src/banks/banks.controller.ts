import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { CreditsService } from 'src/credits/credits.service';
import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank-dto';

@Controller('banks')
export class BanksController {

  constructor(
    private banksService: BanksService,
    private clientsService: ClientsService,
    private creditsService: CreditsService) { }

  @Post()
  saveBank(@Body() dto: CreateBankDto) {
    return this.banksService.saveBank(dto);
  }

  @Get("/:id")
  getBank(@Param("id") id: string) {
    return this.banksService.getBank(id);
  }

  @Delete("/:id")
  deleteBank(@Param("id") id: string) {
    return this.banksService.deleteBank(id);
  }

  @Get()
  @Render('banks.hbs')
  getAllBanks() {
    const banks = this.banksService.getAllBanks();
    const clients = this.clientsService.getAllClients();
    const credits = this.creditsService.getAllCredits();
    return { message: 'Hello world!' };
  }
}
