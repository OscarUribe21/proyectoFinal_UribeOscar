import { useState } from "react";
import { ARREGLO_VIDEOJUEGOS } from "../../mocks/Videojuegos-mocks";

export const Inicio = () => {
  const [query, setQuery] = useState("");
  const populares = ARREGLO_VIDEOJUEGOS.slice(0, 6);

  return (
    <>
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Bienvenido</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Este es el inicio de nuestro catálogo de videojuegos. Aquí puedes ver los más populares y acceder a las acciones.
          </p>
        </div>

        <div className="row mt-4">
          <div className="col-md-8">
            <h3>Más populares</h3>
            <div className="row">
              {populares.map((juego: any) => (
                <div className="col-6 col-md-4 mb-3" key={juego.codVideojuegos}>
                  <div className="card h-100">
                    <img
                      src={juego.imagenVideojuegosBase64 || (juego.imagenVideojuegos ? `/assets/img/${juego.imagenVideojuegos}` : "")}
                      className="card-img-top imagenListado"
                      alt={juego.tituloVideojuegos}
                    />
                    <div className="card-body p-2">
                      <h6 className="card-title mb-1">{juego.tituloVideojuegos}</h6>
                      <div className="text-muted small">{juego.anioVideojuegos} — {juego.consolaVideojuegos}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Buscador</h5>
                <p className="text-muted small">Buscador visual (no funcional)</p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar videojuegos..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h6>Accesos rápidos</h6>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="/clistar">Ver todos los videojuegos</a>
                  </li>
                  <li>
                    <a href="/ccrear">Crear videojuego</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
