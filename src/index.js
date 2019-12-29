export default {
  name: 'GlobalAttrs',

  render: h => h(),

  data() {
    return {
      currentAttrs: []
    };
  },

  watch: {
    '$attrs': {
      immediate: true,
      handler() {
        this.refreshAttributes();
      }
    }
  },

  beforeDestroy() {
    this.removeAttributes();
  },

  methods: {
    refreshAttributes() {
      this.removeAttributes();

      Object.keys(this.$attrs).forEach(name => {
        document.documentElement.setAttribute(name, this.$attrs[name]);
        this.currentAttrs.push(name);
      });
    },

    removeAttributes() {
      this.currentAttrs.forEach(name => {
        document.documentElement.removeAttribute(name);
      });
      this.currentAttrs = [];
    }
  }
}
