<template>
  <div class="_newsletter m-4">
    <p class="text-3xl font-bold text-green-500">Que tal receber novidades<br/> do nosso blog?</p>
    <span class="text-2xl text-gray-700">É muito fácil, apenas preencha com seu e-mail</span>
    <form class="my-3">
        <input placeholder="Seu e-mail" type="email" class="hover:border hover:border-green-500 p-2 rounded bg-white text-gray-700" @change="email=$event.target.value"/>
        <button type="submit" class="hover:opacity-80 text-xl p-2 rounded m-4 bg-green-500" @click.prevent="handleSubmit">Enviar</button>
    </form>
    <span class="text-sm font-semibold text-gray-400">Fique tranquilo(a), não enviamos span*</span>
  </div>
</template>

<script>
export default {
  name: 'Newsletter',
  data() {
      return { email: ''}
  },
  methods: {
      handleSubmit() {
          console.log(this.email)
      }
  }
}
</script>

<style scoped>
</style>
