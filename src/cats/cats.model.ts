import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class Cat {
    @Field(type => Int)
    id: number

    @Field()
    name: string

    @Field(type => Int)
    weight: number
}