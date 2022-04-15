export class Usuario{
    private _id: number;

    private static contadorID:number = 1

    constructor(public user: string, public pass:string){
        this._id = Usuario.contadorID++
        this.user = user
        this.pass = pass
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}