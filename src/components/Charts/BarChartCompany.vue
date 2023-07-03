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
        'Entry-level/Junior',
        'Mid-level/Intermediate',
        'Senior-level/Expert',
        'Executive-level/Director',
    ],
    datasets: [
        {
            label: 'Small Companies',
            data: [59120.734694,58080.500000, 106875.465116,196827.166667],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
        {
            label: 'Medium Companies',
            data: [87416.456140, 111586.421900,153643.334069, 198857.284211],
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1,
        },
        {
            label: 'Large Companies',
            data: [72896.810000, 89135.731343,156159.690821, 165363.153846],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    
}

</script>


<style>
#bar {
    height: 100%;
}
</style>
  
 