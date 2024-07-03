<template>
  <div class="countries">
    <div class="countries__wrapper">
      <div class="countries__input">
        <label class="input-with-icon">
          <svg
            width="17.500000"
            height="17.500000"
            viewBox="0 0 17.5 17.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Shape"
              d="M12.5 11L11.7 11L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.89999 0 0 2.9 0 6.5C0 10.1 2.89999 13 6.5 13C8.10001 13 9.6 12.4 10.7 11.4L11 11.7L11 12.5L16 17.5L17.5 16L12.5 11ZM2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2C4 2 2 4 2 6.5Z"
              clip-rule="evenodd"
              fill="#848484"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>

          <input
            type="text"
            placeholder="Search for a country…"
            @input="inputChange"
            v-model="searchQuery"
          />
        </label>
      </div>

      <div class="countries__select">
        <select name="countries" @input="countryFilter($event)">
          <option value="" hidden>Filter by Region</option>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>

    <div class="countries__card-wrapper">
      <router-link
        v-for="country in filteredCountries ? filteredCountries : countries"
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
      searchQuery: "",
      countries: [],
      selectedCountry: null,
      filteredCountries: null,
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

        console.log(this.countries);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    },

    countryFilter(event) {
      const selectedValue = event.target.value;
      if (selectedValue !== "") {
        this.filteredCountries = this.countries.filter(
          (item) => item.region === selectedValue
        );
      } else {
        this.filteredCountries = this.countries;
      }
    },
    inputChange() {
      const inputValue = this.searchQuery.trim().toLowerCase();
      if (inputValue) {
        this.filteredCountries = this.countries.filter((country) =>
          country.name.toLowerCase().startsWith(inputValue)
        );
      } else {
        this.filteredCountries = this.countries;
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
    margin-left: 141px;
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
    margin-right: 141px;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 8px 30px 8px 10px;
    background-color: #fff;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12L4 6h12z"/></svg>');
    background-size: 10px;
    background-position: right 10px center;
    background-repeat: no-repeat;
  }
}

.input-with-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.input-with-icon svg {
  position: absolute;
  left: 174px; /* Расположение иконки */
  width: 20px;
  height: 20px;
  fill: gray; /* Цвет иконки */
}

.input-with-icon input {
  padding-left: 74.5px; /* Учитывает ширину иконки */
}

.countries__select select:focus {
  outline: none;
  border: none;
}

.countries__select select option {
  padding: 10px;
  font-size: 14px; /* размер шрифта для опций */
  background-color: #fff;
  color: #333;
}
</style>
