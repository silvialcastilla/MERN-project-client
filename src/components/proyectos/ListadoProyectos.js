import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  //Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //Obtener proyectos cuando carge el componente
  useEffect(() => {
    obtenerProyectos();
    //eslint-disable-next-line
  }, []);

  //Revisar si proyectos tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno...</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
