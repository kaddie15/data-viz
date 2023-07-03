<template>
    <Pie :data="data" :options="options" />
  </template>
  
  <script setup>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  const data = {
    labels: ['Senior-level/Expert', 'Mid-level/Intermediate', 'Entry-level/Junior', 'Executive-level/Director'],
    datasets: [
      {
        backgroundColor: ["#389466", "#276854", "#94388b", "#682761"],
        data: [2516, 805, 320, 114]
      }
    ]
  }
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20, // Adjust the padding within the legend
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const meta = chart.getDatasetMeta(0);
                const ds = data.datasets[0];
                const value = ds.data[i];
                const percentage = ((value / ds.data.reduce((a, b) => a + b, 0)) * 100).toFixed(2) + "%";
                return {
                  text: label + " (" + percentage + ")",
                  fillStyle: ds.backgroundColor[i],
                  hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                  index: i
                };
              });
            }
            return [];
          }
        }
      }
    },
    layout: {
    padding: {
      top: 20,
      bottom: 20
    }
  }
  }
  </script>
  