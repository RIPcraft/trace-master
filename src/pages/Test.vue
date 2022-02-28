<template>
  <q-page>
    <svg ref="viewPort"
         :width="width"
         :height="height"
         @mousedown="$emit('mousedown', $event)"
         @mousemove="$emit('mousemove', $event)"
         @mouseleave="$emit('mouseleave')"
         @mouseup="$emit('mouseup')">

      <rect x="0" y="0"
            fill="none"
            stroke="#333"
            stroke-width="1"
            :width="width"
            :height="height"
      />

      <!-- <segment v-for="segment in segments"
               :key="segment.id"
               :p1.sync="segment.a"
               :p2.sync="segment.b"
      /> -->

      <dot v-for="dot in dots"
           :key="dot.id"
           :origin.sync="dot"
           :env=this
      />
    </svg>

    <div>
      <!-- <dot-tool></dot-tool> -->
    </div>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Dot from '../components/geometry/Dot';
// import { Segment } from '../geometry/Segment';
// import { DotTool } from '../tools/DotTool';

export default {
  name: 'Test',
  components: { Dot }, // , Segment },
  props: {
    vpSize: {
      type: Number,
      default: 350,
    },
    vpWidth: Number,
    vpHeight: Number,
  },
  data() {
    return {
      top: 0,
      left: 0,
      tool: null,
      dragged: null,
      constructed: null,
    };
  },
  computed: {
    ...mapState([
      'tools',
      'dots',
      // 'segments',
    ]),
    width() {
      const { vpSize, vpWidth = vpSize } = this.$props;
      return vpWidth;
    },
    height() {
      const { vpSize, vpHeight = vpSize } = this.$props;
      return vpHeight;
    },
  },
  methods: {
    ...mapMutations('view-port', [
      'START_DRAGGING',
    ]),
    dragStart(dragged) {
      debugger;
      this.dragged = dragged;
      this.$on('mousemove', this.drag);
      this.$on('mouseleave', this.dragEnd);
      this.$on('mouseup', this.dragEnd);
    },
    dragEnd() {
      this.dragged = null;
      this.$off('mousemove', this.drag);
      this.$off('mouseleave', this.dragEnd);
      this.$off('mouseup', this.dragEnd);
    },
    drag({ clientX, clientY }) {
      this.dragged.drag({ x: clientX - this.x, y: clientY - this.y });
    },
    // bringToFront(draggable) {
    //   this.items.splice(this.items.indexOf)
    // },
  },
  mounted() {
    const { top, left } = this.$refs.viewPort.getBoundingClientRect();
    this.left = left;
    this.top = top;
  },
};
</script>
