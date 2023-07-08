<template>
    <highcharts :options="chartOptions" />
  </template>


<script setup>
import { ref, computed } from 'vue';
import {bubbleData} from '@/js/bubbledata'
const selectedJob = ref('Data Analyst')
  const computedBubbleData = computed(() => {
    if(selectedJob.value){
      console.log(bubbleData.filter(x => x.data.some(job => job.name == selectedJob.value) ))
      return bubbleData.filter(x => x.data.some(job => job.name == selectedJob.value) )
    }
    
    return bubbleData

  });
const chartOptions = ref({
  chart: {
    type: 'packedbubble',
    height: '600px',
  },
  title: {
    text: '',
  },
  series: computedBubbleData,
  plotOptions: {
    packedbubble: {
      minSize: '60%',
      maxSize: '150%',
      // zMin: 0,
      // zMax: 1000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02,
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        filter: {
          property: 'y',
          operator: '>',
          value: 250,
        },
        style: {
          color: 'black',
          textOutline: 'none',
          fontWeight: 'normal',
        },
      },
    },
  },
  tooltip: {
    useHTML: true,
    pointFormat: '<b>{point.name}:</b> {point.value:,.2f}$',
  },
});


</script>
   <style scoped>
  .map {
    max-height: 700px;
  }
   </style>