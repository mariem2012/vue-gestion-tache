<template>
  <div class="container">
    
    <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/ajoutprojet">
      <button class="clr btn text-white mt-5 mb-4 fw-bold" v-if="affichebtn" @click="maskBtn">
        Ajouter un Projet
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
            <td>{{ projet.id }}</td>
            <td>{{ projet.nom}}</td>
            <td>{{ projet.date_debut}}</td>
            <td>{{ projet.date_fin}}</td>
            <td>
              <button class="btn btn-sm" @click="openModal(projet)">
                <i
                  class="fa-solid fa-eye"
                  style="color: #4596d3; font-size: 25px"
                ></i>
              </button>
              <RouterLink :to="{ path: `/modifiprojet/${projet.id}` }">
              <button class="btn btn-sm">
                <i class="fa-solid fa-pen-to-square" style="color: #1ac163; font-size: 25px"></i>
              </button>
            </RouterLink>
            <button class="btn btn-sm" @click="destroyProjet(projet.id)">
              <i class="fa-solid fa-trash" style="color: #e30d0d; font-size: 25px"></i>
            </button>
            </td>
          </tr>
        </tbody>
      </table>

    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-body">
          <h3>Détails du Projet</h3>
          <p><strong>Nom :</strong> {{ selectedProjet.nom }}</p>
          <p><strong>Date de début :</strong> {{ selectedProjet.date_debut }}</p>
          <p><strong>Date de fin :</strong> {{ selectedProjet.date_fin }}</p>
        </div>
        <button class="btn btn-danger" @click="closeModal">Fermer</button>
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
const selectedProjet = ref(null);

const openModal = (projet) => {
  selectedProjet.value = projet;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
}

const destroyProjet = () => {
  store.deleteProjet()
}
</script>
   
<style scoped>
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
  .clr{
    background-color: #044e8f;
  }
  .clr:hover{
    background-color: #023e73;
  }
</style>
