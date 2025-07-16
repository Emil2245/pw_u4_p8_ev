<template>
  <div class="container">
    <button @click="guardar()">Guardar</button>
    <button @click="actualizar()">Actualizar</button>
    <button @click="actualizarParcial()">Actualizar Parcial</button>

    <button @click="borrar()">Borrar</button>
  </div>
</template>

<script>
  import {
    guardarFachada,
    actualizarFachada,
    actualizarParcialFachada,
    borrarPorIdFachada,
  } from "@/clients/EstudianteClient";

  export default {
    methods: {
      async guardar() {
        let fecha = "2002-02-17";
        const HORA = "T00:00:00";

        const estudianteToBody = {
          nombre: "Rensso",
          apellido: "Parra",
          fechaNacimiento: `${fecha}${HORA}`,
          genero: "M",
        };
        await guardarFachada(estudianteToBody);
      },
      async actualizar() {
        let fecha = "2000-12-12";
        const HORA = "T00:00:00";

        const estudianteToBody = {
          nombre: "Emil",
          apellido: "Verkade",
          fechaNacimiento: `${fecha}${HORA}`,
          genero: "M",
        };

        await actualizarFachada(estudianteToBody, 1);
      },
      async actualizarParcial() {
        const estudianteToBody = {
          apellido: "Teran",
        };

        await actualizarParcialFachada(estudianteToBody, 1);
      },
      async borrar() {
        await borrarPorIdFachada(2);
      },
    },
  };
</script>

<style>
  .container {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    gap: 8px;
  }

  button {
    padding: 8px 16px;

    font-weight: 600;
  }
</style>
