<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full p-5">
        <h1 class="text-3xl text-center">The Data Science Journey Roadmap: Salaries, Insights</h1>
      </div>
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 p-4">
        <Card title="Experience Level Distribution"><PieChart></PieChart></Card>
      </div>
      <div class="w-full xl:w-6/12 p-4">
        <Card title="Top 12 Most Popular Job Titles" height="h-[400px]" ><BarChart></BarChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Avg Salary (USD$) per Experience Level and Company Size" height="h-[600px]"><BarChartCompany></BarChartCompany></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card :title="mapTitle">    <MapChart @change-title="updateMapTitle"></MapChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Avg Salary (USD$) per Job Title and Company Size">    <PackedBubbleChart></PackedBubbleChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Data Science Salaries"> <RadarChart></RadarChart></Card>
      </div>

      

  
    </div>


  </div>
</template>

<script setup>
// @ is an alias to /src
import {ref} from 'vue'
import Card from '@/components/Card.vue'
import PieChart from '@/components/Charts/PieChart.vue'
import BarChart from '@/components/Charts/BarChart.vue'
import BarChartCompany from '@/components/Charts/BarChartCompany.vue'
import PackedBubbleChart from '@/components/Charts/PackedBubbleChart.vue'
import RadarChart from '@/components/Charts/RadarChart.vue'
import MapChart from '@/components/Charts/MapChart.vue'


const mapTitle = ref('Avg Salary (USD$) around the world') ;
function updateMapTitle(e){
  console.log(e)
  if ( e == 'Remote Ratio'){
    mapTitle.value  = 'Remote work ration around the world'
  }
  else {
    mapTitle.value = 'Avg Salary (USD$) around the world'
  }
}
</script>
