import axios from "axios";

// guardar
const API = "http://localhost:8081/api/matricula/v1/estudiantes";
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3VjZS5lZHUuZWMiLCJ1cG4iOiJtaWNvcnJlb0B1Y2UuZWR1LmVjIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc1Mjg4NDY3OSwiZXhwIjoxNzUyODg0Nzc5LCJqdGkiOiIyY2Y1MWRhZi05MzVkLTRiNGUtYmM4Mi1lZTZmMjA1ZWRmYmEifQ.UOHzVE0w1v1Q2Xg1KYHQ5OdeRUG6tM7uLJvVq5g9Umppvj2CUGfCjn_B6e_T3dSomMhlOsVGKFS5nDSJIVhIsY2uaHk935RtWqeedbeJNvGjwbNSRFJSkZ3DWSI7TqE67ex3FHi6Qb674oe4gOn50wOR8afe_Lez_VBj61Sje9tkSuHDurFFDJkqajSfMg71RJA4qCy9Lc6T533g87udQNGvuyuiLJvEKte6VYfdmDfyY7jpDt6YCuGgpC9DJ8B-G4BpG-tSDNhpI_u0IwI8ZRlW-NO0RUrq0THwSTdmI841aSc8a9nl_bj8aVkDoAXyxc9LWQLMO3WxQH0u87lX9g'

const guardarEstudiante = async (body) => {
  const data = axios.post(API, body,
    {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
  ).then((res) => res.data);
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
