export const obtenerPaginasPermitidas = (usr) => {
  let arreglo = [];
  if (usr === "admin") {
    arreglo = ["/about", "/estudiante", "/notas", "/403", "/home"];
  } else if (usr === "estudiante") {
    arreglo = ["/about", "/estudiante", "/403", "home"];
  }
  return arreglo;
};
