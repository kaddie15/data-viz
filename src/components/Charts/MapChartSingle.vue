<template>
    <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map" ref="mapChart"></highcharts>
</template>
  
<script setup>
import { reactive} from 'vue'
// Salary , Remote Ratio
const femaledata = [['un', 22.1],
 ['ca', 14.3],
 ['un', 13.1],
 ['bu', 25.0],
 ['fr', 0.0],
 ['po', 0.0],
 ['ne', 9.5],
 ['sw', 0.0],
 ['po', 14.3],
 ['au', 12.5],
 ['ge', 2.9],
 ['ru', 0.0],
 ['me', 0.0],
 ['br', 0.0],
 ['sl', 0.0],
 ['co', 0.0],
 ['au', 0.0],
 ['ir', 11.5],
 ['in', 12.5],
 ['so', 25.0],
 ['it', 0.0],
 ['sw', 28.6],
 ['co', 0.0],
 ['la', 0.0],
 ['ne', 20.0],
 ['sp', 100.0],
 ['fi', 0.0],
 ['is', 25.0],
 ['bo', 0.0],
 ['hu', 100.0],
 ['si', 0.0],
 ['ja', 0.0],
 ['ni', 0.0],
 ['cr', 0.0],
 ['be', 33.3],
 ['th', 0.0],
 ['de', 0.0],
 ['gr', 0.0],
 ['mo', 0.0],
 ['cz', 0.0],
 ['ph', 0.0]]

const mapOptions = reactive({
    chart: {
        map: 'myMapName'
    },
    title: {
        text: ''
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            alignTo: 'spacingBox'
        }
    },
    colorAxis: {
        min: 0
    },
    series: [{
        name: '',
        borderColor: 'black',
        borderWidth: 0.2,
        states: {
            hover: {
                color: '#c994c7'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
        allAreas: true,
        data: femaledata
    }]
});





</script>
<style scoped>
.map {
    max-height: 700px;
}
</style>