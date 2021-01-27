<template>
  <div id="Modal">
    <button class="modalOpens" @click="openModal()">
        <img src="@/assets/images/preview.png" alt="">
    </button>
    <transition name="fade">
      <div class="modal" v-if="show">
        <div class="modal__backdrop" @click="closeModal()" />

        <div class="modal__dialog">
          <div class="modal__header">
            <slot name="header" />
            <button type="button" class="modal__close" @click="closeModal()">
              <youtube
              width="640"
                :video-id="videoId"
                ref="youtube"
                @playing="playing"
              ></youtube>
            </button>
          </div>

          <div class="modal__body">
            <slot name="body" />
          </div>

          <div class="modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false,
      videoId: "pXtN4y3O35M",
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("o we are watching!!!");
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>


<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 30%;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    position: relative;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal__close {
    background: inherit;
    border: none;
}

.modalOpens {
    background: inherit;
    border: none;
    margin-top: 3.5rem;
    img {
        max-width: 600px;
        cursor: pointer;
    }
}

</style>