let label:string= 'Casa';
let  size:number= 10;
let enable: boolean = true;
let dataArray: number[] = [10,20,30];

const enum FolderType {Red, Green, Blue};
let folder: FolderType = FolderType.Green;

let valuesDinamics:any = "teste"
valuesDinamics = 10;

let isOld = function(age:number):boolean{
            return age > 100;
}

const newAge = 110;
console.log(isOld(newAge));
