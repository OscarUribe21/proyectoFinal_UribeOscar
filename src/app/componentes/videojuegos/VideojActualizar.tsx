import Form from "react-bootstrap/Form";
import noFoto from "../../../assets/img/noDisponible.png";

export const VideojActualizar = (props: any) => {
  console.log(props);
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5 pb-4">
        <Form noValidate>
          <div className="card">
            <div className="card-header">
              <h5 className=" rojito">Actualizar Videojuego</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <Form.Group controlId="TituloVideojuegos">
                  <Form.Label>
                    <span className="rojito">*</span> Título
                  </Form.Label>
                  <Form.Control size="sm" required type="text" name="tituloVideojuegos" />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="pro">
                  <Form.Label>
                    <span className="rojito">*</span> Año
                  </Form.Label>
                  <Form.Control size="sm" required type="number" name="anioVideojuegos" />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="gen">
                  <Form.Label>
                    <span className="rojito">*</span> Consola:
                  </Form.Label>

                  <Form.Select size="sm" required name="consolaVideojuegos">
                    <option value="">Seleccione una Consola</option>
                    <option value="Xbox">Xbox</option>
                    <option value="PC">PC</option>
                    <option value="playstation">PlayStation</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="fot">
                  <Form.Label>
                    <span className="rojito">*</span> Modelo:
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    accept="image/png, image/jpeg"
                    // ref={fileInputRef}
                    type="file"
                    name="imagenPelicula"
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <img src={noFoto} alt="no foto" className="maximoTamanoCreacion" />
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Actualizar Videojuego
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
