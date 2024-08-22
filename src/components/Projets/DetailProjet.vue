<!-- <template>
  <div>
    <h2>Détails du Projet</h2>
    <p><strong>Nom :</strong> {{ livreDetail.nom }}</p>
    <p><strong>Date debut :</strong> {{ livreDetail.auteur }}</p>
    <p><strong>Date fin :</strong> {{ livreDetail.auteur }}</p>
    <button class="btn btn-secondary" @click="$emit('fermer')">Fermer</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  projetDetail: Object
});

const emit = defineEmits(['fermer']);
</script>

<style scoped>
</style> -->

<template>
  <div
    class="modal fade"
    id="projetDetailModal"
    tabindex="-1"
    aria-labelledby="projetDetailModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="projetDetailModalLabel">
            Détails du Projet
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="projetSelectionne">
          <p><strong>Nom :</strong> {{ projetSelectionne.nom }}</p>
          <p><strong>Date de début :</strong> {{ projetSelectionne.date_debut }}</p>
          <p><strong>Date de fin :</strong> {{ projetSelectionne.date_fin }}</p>
        </div>
        <div v-else>
          <p>Aucun projet sélectionné.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGestionStore } from '@/stores/gestion';
import { computed } from 'vue';

const store = useGestionStore();
const projetSelectionne = computed(() => store.projetSelectionne);
</script>

<style scoped></style>

