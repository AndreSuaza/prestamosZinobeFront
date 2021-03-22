export class UserModel {
    constructor(
        public _id: string,
        public nombre: string, 
        public correo: string,
        public cedula: number
    ) {}
}