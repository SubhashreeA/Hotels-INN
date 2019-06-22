import { User } from './user.model';

export class Offer {
    proposedBy: User;
    acceptedBy: User;
    merchant: User;
    expireDate: Date;
    promoCode: string;
    discount: number;
    formDate: Date;
}
