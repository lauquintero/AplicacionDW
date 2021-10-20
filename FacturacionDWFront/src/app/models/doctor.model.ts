import { hospitalModel } from './hospital.model';
import { usuarioModelo } from './usuario.model';
export class doctorModel{
    public name?: string
    public img?: string
    public usuario?: usuarioModelo
    public hospital?: hospitalModel
    public _id?: string

    constructor(){
        this.hospital = new hospitalModel()
        this.usuario = new usuarioModelo()
    }
}
