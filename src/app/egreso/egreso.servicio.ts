import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[] = [
        new Egreso("impuestos", 2300),
        new Egreso("Comida", 800)
    ]
}