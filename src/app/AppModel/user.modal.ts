export class User{
    constructor(
        public email:string,
        public id:string,
        private _token:string,
        private _expireToken: Date,
    )
    {  }

    get Token(){
        if(!this._expireToken ||new Date ()>this._expireToken)
            {
                return null
            }
            return this._token
    }
}