<template>
    <Header />

    <main class="mx-5">
        
        <section class="grid grid-cols-3 mx-14">
            <article class="flex flex-col max-w-xs m-4 bg-white rounded-lg">
                <img class="w-full rounded-t-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAABlBMVEX4g3n3gnhbN2F9AAABhUlEQVR4nO3b0WrCQBRAQf3/ny60RUu0iUeNbszMU9gNZD0EuZR6OEwcv/1cTPeA0Rwf8O6zv5xYgViBWIFYgVjN7+c+BTilOE6Wru/tzNUgh6tLV/b25d8gc2/WXmMBjGTlb+HT1/zx71XYq7evSqzgVbEOM59+YS/dvirDUCBWIFYgViBWIFZgzgpeGKss3bu3Lm8WAAAAAAAAAADAA/z8LxArECsQKxArECt4X6wN/oRugFjb+ddusdqRfWfdSqxArECsQKxArECswJzVjjxArLJ0795zjjx4rHL7x8baILECsQKxArECsYIxRgdD6fKTJxeG0rknn49wubS8t6c3a4PECsQKxArECsQKBhgdFv5mNbeXbn/Kkd8dy5x105PPR7hcWt7bU6wNEisQKxArECsQKxArMGe1Iw8Qqyzdu/ecIw8eq9z+sbE2SKxArECsQKxArGCM0cFQuvzkyYWhdO7J5yNcLi3v7enN2iCxArECpQAAAAAAAAAAAAAAAAAAeL4vJUsG3wdvWuIAAAAASUVORK5CYII=" alt="imagem de efeito" />

                <div class="p-3">
                    <strong class="text-gray-500">Autor do post</strong><span class="text-gray-400"> - 02 feb. 2021</span>
                    <h2 class="text-gray-800 text-2xl">Nome do post </h2>
                    <p class="text-gray-700 text-xl overflow-ellipsis line-clamp-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <router-link to="/post/post-1"> 
                        <strong class="text-gray-700 text-xl underline">continuar lendo</strong>
                    </router-link>
                </div>
            </article>
        </section>
    </main>

</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Blog',
  components: {
      Header
  }
}
</script>

<style scoped>
</style>
