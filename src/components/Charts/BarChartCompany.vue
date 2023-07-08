<template>
  <div class="text-black">   </div>
    <Bar :data="chartData" :options="options" id="bar" />
   
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
import {reactive} from 'vue'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


const chartData =  reactive( {
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
            backgroundColor: 'rgba(7, 225, 114, 0.4)',
            borderColor: 'rgba(7, 225, 114, 1)',
            borderWidth: 1,
        },
        {
            label: 'Medium Companies',
            data: [87416.456140, 111586.421900,153643.334069, 198857.284211],
            backgroundColor: 'rgba(87, 82, 198, 0.4)',
            borderColor: 'rgba(87, 82, 198, 1)',
            borderWidth: 1,
        },
        {
            label: 'Large Companies',
            data: [72896.810000, 89135.731343,156159.690821, 165363.153846],
            backgroundColor: 'rgba(44, 175, 204, 0.4)',
            borderColor: 'rgba(44, 175, 204, 1)',
            borderWidth: 1,
        },
    ]
}

)


const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    // round numbers in tooltips
    plugins: {
        tooltip: {
            callbacks: {
                label: function(context) {
                    var label = context.dataset.label || '';

                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.x !== null) {
                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.x);
                    }
                    return label;
                }
            }
        }
    },
    // Add a name for x axis
    scales: {
        x: {
            title: {
                display: true,
                text: 'Average Annual Salary (USD$)'
            }
        }
    },
    
}


</script>


<style>
#bar {
    height: 100%;
}
</style>
  
 