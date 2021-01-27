<template>
  <div id="Header">
    <div class="container">
      <div class="wrpHeader">
        <div class="wrpImg">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <div class="nav">
          <ul v-for="link in links" :key="link.key">
            <li>
              <router-link :to="link.path">
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="mobile">
          <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
            <ul class="menu__box">
              <li v-for="link in links" :key="link.key">
                <router-link class="menu__item" :to="link.path">
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="wrpButtonsNav">
          <div class="wrpButtonsInfo">
            <div class="wrpButtonNavig">
              <button class="blackBtn">Free Trial</button>
            </div>
            <div class="wrpInfoLogLang">
              <form @click="onChangeLang($event)">
                <input name="dzen" type="button" value="Ру" />|
                <input class="active" name="dzen" type="button" value="En" />
              </form>
              <router-link class="logBtn" to="./">Login</router-link>
            </div>
          </div>
          <div class="wrpLangInfo">
            <div class="wrpButtonNavig">
              <button class="whiteBtn">Book a demo</button>
            </div>
            <div class="wrpInfoLogLang">
              <img src="@/assets/images/phone.png" alt="" />
              <a class="phone" href="#">+442046095</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      links: [
        {
          title: "Product",
          path: "./",
          id: 1,
        },
        {
          title: "Solutions",
          path: "./",
          id: 2,
        },
        {
          title: "Partners",
          path: "./",
          id: 3,
        },
        {
          title: "Pricing",
          path: "./",
          id: 4,
        },
        {
          title: "Resources",
          path: "./",
          id: 5,
        },
        {
          title: "About Us",
          path: "./",
          id: 6,
        },
      ],
    };
  },
  props: {
    scrolling: {
      type: Object,
    },
  },
  methods: {
    onChangeLang(event) {
      console.log(event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/styles/styles.scss";
#Header {
  background: #f2f4f5;
  margin: 0;
  padding-bottom: 10px;
}

.wrpImg {
  img {
    width: 150px;
  }
}

.wrpButtonsInfo {
  margin-right: 10px;
}

.wrpHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include for-medium-up {
    flex-direction: row;
    justify-content: space-between;
  }
}

.mobile {
  display: block;
  @include for-medium-up {
    display: none;
  }
}

.nav {
  display: none;
  @include for-medium-up {
    display: block;
  }
  li {
    list-style-type: none;
    display: inline-block;
    a {
      text-decoration: none;
      transition: 0.3s;
      &:hover {
        color: #31b698;
      }
    }
  }
  ul {
    display: inline-block;
  }
}

.wrpButtonsNav {
  display: flex;
}

.wrpInfoLogLang {
  display: flex;
}

.wrpInfoLogLang {
  margin-top: 14px;
  select {
    border: none;
  }
  img {
    width: 18px;
    margin-right: 3px;
  }
  .phone {
    color: #000;
    text-decoration: none;
    font-size: 16px;
  }
}

.wrpInfoLogLang {
  form {
    input {
      border: none;
      color: #5f2b77;
      background: inherit;
      font-size: 13px;
      padding: 2px;
      margin: 0;
      &:focus,
      &:active {
        outline: none;
        color: #31b698;
      }
    }
  }
  .logBtn {
    font-size: 14px;
    text-decoration: none;
    margin-top: 2px;
    margin-left: 12px;
  }
}

.active {
  color: #31b698;
}

#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
}

.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: 0.25s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  width: 200px;
  border-top: 5px solid #5f2b77;
  height: 100%;
  margin: 0;
  background: #f2f4f5;
  padding: 80px 0;
  list-style: none;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
  transition-duration: 0.25s;
}

.menu__item {
  display: block;
  padding: 12px 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  transition-duration: 0.25s;
  transition: 0.3s;
  &:hover {
    color: #31b698;
  }
}

.mobile-nav {
  background: #fff;
}
</style>
