<script>

import convertInLenguage from '../mixin/convertInLenguage';
import genImgUrl from '../mixin/genImgUrl';
export default {
    name: 'sectionMain',
    props:{
        typeTitle: String,
        resultsArr: Object,
    },
    mixins: [convertInLenguage,
            genImgUrl]
}
</script>
 
<template>
    
        <section>
        <h2>{{typeTitle}}</h2>
        <div v-for="(element) in resultsArr.results" :key="element.id">
            <ul>
                <li><h4>{{element.title || element.name}}</h4></li>
                <li><div class="img-ca">
                    <img :src="genImgUrl(element.poster_path)" :alt='element.title  || element.name'>
                </div></li>
                <li>Original title: {{element.original_title || element.original_name}}</li>
                <li >lingua: <div class="flag-wrap">
                    <span :class="'fi ' + convertInLenguage(element.original_language)"></span>
                    <span class="text-leng">{{element.original_language}}</span>
                </div></li>
                <li>voto: {{element.vote_average}}</li>
            
            </ul>
        </div>
    </section>
  
</template>

<style lang="scss" scoped>

@use "../style/general.scss" as *;

ul{
    .fi{
        z-index: 20;
    }
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