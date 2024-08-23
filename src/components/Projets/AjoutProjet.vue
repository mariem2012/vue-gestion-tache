<template>
  <div class="container">
    <form @submit.prevent="handleAddProjet" class="form mb-5 mt-5">
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
      <button class="clr btn text-white mt-3 mb-4 me-3">
      Ajouter
      </button>
      <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/listprojet">
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
const date_debut = ref("");
const date_fin = ref("");

const handleAddProjet = () => {
  addProjet();
  router.push('/listprojet');
};

const addProjet = () => {
  store.addProjet({nom: nom.value, date_debut: date_debut.value, date_fin: date_fin.value, })
  nom.value= "",
  date_debut.value= "",
  date_fin.value= ""
};

</script> 

<style scoped>
  .clr{
    background-color: #044e8f;
  }
  .clr:hover{
    background-color: #023e73;
  }
</style>
