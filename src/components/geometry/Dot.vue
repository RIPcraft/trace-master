<template>
  <circle :cx="origin.x" :cy="origin.y"
          @mousedown="dragStart" />
</template>

<script>
// import Draggable from '../draggable.mixin';

export default {
  name: 'Dot',
  props: ['origin'],
  methods: {
    dragStart() {
      this.$parent.dragStart(this);
    },
    drag({ x, y }) {
      this.$emit('update:origin.x', x);
      this.$emit('update:origin.y', y);
    },
  },
};
</script>

<style lang="stylus">
primary = blue

circle
  transition-property fill, r
  transition-timing-function ease
  transition-duration .2s
  fill primary
  r 5

  &:hover
    fill mix(primary, green, 40%)
    r 8
    // cursor grab
</style>
