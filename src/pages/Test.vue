<template>
  <q-page>
    <control-panel :vpSize="300"></control-panel>
  </q-page>
</template>

<script>
import ControlPanel from 'components/control_panel/ControlPanel.vue';

export default {
  name: 'Test',
  components: { ControlPanel },
};
</script>
