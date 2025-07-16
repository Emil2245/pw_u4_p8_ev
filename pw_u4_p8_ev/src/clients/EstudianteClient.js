import axios from "axios";

// guardar
const API = "http://localhost:8081/api/matricula/v1/estudiantes";

const guardarEstudiante = async (body) => {
  const data = axios.post(API, body).then((res) => res.data);
  console.log(data);
};

// actualizar
const actualizarEstudiante = async (body, id) => {
  axios.put(`${API}/${id}`, body).then((res) => res.data);
};

// actualizar parcial
const actualizarParcialEstudiante = async (body, id) => {
  axios.patch(`${API}/${id}`, body).then((res) => res.data);
};

// borrar por id
const borrarPorIdEstudiante = async (id) => {
  axios.delete(`${API}/${id}`).then((res) => res.data);
};

// fachada //////////////////////
export const guardarFachada = async (body) => {
  await guardarEstudiante(body);
};

export const actualizarFachada = async (body, id) => {
  await actualizarEstudiante(body, id);
};

export const actualizarParcialFachada = async (body, id) => {
  await actualizarParcialEstudiante(body, id);
};

export const borrarPorIdFachada = async (id) => {
  await borrarPorIdEstudiante(id);
};
