<template>
  <div class="container">
    <form @submit.prevent="handleAddTache" class="form mb-5 mt-5">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom :</label>
        <input
          type="text"
          class="form-control"
          v-model="nom"
          id="nom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description :</label>
        <input
          type="text"
          class="form-control"
          v-model="description"
          id="description"
          required
        />
      </div>
      <div class="mb-3">
        <label for="date_d" class="form-label">Date debut :</label>
        <input
          type="date"
          class="form-control"
          v-model="date_debut"
          id="date_f"
          required
        />
      </div>
      <div class="mb-3">
        <label for="date_f" class="form-label">Date fin :</label>
        <input
          type="date"
          class="form-control"
          v-model="date_fin"
          id="date_f"
          required
        />
      </div>
      <div class="mb-3">
        <label for="projet" class="form-label">Projet :</label>
        <select class="form-select" v-model="projet" id="projet" required>
          <option v-for="(projet, index ) in store.projets" :key="index" :value="projet.nom">{{ projet.nom }}</option>
        </select>
      </div>
      <!-- <button type="submit" class="btn btn-success me-3">Ajouter</button> -->
      <!-- <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/listtache"> -->
      <button class="btn btn-success mt-3 mb-4 me-3">
      Ajouter
      </button>
     <!-- </RouterLink>  -->
      <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/listtache">
      <button class="btn btn-danger mt-3 mb-4 ">
      Annuler
      </button>
     </RouterLink> 
    </form>
  </div>
  
</template>

<script setup>
import { useGestionStore } from '@/stores/gestion';
import { useRouter } from 'vue-router';
const router = useRouter();
import { ref } from 'vue';
const store = useGestionStore();
const nom = ref("");
const description = ref("");
const date_debut = ref("");
const date_fin = ref("");
const projet = ref("");

const handleAddTache = () => {
  addTache();
  router.push('/listtache');
};
const addTache = () => {
  store.addTache({ nom: nom.value, description: description.value, date_debut: date_debut.value, date_fin: date_fin.value, projet: projet.value })
  // id.value="";
  nom.value= "";
  description.value= "";
  date_debut.value= "";
  date_fin.value= "";
  projet.value= ""
};

</script> 

<style scoped></style>
