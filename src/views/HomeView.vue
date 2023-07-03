<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full p-5">
        <h1 class="text-3xl text-center">The Data Science Journey Roadmap: Salaries, Insights & Layoffs</h1>
      </div>
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 p-4">
        <Card title="Experience Level Distribution"><PieChart></PieChart></Card>
      </div>
      <div class="w-full xl:w-6/12 p-4">
        <Card title="Top 12 Most Popular Job Titles"><BarChart></BarChart></Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card title="Avg Salary (USD$) per Experience Level and Company Size"><BarChartCompany></BarChartCompany></Card>
      </div>
    </div>


  </div>
</template>

<script setup>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import PieChart from '@/components/Charts/PieChart.vue'
import BarChart from '@/components/Charts/BarChart.vue'
import BarChartCompany from '@/components/Charts/BarChartCompany.vue'

</script>
