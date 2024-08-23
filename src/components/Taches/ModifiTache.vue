<template>
  <div class="container">
    <form @submit.prevent="handleUpdateTache" class="formulaire form mb-5 mt-5 shadow p-3 mb-5 bg-body rounded">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom :</label>
        <input
          type="text"
          class="input form-control"
          v-model="nom"
          id="nom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description :</label>
        <input
          type="text"
          class="input form-control"
          v-model="description"
          id="description"
          required
        />
      </div>
      <div class="mb-3">
        <label for="date_d" class="form-label">Date debut :</label>
        <input
          type="date"
          class="input form-control"
          v-model="date_debut"
          id="date_debut"
          required
        />
      </div>
      <div class="mb-3">
        <label for="date_f" class="form-label">Date fin :</label>
        <input
          type="date"
          class="input form-control"
          v-model="date_fin"
          id="date_fin"
          required
        />
      </div>
      <div class="mb-3">
        <label for="projet" class="form-label">Projet :</label>
        <select class="input form-select" v-model="projet" id="projet" required>
          <option v-for="(projetItem, index) in store.projets" :key="index" :value="projetItem.nom">{{ projetItem.nom }}</option>
        </select>
      </div>
      <button class="clr btn btn-success mt-3 mb-4 me-3">
        Enregistrer
      </button>
      <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/listtache">
        <button class="btn btn-danger mt-3 mb-4">
          Annuler
        </button>
      </RouterLink> 
    </form>
  </div>
</template>

<script setup>
import { useGestionStore } from '@/stores/gestion';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const store = useGestionStore();
const router = useRouter();
const route = useRoute();

const nom = ref("");
const description = ref("");
const date_debut = ref("");
const date_fin = ref("");
const projet = ref("");

const id = Number(route.params.id); 

onMounted(() => {
  const tache = store.taches.find(tache => tache.id === id);
  if (tache) {
    nom.value = tache.nom;
    description.value = tache.description;
    date_debut.value = tache.date_debut;
    date_fin.value = tache.date_fin;
    projet.value = tache.projet;
  }
});

const handleUpdateTache = () => {
  const updatedTache = {
    id,
    nom: nom.value,
    description: description.value,
    date_debut: date_debut.value,
    date_fin: date_fin.value,
    projet: projet.value
  };
  
  store.updateTache(updatedTache);
  router.push('/listtache');
};
</script>

<style scoped>
  .clr{
    background-color: #044e8f;
  }
  .clr:hover{
    background-color: #023e73;
  }
  /* .input{
    width: 50%;
  } */
  .formulaire{
    width: 50%;
    border-radius: 10px;
    padding: 20px;
    margin: auto;
  }
  
</style>
