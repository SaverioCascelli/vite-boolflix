<script>
import { store } from '../data/store';
import convertInLenguage from '../mixin/convertInLenguage'
export default {
    name: 'AppMain',
    data(){
        return{
            store,
        }
    },
    mixins:[convertInLenguage]
}
</script>

<template>
    <main>
        <h2>film</h2>
        <div v-for="(element) in store.apiArr.results" :key="element.id">
            <ul>
                <li><h4>{{element.title}}</h4></li>
                <li>Original title: {{element.original_title}}</li>
                <li >lingua: <div class="flag-wrap">
                    <span :class="'fi ' + convertInLenguage(element.original_language)"></span>
                    <span class="text-leng">{{element.original_language}}</span>
                </div></li>
                <li>voto: {{element.vote_average}}</li>
            </ul>
        </div>
        <h2>Serie tv </h2>
    </main>
  
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

ul{
    .flag-wrap{
        z-index: 4;
        position: relative;
        display: inline-block;
    }
    .text-leng{
        position: absolute;
        left: 0;
        z-index: 0;
    }
}
</style>