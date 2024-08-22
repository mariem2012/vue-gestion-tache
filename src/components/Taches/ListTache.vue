<template>
  <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/ajoutlist">
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
            <th>Decription</th>
            <th>Date_debut</th>
            <th>Date-fin</th>
            <th>Projet</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tache, index) in store.taches" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ tache.nom}}</td>
            <td>{{ tache.description}}</td>
            <td>{{ tache.date_debut}}</td>
            <td>{{ tache.date_fin}}</td>
            <td>{{ tache.projet}}</td>
            <td>
              <button class="btn btn-sm">
                <i
                  class="fa-solid fa-pen-to-square"
                  style="color: #1ac163; font-size: 25px"
                ></i>
              </button>
              <button class="btn btn-sm" @click="destroyTache">
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
const destroyTache = () => {
  store.deleteTache()
}
</script>

<style scoped></style>
