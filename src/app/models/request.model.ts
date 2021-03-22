export class RequestModel {
    constructor(
        public usuarioId: string, 
        public valor: string, 
        public fechaPagar: Date,
        public estado: Boolean,
        public pago: Boolean,
    ) {}
}