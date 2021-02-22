import { Field, ObjectType, Int } from "@nestjs/graphql";
import { Cat } from "src/cats/cats.model";

@ObjectType()
export class Owner {
    @Field(type => Int)
    id: number

    @Field()
    name: string

    @Field(type => [Cat])
    cats: number[]
}