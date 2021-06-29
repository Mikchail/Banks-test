import { Body, Controller, Get, Post } from '@nestjs/common';
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
  getAll() {
      return this.clientService.getAllClients();
  }
}
