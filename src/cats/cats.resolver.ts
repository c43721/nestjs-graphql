import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Owner } from 'src/owners/owner.model';
import { OwnersService } from 'src/owners/owners.service';
import { Cat } from './cats.model';
import { CatsService } from './cats.service';

@Resolver((of) => Cat)
export class CatsResolver {
  constructor(
    private catService: CatsService,
    private ownerService: OwnersService,
  ) {}

  @Query((returns) => Cat, { name: 'cat' })
  getSingleCat(@Args('id', { type: () => Int }) id: number) {
    return this.catService.getCatById(id);
  }

  @Query((returns) => [Cat], { name: 'cats' })
  getAllCats() {
    return this.catService.getAllCats();
  }

  @ResolveField((returns) => [Owner])
  owner(@Parent() cat: Cat): Owner[] {
    const { id } = cat;
    return this.ownerService.getOwnersByCatId(id);
  }
}
