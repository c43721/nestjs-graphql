import { Resolver, Query, Args, ResolveField, Int } from "@nestjs/graphql";
import { Cat } from "./cats.model";

@Resolver(of => Cat)
export class CatsResolver {

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

    @Query(returns => Cat, { name: 'cat' })
    getSingleCat(@Args('id', { type: () => Int }) id: number) {
        return this.cats.filter(cat => cat.id === id)[0]
    }

    @Query(returns => [Cat], { name: 'cats' })
    getAllCats() {
        return this.cats
    }
    
}