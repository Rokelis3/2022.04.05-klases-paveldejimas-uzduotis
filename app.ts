class Darbuotojas{
    constructor (
        public _vardas:string,
        public _pavarde:string,
        public _atlyginimas:number

    ){

    }
    get vardas(){
        return this._vardas;
    }

    get pavarde(){
        return this._pavarde;
    }

    get atlyginimas(){
        return this._atlyginimas;
    }

    set vardas(vardas:string){
        this._vardas=vardas;
    }

    set pavarde(pavarde:string){
        this._pavarde=pavarde;
    }

    set atlyginimas(atlyginimas:number){
        this._atlyginimas=atlyginimas;
    }

    public gpm(){
        return this._atlyginimas*0.2;
    }

    public psd(){
        return this._atlyginimas*0.0698;
    }

    public vsd(){
        return this._atlyginimas*0.1252;
    }
}

class PirmaeilisDarbuotojas extends Darbuotojas{
    protected npd:number = 0;

    constructor (
        _vardas:string,
        _pavarde:string,
        _atlyginimas:number,

    ){
        super (_vardas, _pavarde, _atlyginimas)
        this.perskaiciuotiNPD();
    }

    public set atlyginimas(atlyginimas:number) {
    this._atlyginimas=atlyginimas;
    this.perskaiciuotiNPD();
    }

    public override gpm():number {
        return (this._atlyginimas-this.npd)*0.20;
    }

    public perskaiciuotiNPD(){
       if(this._atlyginimas<730){
           return this.npd= 460;
       }
       else if(this._atlyginimas<730 && this._atlyginimas<=1678){
           return this.npd = 460-0.26*(this._atlyginimas-730);
       }
       else{
           return this.npd = 460-0.18*(this._atlyginimas-642)};
       }


}

    let darbuotojas1 = new PirmaeilisDarbuotojas("Tadas", "Tadukse", 1800);
    let darbuotojas2 = new PirmaeilisDarbuotojas("Tomas", "Tomukse", 600);

    console.log(darbuotojas1.perskaiciuotiNPD());
    console.log(darbuotojas2.perskaiciuotiNPD());
    console.log(darbuotojas1.gpm());
    console.log(darbuotojas2.gpm());


class PraktikantasDarbuotojas extends PirmaeilisDarbuotojas{ 
    constructor (
        _vardas:string,
        _pavarde:string,
    ){
        super (_vardas, _pavarde, 0)
    }

    public override perskaiciuotiNPD():number {
        return 0;
    }
}

let praktikantas = new PraktikantasDarbuotojas("Maksas", "Maksimavicius");

console.log(praktikantas.perskaiciuotiNPD());
console.log(praktikantas.gpm());