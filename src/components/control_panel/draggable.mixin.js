export default {
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
