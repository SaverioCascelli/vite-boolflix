<script>
import sectionsMain from './sectionsMain.vue';
import { store } from '../data/store';
export default {
    name: 'AppMain',
    components:{
        sectionsMain,
    },
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <main>
        <sectionsMain
        v-for="(element, index) in store.apiArr"
        v-show="element.resultsArr.results.length > 0"
        :key="index"
        :typeTitle="element.type"
        :resultsArr="element.resultsArr"
        />
    </main>
  
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;


</style>