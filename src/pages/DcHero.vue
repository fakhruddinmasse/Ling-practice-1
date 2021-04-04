<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heroes {{heroesCount}} </h1>
    <ul>
      <li class="flex justify-between" v-for="(hero,index) in dcHeros " :key="hero.name"> 
        <div> {{hero.name}} </div>
        <button @click="remove(index)"> x </button> 
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input class="border rounded" v-model="newHero" placeholder="Type here" ref="newHeroRef">
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="sumbit" >Add hero</button>
    </form>
    </div>
</template>

<script>
import {onMounted, ref, computed} from 'vue';
export default {
  setup(){
    const newHeroRef= ref ("");
    const newHero = ref(""); 
    const dcHeros= ref ([
      {name:"Superman"}, 
      {name:"Batman"}, 
      {name:"Wakanda"}, 
      {name:"Ironman"},
    ]);

    const heroesCount = computed ({
          get: ()=> dcHeros.value.length,
        });

    onMounted(()=>{
      newHeroRef.value.focus();
    });

    

    function remove(index){
      dcHeros.value = dcHeros.value.filter((hero,i)=>i!=index);
    }

    function addHero(){
      if(newHero.value!='')
      {dcHeros.value.unshift({name:newHero.value});
      newHero.value=""}
      else {
        alert("type something")
      }
    }

    return {dcHeros, newHero, remove, addHero, newHeroRef, heroesCount};
  },
}
</script>

<style>

</style>