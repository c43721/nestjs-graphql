import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Cat } from 'src/cats/cats.model';
import { CatsService } from 'src/cats/cats.service';
import { Owner } from './owner.model';
import { OwnersService } from './owners.service';

@Resolver((of) => Owner)
export class OwnerResolver {
  constructor(
    private ownerService: OwnersService,
    private catService: CatsService,
  ) {}

  @Query((returns) => Owner)
  owner(@Args('id', { type: () => Int }) id: number) {
    return this.ownerService.getOwnerById(id);
  }

  @Query((returns) => Owner, { name: 'owners' })
  getAllOwners() {
    return this.ownerService.getAllOwners;
  }

  @ResolveField()
  cats(@Parent() cat: Cat) {
    const { id } = cat;
    return this.catService.getCatById(id);
  }
}
