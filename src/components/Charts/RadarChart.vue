<template>
    <div class="flex justify-center flex-col mb-4">
        <div class="mb-2 flex flex-row justify-center">
            <div class="text-black">
                <!-- {{ data.datasets[0].data }} -->
                <label for="exp" class="text-sm my-2 pr-2">Experience:</label>
                <select id="exp" v-model="selectedExperience" @change="updateData"
                    class="border-0 w-1/6 px-3 my-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black">
                    <option v-for="exp in exps" :key="exp" :value="exp" class="text-black">
                        {{ exp }}
                    </option>
                </select>
            </div>
            <div class="text-black">
                <label for="continent" class="text-sm my-2 pr-2">Continent:</label>
                <select id="continent" v-model="selectedCont"
                    class="border-0 w-1/6 px-3 my-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black">
                    <option v-for="cont in continents" :key="cont" :value="cont" class="text-black">
                        {{ cont }}
                    </option>
                </select>
            </div>
            <div class="text-black">
                <label for="employment" class="text-sm my-2 pr-2">Employment type:</label>
                <select id="employment" v-model="selectedEmployment"
                    class="border-0 w-1/6 px-3 my-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black">
                    <option v-for="employmentType in employmentTypes" :key="employmentType" :value="employmentType"
                        class="text-black">
                        {{ employmentType }}
                    </option>
                </select>
            </div>
            <div class="text-black">
                <label for="remote" class="text-sm my-2 pr-2">Remote Status:</label>
                <select id="remote" v-model="selectedRemote"
                    class="border-0 w-1/6 px-3 my-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black">
                    <option v-for="remoteStatus in remoteStatuses" :key="remoteStatus" :value="remoteStatus"
                        class="text-black">
                        {{ remoteStatus }}
                    </option>
                </select>
            </div>
        </div>



    </div>
    <!-- <Radar :data="data" :options="options" ref="chart" /> -->
    <!-- <canvas id="marksChart" width="600" height="400"></canvas> -->
    <div class="flex justify-center  max-h-[650px]"><canvas ref="radarChart" width="600" height="400"></canvas></div>
</template>
  
<script setup>
import { ref, onMounted, watch } from 'vue';
// import {
//     Chart as ChartJS,
//     RadialLinearScale,
//     PointElement,
//     LineElement,
//     Filler,
//     Tooltip,
//     Legend
// } from 'chart.js'
import { Chart, registerables } from 'chart.js';
// import { Radar } from 'vue-chartjs'


const exps = ref(['Junior', 'Mid-Level', 'Senior', 'Executive']);
const selectedExperience = ref('Junior');

const remoteStatuses = ['In-Premises', 'Hybrid', 'Remote'];
const selectedRemote = ref('In-Premises');


const employmentTypes = ['Full Time', 'Part Time', 'Contract', 'Freelance']
const selectedEmployment = ref('Full Time');

const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
const selectedCont = ref('Africa');

// ChartJS.register(
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend
// )
const chartData = ref([
    {
        label: 'Dataset 1',
        data: [4, 6, 3, 5, 7],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
    },
    // {
    //   label: 'Dataset 2',
    //   data: [7, 3, 6, 4, 5],
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //   borderColor: 'rgba(255, 99, 132, 1)',
    //   borderWidth: 1,
    // },
])

let chartInstance = null;
const radarChart = ref(null);

onMounted(() => {
    Chart.register(...registerables);
    const ctx = radarChart.value.getContext('2d');

    chartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Data Architect',
                'Data Analyst',
                'Data',
                'Computer Vision Engineer',
                'Autonomous Vehicle Technician',
                'AI Developer',
                'Researcher',
                'NLP Engineer',
                'Machine Learning Engineer',
                'Deep Learning Engineer',
                'Database Engineer',
                'Data Strategist',
                'Data Scientist',
                'Data Quality Analyst',
                'Data Operations Engineer',
                'Data Modeler',
                'Data Management',
                'Data Infrastracture Engineer',
                'Data Engineer',],
            datasets: [
                {
                    label: 'Salary',
                    data: [4, 6, 3, 5, 7],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                },
            },
        },
    });
});


watch(
    () => [selectedExperience.value, selectedRemote.value, selectedEmployment.value, selectedCont.value],
    () => {
        updateData();
    }
);




function updateData() {
    console.log("updates", chartData.value.data)
    // data.datasets[0].data=[6, 9, 0, 1, 6, 5, 40]
    chartData.value.data = [6, 9, 0, 1, 6]
    if (selectedExperience.value == 'Senior') {
        chartData.value.data = [2, 16, 13, 15, 17]
    }
    if (chartInstance) {
        chartInstance.data.datasets[0].data = [6, 9, 0, 1, 6];
        chartInstance.update();
    }
}







</script>