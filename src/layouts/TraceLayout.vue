<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Trace Master
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Mechanisms</q-item-label>

        <q-item clickable tag="a" :to="{ name: 'SistemRabatare' }">
          <q-item-section avatar>
            <q-icon name="single_bed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sistem Rabatare</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" :to="{ name: 'Test' }">
          <q-item-section avatar>
            <q-icon name="sports_esports" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Test</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'TraceLayout',

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
