import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class Owner {
    @Field(type => Int)
    id: number

    @Field()
    name: string

    @Field(type => [Int])
    cats: number[]
}