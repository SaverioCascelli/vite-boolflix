<script>
import CardMain from './CardMain.vue';

import convertInLenguage from '../mixin/convertInLenguage';
import genImgUrl from '../mixin/genImgUrl';
import getStarReview from '../mixin/getStarReview';
export default {
    name: 'sectionMain',
    components:{
        CardMain,
    },
    props:{
        typeTitle: String,
        resultsArr: Object,
    },
    mixins: [convertInLenguage,
            genImgUrl,
            getStarReview]
}
</script>
 
<template>
    
    <section>
        <h2>{{typeTitle}}</h2>
        

        <CardMain
        v-for="(element) in resultsArr.results"
        :key="element.id"
        :cardInfo="element"
        />
        <!--
        <div v-for="(element) in resultsArr.results" :key="element.id">
            <ul>
                <li><h4>{{element.title || element.name}}</h4></li>  
                <li
                :class="{'d-none': !element.poster_path}"><div class="img-ca">
                    <img :src="genImgUrl(element.poster_path)" :alt='element.title  || element.name'>
                </div></li>
                <li>Original title: {{element.original_title || element.original_name}}</li>
                <li >lingua: <div class="flag-wrap">
                    <span :class="'fi ' + convertInLenguage(element.original_language)"></span>
                    <span class="text-leng">{{element.original_language}}</span>
                </div></li>
                <li>voto: <div class="d-inline-block " v-html="getStarReview(element.vote_average)"></div></li>
            
            </ul>
        </div>
    -->
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