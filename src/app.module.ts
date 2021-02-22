import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsResolver } from './cats/cats.resolver';
import { OwnerResolver } from './owners/owner.resolver';
import { CatsService } from './cats/cats.service';
import { OwnersService } from './owners/owners.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      useGlobalPrefix: true
    })
  ],
  providers: [CatsResolver, OwnerResolver, CatsService, OwnersService]
})
export class AppModule {}
