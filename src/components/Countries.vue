<template>
  <div class="countries">
    <div class="countries__wrapper">
      <div class="countries__input">
        <input type="text" placeholder="Search for a country…" value="" />
      </div>

      <div class="countries__select">
        <select name="countries">
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>

    <div class="countries__card-wrapper">
      <router-link
        v-for="country in countries"
        :key="country.alpha3Code"
        :to="{
          name: 'CountryInfo',
          params: { country: JSON.stringify(country) },
        }"
        class="countries__card"
      >
        <div class="countries__card-img">
          <img :src="country.flag" alt="Country flag" />
        </div>
        <div class="countries__card-country">{{ country.name }}</div>
        <div class="countries__card-population">
          Population: <span>{{ country.population }}</span>
        </div>
        <div class="countries__card-region">
          Region: <span>{{ country.region }}</span>
        </div>
        <div class="countries__card-capital">
          Capital: <span>{{ country.capital }}</span>
        </div>
      </router-link>
    </div>

    <InfoCard :country="selectedCountry" v-if="selectedCountry" />
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";

export default {
  name: "Countries",
  components: {
    InfoCard,
  },
  data() {
    return {
      countries: [],
      selectedCountry: null,
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.countries = data;
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    },
  },
};
</script>

<style lang="scss">
.countries {
  &__card {
    width: 264px;
    height: 336px;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    background: rgb(255, 255, 255);
    &-country {
      color: rgb(17, 21, 23);

      font-size: 18px;
      font-weight: 800;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: left;
      margin-top: 24px;
      margin-left: 26px;
    }
    &-population {
      color: rgb(17, 21, 23);
      margin-top: 10px;
      margin-left: 24px;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
      span {
        font-weight: 300;
      }
    }
    &-region {
      color: rgb(17, 21, 23);
      margin-top: 8px;
      margin-left: 24px;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
      span {
        font-weight: 300;
      }
    }

    &-capital {
      color: rgb(17, 21, 23);
      margin-top: 8px;
      margin-left: 24px;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
      span {
        font-weight: 300;
      }
    }
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 75px;
      justify-content: center;
      margin-top: 48px;
    }
    &-img {
      img {
        width: 264px;
        height: 160px;
        object-fit: cover;
      }
    }
  }
  &__wrapper {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
  }
  &__input input {
    margin-left: 80px;
    width: 480px;
    height: 56px;
    border-radius: 5px;

    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    background: rgb(255, 255, 255);
    border: none;
  }

  &__select select {
    width: 200px;
    height: 56px;
    border-radius: 5px;

    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    background: rgb(255, 255, 255);
    border: none;
    margin-right: 80px;
  }
}
</style>
