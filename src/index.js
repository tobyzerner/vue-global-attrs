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
        const value = this.$attrs[name];

        if (value === false) {
          document.documentElement.removeAttribute(name);
        } else if (typeof value !== 'undefined') {
          document.documentElement.setAttribute(name, value === true ? '' : value);
        }

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
