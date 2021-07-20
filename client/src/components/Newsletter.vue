<template>
  <div class="_newsletter m-4">
    <p class="text-3xl font-bold text-green-500">Que tal receber novidades<br/> do nosso blog?</p>
    <span class="text-2xl text-gray-700">É muito fácil, apenas preencha com seu e-mail</span>
    <form class="my-3">
        <span class="text-red-500" v-bind:class="hasError ? 'block' : 'hidden'">OPS, algo está errado!</span>
        <input 
          placeholder="Seu e-mail" 
          type="email" 
          class="border p-2 rounded bg-white text-gray-700 mr-3" 
          @change="email=$event.target.value"
          v-bind:class="hasError ? 'border-red-500' : 'border-green-500'"
        />
        <input 
          placeholder="Seu nome" 
          type="text" 
          class="border p-2 rounded bg-white text-gray-700 mr-3" 
          @change="username=$event.target.value"
          v-bind:class="hasError ? 'border-red-500' : 'border-green-500'"
        />
        <button type="submit" class="hover:opacity-80 text-xl p-2 my-4 rounded bg-green-500" @click.prevent="handleSubmit">Enviar</button>
    </form>
    <span class="text-sm font-semibold text-gray-400">Fique tranquilo(a), não enviamos span*</span>
  </div>
</template>

<script>
export default {
  name: 'Newsletter',
  data() {
      return { 
        email: '',
        username: '',
        hasError: false
      }
  },
  methods: {
      handleSubmit() {
          if(!this.email || !this.username) {
            return this.hasError = true;
          }
          this.hasError = false;
          let options = { method: 'POST', body: { email: this.email, username: this.username } };
          console.log(options)
          fetch('http://localhost:3333/newsletter', options).then(res => res.json()).then(data => console.log(data))
      }
  }
}
</script>

<style scoped>
</style>
