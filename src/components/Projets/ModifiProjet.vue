<template>
  <div class="container">
    <form @submit.prevent="handleUpdateProjet" class="form mb-5 mt-5">
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
          id="date_debut"
          required
        />
      </div>
      <div class="mb-3">
        <label for="date_f" class="form-label">Date fin :</label>
        <input
          type="date"
          class="form-control"
          v-model="date_fin"
          id="date_fin"
          required
        />
      </div>
      <div class="mb-3">
        <label for="projet" class="form-label">Projet :</label>
        <select class="form-select" v-model="projet" id="projet" required>
          <option v-for="(projetItem, index) in store.projets" :key="index" :value="projetItem.nom">{{ projetItem.nom }}</option>
        </select>
      </div>
      <button class="btn btn-success mt-3 mb-4 me-3">
        Enregistrer
      </button>
      <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/listprojet">
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
const date_debut = ref("");
const date_fin = ref("");

const id = Number(route.params.id); 

onMounted(() => {
  const projet = store.projets.find(projet => projet.id === id);
  if (projet) {
    nom.value = projet.nom;
    date_debut.value = projet.date_debut;
    date_fin.value = projet.date_fin;
  }
});

const handleUpdateProjet = () => {
  const updatedProjet = {
    id,
    nom: nom.value,
    date_debut: date_debut.value,
    date_fin: date_fin.value
  };
  
  store.updateProjet(updatedProjet);
  router.push('/listprojet');
};
</script>

<style scoped></style>
