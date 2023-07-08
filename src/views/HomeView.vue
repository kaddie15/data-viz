<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full p-5">
        <h1 class="text-3xl text-center">The Data Science Journey Roadmap: Salaries & Insights</h1>
      </div>
      <div class="w-full xl:w-5/12 p-4">
        <h1 class="text-xl mb-4">Data Science Positions Popularity </h1>
        <p>The chart displays the top 12 positions in terms of popularity within the data industry and provides a
          valuable overview of the most sought-after roles. <br> <br> It is worth noting that data-oriented positions, such as
          Data
          Engineer, Data Scientist, and Data Analyst, are the most prevalent. Following closely are machine
          learning-oriented positions. <br> <br>
          It is important to mention that Machine Learning is often encompassed within the job responsibilities of a Data
          Scientist.</p>

      </div>
      <div class="w-full xl:w-7/12 p-4">
        <Card height="h-[400px]">
          <BarChart></BarChart>
        </Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <div class="flex">
          <h1 class="text-xl self-center">Salaries per Position depending on Company’s size </h1>
          <div class="dropdown dropdown-hover bg-[#27293d] mt-1">
            <label tabindex="0" class="btn rounded-full max-w-5 bg-transparent border-0"><svg fill="#ffffff" version="1.1"
                id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px"
                height="16px" viewBox="0 0 416.979 416.979" xml:space="preserve" stroke="#ffffff">

                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z" />
                  </g>
                </g>

              </svg></label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-white text-[#27293d] w-52">
              <li>Users can select or deselect specific company sizes by clicking on the corresponding labels at the
                bottom of the chart. </li>
            </ul>
          </div>
        </div>
        The bubble chart presents a comprehensive view of salary ranges for various positions within the industry.
        <br>
        <br>
        This visualization enables users to identify the most lucrative positions. To facilitate informed decision-making,
        the chart incorporates company size as a dimension, as it impacts salary ranges for identical job titles.
        <br>
        <br>
        Noteworthy findings include the highest-paid positions, such as Principal Data Scientist in small companies with
        an annual income of $416,000 or Data Analysis Lead with a yearly salary of $405,000.
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card>
          <PackedBubbleChart></PackedBubbleChart>
        </Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <div class="flex">
          <h1 class="text-xl self-center">{{ mapTitle }} </h1>
          <div class="dropdown dropdown-hover bg-[#27293d] mt-1">
            <label tabindex="0" class="btn rounded-full max-w-5 bg-transparent border-0"><svg fill="#ffffff" version="1.1"
                id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px"
                height="16px" viewBox="0 0 416.979 416.979" xml:space="preserve" stroke="#ffffff">

                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z" />
                  </g>
                </g>

              </svg></label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-white text-[#27293d] w-52">
              <li>By using the "Switch" button in the upper right corner, the users can switch between average annual
                salary and remote ratio data.
                The zoom in/out feature allows users to focus on specific areas of interest.
              </li>
            </ul>
          </div>
        </div>
        <br>
        The choropleth map provides a geographical perspective on salaries, coupled with the availability of remote work
        options. These two factors are often correlated for individuals seeking higher salaries in other countries.
        <br>
        <br>
        Users can explore different countries that offer optimal combinations of salary and remote/on-site work, aligning
        with their preferences.
        <br>
        <br>
        Delving into the data, there are some cases worth highlighting. Saudi Arabia offers a favorable combination of
        high salaries ($139,000 annually) and 100% remote work for IT professionals. <br> <br> On the other hand, the USA
        provides
        higher salaries (approximately $157,624 yearly), but with a lower remote work ratio (41%), suggesting that
        individuals within this salary range might need to consider relocating. For those already residing in the USA, it
        indicates that they are in one of the highest-paying countries for IT professionals globally.

      </div>
      <div class="w-full xl:w-12/12 p-4">
        <Card>
          <MapChart @change-title="updateMapTitle"></MapChart>
        </Card>
      </div>
      <div class="w-full xl:w-5/12 p-4">
        <div class="flex">
          <h1 class="text-xl self-center">Salary Trending Yearly per Job Title </h1>
          <div class="dropdown dropdown-hover bg-[#27293d] mt-1">
            <label tabindex="0" class="btn rounded-full max-w-5 bg-transparent border-0"><svg fill="#ffffff" version="1.1"
                id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px"
                height="16px" viewBox="0 0 416.979 416.979" xml:space="preserve" stroke="#ffffff">

                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z" />
                  </g>
                </g>

              </svg></label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-white text-[#27293d] w-52">
              <li>Users can exclude specific years of interest by clicking on the corresponding labels at the bottom,
                allowing for an in-depth examination of salary trends within specific time periods and sectors.
              </li>
            </ul>
          </div>
        </div>
        <p class="pt-6">
          The bar plot offers insights into salary trends across different job categories over time. Understanding salary
          trends per sector is crucial for selecting a career path that either demonstrates potential for improvement or,
          in
          the case of negative trends, signals the need for a career change.
          <br>
          <br>
          In this example, the majority of sectors show increasing salary trends over the years, instilling optimism in
          candidates pursuing an IT career, particularly in AI/ML and Research & Engineering sectors. These sectors have
          experienced the highest salary growth between 2020 and 2023, amounting to $64,000 and $117,000 respectively.
        </p>
      </div>
      <div class="w-full xl:w-7/12 p-4">
        <Card>
          <GroupBar></GroupBar>
        </Card>
      </div>
      <div class="w-full xl:w-5/12 p-4">
        <div class="flex">
          <h1 class="text-xl self-center">Experience Contribution on Salary </h1>
        </div>
        <p class="pt-6">
          The bar plot provides an overview of salaries based on experience levels in the IT industry, considering the
          company size in which individuals work. This valuable insight offers users a glimpse into the future of their
          data careers, particularly when making long-term choices and investments in career advancement.
          <br>
          <br>
          As expected, salaries increase with experience levels from entry to director positions, with a minor exception
          for entry and mid-level positions in small companies.
          <br>
          <br>
          Another noteworthy finding is that the highest salaries
          are typically offered for executive-level or director roles in medium and small companies, amounting to $198,000
          and $196,000 annually, respectively.
        </p>
      </div>
      <div class="w-full xl:w-7/12 p-4">
        <Card height="h-[600px]">
          <BarChartCompany></BarChartCompany>
        </Card>
      </div>
      <div class="w-full xl:w-12/12 p-4">
        <div class="flex">
          <h1 class="text-xl self-center">Experience in WorkForce</h1>
        </div>
        <p class="pt-6">
          The doughnut plot presents the distribution of experience levels across data related positions. This insight
          helps users understand the competitiveness and challenges associated with reaching the salaries highlighted in
          the previous plot, "Experience Contribution on Salary."
          <br>
          <br>
          The plot reveals that 67% of jobs fall within the senior-level category, indicating that achieving a
          senior-level position becomes a crucial milestone for attaining optimal salaries.


        </p>
      </div>
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 p-4">
        <Card>
          <PieChart></PieChart>
        </Card>
      </div>
      <div class="w-full xl:w-5/12 p-4">
        <div class="flex">
          <h1 class="text-xl self-center">Average Salary Investigation for each Position</h1>
        </div>
        <p class="pt-10">
          The radar chart empowers users to explore optimal position salaries based on multiple personalized criteria
          including experience level, location, employment and remote status.
          <br>
          <br>
          Users can tailor the criteria to their specific needs, such as junior-level experience, location in Europe,
          full-time employment, and a hybrid working mode. Based on these preferences, the radar chart suggests that AI
          Developers would be the optimal option, with an average salary of $100,000 per year.
          <br>
          <br>
          When considering senior positions in Europe, Analytics Engineers emerge as the job role with tremendous
          potential for high salaries, irrespective of the remote work option. Nevertheless, this scenario does not hold
          true globally. In the Americas, for instance, Senior AI Developers command the highest salaries, making the
          geographical location of companies a pivotal factor in choosing a specialization to pursue.
        </p>
      </div>
      <div class="w-full xl:w-7/12 p-4">
        <Card>
          <RadarChart></RadarChart>
        </Card>
      </div>




    </div>


  </div>
</template>

<script setup>
// @ is an alias to /src
import { ref } from 'vue'
import Card from '@/components/Card.vue'
import PieChart from '@/components/Charts/PieChart.vue'
import BarChart from '@/components/Charts/BarChart.vue'
import BarChartCompany from '@/components/Charts/BarChartCompany.vue'
import PackedBubbleChart from '@/components/Charts/PackedBubbleChart.vue'
import RadarChart from '@/components/Charts/RadarChart.vue'
import MapChart from '@/components/Charts/MapChart.vue'
import GroupBar from '@/components/Charts/GroupBar.vue'


const mapTitle = ref('Average Annual Salary (USD$) around the world');
function updateMapTitle(e) {
  console.log(e)
  if (e == 'Remote Ratio') {
    mapTitle.value = 'Remote Ratio Around the World'
  }
  else {
    mapTitle.value = 'Average Annual Salary (USD$) around the world'
  }
}
</script>
