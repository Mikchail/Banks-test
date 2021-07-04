import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client-dto';

@Controller('clients')
export class ClientsController {


  constructor(private clientService: ClientsService) {}

  @Post()
  create(@Body() userDto: CreateClientDto) {
      return this.clientService.createClient(userDto);
  }

  @Get()
  @Render('clients.hbs')
  getAll() {
      return this.clientService.getAllClients();
  }

  @Get("/:id")
  getClientsByBank(@Param("id") id: number) {
    return this.clientService.getClientsByBank(id);
  }
}
