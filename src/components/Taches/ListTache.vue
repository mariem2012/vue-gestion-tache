<template>
  <div class="container">
    <RouterLink class="list text-decoration-none text-white me-5 fw-bold"  to="/ajoutlist">
    <button class="clr btn text-white mt-5 mb-4 fw-bold"  v-if="affichebtn" @click="maskBtn">
       Ajouter une tache
    </button>
  </RouterLink> 
  <div class="table-responsive">
    <table class="table table-striped table-bordered border-black ">
      <thead class="table-success">
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Description</th>
          <th>Date debut</th>
          <th>Date fin</th>
          <th>Projet</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tache, index) in store.taches" :key="index">
          <td>{{ tache.id }}</td>
          <td>{{ tache.nom }}</td>
          <td>{{ tache.description }}</td>
          <td>{{ tache.date_debut }}</td>
          <td>{{ tache.date_fin }}</td>
          <td>{{ tache.projet }}</td>
          <td class="text-center">
            <button class="btn btn-sm" @click="openModal(tache)">
              <i class="fa-solid fa-eye" style="color: #4596d3; font-size: 25px"></i>
            </button>
            <RouterLink :to="{ path: `/modifietache/${tache.id}` }">
              <button class="btn btn-sm ">
                <i class="fa-solid fa-pen-to-square" style="color: #1ac163; font-size: 25px"></i>
              </button>
            </RouterLink>
            <button class="btn btn-sm" @click="destroyTache(tache.id)">
              <i class="fa-solid fa-trash" style="color: #e30d0d; font-size: 25px"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-body">
          <h3>Détails de la Tâche</h3>
          <p><strong>Nom :</strong> {{ selectedTache.nom }}</p>
          <p><strong>Description :</strong> {{ selectedTache.description }}</p>
          <p><strong>Date de début :</strong> {{ selectedTache.date_debut }}</p>
          <p><strong>Date de fin :</strong> {{ selectedTache.date_fin }}</p>
          <p><strong>Projet :</strong> {{ selectedTache.projet }}</p>
        </div>
        <button class="btn btn-danger" @click="closeModal">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useGestionStore } from '@/stores/gestion';

const store = useGestionStore();
let affichebtn = true;
const maskBtn = () => {
  affichebtn = false;
}
const isModalVisible = ref(false);
const selectedTache = ref(null);

const openModal = (tache) => {
  selectedTache.value = tache;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const destroyTache = (id) => {
  store.deleteTache(id);
};
</script>

<style scoped>

.clr{
  background-color: #044e8f;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.modal-body {
  padding: 20px;
}
</style>
