<template>
  <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/ajoutprojet">
    <button class="btn btn-success mt-3 mb-4" v-if="affichebtn" @click="maskBtn">
       Ajouter Listes
    </button>
  </RouterLink>  
  <table
        class="table table-striped"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Date_debut</th>
            <th>Date-fin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(projet, index) in store.projets" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ projet.nom}}</td>
            <td>{{ projet.date_debut}}</td>
            <td>{{ projet.date_fin}}</td>
            <td>
              <button class="btn btn-sm">
                <i
                  class="fa-solid fa-pen-to-square"
                  style="color: #1ac163; font-size: 25px"
                ></i>
              </button>
              <button class="btn btn-sm" @click="destroyProjet">
                <i
                  class="fa-solid fa-trash"
                  style="color: #e30d0d; font-size: 25px"
                ></i>
              </button>
              <button class="btn btn-sm">
                <i
                  class="fa-solid fa-eye"
                  style="color: #4596d3; font-size: 25px"
                ></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
</template>

<script setup>
import { useGestionStore } from '@/stores/gestion';
import { ref } from 'vue';
const store = useGestionStore();
let affichebtn = true;
const maskBtn = () => {
  affichebtn = false;
}
const destroyProjet = () => {
  store.deleteProjet()
}
</script>

<style scoped></style>
