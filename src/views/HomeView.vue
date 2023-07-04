<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full p-5">
        <h1 class="text-3xl text-center">The Data Science Journey Roadmap: Salaries, Insights</h1>
      </div>
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 p-4">
        <Card title="Experience in Work Force"><PieChart></PieChart></Card>
      </div>
      <div class="w-full xl:w-6/12 p-4">
        <Card title="Position Popularity" height="h-[400px]" ><BarChart></BarChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Experience Contribution on Salary" height="h-[600px]"><BarChartCompany></BarChartCompany></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card :title="mapTitle">    <MapChart @change-title="updateMapTitle"></MapChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Salaries on each Position depending on Company’s size">    <PackedBubbleChart></PackedBubbleChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Average Salary Investigation for each Position"> <RadarChart></RadarChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Salary Trending Yearly per Job Title" subtitle="How does salary change over the years for each position?"> <GroupBar></GroupBar></Card>
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
import GroupBar from '@/components/Charts/GroupBar.vue'


const mapTitle = ref('Avg Salary (USD$) around the world') ;
function updateMapTitle(e){
  console.log(e)
  if ( e == 'Remote Ratio'){
    mapTitle.value  = 'Remote Working Geographically'
  }
  else {
    mapTitle.value = 'Avg Salary (USD$) around the world'
  }
}
</script>
