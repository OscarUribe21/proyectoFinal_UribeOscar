import { useState } from "react";
import { ARREGLO_VIDEOJUEGOS } from "../../mocks/Videojuegos-mocks";
import { Videojuegos } from "../../modelos/Videojuegos";
import { ARREGLO_CONSOLAS } from "../../utilidades/dominios/DomTalla";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";

export const VideojAdmin = () => {
  const [arrVideojuegos, setArrVideojuegos] =
    useState<Videojuegos[]>(ARREGLO_VIDEOJUEGOS);
  const [objCami, setObjPeli] = useState<Videojuegos>(
    new Videojuegos(0, "", 0, "", "", "")
  );
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };

  const obtenerNombreConsola = (valor: string) => {
    for (const objGen of ARREGLO_CONSOLAS) {
      if (objGen.codConsola === valor) {
        return objGen.nombreConsola;
      }
    }
  };

  const eliminarVideojuego = (codigo: number) => {
    setArrVideojuegos(arrVideojuegos.filter((juego) => juego.codVideojuegos !== codigo));
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "15%" }}>Codigo</th>
                <th style={{ width: "20%" }}>Título</th>
                <th style={{ width: "20%" }}>Año</th>
                <th style={{ width: "15%" }}>Consola</th>
                <th style={{ width: "15%" }}>Modelo</th>
                <th style={{ width: "15%" }}>Opciones</th>
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
                    <img
                      src={miJuego.imagenVideojuegosBase64}
                      alt=""
                      className="imagenListado"
                    />
                    <div className="text-info">{miJuego.imagenVideojuegos}</div>
                  </td>
                  <td className="text-center">
                    <a
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                        setObjPeli(miJuego);
                      }}
                    >
                      <i className="fa-solid fa-trash-can rojito"></i>
                    </a>
                    <NavLink to={"/cactual/" + miJuego.codVideojuegos}>
                      <i className="fa-regular fa-pen-to-square verde"></i>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Eliminar Videojuegos</Modal.Title>
            </Modal.Header>
            <ModalBody>
              ¿Estas seguro de eliminar el Videojuego {objCami.tituloVideojuegos}?
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  eliminarVideojuego(objCami.codVideojuegos);
                  setShow(false);
                }}
              >
                Eliminar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
};
