import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Credit } from './credits.model';
import { CreateCreditDto } from './dto/create-credit.dto';

@Injectable()
export class CreditsService {

  constructor(@InjectModel(Credit) private creditRepository: typeof Credit) { }

  async createClient(dto: CreateCreditDto) {
    return await this.creditRepository.create(dto);
  }

  async getAllCredits() {
    return await this.creditRepository.findAll();
  }
}
