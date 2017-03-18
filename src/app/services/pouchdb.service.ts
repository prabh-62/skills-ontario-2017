import {Injectable} from '@angular/core';
import {SkillsAdmin} from '../models/skills-admin';

@Injectable()
export class PouchdbService {

  constructor() {
  }

  public createDB() {
    /* const db = RxDB.create({
      name: 'registrationDB',
      adapter: 'idb',
      password: 'sheridan', // optional
      multiInstance: true // default: true
     });


    const AdminCredentials = new SkillsAdmin('324', 'Admin', 'FAST');
    console.log({'_id': '1234', 'skillsAdmin': JSON.stringify(AdminCredentials)});
    // db.put({'_id': '1234', 'skillsAdmin': JSON.stringify(AdminCredentials)});*/
  }

}
