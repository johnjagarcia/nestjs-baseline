
export class Healthentity {

    private _name: string;
    private _description: string;
    private _user: string;

    public set name(v : string) {
        this._name = v;
    }
    
    public set description(v : string) {
        this._description = v;
    }

    public set user(v : string) {
        this._user = v;
    }

}