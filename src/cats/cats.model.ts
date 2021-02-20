import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class Cat {
    @Field()
    id: number

    @Field()
    name: string

    @Field(type => Int)
    weight: number
}