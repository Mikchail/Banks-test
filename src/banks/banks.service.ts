import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bank } from './banks.model';
import { CreateBankDto } from './dto/create-bank-dto';

@Injectable()
export class BanksService {

    constructor(@InjectModel(Bank) private bankRepository: typeof Bank) { }

    async saveBank(dto: CreateBankDto) {
        console.log("BanksService", dto);
        
        try {
            return await this.bankRepository.create(dto);
        } catch (error) {
            console.log(error);
        }
        
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
         const banks = await this.bankRepository.findAll();
         return banks;
    }
}
