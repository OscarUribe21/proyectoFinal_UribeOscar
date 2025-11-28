import { Route, Routes } from "react-router-dom";

import { AcercaDe } from "../../componentes/otros/AcercaDe";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { VideojCrear } from "../../componentes/videojuegos/VideojCrear";
import { VideojAdmin } from "../../componentes/videojuegos/VideojAdmin";
import { VideojListado } from "../../componentes/videojuegos/VideojListado";
import { VideojActualizar } from "../../componentes/videojuegos/VideojActualizar";

import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
	  
      <Route path="/ccrear" element={< VideojCrear />} />
      <Route path="/cadmin" element={< VideojAdmin />} />
      <Route path="/clistar" element={< VideojListado />} />
      <Route path="/cactual/:codigo" element={<VideojActualizar />} />

      <Route path="/acerca" element={<AcercaDe />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
