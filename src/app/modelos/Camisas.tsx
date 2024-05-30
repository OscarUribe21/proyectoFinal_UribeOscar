export class Camisas{
    public codCamisas: number;
    public marcaCamisas: string;
    public colorCamisas: string;
    public codTallaCamisas: string;
    public imagenCamisas: string;
    public imagenCamisasBase64: string;

    constructor(copd: number, marc: string, colo: string, tall: string, imag: string, base: string){
        this.codCamisas = copd;
        this.marcaCamisas = marc;
        this.colorCamisas = colo;
        this.codTallaCamisas = tall;
        this.imagenCamisas = imag;
        this.imagenCamisasBase64 = base;
    }
}