<template>
  <div class="weather-wrapper">
    <ContentHeader />
    <!-- CitySelector에서 받은 이벤트를 사용할 수 있게 등록 
        @selectCity가 실행되면"selectCity"메서드 실행 -->
    <CitySelector @selectCity="selectCity" />
    <WeatherList :weatherList="weatherList" />
  </div>
</template>

<script>
import ContentHeader from "./ContentHeader";
import CitySelector from "./CitySelector";
import WeatherList from "./WeatherList";
import WeatherMixin from "@/mixins/weatherMixin";
export default {
  name: "weatherContent",
  components: {
    ContentHeader,
    CitySelector,
    WeatherList,
  },
  mixins: [WeatherMixin],
  data() {
    return {
      weatherList: [],
    };
  },
  methods: {
    async selectCity(city) {
      if (city.selected) {
        const weather = await this.getWeatherInfo(city);

        this.weatherList.push(weather);
      } else {
        const index = this.weatherList.findIndex(
          (weather) => weather.code === city.code
        );
        this.weatherList.splice(index, 1);
      }
      console.log(city, "parent received");
    },
  },
};
</script>

<style></style>
