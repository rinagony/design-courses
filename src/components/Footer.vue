<template>
  <div id="Footer">
    <div class="containerFooter">
      <div class="wrpFooter">
        <div class="wrpFooterLeft">
          <div class="wrpFooterLeftEurop">
            <div class="europ">
              <img src="./../assets/images/europ.png" alt="" />
              <p>
                To take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it? But
                who has any right to find
              </p>
            </div>
            <div class="europ">
              <img src="./../assets/images/flogo.png" alt="" />
              <p>
                The wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures to secure other
                greater pleasures, or else he endures pains to avoid worse pains
              </p>
            </div>
          </div>
        </div>
        <div class="wrpFooterRight">
          <div class="wrpFooterRightItem">
            <p>Product</p>
            <router-link to="./">Features</router-link>
            <router-link to="./">Case studies</router-link>
            <router-link to="./">Pricing</router-link>
            <router-link to="./">Book a demo</router-link>
          </div>
          <div class="wrpFooterRightItem">
            <p>Resources</p>
            <router-link to="./">Blog</router-link>
            <router-link to="./">Chatbot</router-link>
            <router-link to="./">Erik's blog</router-link>
            <router-link to="./">Get newsletter</router-link>
            <router-link to="./">Status monitor</router-link>
          </div>
          <div class="wrpFooterRightItem">
            <p>Company</p>
            <router-link to="./">About Us</router-link>
            <router-link to="./">Jobs</router-link>
            <router-link to="./">Contact us</router-link>
            <router-link to="./">Media enquiries</router-link>
            <router-link to="./">Imprint</router-link>
            <router-link to="./">Terms&Privacy</router-link>
            <router-link to="./">Press</router-link>
          </div>
          <div class="wrpFooterRightItem">
            <p>Follow Us</p>
            <router-link to="./">Medium</router-link>
            <router-link to="./">Linkedin</router-link>
            <router-link to="./">Facebook</router-link>
            <router-link to="./">Twitter</router-link>
            <router-link to="./">Instagram</router-link>
          </div>
        </div>
      </div>
      <div class="footerBottom">
        <p>© Enterweave 2021. All rights reserved.</p>
        <div class="wrpImg">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "./../assets/styles/styles.scss";
.containerFooter {
  width: 70vw;
  margin: 0 auto;
}

#Footer {
  background: url("./../assets/images/footerBg.jpg");
  background-repeat: no-repeat;
  padding-top: 10rem;
  padding-bottom: 3rem;
}

.wrpFooter {
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  @include for-medium-up {
    flex-direction: row;
    justify-content: space-around;
  }
}

.wrpFooterLeftEurop {
  img {
    width: 170px;
  }
  p {
    color: rgb(90, 90, 90);
    font-size: 14px;
    margin-top: 20px;
  }
}

.europ {
  max-width: 300px;
}

.wrpFooterRight {
  width: 100%;
  display: grid;
  grid-gap: 5px;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-template-rows: repeat(1, 180px);
  margin-left: 2rem;
}

.wrpFooterRightItem {
  text-align: left;
  @include for-medium-up {
    text-align: right;
  }
  a {
    display: block;
    color: #000;
    font-size: 14px;
    text-decoration: none;
    margin-top: 6px;
    &:hover {
      color: #31b698;
    }
  }
}

.footerBottom {
  display: flex;
  color: rgb(51, 51, 51);
  margin-top: 3rem;
  justify-content: space-between;
  img {
    width: 180px;
  }
}
</style>
