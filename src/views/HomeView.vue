<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full p-5">
        <h1 class="text-3xl text-center">The Data Science Journey Roadmap: Salaries, Insights</h1>
      </div>
 
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Position Popularity" height="h-[400px]" ><BarChart></BarChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Salaries on each Position depending on Company’s size" subtitle="Which are the optimal salary positions across various company sizes?
">    <PackedBubbleChart></PackedBubbleChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card :title="mapTitle" :subtitle="mapSubtitle">    <MapChart @change-title="updateMapTitle"></MapChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Salary Trending Yearly per Job Title" subtitle="How does salary change over the years for each position?"> <GroupBar></GroupBar></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Experience Contribution on Salary" subtitle="How much is the experience paid in each level depending on company size?
" height="h-[600px]"><BarChartCompany></BarChartCompany></Card>
      </div>
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 p-4">
        <Card title="Experience in Work Force" subtitle="How is the work force’s experience distributed?
"><PieChart></PieChart></Card>
      </div>

      <div class="w-full xl:w-12/12 p-4">
        <Card title="Average Salary Investigation for each Position" subtitle="How can position seniority, geography, and on-site presence affect the salary of each position?"> <RadarChart></RadarChart></Card>
      </div>
<!-- 
      <div class="w-full xl:w-12/12 p-4">
        <Card title="♀ Female Workforce in Tech" subtitle="What's the female presence in each country's digital realm?"> <MapChartSingle></MapChartSingle></Card>
      </div> -->

      

  
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
// import MapChartSingle from '@/components/Charts/MapChartSingle.vue'


const mapTitle = ref('Avg Salary (USD$) around the world') ;
const mapSubtitle = ref('Which countries pay more?');
function updateMapTitle(e){
  console.log(e)
  if ( e == 'Remote Ratio'){
    mapTitle.value  = 'Remote Working Geographically'
    mapSubtitle.value = 'Which countries offer better flexibility on hybrid and remote work?'
  }
  else {
    mapTitle.value = 'Avg Salary (USD$) around the world'
    mapSubtitle.value = 'Which countries pay more?'
  }
}
</script>
