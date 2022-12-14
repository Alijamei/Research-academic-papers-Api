import {db} from '../config/db.js';

// export const [rows,fields] = await db.query("SELECT * FROM user WHERE password=27283738;");

export class DatabaseAuth{
     constructor(username,password){
          this.username = username
          this.password = password
     }
     
     static getByusername(username){
      const rows =  db.query(`SELECT * FROM user WHERE username='${username}';`);
      return rows
    }
    async getByname(){
     const rows =  await db.query(`SELECT * FROM user WHERE username='${this.username}';`);
     return rows
   }
     static getByid(id){
          const rows =  db.query(`SELECT * FROM user WHERE id='${id}';`);
          return rows
       }
     async save(){
        const rows = await db.query(`INSERT INTO user(username,password) VALUES('${this.username}','${this.password}');`);
        return rows

     }
}

