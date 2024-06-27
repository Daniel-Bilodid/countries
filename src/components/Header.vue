<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__title">Where in the world?</div>

      <div class="header__theme">
        <svg
          width="16.843567"
          height="15.539566"
          viewBox="0 0 16.8436 15.5396"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Path"
            d="M11.67 11.22C7.79 11.22 4.64 8.34 4.64 4.78C4.64 3.43 5.09 2.19 5.85 1.16C2.81 2.1 0.62 4.74 0.62 7.85C0.62 11.75 4.07 14.91 8.32 14.91C11.71 14.91 14.59 12.9 15.62 10.11C14.5 10.81 13.14 11.22 11.67 11.22Z"
            fill="#FFFFFF"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
          <path
            id="Path"
            d="M4.64 4.78C4.64 3.43 5.09 2.19 5.85 1.16C2.81 2.1 0.62 4.74 0.62 7.85C0.62 11.75 4.07 14.91 8.32 14.91C11.71 14.91 14.59 12.9 15.62 10.11C14.5 10.81 13.14 11.22 11.67 11.22C7.79 11.22 4.64 8.34 4.64 4.78Z"
            stroke="#111517"
            stroke-opacity="1.000000"
            stroke-width="1.250000"
          />
        </svg>
        <span>Dark Mode</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  width: 100%;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  background: rgb(255, 255, 255);
  height: 80px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    color: rgb(17, 21, 23);

    font-size: 24px;
    font-weight: 800;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: left;
    margin-left: 81px;
    margin-top: 23px;
  }

  &__theme {
    margin-right: 80px;
    margin-top: 29px;
    cursor: pointer;
    span {
      color: rgb(17, 21, 23);

      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0px;
      text-align: left;
      margin-left: 10.5px;
    }
  }
}
</style>
