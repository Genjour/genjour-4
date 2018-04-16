export class Journal {
    id               : String;
    journalId        : String;
    genjouristId     : String;
    category         : String;
    title            : String;
    content          : String;
    date             : String;
    tags             : any[]=[];
    imgUrl           : String;
    supportersNumber : Number;
    repilicateNumber : Number;
    status           : Boolean;
    type             : String;
}