import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsResolver } from './cats/cats.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      useGlobalPrefix: true
    })
  ],
  providers: [CatsResolver]
})
export class AppModule {}
