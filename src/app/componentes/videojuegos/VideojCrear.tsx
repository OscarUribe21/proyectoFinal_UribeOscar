import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import noFoto from "../../../assets/img/noDisponible.png";

import { VideojuegosTalla } from "../../modelos/VideojuegosTalla";
import { ARREGLO_CONSOLAS } from "../../utilidades/dominios/DomTalla";
import { useFormulario } from "../../utilidades/misHooks/useFormulario";
import { Videojuegos } from "../../modelos/Videojuegos";
import { useNavigate } from "react-router-dom";
import { ARREGLO_VIDEOJUEGOS } from "../../mocks/Videojuegos-mocks";
import { ConvertirBase64 } from "../../utilidades/funciones/ConvertirBase64";

export const VideojCrear = () => {
  const irsePara = useNavigate();

  type formHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [imgBase64, setImgBase64] = useState<any>();
  const [imgMiniatura, setimgMiniatura] = useState<any>(noFoto);

  const [arrVideojuegos] = useState<Videojuegos[]>(ARREGLO_VIDEOJUEGOS);
  const [arrTallas] = useState<VideojuegosTalla[]>(ARREGLO_CONSOLAS);

  let {
    tituloVideojuegos,
    anioVideojuegos,
    consolaVideojuegos,
    imagenVideojuegos,
    dobleEnlace,
    objeto,
  } = useFormulario<Videojuegos>(new Videojuegos(0, "", 0, "", "", ""));

  const enviarForm = (objForm: formHtml) => {
    objForm.preventDefault();
    const formulario = objForm.currentTarget;

    if (formulario.checkValidity() === false) {
      objForm.preventDefault();
      objForm.stopPropagation();
      setEnProceso(true);
    } else {
      const ultimaPeli = arrVideojuegos[arrVideojuegos.length - 1];
      const nuevoCod = ultimaPeli.codVideojuegos + 1;
      objeto.codVideojuegos = nuevoCod;
    objeto.imagenVideojuegos = imagenVideojuegos.substring(imagenVideojuegos.lastIndexOf("\\")+1);
      objeto.imagenVideojuegosBase64 = imgBase64; 
      arrVideojuegos.push(objeto);
      setEnProceso(false);
      irsePara("/clistar");
    }
  };

const cargarImagen = async (e: any) => {
  const archivos = e.target.files;
  const imagen = archivos[0];
  setimgMiniatura(URL.createObjectURL(imagen));
  dobleEnlace(e);
  const base64 = await ConvertirBase64(imagen);
  setImgBase64(base64);
};

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5 pb-4">
        <Form noValidate validated={enProceso} onSubmit={enviarForm}>
          <div className="card">
            <div className="card-header">
              <h5 className=" rojito">Formulario creación</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <Form.Group controlId="nom">
                  <Form.Label>
                    <span className="rojito">*</span> Título
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="tituloVideojuegos"
                    value={tituloVideojuegos}
                    onChange={dobleEnlace}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="ColorCamisa">
                  <Form.Label>
                    <span className="rojito">*</span> Año
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="number"
                    name="anioVideojuegos"
                    value={anioVideojuegos}
                    onChange={dobleEnlace}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="gen">
                  <Form.Label>
                    <span className="rojito">*</span> Consola
                  </Form.Label>

                  <Form.Select
                    size="sm"
                    required
                    name="consolaVideojuegos"
                    value={consolaVideojuegos}
                    onChange={dobleEnlace}
                  >
                    <option value="">Seleccione una Consola</option>

                    {arrTallas.map((miTalla: VideojuegosTalla) => (
                      <option
                        value={miTalla.codConsola}
                        key={miTalla.codConsola}
                      >
                        {miTalla.nombreConsola}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="fot">
                  <Form.Label>
                    <span className="rojito">*</span> Modelo
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="file"
                    name="imagenVideojuegos"
                    value = {imagenVideojuegos}
                    onChange={cargarImagen}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <img
                    src={imgMiniatura}
                    alt="no foto"
                    className="maximoTamanoCreacion"
                  />
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Crear Videojuego
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
