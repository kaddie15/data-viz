<template>
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
            <h1 class="text-3xl text-center font-bold">
                Our team
            </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <TeamMember name="Katerina Drakaki" photo="katerina.jpg" linked-in-link="https://www.linkedin.com/in/katerina-drakaki/"/>
           <TeamMember name="Eirini Kolimatsi" photo="eirini.jpg" linked-in-link="https://www.linkedin.com/in/eirini-kolimatsi/"/>
           <TeamMember name="Nikos Lavdakis" photo="nikos.jpg" linked-in-link="https://www.linkedin.com/in/nikolaos-lavdakis-317109164/"/>
        </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="pb-12">
            <h1 class="text-center text-3xl font-bold">
                Sources & Useful Links
            </h1>

            <ul>
                <li><a class="text-white" href="https://ai-jobs.net/salaries/form/">https://ai-jobs.net/salaries/form/</a></li>
                <li><a class="text-white" href="https://chartio.com/learn/data-analytics/distinguishing-data-roles/">https://chartio.com/learn/data-analytics/distinguishing-data-roles/</a></li>
                <li><a class="text-white" href="https://en.wikipedia.org/wiki/List_of_computer_occupations">https://en.wikipedia.org/wiki/List_of_computer_occupations</a></li>
                <li><a class="text-white" href="https://tailwindcss.com/docs/installation">https://tailwindcss.com/docs/installation</a></li>
                <li><a class="text-white" href="https://daisyui.com/docs/install/">https://daisyui.com/docs/install/</a></li>
            </ul>
        </div>
    </section>


</template>
<script setup>
import TeamMember from '@/components/TeamMember.vue';

</script>