import { Injectable, Inject } from '@nestjs/common';
//import { Repository } from 'typeorm';
//import { InjectRepository } from '@nestjs/typeorm';
//import { HealtEntity } from '../entities/healtentity.entity';
import { Healthentity as Healt } from '../types/healthentity.dto';
import { plainToClass, classToPlain } from 'class-transformer';

@Injectable()
export class HealthentityService {

 //  constructor(@InjectRepository(HealtEntity) private healtEntityrepository: Repository<HealtEntity>) { }


   async  findAll():Promise<Healt [] > {
 
      let lstHealts: Healt [];
      for (let index = 0; index < 5; index++) {
         let entity = new Healt();
         entity.name="";    
         entity.description="";    
         lstHealts.push(entity);
      }
      
      return lstHealts;
   }

   async createHealthEntity() {

      return null;
   }

   readHealthEntity() { }

   updateHealthEntity() { }

   destroyHealthEntity() { }
}
