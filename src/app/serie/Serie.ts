export class Serie {
    public id: number;
    public name:string;
    public channel:string;
    public seasons:number;
    constructor(id: number,name:string,cadena:string,temporadas:number){
        this.id = id;
        this.name = name;
        this.channel = cadena;
        this.seasons = temporadas;
    }
}
