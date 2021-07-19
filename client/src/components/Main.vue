<template>
    <main class="_main">
      <section class="_main-section flex justify-between">
          <div class="_main-section--right">
            <span class="_pc text-4xl lg:text-5xl">Seu</span>
            <h1 class="_pc text-6xl lg:text-8xl">Próximo lar</h1>
          </div>
          <div class="_main-section--left"></div>
      </section>

      <section class="_main-section-n2 flex justify-around">
          <div class="_main-section-n2--right"></div>
          <div class="_main-section-n2--left">
            <span class="_pc text-4xl lg:text-5xl">Design</span>
            <h1 class="_pc text-6xl lg:text-8xl">Interiores</h1>
          </div>
      </section>

      <section class="_galery-section">
          <h2>Galeria</h2>
          <Slider />
      </section>

      <!--<section class="_fullscreen">
        <h3>Loren ipsun<br/><strong>dolor</strong><br/>sit.</h3>
      </section>-->

      <section class="_services-section w-11/12">
        <article class="flex justify-between flex-col lg:flex-row" >
          <div class="flex flex-col justify-between rounded p-3 lg:w-1/4">
              <img class="w-8 my-3" src="https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f3e1.svg"/>
              <h5 class="text-gray-600 text-2xl">Arquiterura</h5>
              <p class="text-gray-600 text-xl">Planejamos o melhor ambiente para você</p>
              <a href="#" class="flex justify-between border border-gray-600 p-3 text-gray-600 my-4 w-9/12">VER MAIS <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></a>
          </div>
          <div class="flex flex-col justify-between rounded p-3 lg:w-1/4">
              <img class="w-8 my-3" src="https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f3e1.svg"/>
              <h5 class="text-gray-600 text-2xl">Engenharia</h5>
              <p class="text-gray-600 text-xl">Planejamos o melhor ambiente para você</p>
              <a href="#" class="flex justify-between border border-gray-600 p-3 text-gray-600 my-4 w-9/12">VER MAIS <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></a>
          </div>
          <div class="flex flex-col justify-between rounded p-3 lg:w-1/4">
              <img class="w-8 my-3" src="https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f3d7-fe0f.svg"/>
              <h5 class="text-gray-600 text-2xl">Engenharia</h5>
              <p class="text-gray-600 text-xl">Planejamos o melhor ambiente para você</p>
              <a href="#" class="flex justify-between border border-gray-600 p-3 text-gray-600 my-4 w-9/12">VER MAIS <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></a>
          </div>
        </article>
      </section>

      

    </main>
    <div class="mx-4 mb-8">
      <Newsletter/>
    </div>  
    <modal ref="profile">
      <Newsletter/>
    </modal>
</template>

<script>
import Slider from './Slider.vue'
import Newsletter from './Newsletter.vue'
import Modal from './Modal.vue'

export default {
  name: 'Main',
  components: {
    Slider,
    Newsletter,
    Modal
  },
  methods: {
    onContainerScroll: function() {
        window.addEventListener('scroll', () => {
            let leftContainer = document.querySelector('._main-section--left');
            let header = document.querySelector('._header');

            if(header.offsetTop > 630) {
                leftContainer.classList.remove('fixed');
            } else {
                leftContainer.classList.add('fixed');
            }
        });
    }
  },
  created: function () {
    this.onContainerScroll();
  }
}
</script>

<style scoped>
 ._main {
   background: var(--gray);
 }

 ._main-section, ._main-section-n2 {
   width: 100%;
   height: 100vh;
 }

 ._main-section--right {
   margin-top: 80px;
   width: 50%;
   margin-left: 1.5rem;
 } 

 ._main-section--right::before, ._main-section-n2--left::before {
   font-size: 250px;
   opacity: .3;
   display: flex;
   position: absolute;
 }

 @media (min-width: 640px) {
   ._main-section--right::before, ._main-section-n2--left::before {
    font-size: 400px;
   }
 }

 ._main-section--right::before {
   content: '01';
   margin-top: -30px;
 }

 ._main-section-n2--left::before {
   content: '02';
   margin-top: -10%;
 }

 ._main-section--left {
   width: 50%;
   height: 100%;
 }

 ._main-section-n2--right {
   width: 78%;
   height: 100%;
 }

 @media (min-width: 640) {
   ._main-section-n2--right {
      width: 50%;
    }
 }

 ._main-section--left {
   background: url('../assets/images/main-section-bg.jpg') no-repeat;
 }

 ._main-section-n2--right {
   background: url('../assets/images/office.jpg') no-repeat;
 }

 ._main-section-n2--left {
    margin-left: -278px;
    align-items: center;
    margin-top: 80px;
 }

 @media (min-width: 640px) {
  ._main-section-n2--left {
    margin-left: -325px;
  }
 }

 ._main-section-n2--right.fixed, ._main-section--left.fixed {
   left: 50%;
   position: fixed;
   top: auto;
 }

 @media (max-width: 640px) {
  ._main-section--left.fixed {
    left: 50%;
    opacity: 0.9;
  }
 }

 ._galery-section {
   text-align: center;
   margin-bottom: 40px;
 }

 ._galery-section h2 {
   font-size: 46px;
   margin-bottom: 2rem;
   display: none;
 }

 ._fullscreen {
   background: url('../assets/images/sala.jpg') no-repeat;
   background-position: center;
   background-size: 100%;
   width: 100vw;
   height: 500px;
 }

 ._services-section {
   margin: 5%;
 }


</style>
