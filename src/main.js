import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge'
import mapInit from 'highcharts/modules/map'
import addWorldMap from './js/worldmap'

mapInit(Highcharts)
addWorldMap(Highcharts)

HighchartsMore(Highcharts)
HighchartsSolidGauge(Highcharts)

createApp(App).use(router).use(HighchartsVue).mount('#app')
