<template>
  <div id="Home" @scroll="letsScroll = true">
    <transition name="fade">
      <div class="chatBot" v-if="showChat == 1">
        <div class="wrpBotChat">
          <div class="botName">
            <h4>BotMike</h4>
          </div>
          <div class="chatBotMessages">
            <div class="wrpHelloFix">
              <p>{{messageBot}}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="wrpMessageUs" @click="showChats()">
      <router-link to="./">
        <img
        name="fade"
          style="transition: 1s easy"
          v-if="showChat == 1"
          src="@/assets/images/chat.png"
          alt=""
        />
        <img name="fade" v-if="showChat == -1" src="@/assets/images/close.png" alt="" />
      </router-link>
    </div>
    <div class="wrapperpHeader">
      <Header :class="{ iscrolled: letsScroll }" />
    </div>
    <section>
      <div class="mainWrapper">
        <div class="wrapperUtp">
          <div class="wrapperHasher">
            <div class="hasher"></div>
            <div class="hasher"></div>
          </div>
          <div class="container">
            <div class="utp">
              <div class="wrapperUtpOffer" data-aos="fade-up">
                <h1>Liberate Your Creativity. Exploring it.</h1>
                <p>
                  Our Graphic Designer templates empower you to design like
                  never before. Liberate yourself from the constraints of
                  complicated software and create beautiful online graphic
                  designs with drag-and-drop simplicity. Take advantage of a
                  huge selection of pre-designed templates.
                </p>
                <div class="wrapperUtpOfferButtons">
                  <button class="blackBtn">Free Trial</button>
                  <button class="whiteBtn">Book a demo</button>
                </div>
              </div>
              <div class="wrapperUtpMessanger" data-aos="fade-up">
                <div class="chat-wrapper">
                  <div class="wrpUtpMessangerUser">
                    <div class="wrpUtpMessangerUserItem">
                      <img src="@/assets/images/circle.png" alt="" />
                      <h5>Anna Michael</h5>
                    </div>
                    <div class="wrpUtpMessangerUserYou">
                      <h5>Student</h5>
                      <img src="@/assets/images/userr.png" alt="" />
                    </div>
                  </div>
                  <div class="chat">
                    <div class="message message_left" style="--delay: 3.1s">
                      <p>
                        Hello! I would like to be a web-designer. Can you help
                        me?
                      </p>
                    </div>
                    <div class="message message_right" style="--delay: 4.7s">
                      <p>
                        Of course. We have a special course from beginners to
                        professional.
                      </p>
                    </div>
                    <div class="message message_left" style="--delay: 9.2s">
                      <p>It's interesting. What i should to do?</p>
                    </div>
                    <div class="message message_right" style="--delay: 10.4s">
                      <p>Fill the form and join us. See you.</p>
                    </div>
                    <div class="messageFakeInput">
                      <h2 ref="firstMes" v-html="paper"></h2>
                      <h2 v-html="paperSecond"></h2>
                      <div ref="sendFake">
                        <img
                          :src="require('@/assets/images/' + image1)"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrapperLoveUs">
        <div class="container">
          <div class="loveUs" data-aos="fade-up">
            <img class="iconLoveUs" src="@/assets/images/love.svg" alt="" />
            <h3>Why our customers love us</h3>
            <div class="wrpLoveUsCarousel">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrapperPreims">
        <div class="preims">
          <img
            class="iconLoveUs"
            data-aos="fade-up"
            src="@/assets/images/light.svg"
            alt=""
          />
          <h2 data-aos="fade-up">Why interweave?</h2>
          <p data-aos="fade-up" class="preimsDescription">
            Folly words widow one downs few age every seven. If miss part by
            fact he park just shew.
          </p>
          <div class="wrpPreimItems">
            <div
              data-aos="fade-up"
              class="wrpPreimItem"
              v-for="preim in ourPreims"
              :key="preim.index"
            >
              <img :src="require('@/assets/images/' + preim.img)" alt="" />
              <h3>{{ preim.title }}</h3>
              <p>{{ preim.description }}</p>
              <router-link to="./" class="usualBtn">Learn how</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div class="wrapperHasherFeatures">
        <div class="hasher"></div>
        <div class="hasher"></div>
      </div>
      <div class="wrpFeatures">
        <img
          class="iconFeatures"
          data-aos="fade-up"
          src="@/assets/images/feature.svg"
          alt=""
        />
        <h2 data-aos="fade-up">How does it work?</h2>
        <div class="wrpFeaturesVideo">
          <Modal />
          <p data-aos="fade-up" class="preimsDescription">
            Out interested acceptance our partiality affronting unpleasant why
            add. Esteem garden men yet shy course. Consulted up my tolerably
            sometimes perpetual oh.
          </p>
          <button data-aos="fade-up" class="blackBtn">See all Features</button>
        </div>
      </div>
    </section>
    <section>
      <div class="wrpProblems">
        <div class="wrpProblemsItems">
          <div
            data-aos="fade-up"
            class="wrpProblemItem"
            v-for="problem in ourProblems"
            :key="problem.index"
          >
            <img :src="require('@/assets/images/' + problem.img)" alt="" />
            <h3>{{ problem.title }}</h3>
            <div class="problemDescription">
              <p>{{ problem.description }}</p>
              <router-link to="./"
                >Learn how <img src="@/assets/images/right.svg" alt=""
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrapperFormMain">
        <div class="container" data-aos="fade-up">
          <Form />
        </div>
      </div>
    </section>
    <section>
      <div class="wrpFooter" data-aos="fade-up">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import Modal from "@/components/Modal.vue";
import Form from "@/components/Form.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    Modal,
    Form,
    Footer,
  },
  data() {
    return {
      letsScroll: false,
      titleText: "Hello! I would like to be a web-designer. Can you help me?",
      titleTextSecond: "It's interesting. What i should to do?~",
      paper: "",
      timer: null,
      timerSecond: null,
      ourProblems: [
        {
          img: "pPhone.png",
          title: "Easy mind life fact with see has bore ten",
          description:
            "Way extensive  advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an age",
          link: "./",
        },
        {
          img: "pWorld.svg",
          title: "If miss part by fact he park just shew",
          description:
            "An concluded  advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an far. ",
          link: "./",
        },
        {
          img: "pRelation.png",
          title: "Between the for morning country",
          description:
            "Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small.",
          link: "./",
        },
        {
          img: "pStatic.svg",
          title: "Get open game him what hour more part",
          description:
            "Felicity now law  advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an ham. ",
          link: "./",
        },
        {
          img: "pDevelop.svg",
          title: "We me rent been part what",
          description:
            "Way extensive advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an age",
          link: "./",
        },
      ],
      ourPreims: [
        {
          img: "pPhone.png",
          title: "Easy mind life fact with see has bore ten",
          description:
            "Way extensive and dejection get delivered deficient sincerity gentleman age",
          link: "./",
        },
        {
          img: "pWorld.svg",
          title: "If miss part by fact he park just shew",
          description:
            "An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. ",
          link: "./",
        },
        {
          img: "pRelation.png",
          title: "Between the for morning country",
          description:
            "Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small.",
          link: "./",
        },
        {
          img: "pStatic.svg",
          title: "Get open game him what hour more part",
          description:
            "Felicity now law securing breeding likewise extended and. Roused either who favour why ham. ",
          link: "./",
        },
        {
          img: "pDevelop.svg",
          title: "We me rent been part what",
          description:
            "Way extensive and dejection get delivered deficient sincerity gentleman age",
          link: "./",
        },
      ],
      fakes: false,
      image1: "paper1.png",
      paperSecond: "",
      showChat: 1,
      messageBot: 'Hello, how can i help you today?'
    };
  },
  methods: {
    scrolling: function () {
      this.letsScroll = true;
      if (window.pageYOffset === 0) {
        this.letsScroll = false;
      }
    },
    printer() {
      this.stoper();
      let i = -1;
      this.timer = setInterval(() => {
        i++;
        const x = i % this.titleText.length;
        this.paper += this.titleText[x];
      }, 73 - Math.random() * 50);
    },
    printerSecond() {
      this.stoperSecond();
      let i = -1;
      this.timerSecond = setInterval(() => {
        i++;
        const x = i % this.titleTextSecond.length;
        this.paperSecond += this.titleTextSecond[x];
      }, 90 - Math.random() * 50);
    },
    stoper() {
      clearInterval(this.timer);
      this.paper = "";
    },
    stoperSecond() {
      clearInterval(this.timerSecond);
      this.paperSecond = "";
    },
    sendFake() {
      this.fakes = true;
      this.image1 = "paper2.png";
      setTimeout(() => {
        (this.fakes = false), (this.image1 = "paper1.png");
      }, 1000);
    },
    showChats() {
      this.showChat = this.showChat * -1;
    },
  },
  watch: {
    paper: function () {
      if (this.paper.length == this.titleText.length) {
        this.paper = "";
        this.sendFake();
        this.showTitle = false;
        clearInterval(this.timer);
        setTimeout(() => {
          this.printerSecond();
        }, 3500);
      }
    },
    paperSecond: function () {
      if (this.paperSecond.length == this.titleTextSecond.length) {
        this.paperSecond = "";
        this.sendFake();
        clearInterval(this.timerSecond);
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrolling);
    import("aos").then((AOS) => AOS.init());
    this.printer();
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/styles/styles.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.chatBotMessages {
  background: #fff;
}


.chatBot {
  position: fixed;
  bottom: 25px;
  right: 10%;
  transition: 1s ease-in-out;
  z-index: 100000;
  background: #fff;
  padding: 10px;
}

.wrpHelloFix {
  background: #31b698;
  color: #ffffff;
  padding: 5px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
}


.expand {
  transition: all 0.3s ease;
}

.wrpMessageUs {
  background: rgb(49, 182, 152);
  position: fixed;
  bottom: 25px;
  right: 15px;
  padding: 10px;
  z-index: 100000;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: 0.4s ease-out;
  img {
    width: 30px;
    transition: 0.4s ease-out;
  }
}


//Header

.wrapperpHeader {
  background: #5f2b77;
  padding-top: 5px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10000;
}

//Utp
.wrapperUtp {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 10% 20px;
  background: #f2f4f5;
}

.wrapperHasher {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  .hasher {
    width: 45px;
    height: 2px;
    background-color: #31b698;
  }
}
#features {
  position: relative;
  .wrapperHasherFeatures {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    position: absolute;
    width: 100%;
    top: 20%;
    justify-content: space-between;
    .hasher {
      width: 45px;
      height: 2px;
      background-color: #31b698;
    }
  }
}

.wrapperUtpOffer {
  p {
    max-width: 500px;
  }
}

.utp {
  margin-top: 4rem;
  h1 {
    font-size: 50px;
    font-weight: 600;
    max-width: 600px;
    color: #2e145a;
  }
}
.wrapperUtpOfferButtons {
  margin-top: 2.5rem;
  .blackBtn {
    padding: 16px 37px;
  }
  .whiteBtn {
    padding: 16px 30px;
    margin-left: 1rem;
  }
}

#Home .iscrolled {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  background: #fff;
  display: block;
  z-index: 100000;
}

//fakechat
.wrpUtpMessangerUser {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.messageFakeInput {
  h2 {
    display: inline;
    animation: typebar 0s steps (40) infinite;
    font-size: 18px;
    text-align: left;
    position: absolute;
    color: #000;
    font-weight: 500;
    margin-bottom: 6px;
    font-size: 18px;
    max-width: 85%;
    margin-left: 5px;
  }
}

@keyframes typebar {
  from {
    border-right: 2px black solid;
  }
  to {
    border-right: 2px transparent solid;
  }
}

.wrpUtpMessangerUserItem {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 5px;
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  h5 {
    font-size: 16px;
    color: #000;
    font-weight: 600;
  }
}

.wrpUtpMessangerUserYou {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
  h5 {
    font-size: 16px;
    color: #000;
    font-weight: 600;
  }
}

.chat-wrapper {
  --chat-height: 500px;
  width: 420px;
  height: var(--chat-height);
  background: url("./../assets/images/bg.png");
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 15px;
  padding: 10px;
  overflow: hidden;
}

.chat {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  width: 100%;
  height: 500px;

  -webkit-animation-name: chat-scroll;

  animation-name: chat-scroll;
  -webkit-animation-duration: 9s;
  animation-duration: 9s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-delay: 9s;
  animation-delay: 9s;
}

.utp {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  @include for-medium-up {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

.message {
  margin: 10px;
  min-height: calc(var(--chat-height) / 3 - 120px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  font-family: sans-serif;
  font-size: 16px;
  -webkit-animation-name: show-message;
  animation-name: show-message;
  -webkit-animation-duration: 0.55s;
  animation-duration: 0.55s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-delay: var(--delay);
  animation-delay: var(--delay);
  -webkit-transform-origin: left;
  -ms-transform-origin: left;
  transform-origin: left;
}

#messageCat {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transform-origin: right;
  -ms-transform-origin: right;
  transform-origin: right;
  img {
    width: 150px;
    margin-bottom: 2rem;
    margin-right: -25px;
  }
}

.message_left {
  -ms-flex-item-align: end;
  align-self: flex-end;
  text-align: right;
  background-color: #996ead;
  max-width: 300px;
  color: white;
  padding: 0 10px;
  -webkit-transform-origin: right;
  -ms-transform-origin: right;
  transform-origin: right;
}

.message_right {
  -ms-flex-item-align: start;
  align-self: flex-start;
  text-align: left;
  background-color: #7eafa4;
  color: white;
  -webkit-transform-origin: left;
  -ms-transform-origin: left;
  transform-origin: left;
  max-width: 300px;
  padding: 0 10px;
}

@-webkit-keyframes chat-scroll {
  from {
    -webkit-transform: translateY(calc(-1 * (100% - var(--chat-height))));
    transform: translateY(calc(-1 * (100% - var(--chat-height))));
  }

  to {
  }
}

@keyframes chat-scroll {
  from {
    -webkit-transform: translateY(calc(-1 * (100% - var(--chat-height))));
    transform: translateY(calc(-1 * (100% - var(--chat-height))));
  }

  to {
  }
}

@-webkit-keyframes show-message {
  from {
    -webkit-transform: translateY(50%) rotate(15deg) scale(0);
    transform: translateY(50%) rotate(15deg) scale(0);
  }
}

@keyframes show-message {
  from {
    -webkit-transform: translateY(50%) rotate(15deg) scale(0);
    transform: translateY(50%) rotate(15deg) scale(0);
  }
}

.messageFakeInput {
  background: #fff;
  height: 60px;
  display: -webkit-box;
  padding-bottom: 7px;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  width: 100%;
  margin-top: 20px;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 6px;
  border-radius: 5px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  img {
    width: 40px;
    right: 10px;
    bottom: 5px;
    position: absolute;
  }
  p {
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 0.17em;
    margin: 0 auto;
    border-right: 0.15em solid orange;
    -webkit-animation: typing 1.5s steps(30, end),
      blink-caret 0.5s step-end infinite;
    animation: typing 1.5s steps(30, end), blink-caret 0.5s step-end infinite;
    -webkit-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
  }
}

.sendFakes {
  background: #ffffff;
  border: 4px solid rgb(138, 138, 138);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin-right: 5px;
}

.sendSendFake {
  background: coral;
  border: 4px solid rgb(218, 218, 218);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin-right: 5px;
}

@-webkit-keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@-webkit-keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgb(0, 0, 0);
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgb(0, 0, 0);
  }
}
//Love us

.wrapperLoveUs {
  padding: 1rem 0;
}

.iconLoveUs {
  width: 50px;
}

.loveUs {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  h3 {
    font-size: 30px;
  }
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

//Preims

.wrapperPreims {
  background: #f2f4f5;
  margin-top: -80px;
  padding: 0 20px;
}

.preims {
  padding-top: 6rem;
  padding-bottom: 3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  h2 {
    font-size: 37px;
  }
}

.preimsDescription {
  color: rgb(59, 59, 59);
  max-width: 500px;
  text-align: center;
  margin-top: 0;
}

.wrpPreimItems {
  width: 100%;
  display: -ms-grid;
  display: grid;
  grid-gap: 30px;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  -ms-grid-rows: 450px;
  grid-template-rows: repeat(1, 450px);
}

.wrpProblemsItems {
  width: 100%;
  display: -ms-grid;
  display: grid;
  grid-gap: 30px;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  -ms-grid-rows: 450px;
  grid-template-rows: repeat(1, 450px);
}
.wrpProblemItem {
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 2rem 1rem;
  max-width: 350px;
  margin-top: 2rem;
  h3 {
    font-size: 31px;
    margin: 2rem 0;
    color: #000;
  }

  img {
    width: 50px;
  }
}

.wrpPreimItem {
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 2rem 1rem;
  max-width: 350px;
  margin-top: 2rem;
  h3 {
    font-size: 31px;
    margin: 2rem 0;
  }
  p {
    color: rgb(39, 39, 39);
  }

  img {
    width: 50px;
  }
}

.usualBtn {
  background: #5f2b77;
  color: #fff;
  padding: 15px 33px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  margin-top: 2.5rem;
  &:hover {
    background: #2e145a;
  }
}

//Features

.wrpFeatures {
  height: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: url("./../assets/images/bgpreim1.jpg");
  padding: 2rem 0 4rem 0;
  background-repeat: no-repeat;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  .iconFeatures {
    width: 50px;
    margin-bottom: 1rem;
  }
  h2 {
    margin: 0;
    font-size: 37px;
    color: #2e145a;
  }
}

.wrpFeaturesVideo {
  padding-bottom: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  p {
    max-width: 460px;
    text-align: center;
    margin: 2rem 0;
  }
  button {
    padding: 1rem 2.5rem;
  }
}

//problems

.wrpProblems {
  margin-top: 8rem;
}

.problemDescription {
  background: #5f2b77;
  padding: 2rem 1rem;
  padding-bottom: 3rem;
  position: relative;
  p {
    color: #fff;
    margin-bottom: 20px;
  }
  a {
    color: #fff;
    background: #3b0d50;
    padding: 10px 30px;
    position: absolute;
    right: 10px;
    text-decoration: none;
    bottom: 10px;
    border-left: 30px solid #4d1c64;
    transition: 0.4s ease-in-out;
    &:hover {
      background: #16041f;
    }
    img {
      margin-left: 10px;
      width: 15px;
    }
  }
}

//Form
.wrapperFormMain {
  background: #5f2b77;
  padding: 3rem 0;
}
</style>
