export class Student {
    constructor(public id:number,public age:number,public name:string){

    }
    set Id(id:number){
       this.id = id
    }
    get Id(){
       return this.id;
    }
}
