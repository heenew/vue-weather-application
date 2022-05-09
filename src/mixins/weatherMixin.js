// node_modules 에 설치했기 때문에 경로를 적어주지 않아도 됨
import axios from "axios";

const weatherMixin = {
  data() {
    return {};
  },
  methods: {
    async getWeatherInfo(city) {
      const API_KEY = process.env.VUE_APP_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`;
      const res = await axios.get(url);
      const { main, wind, weather } = res.data;
      const weatherResult = {
        label: city.label,
        code: city.code,
        temperature: this.displayTemperature(main.temp),
        humidity: main.humidity,
        wind: wind.speed,
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
      };
      return weatherResult;
    },
    displayTemperature(temperature) {
      return (temperature - 273.15).toFixed(1);
    },
  },
};

// 이 mixin을 호출한 파일에서 사용할 수 있도록 export
export default weatherMixin;
