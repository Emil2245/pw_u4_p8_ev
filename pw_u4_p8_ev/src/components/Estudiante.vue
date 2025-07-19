<template>
  <div class="container">
    <div class="card">
      <h3>Guardar Estudiante</h3>
      <label for="est-nombre">Nombre</label>
      <input id="est-nombre" type="text" v-model="estNombre" />

      <label for="est-apellido">Apellido</label>
      <input id="est-apellido" type="text" v-model="estApellido" />

      <label for="est-fecha">Fecha Nacimiento</label>
      <input id="est-fecha" type="date" v-model="estFecha" />

      <label for="est-genero">Género</label>
      <input id="est-genero" type="text" v-model="estGenero" />

      <button @click="guardar()">Guardar</button>
    </div>

    <div class="card">
      <h3>Actualizar Estudiante</h3>

      <label for="act-id">ID</label>
      <input id="act-id" type="number" v-model="actId" />
      <button @click="consultar()">Buscar</button>

      <label for="act-nombre">Nombre</label>
      <input id="act-nombre" type="text" v-model="actNombre" />

      <label for="act-apellido">Apellido</label>
      <input id="act-apellido" type="text" v-model="actApellido" />

      <label for="act-fecha">Fecha Nacimiento</label>
      <input id="act-fecha" type="date" v-model="actFecha" />

      <label for="act-genero">Género</label>
      <input id="act-genero" type="text" v-model="actGenero" />

      <button @click="actualizar()">Actualizar</button>
    </div>
    <div class="card">
      <h3>Borrar Estudiante</h3>
      <label for="del-id">ID</label>
      <input id="del-id" type="number" v-model="delId" />
      <button @click="borrar()">Borrar</button>
    </div>
  </div>
</template>

<script>
import {
  guardarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  borrarPorIdFachada,
  buscarPorIdFachada,
} from "@/clients/EstudianteClient";

export default {
  data() {
    return {
      // Guardar
      estNombre: "",
      estApellido: "",
      estFecha: "",
      estGenero: "",

      // Actualizar
      actId: null,
      actNombre: "",
      actApellido: "",
      actFecha: "",
      actGenero: "",

      // Borrar
      delId: null,
    };
  },

  methods: {
    async guardar() {
      const HORA = "T00:00:00";
      const estudianteToBody = {
        nombre: this.estNombre,
        apellido: this.estApellido,
        fechaNacimiento: `${this.estFecha}${HORA}`,
        genero: this.estGenero,
      };
      await guardarFachada(estudianteToBody);
    },

    async consultar() {
      if (!this.actId) return alert("Ingrese un ID válido");

      try {
        const data = await buscarPorIdFachada(this.actId);
        this.actNombre = data.nombre;
        this.actApellido = data.apellido;
        this.actFecha = data.fechaNacimiento.split("T")[0]; // Solo yyyy-mm-dd
        this.actGenero = data.genero;
      } catch (error) {
        alert("No se encontró el estudiante con ese ID");
        console.error(error);
      }
    },

    async actualizar() {
      if (!this.actId) return alert("Ingrese el ID del estudiante");

      const HORA = "T00:00:00";
      const estudianteToBody = {
        nombre: this.actNombre,
        apellido: this.actApellido,
        fechaNacimiento: `${this.actFecha}${HORA}`,
        genero: this.actGenero,
      };

      await actualizarFachada(estudianteToBody, this.actId);
    },
    async borrar() {
      if (!this.delId) return alert("Ingrese el ID del estudiante a borrar");
      await borrarPorIdFachada(this.delId);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;
}

.card {
  border: 1px solid #444;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 2px 2px 8px #ccc;
}

label {
  display: block;
  font-weight: bold;
  margin-top: 8px;
}

input {
  width: 100%;
  padding: 6px;
  margin-top: 4px;
  box-sizing: border-box;
}

button {
  margin-top: 12px;
  padding: 8px 12px;
  font-weight: bold;
  cursor: pointer;
}
</style>
