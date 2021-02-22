import { Injectable } from '@nestjs/common';
import { Owner } from './owner.model';

@Injectable()
export class OwnersService {
    private owners: Owner[] = [{
        id: 1,
        name: "Owner 1",
        cats: [1]
    }]

    getOwnerById(id: number): Owner {
        return this.owners.filter(o => o.id === id)[0];
    }

    getAllOwners(): Owner[] {
        return this.owners;
    }
}
