<template>
  <line :x1="p1.x" :y1="p1.y"
        :x2="p2.x" :y2="p2.y"
  />
</template>

<script>

export default {
  name: 'Segment',
  props: ['p1', 'p2'],
}
</script>

<style lang="stylus" scoped>
primary = darkblue

line
  transition-property stroke, stroke-width
  transition-timing-function ease
  transition-duration .2s
  stroke primary
  stroke-width 2

  &:hover
    stroke mix(primary, green, 40%)
    stroke-width 3
</style>
