<template>
  <div class="container">
    
    <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/ajoutprojet">
      <button class="clr btn text-white mt-5 mb-4 fw-bold" v-if="affichebtn" @click="maskBtn">
        Ajouter Projets
      </button>
    </RouterLink>  
    <div class="table-responsive">
      <table
        class="table table-striped table-bordered border-black"
      >
        <thead class="table-success">
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Date_debut</th>
            <th>Date-fin</th>
            <th>Actions</th>
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
    </div>
  
  </div>
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

<style scoped>
  .clr{
    background-color: #044e8f;
  }
  .clr:hover{
    background-color: #023e73;
  }
</style>
