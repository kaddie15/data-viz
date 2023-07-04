<template>
    <!-- <Pie :data="data" :options="options" /> -->
    <highcharts :options="chartOptions"></highcharts>
  </template>
  
  <!-- <script setup>
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
  </script> -->
  <script setup>
import { ref } from 'vue';


const chartOptions = ref({
  chart: {
    type: 'pie',
  },
  title: {
    text: '',
  },
  plotOptions: {
    pie: {
      innerSize: '60%',
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.2f}%',
      //   format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
      //       style: {
      //           fontWeight: 'normal'
      //       }
      },
    },
  },  tooltip: {
    formatter: function () {
      return `<b>${this.point.name}</b>: ${this.percentage.toFixed(2)}%`;
    },
  },
  series: [
    {
      name: 'Data',
      colorByPoint: true,
      data: [
        {
          name: 'Senior-level/Expert',
          y: 2516,
          color: '#389466'
        },
        {
          name: 'Mid-level/Intermediate',
          y: 805,
          color: '#276854'
        },
        {
          name: 'Entry-level/Junior',
          y: 320,
          color: '#94388b'
        },
        {
          name: 'Executive-level/Director',
          y: 114,
          color: '#682761'
        },
      ],
    },
  ],
});
</script>