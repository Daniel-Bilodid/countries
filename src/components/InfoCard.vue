<template>
  <div class="info">
    <div class="info__back">
      <button>
        <svg
          width="18.031250"
          height="11.785114"
          viewBox="0 0 18.0312 11.7851"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Shape"
            d="M5.89 0L7.07 1.17L3.18 5.06L18.03 5.06L18.03 6.71L3.18 6.71L7.07 10.6L5.89 11.78L0 5.89L5.89 0Z"
            fill="#111517"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
        </svg>
        <span>Back</span>
      </button>
    </div>
    <div class="info__wrapper">
      <img :src="localCountry.flag" alt="Country flag" />

      <div class="info__region">
        <h1 class="info__region-name">{{ localCountry.name }}</h1>
        <p>
          Native Name: <span>{{ localCountry.nativeName }}</span>
        </p>
        <p>
          Population: <span>{{ localCountry.population }}</span>
        </p>
        <p>
          Region: <span>{{ localCountry.region }}</span>
        </p>
        <p>
          Subregion: <span>{{ localCountry.subregion }}</span>
        </p>
        <p>
          Capital: <span>{{ localCountry.capital }}</span>
        </p>
      </div>

      <div class="info__country-info">
        <p>
          Top Level Domain:
          <span>{{
            localCountry.topLevelDomain[0] ? localCountry.topLevelDomain[0] : ""
          }}</span>
        </p>
        <p>
          Currencies:
          <span>{{
            localCountry.currencies[0].code
              ? localCountry.currencies[0].code
              : ""
          }}</span>
        </p>
        <p>
          Languages:
          <span>{{
            localCountry.languages[0].name ? localCountry.languages[0].name : ""
          }}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="info__country-borders">
    Borders:
    <ul class="info__country-list">
      <li
        class="info__country-item"
        v-for="border in localCountry.borders"
        :key="border"
      >
        {{ border }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    country: {
      type: [Object, String],
      required: true,
    },
  },
  data() {
    return {
      localCountry: {},
    };
  },
  created() {
    this.parseCountryProp();
  },
  watch: {
    country: {
      handler() {
        this.parseCountryProp();
      },
      immediate: true,
    },
  },
  methods: {
    parseCountryProp() {
      try {
        if (typeof this.country === "string") {
          this.localCountry = JSON.parse(this.country);
        } else {
          this.localCountry = this.country;
        }
      } catch (error) {
        console.error("Parsing Error:", error);
      }
    },
  },
};
</script>

<style lang="scss">
.info {
  &__wrapper {
    display: flex;
    justify-content: center;
  }

  &__back button {
    cursor: pointer;
    width: 136px;
    height: 40px;
    border-radius: 6px;
    margin-left: 80px;
    color: rgb(17, 21, 23);
    font-family: Nunito Sans;
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
    background: rgb(255, 255, 255);
    border: none;
    margin-top: 50px;
  }

  &__back svg {
    margin-left: 32.57px;
    margin-right: 10px;
  }
  &__country {
    &-list {
      display: flex;
    }
    &-item {
      list-style-type: none;
    }
    &-info {
      margin-top: 160px;
      margin-left: 140px;
      width: 300px;
      p {
        color: rgb(17, 21, 23);
        font-family: Nunito Sans;
        font-size: 16px;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0px;
        text-align: left;
      }

      span {
        font-weight: 300;
      }
    }
  }
  &__region {
    margin-left: 120px;

    p {
      color: rgb(17, 21, 23);
      font-family: Nunito Sans;
      font-size: 16px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
    }

    span {
      font-weight: 300;
    }
    &-name {
      color: rgb(17, 21, 23);
      font-family: Nunito Sans;
      font-size: 32px;
      font-weight: 800;
      line-height: 44px;
      letter-spacing: 0px;
      text-align: left;
      margin-top: 120px;
    }
  }
  img {
    width: 560px;
    height: 401px;
    border-radius: 10.01px;

    box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.03);
    background: rgb(128, 128, 128);
    margin-left: 80px;
    margin-top: 100px;
  }
}
</style>
