<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script setup>
import { ref } from 'vue';


const chartOptions = ref({
    chart: {
        type: 'column'
    },
    title: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: ['AI & ML', 'Analytics', 'BI', 'Data Science', 'Research & Engineering'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Average Annual Salary (USD$)'
        }
    },
    tooltip: {
        valueSuffix: '$',
        valueThousandsSeparator: ','
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: '2020',
            data: [119116, 74391, 98000, 103475, 66584],
            color: '#b3cde3'
        },
        {
            name: '2021',
            data: [103320, 85724, 81646, 108006, 184000],
            color: '#8c96c6'
        },
        {
            name: '2022',
            data: [143095, 113519, 84650, 140786, 138426],
            color: '#8856a7'
        },
        {
            name: '2023',
            data: [183588, 120051, 141318,159195, 183847],
            color: '#810f7c'
        },
    ]
});
</script>