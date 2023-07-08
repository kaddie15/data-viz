<template>
    <div class="m-4 flex justify-end"><button class=" btn btn-primary btn-sm btn:hover:bg-violet-600 " @click="updateChartData">Switch to {{ nextMode }}</button> </div>
    <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map" ref="mapChart"></highcharts>
</template>
  
<script setup>
import { reactive, ref, defineEmits, computed } from 'vue'
// Salary , Remote Ratio
const mode = ref('Salary');
const nextMode = computed(() => {return mode.value === 'Remote Ratio' ? 'Salary' : 'Remote Ratio'});
const emit = defineEmits(['changeTitle']);
const salarydata =  [
            ['dz', 100000.0],
            ['as', 34026.5],
            ['ad', 50745.0],
            ['ar', 62000.0],
            ['am', 50000.0],
            ['au', 133035.04347826086],
            ['at', 71354.83333333333],
            ['bs', 45555.0],
            ['be', 76864.75],
            ['ba', 120000.0],
            ['br', 50925.583333333336],
            ['ca', 137118.19827586206],
            ['cf', 49216.0],
            ['cl', 40038.0],
            ['cn', 100000.0],
            ['co', 66784.4],
            ['hr', 76726.0],
            ['cz', 50234.0],
            ['dk', 45558.0],
            ['ec', 16000.0],
            ['eg', 22800.0],
            ['ee', 49069.75],
            ['fi', 68519.33333333333],
            ['fr', 77788.67441860466],
            ['de', 92767.8],
            ['gh', 33000.0],
            ['gr', 54786.0],
            ['hn', 20000.0],
            ['hk', 65058.0],
            ['hu', 26709.5],
            ['in', 32500.581395348836],
            ['id', 34208.0],
            ['ir', 100000.0],
            ['iq', 100000.0],
            ['ie', 115188.28571428571],
            ['il', 217332.0],
            ['it', 49701.166666666664],
            ['jp', 110821.625],
            ['ke', 80000.0],
            ['lv', 58302.5],
            ['lt', 94812.0],
            ['lu', 60914.0],
            ['my', 40000.0],
            ['mt', 28369.0],
            ['mx', 94864.63636363637],
            ['md', 18000.0],
            ['nl', 75470.07142857143],
            ['nz', 125000.0],
            ['ng', 65750.0],
            ['no', 88462.0],
            ['pk', 30000.0],
            ['ph', 32840.0],
            ['pl', 58879.833333333336],
            ['pt', 47463.375],
            ['pr', 167500.0],
            ['ro', 56992.0],
            ['ru', 119500.0],
            ['sa', 134999.0],
            ['sg', 62783.0],
            ['si', 62956.0],
            ['za', 34482.0],
            ['es', 57178.83516483517],
            ['se', 105000.0],
            ['ch', 101659.4],
            ['th', 22971.333333333332],
            ['tr', 22313.6],
            ['ua', 72666.66666666667],
            ['ae', 100000.0],
            ['gb', 105681.69204152249],
            ['us', 157624.28100940975]
        ];

const remoteData = [['dz', 50.0],
['as', 100.0],
['ad', 50.0],
['ar', 100.0],
['am', 0.0],
['au', 45.65217391304348],
['at', 33.333333333333336],
['bs', 50.0],
['be', 75.0],
['ba', 50.0],
['br', 87.5],
['ca', 56.03448275862069],
['cf', 100.0],
['cl', 100.0],
['cn', 0.0],
['co', 75.0],
['hr', 33.333333333333336],
['cz', 75.0],
['dk', 62.5],
['ec', 100.0],
['eg', 100.0],
['ee', 37.5],
['fi', 50.0],
['fr', 60.46511627906977],
['de', 57.69230769230769],
['gh', 0.0],
['gr', 80.76923076923077],
['hn', 0.0],
['hk', 0.0],
['hu', 75.0],
['in', 68.6046511627907],
['id', 50.0],
['ir', 100.0],
['iq', 50.0],
['ie', 42.857142857142854],
['il', 66.66666666666667],
['it', 58.333333333333336],
['jp', 50.0],
['ke', 100.0],
['lv', 0.0],
['lt', 0.0],
['lu', 75.0],
['my', 100.0],
['mt', 50.0],
['mx', 90.9090909090909],
['md', 0.0],
['nl', 53.57142857142857],
['nz', 50.0],
['ng', 68.75],
['no', 50.0],
['pk', 50.0],
['ph', 75.0],
['pl', 100.0],
['pt', 43.75],
['pr', 100.0],
['ro', 50.0],
['ru', 37.5],
['sa', 100.0],
['sg', 60.0],
['si', 87.5],
['za', 50.0],
['es', 32.967032967032964],
['se', 75.0],
['ch', 60.0],
['th', 66.66666666666667],
['tr', 80.0],
['ua', 16.666666666666668],
['ae', 66.66666666666667],
['gb', 36.67820069204152],
['us', 41.08212147134303]
]
// const currentData = ref(salarydata)
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
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
        allAreas: true,
        data: salarydata
    }],
    tooltip: {
        valueThousandsSeparator: ',',
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value:.2f}$',
  }
});



function updateChartData() {

    if(mode.value === 'Remote Ratio'){
        mode.value = 'Salary'
        mapOptions.series[0].data = salarydata;

    }
    else if (mode.value === 'Salary') {
        mode.value = 'Remote Ratio'
        mapOptions.series[0].data = remoteData
        mapOptions.tooltip.pointFormat = '<b>{point.name}:</b> {point.value:.1f}%'
    }
    emit('changeTitle', mode.value);
    

}

</script>
<style scoped lang="scss">
.map {
    max-height: 700px;
}


.btn:hover {
    background-color: blue;
}
</style>