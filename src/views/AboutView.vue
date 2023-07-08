<template>
  <div class="overflow-x-auto w-5/6 m-auto">
      <h1 class="text-xl mb-4 font-bold">Overview</h1>
      <p class="text-lg mb-4">
          This data visualization project aims to support tech university graduates and professionals in their quest
          for suitable career paths by harnessing valuable insights. The project presents a range of visualizations
          designed to guide users toward optimal career choices. These insights empower users to make well-informed
          decisions and investments in career advancement. To accomplish this, the project offers seven distinct
          visualizations, complete with interactive features to enhance user experience. In summary, this data
          visualization endeavor equips graduates with invaluable insights into the data industry job market, enabling
          them to make informed decisions and select the most fitting career paths based on factors such as popularity,
          salaries, geographical locations, and experience levels.
      </p>

      <br>
      <br>

      <div class="flex flex-wrap justify-between ">
          <div class="w-full xl:w-7/12 mb-3 pr-6">
            <div class="flex">
              <h1 class="text-xl mb-4 self-center font-bold">The Data</h1>
            </div>
              <p class="text-lg mb-4">
                  The dataset utilized for this project is obtained from ai-jobs.net and encompasses approximately 5,500 rows
                  of information. It includes details about experience levels, employment types, job titles, salaries,
                  locations, remote statuses, and company sizes.
                  Prior to visualizing the data, the dataset underwent rigorous data cleaning procedures to ensure accuracy and
                  consistency. This involved removing duplicates, handling missing values, and resolving inconsistencies in the
                  data. Additionally, job titles were categorized and standardized to facilitate meaningful insights and
                  comparisons across different roles in the data industry job market.
              </p>

          </div>
          <div class="w-full xl:w-5/12 mb-3 pl-2 self-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/B5WA_JoRb9c" frameborder="0" allowfullscreen></iframe>
          </div>
      </div>

      <br>
      <br>

    <h1 class="text-xl mb-4 font-bold">Found a role you are interested in? Find out more!</h1>
    <table class="table text-lg">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Data Specialism</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>AI Developer</td>
          <td>An AI developer specializes in developing artificial intelligence systems and applications.</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Analytics Engineer</td>
          <td>An analytics engineer combines data engineering and data science skills to develop analytics solutions.</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Autonomous Vehicle Technician</td>
          <td>An autonomous vehicle technician is involved in maintaining and troubleshooting autonomous vehicles.</td>
        </tr>
        <tr>
          <th>4</th>
          <td>BI Analyst</td>
          <td>A BI analyst focuses on analyzing business data to identify trends, patterns, and insights.</td>
        </tr>
        <tr>
          <th>5</th>
          <td>BI Engineer</td>
          <td>A business intelligence (BI) engineer is responsible for designing and developing BI systems and tools.</td>
        </tr>
        <tr>
          <th>6</th>
          <td>Cloud Database Engineer</td>
          <td>A cloud database engineer specializes in designing, implementing, and managing database systems in the cloud.</td>
        </tr>
        <tr>
          <th>7</th>
          <td>Data Analyst</td>
          <td>A data analyst primarily focuses on analyzing data, creating reports, and providing insights to support decision-making.</td>
        </tr>
        <tr>
          <th>8</th>
          <td>Data Architect</td>
          <td>A data architect designs the structure, organization, and integration of data systems within an organization.</td>
        </tr>
        <tr>
          <th>9</th>
          <td>Data Engineer</td>
          <td>A data engineer focuses on designing, building, and maintaining the infrastructure necessary for data storage, processing, and analysis.</td>
        </tr>
        <tr>
          <th>10</th>
          <td>Data Integration Specialist</td>
          <td>A data integration specialist focuses on integrating data from various sources and systems.</td>
        </tr>
        <tr>
          <th>11</th>
          <td>Data Management</td>
          <td>Data management professionals are responsible for overseeing and ensuring the proper handling, storage, and security of data within an organization.</td>
        </tr>
        <tr>
          <th>12</th>
          <td>Data Modeler</td>
          <td>A data modeler designs and structures data models that define how data is organized and stored within databases or data systems.</td>
        </tr>
        <tr>
          <th>13</th>
          <td>Data Operations Engineer</td>
          <td>A data operations engineer is responsible for managing and optimizing data infrastructure and systems.</td>
        </tr>
        <tr>
          <th>14</th>
          <td>Data Quality Engineer</td>
          <td>A data quality engineer focuses on ensuring the accuracy, completeness, and consistency of data.</td>
        </tr>
        <tr>
          <th>15</th>
          <td>Data Scientist</td>
          <td>Data scientists apply statistical analysis and machine learning techniques to extract insights from data and solve complex problems.</td>
        </tr>
        <tr>
          <th>16</th>
          <td>Data Specialist</td>
          <td>A data specialist typically focuses on a specific domain or area within data management.</td>
        </tr>
        <tr>
          <th>17</th>
          <td>Data Strategist</td>
          <td>A data strategist is responsible for developing and implementing strategies to leverage data effectively within an organization.</td>
        </tr>
        <tr>
          <th>18</th>
          <td>Decision Scientist</td>
          <td>A decision scientist applies advanced analytics and mathematical models to support strategic decision-making.</td>
        </tr>
        <tr>
          <th>19</th>
          <td>Machine Learning Engineer</td>
          <td>A machine learning engineer specializes in designing and implementing machine learning algorithms and models.</td>
        </tr>
        <tr>
          <th>20</th>
          <td>Research Engineer</td>
          <td>A research engineer focuses on applying research and theoretical knowledge to develop new technologies, algorithms, or models.</td>
        </tr>
      </tbody>
    </table>
    <div class="text-right text-xs px-6">Source:  <a class="text-yellow-500" href="https://en.wikipedia.org/wiki/List_of_computer_occupations">Wikipedia</a></div>
  </div>

</template>
<script setup>
</script>