<template>
  <HeaderDisplay />
  <WeatherContent />
</template>

<script>
import HeaderDisplay from "./components/layouts/HeaderDisplay";
import WeatherContent from "./components/layouts/weather/WeatherContent";
export default {
  name: "App",
  components: {
    HeaderDisplay,
    WeatherContent,
  },
};
</script>

<style></style>
