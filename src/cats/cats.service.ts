import { Injectable } from '@nestjs/common';
import { Cat } from './cats.model';

@Injectable()
export class CatsService {
    private cats: Cat[] = [{
        id: 1,
        name: "1",
        weight: 10
    },
    {
        id: 2,
        name: "2",
        weight: 20
    }]

    getCatById(id: number): Cat {
        return this.cats.filter(o => o.id === id)[0];
    }

    getAllCats(): Cat[] {
        return this.cats;
    }
}
