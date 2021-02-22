import { Injectable } from '@nestjs/common';
import { Cat } from './cats.model';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    {
      id: 1,
      name: 'Cat 1',
      weight: 10,
    },
    {
      id: 2,
      name: 'Cat 2',
      weight: 11,
    },
    {
      id: 3,
      name: 'Cat 3',
      weight: 8,
    },
  ];

  getCatById(id: number): Cat {
    return this.cats.filter((o) => o.id === id)[0];
  }

  getAllCats(): Cat[] {
    return this.cats;
  }
}
