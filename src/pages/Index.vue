<template>
  <q-page class="row items-center justify-evenly">
    <p>Counter: {{ store.counter }}</p>
    <q-btn @click="openElectronFileDialog">Open Electron File Dialog</q-btn>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from 'vue';
import useStore from 'src/pinia';
import { electronApi } from 'src/api/electron-api';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    const store = useStore();

    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);

    const meta = ref<Meta>({
      totalCount: 1200,
    });

    const openElectronFileDialog = async () => {
      return electronApi.openFileDialog('AHA', 'folder', { name: 'images', extensions: ['jpg'] });
    };

    return { todos, meta, store, openElectronFileDialog };
  },
});
</script>
