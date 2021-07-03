import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bank } from './banks.model';
import { CreateBankDto } from './dto/create-bank-dto';

@Injectable()
export class BanksService {

    constructor(@InjectModel(Bank) private bankRepository: typeof Bank) { }

    async saveBank(dto: CreateBankDto) {
        return await this.bankRepository.create(dto);
    }

    async getBank(id: string) {
        return await this.bankRepository.findByPk(id);
    }

    async deleteBank(id: string) {
        return await this.bankRepository.destroy({
            where: {
                id
            }
        });
    }

    async getAllBanks() {
        return await this.bankRepository.findAll();
    }
}
