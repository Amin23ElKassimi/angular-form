export class User {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _expirationDate: Date
    ) { }


    // si usa la funzione per accedere al token in modo da poter validare il token in fututo
    get token() {

        // se e' scaduto mi ritorni null
        if (!this._expirationDate || new Date() > this._expirationDate) {
            return null
        }

        return this._token
    }

}