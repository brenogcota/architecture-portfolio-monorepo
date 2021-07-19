<template>
  <div class="wrapper lg:flex">
    <button class="_prev" @click="scrollRight">
        <img src="https://image.flaticon.com/icons/png/512/481/481127.png">
    </button>
    <button class="_next" @click="scrollLeft">
        <img src="https://image.flaticon.com/icons/png/512/481/481127.png">
    </button>
    <div class="_slider">
        <div class="_container-img">
            <img src= "../assets/images/sala-jantar.jpg"/>
            <h3>Lorem ipsum dolor sit</h3>
        </div>
        <div class="_container-img">
            <img src= "../assets/images/pscina.jpg"/>
            <h3>Lorem ipsum dolor sit</h3>
        </div>
        <div class="_container-img">
            <img src= "../assets/images/sala.jpg"/>
            <h3>Lorem ipsum dolor sit</h3>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  methods: {
    autoPlay() {
        setInterval(function() {
            let _slider = document.querySelector('._slider');
            let _image = document.querySelector('._container-img');

            _slider && _slider.scrollTo(+_image.offsetWidth, 0);
        }, 5000);

        setInterval(function() {
            let _slider = document.querySelector('._slider');
            _slider && _slider.scrollTo(0, 0);
        }, 15000);

    },
    scrollLeft() {
        let _slider = document.querySelector('._slider');
        _slider.scrollTo(+200, 0)
    },

    scrollRight() {
        let _slider = document.querySelector('._slider');
        _slider.scrollTo(-200, 0);
    }
  },
  created: function () {
      this.autoPlay();
  }

}
</script>

<style scoped>
    ._slider {
        max-width: 96vw;
        display: flex;
        margin: 0 auto;
        gap: 1rem;

        overflow-x: scroll;    
    }

    @media (min-width: 640px) {
        ._slider {
            max-width: 88vw;
        }
    }

    ._slider::-webkit-scrollbar {
        width: 0;
    }
    ._slider::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ._slider::-webkit-scrollbar-thumb {
        background: transparent
    }

    ._slider ._container-img img {
        max-width: 500px;
    }

    ._container-img {
        text-align: left;
        cursor: pointer;
    }

    ._container-img h3 {
        display: none;

        position: relative;
    }

    ._container-img:hover h3 {
        display: block;
        margin-top: -40px;
        margin-left: 20px;
    }

    .wrapper {
        align-items: center;
    }

    ._prev, ._next {
        position: relative;
        top: 0;
        margin-top: -441px;
        cursor: pointer;
        border: none;
        left: 30%;
        max-width: 30px;
    }

    @media (min-width: 640px) {
        ._prev, ._next {
            left: 88%;
        }
    }

    ._prev {
        transform: rotate(180deg);
    }

    ._next {
        margin-left: 20px;
    }
</style>
