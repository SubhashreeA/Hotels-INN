import { User } from './user.model';
import { Establishments } from './establish.model';

export class Review {
    id: number;
    rating: number;
    reviewedBy: User;
    establishment: Establishments;
    reviewContent: string;    
}
