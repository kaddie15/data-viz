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

    <ul>
        <li>link1</li>
        <li>link1</li>
        <li>link1</li>
        <li>link1</li>
        <li>link1</li>
    </ul>

</template>
<script setup>
import TeamMember from '@/components/TeamMember.vue';

</script>