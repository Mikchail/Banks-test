import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreditOffer } from './credit-offer.model';
import { CreateCrediteOfferDto } from './dto/create-credite-offer-dto';

@Injectable()
export class CreditOfferService {

    constructor(@InjectModel(CreditOffer) private creditOfferRepository: typeof CreditOffer) { }

    async saveCreditOffer(dto: CreateCrediteOfferDto) {
        return await this.creditOfferRepository.create(dto);
    }

    async getCreditOffer(id: string) {
        return await this.creditOfferRepository.findByPk(id);
    }

    async deleteCreditOffer(id: string) {
        await this.creditOfferRepository.destroy({
            where: { id }
        });
    }

    async findByClientId(id: string) {
        return await this.creditOfferRepository.findOne({ where: { client: id }});
    }
}
