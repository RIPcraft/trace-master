export default {
  data() {
    return {
      inConstruction: false,
      isConstructed: false,
    };
  },
  methods: {
    startConstruction() {
      this.inConstruction = true;
    },
    endConstruction() {
      this.inConstruction = false;
      this.isConstructed = true;
    },
  },
};
