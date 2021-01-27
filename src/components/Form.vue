<template>
  <div id="formBlock">
    <div class="formWrp">
      <div class="formTitle">
        <h2>See how Inteweave looks on your website.</h2>
        <p>
          Get a short video previewing how Solvemate looks on your website. No
          obligations, no strings attached, 100% free.
        </p>
      </div>
      <form @submit.prevent="submitHandler">
        <div class="wrapperForm">
          <div class="wrapperFormLeft">
            <div class="wrapperInput">
              <input
                required
                type="text"
                class="validate"
                placeholder="First Name *"
              />
            </div>
            <div class="wrapperInput">
              <input
                required
                id="email"
                type="email"
                class="validate"
                placeholder="Email *"
              />
            </div>
            <div class="wrapperInput">
              <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="wrapperInput">
              <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div class="wrapperFormRight">
            <div class="wrapperInput">
              <input
                required
                type="text"
                class="validate"
                placeholder="Your Name"
              />
            </div>
            <div class="wrapperInput">
              <input
                required
                class="validate"
                placeholder="Your Name"
              />
            </div>
            <div class="wrapperInput">
              <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="wrapperInput">
              <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </div>
        <div class="wrapperFormButtonRules">
          <span
            >We are committed to protecting your privacy <br /><router-link
              to="./"
              >See our privacy policy.</router-link
            >
          </span>
          <button
            class="ofertabtn waves-effect blackBtn btn auth-submit"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    submitHandler() {
      window.M.toast({ html: "You send" });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/styles/styles.scss";
input {
  &:active {
    border-bottom-color: #ffd180;
  }
}

.formWrp {
  background: #fff;
  min-height: 400px;
  padding-top: 2rem;
}

.lighten {
  background-color: #dfe1e6;
  padding: 0 5rem;
  margin-top: 1rem;
  color: black;
}

.formTitle {
  max-width: 600px;
  margin: 0 auto;
  p {
    text-align: center;
  }
  h2 {
    text-align: center;
    font-size: 35px;
    font-weight: 600;
    @include for-medium-up {
      font-size: 50px;
    }
    color: #000;
  }
}

h2 {
  padding: 0 1rem;
}

form {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
  padding: 1rem;
  input,
  textarea,
  select {
    width: 330px;
    border-top: none;
    font-size: 16px;
    border-right: none;
    border-left: none;
    font-weight: 600;
    padding: 1rem 0;
    border-bottom: 0.2px solid rgb(29, 29, 29);
    margin-bottom: 1rem;
    color: rgb(51, 51, 51);
    @include for-desktop-up {
      margin-right: 3rem;
    }
    &:hover,
    &:active,
    &:focus {
      border-top: none;
      border-right: none;
      border-left: none;
      text-decoration: none;
      outline: none;
    }
  }
}

.wrapperForm {
    width: 100%;
  @include for-desktop-up {
    flex-direction: row;
  }
  flex-direction: column;
  display: flex;
  justify-content: center;
}
.wrapperFormButtonRules {
  @include for-tablet-portrait-up {
    flex-direction: row;
  }
    margin-top: 1rem;
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    button {
        width: 140px;
        margin-top: 1rem;
        @include for-tablet-portrait-up {
    margin-top: 0;
  }
    }
    span {
        font-size: 14px;
    }
}

.wrapperInput {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
