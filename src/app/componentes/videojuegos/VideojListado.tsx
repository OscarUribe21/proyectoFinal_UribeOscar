import { useState } from "react";
import { Videojuegos } from "../../modelos/Videojuegos";
import { ARREGLO_VIDEOJUEGOS } from "../../mocks/Videojuegos-mocks";
import { ARREGLO_CONSOLAS } from "../../utilidades/dominios/DomTalla";

export const VideojListado = () => {
  const [arrVideojuegos] = useState<Videojuegos[]>(ARREGLO_VIDEOJUEGOS);

  const obtenerNombreConsola = (valor: string) => {
    for (const objGen of ARREGLO_CONSOLAS) {
      if (objGen.codConsola === valor) {
        return objGen.nombreConsola;
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Codigo</th>
                <th style={{ width: "30%" }}>Título</th>
                <th style={{ width: "20%" }}>Año</th>
                <th style={{ width: "30%" }}>Consola</th>
                <th style={{ width: "10%" }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrVideojuegos.map((miJuego: Videojuegos) => (
                <tr className="align-middle" key={miJuego.codVideojuegos}>
                  <td>{miJuego.codVideojuegos}</td>
                  <td>{miJuego.tituloVideojuegos}</td>
                  <td>{miJuego.anioVideojuegos}</td>
                  <td>{obtenerNombreConsola(miJuego.consolaVideojuegos)}</td>
                  <td>
                    <img src={miJuego.imagenVideojuegosBase64} alt="" className="imagenListado"/>
                    <div className="text-info">{miJuego.imagenVideojuegos}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
