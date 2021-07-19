<template>
   <div class="_overlay" v-if="open">
        <div class="_modal w-11/12 lg:w-1/2 p-4 bg-white rounded">
            <span @click="toggleOpen" class="_modal-close font-bold text-dark hover:text-red-500 text-xl text-gray-500">x</span>
            <div class="_modal-header">
                <p class="text-3xl text-gray-700 m-4">Psiu!</p>
            </div>
            <div class="_modal-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
      return { open: true }
  },
  methods: {
      toggleOpen() {
          this.open = !this.open;
      }
  }
}
</script>

<style scoped>
    ._overlay {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.2);

        position: fixed;
        top: 0;
        display: flex;
    }
    ._modal {
        height: auto;
        margin: auto;
    }
    ._modal-close {
        position: relative;
        left: 96%;
        cursor: pointer;
    }
</style>
