<template>
  <div class="toolbar">
    <div class="toolbar__title">
      {{ title }}

      <div
        ref="loader"
        class="toolbar__loader vs-con-loading__container"
      />
    </div>

    <div class="toolbar__center">
      <slot name="center" />
    </div>

    <div class="toolbar__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',


  props: {
    title: {
      type: String,
      required: true,
    },

    loading: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    loading: {
      immediate: true,
      handler(v) {
        if (v && this.$refs.loader) {
          this.$vs.loading({
            container: this.$refs.loader,
            scale: 0.33,
          });
        } else {
          this.$vs.loading.close(this.$refs.loader);
        }
      },
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
