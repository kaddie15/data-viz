<template>
    <Bar :data="data" :options="options" id="bar" />
</template>
  
<script setup>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)




const data = {
    labels: [
        'Data Engineer',
        'Data Scientist',
        'Data Analyst',
        'Machine Learning Engineer',
        'Analytics Engineer',
        'Data Architect',
        'Research Scientist',
        'Data Science Manager',
        'Applied Scientist',
        'Research Engineer',
        'Data Manager',
        'Machine Learning Scientist',    
    ],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: ['#00876c', '#3c986d', '#60a86d', '#84b76e', '#a8c671', '#cdd476', '#f4e07f', '#f4c76a', '#f3ad5a', '#ef9250', '#e9774c', '#e05b4d', '#d43d51'],
            data: [1040, 840, 612, 323, 103, 101, 82, 58, 58, 37,
                29, 24]
        },
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
        legend: {
            display: false
        }
    }
}

</script>


<style>
#bar {
    height: 100%;
}
</style>
  
 