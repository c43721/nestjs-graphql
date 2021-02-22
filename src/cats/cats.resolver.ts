import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Cat } from './cats.model';
import { CatsService } from './cats.service';

@Resolver((of) => Cat)
export class CatsResolver {
  constructor(private catService: CatsService) {}

  @Query((returns) => Cat, { name: 'cat' })
  getSingleCat(@Args('id', { type: () => Int }) id: number) {
    return this.catService.getCatById(id);
  }

  @Query((returns) => [Cat], { name: 'cats' })
  getAllCats() {
    return this.catService.getAllCats();
  }
}
