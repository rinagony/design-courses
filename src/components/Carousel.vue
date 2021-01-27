<template>
  <div class="Carousel">
    <div
      class="containerSpecial"
      @touchstart="SaveTouch"
      @touchend="ChangeTouch"
      @mousedown="SavePoint"
      @mouseup="ChangePoint"
    >
      <div class="dot_lot">
        <div class="wrappBtn" v-for="item in sliderItems" :key="item.id">
          <button
            v-bind:class="{
              active: currentSlideIndex + 1 == item.id,
              slider_dot: currentSlideIndex + 1 != item.id,
            }"
            @click="DotClicked(item.id)"
          >
            <img
              :src="require('./../assets/images/' + item.companyImg)"
              alt=""
            />
          </button>
        </div>
      </div>
      <div class="SliderMain" :class="{ last: isLast }">
        <div
          class="SliderMainItem"
          v-for="item in sliderItems"
          :key="item.index"
          onselectstart="return false"
          v-bind:class="{
            activeSlide: currentSlideIndex + 1 == item.id,
            unactiveSlide: currentSlideIndex + 1 != item.id,
          }"
        >
          <div class="slider_text">
            <div class="slide_item_wrapper">
              <div class="sliderMainInfo">
                <h2>
                  {{ item.description }}
                </h2>
                <div class="sliderInfoNameIcon">
                  <div class="wrpSliderName">
                    <p>{{ item.person }}</p>
                    <h4>
                      {{ item.job }} in <span>{{ item.company }}</span>
                    </h4>
                  </div>
                  <img src="./../assets/images/quote.svg" alt="" />
                </div>
              </div>
              <div class="sliderWrpRight">
                <img
                  class="photoSlider"
                  :src="require('./../assets/images/' + item.img)"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <button class="iconRight" @click="nextSlide()">
          <img src="./../assets/images/right.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    interval: {
      type: Number,
      default: 7000,
    },
  },
  data() {
    return {
      sliderItems: [
        {
          id: 1,
          description:
            " noticed a decrease in the first reply time for bot-generated tickets. Since they give the agents all the context they need, they prefer the chatbot tickets to those from other channels.",
          person: "Maximilian Fisher",
          job: "Manager",
          company: "Google",
          img: "slider1.jpg",
          companyImg: "company1.png",
        },
        {
          id: 2,
          description:
            " We’ve noticed a decrease in the first reply time for bot-generated tickets. Since they give the agents all the context they need, they prefer the chatbot tickets to those from other channels.",
          person: "Maximilian Fisher",
          job: "Manager",
          company: "Google",
          img: "slider2.jpg",
          companyImg: "company2.png",
        },
        {
          id: 3,
          description:
            " We’ve noticed a decrease in the first reply time for bot-generated tickets. Since they give the agents all the context they need, they prefer the chatbot tickets to those from other channels.",
          person: "Maximilian Fisher",
          job: "Manager",
          company: "Google",
          img: "slider3.png",
          companyImg: "company3.png",
        },
        {
          id: 4,
          description:
            " We’ve noticed a decrease in the first reply time for bot-generated tickets. Since they give the agents all the context they need, they prefer the chatbot tickets to those from other channels.",
          person: "Maximilian Fisher",
          job: "Manager",
          company: "Google",
          img: "slider4.jpg",
          companyImg: "company4.png",
        },
        {
          id: 5,
          description:
            " We’ve noticed a decrease in the first reply time for bot-generated tickets. Since they give the agents all the context they need, they prefer the chatbot tickets to those from other channels.",
          person: "Maximilian Fisher",
          job: "Manager",
          company: "Google",
          img: "slider5.jpg",
          companyImg: "company5.png",
        },
        {
          id: 6,
          description:
            " We’ve noticed a decrease in the first reply time for bot-generated tickets. Since they give the agents all the context they need, they prefer the chatbot tickets to those from other channels.",
          person: "Maximilian Fisher",
          job: "Manager",
          company: "Google",
          img: "slider6.jpg",
          companyImg: "company6.png",
        },
      ],
      currentSlideIndex: 0,
      isLast: false,
      go: true,
      startX: 0,
      isActive: false,
    };
  },
  methods: {
    prevSlide() {
      // предыдущий слайд
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      // следующий слайд
      if (this.currentSlideIndex >= this.sliderItems.length - 1) {
        this.currentSlideIndex = 0;
        this.isLast = true;
      } else {
        this.currentSlideIndex++;
        this.isLast = false;
      }
    },
    ListSlide() {
      // автоматическое листание слайдов
      if (this.interval > 0) {
        this.isActive = false;
        const vm = this;
        setInterval(function () {
          if (vm.go !== false) {
            vm.nextSlide();
          }
        }, vm.interval);
      }
    },
    TimeSlideOn() {
      // останвливает перелистывание слайдов на время
      this.go = false;
      const vm = this;
      setTimeout(function () {
        this.isActive = true;
        vm.go = true;
      }, vm.interval);
    },
    DotClicked(id) {
      // перелистывание при нажанитии на кнопку
      this.currentSlideIndex = id - 1;
      this.TimeSlideOn();
    },
    SavePoint: function (event) {
      this.startX = event.clientX;
    },
    ChangePoint: function (event) {
      // листание мышкой если разница в коорданатах больше 20рх
      const diff = event.clientX - this.startX;
      if (event.clientX > this.startX && diff > 20) this.prevSlide();
      else if (event.clientX < this.startX && diff < -20) this.nextSlide();
      this.TimeSlideOn();
    },
    SaveTouch: function (event) {
      this.startX = event.changedTouches[0].screenX;
    },
    ChangeTouch: function (event) {
      // листание пальцем
      const diffTouch = event.changedTouches[0].screenX - this.startX;
      if (event.changedTouches[0].screenX > this.startX && diffTouch > 20)
        this.prevSlide();
      else if (event.changedTouches[0].screenX < this.startX && diffTouch < -20)
        this.nextSlide();
      this.TimeSlideOn();
    },
  },
  mounted() {
    this.ListSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../assets/styles/styles.scss";
.last {
  transition: none !important;
}
#Carousel {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.active {
  img {
    opacity: 1;
  }
}

.containerSpecial {
  max-width: 90vw;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}

.SliderMain {
  display: flex;
  transition: all ease 1s;
}
.SliderMainItem {
  position: relative;
  color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.slider_dot {
  opacity: 0.5;
}

.activeSlide {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.5s ease-in-out;
}

.unactiveSlide {
  visibility: hidden;
  height: 0;
  width: 0;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s ease-in-out;
}
.slider_text {
  width: 90vw;
  h2 {
    color: #fff;
    @include for-desktop-up {
      font-size: 32px;
    }
    font-size: 23px;
  }
}
.slide_item_wrapper {
  @include for-prelarge-desktops-up {
    flex-direction: row;
  }
  flex-direction: column;
  height: 615px;
  display: flex;
  position: relative;
  justify-content: space-around;
}
.dot_lot {
  bottom: 1rem;
  left: 50%;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(1, 100px);
  align-items: center;
  & .wrappBtn {
    margin: 0.5rem;
  }
  & button {
    box-sizing: border-box;
    background: inherit;
    outline: none;
    border: none;
    cursor: pointer;
    img {
      width: 150px;
    }
  }
}

.sliderWrpRight {
  .photoSlider {
    @include for-prelarge-desktops-up {
      left: 50%;
      top: 10%;
      max-width: 400px;
    }
    top: 0;
    position: absolute;
    z-index: 0;
    max-width: 500px;
  }
}

.iconRight {
  @include for-prelarge-desktops-up {
    padding: 50px;
    background: #5f2b77;
    position: absolute;
    right: 6rem;
    top: 40%;
    overflow: hidden;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #3b0d50;
    }
    img {
      width: 30px;
      background: none;
      position: absolute;
    }
  }
  display: none;
}

.sliderMainInfo {
  @include for-prelarge-desktops-up {
    margin-top: 10%;
    left: 4%;
    bottom: auto;
    max-width: 615px;
  }
  max-width: 473px;
  position: absolute;
  padding: 17px 15px 17px 12px;
  background: #5f2b77;
  border-bottom: 5px solid #31b698;
  bottom: 0;
  z-index: 1;
  max-height: 300px;
}

.sliderInfoNameIcon {
  display: flex;
  justify-content: space-between;
  position: relative;
  p {
    margin: 0;
  }
  h4 {
    margin: 0;
  }
}

.slideWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include for-medium-up {
    display: flex;
    flex-direction: row;
  }
}
</style>
