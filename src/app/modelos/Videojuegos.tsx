export class Videojuegos{
    public codVideojuegos: number;
    public tituloVideojuegos: string;
    public anioVideojuegos: number;
    public consolaVideojuegos: string;
    public imagenVideojuegos: string;
    public imagenVideojuegosBase64: string;

    constructor(cod: number, titulo: string, anio: number, consola: string, imag: string, base: string){
        this.codVideojuegos = cod;
        this.tituloVideojuegos = titulo;
        this.anioVideojuegos = anio;
        this.consolaVideojuegos = consola;
        this.imagenVideojuegos = imag;
        this.imagenVideojuegosBase64 = base;
    }
}
