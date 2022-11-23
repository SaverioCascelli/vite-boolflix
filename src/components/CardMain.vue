<script>
import convertInLenguage from '../mixin/convertInLenguage';
import genImgUrl from '../mixin/genImgUrl';
import getStarReview from '../mixin/getStarReview';
export default {
    name:'CardMain',
    props:{
        cardInfo: Object,
    },
    mixins:[convertInLenguage,genImgUrl,getStarReview]
    
}
</script>

<template>
    <div class="sc-card col-auto p-0" 
    :class="{'d-none':!cardInfo.backdrop_path}" 
    v-if="cardInfo.backdrop_path"
    >
        <div class="img-wrap">
            <img :src="genImgUrl(cardInfo.backdrop_path)" alt="...">
            <p class="title">{{cardInfo.original_title || cardInfo.original_name}}</p>
            <div class="info-wrap">
                <p class="fw-bold">{{cardInfo.original_title  || cardInfo.original_name}}</p>
                <p>{{cardInfo.overview}}</p>
            </div>
        </div>
        <div class="bottom-sc d-none d-flex justify-content-between">
            <div class="left d-flex flex-column">
                <div class="flag-wrap">
                    <span :class="'fi ' + convertInLenguage(cardInfo.original_language)"></span>
                    <span class="text-leng">{{cardInfo.original_language}}</span>
                </div>
            </div>
            <div class="righ d-flex flex-column">
                <div class="d-inline-block " v-html="getStarReview(cardInfo.vote_average)"></div>
                <button class="chev-btn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.sc-card{
    margin-bottom: 5%;
    overflow: hidden;
    width: calc(100% / 2 - 10px) !important;
    transition:all 1s;
    //transform-origin: 0 50% ;
   
    &:hover{
        overflow: visible;
        animation: popup .2s linear ;
        animation-fill-mode: forwards;
        animation-delay: .3s;
    }
    .img-wrap{
        position: relative;
        .info-wrap{
            position: absolute;
            left: 100%;
            top: 0%;
            background: rgb(24, 24, 24);
            width: 100%;
            height: 100%;
            overflow: auto;
            padding: 3%;
        }
    }

    &:hover .info-wrap{
        left: 0;
        top: 0;
    }
    &:hover .bottom-sc{
        display: flex !important;

    }
    img{
        object-fit: cover;
        width: 100%;
        border-radius: 5px;
    }
    .title{
        position: absolute;
        left: 10px;
        font-weight: bold;
        bottom: 0%;
    }
    .bottom-sc{
        background: rgb(24, 24, 24);
        position: absolute;
        width: 100%;
    }
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

    .chev-btn{
        padding-right: 10px;
        text-align: right;
        border: 0px;
        border-radius: 50%;
        background: rgb(24, 24, 24);
        color: white;
    }
    @keyframes popup {
        from{ z-index: 0; scale: 1;}
        to{z-index: 50; scale: 1.5;}
    }

}

@media only screen and (max-width:499px){
    
    .sc-card:nth-of-type(odd){
    transform-origin: 0% 50%;
  }

  .sc-card:nth-of-type(even){
    transform-origin: 100% 50%;
  }
}

@media only screen and (min-width: 500px) and (max-width:799px) {
    .sc-card{
    width: calc(100% / 3 -  10px) !important;
  }
    .sc-card:nth-of-type(3n+1){
    transform-origin: 0% 50%;
  }

  .sc-card:nth-of-type(3n){
    transform-origin: 100% 50%;
  }
}

@media only screen and (min-width: 800px) and (max-width:1099px) {
    .sc-card{
    width: calc(100% / 4 - 10px) !important;
  }
    .sc-card:nth-of-type(4n+1){
    transform-origin: 0% 50%;
  }

  .sc-card:nth-of-type(4n){
    transform-origin: 100% 50%;
  }
}

@media only screen and (min-width: 1100px) and (max-width:1399px) {
    .sc-card{
    width: calc(100% / 5 - 10px) !important;
  } 
    .sc-card:nth-of-type(5n+1){
    transform-origin: 0% 50%;
  }

  .sc-card:nth-of-type(5n){
    transform-origin: 100% 50%;
  }
}

@media only screen and (min-width: 1400px) {
    .sc-card{
    width: calc(100% / 6 - 10px) !important;
  } 
  .sc-card:nth-of-type(6n+1){
    color: blue;
    transform-origin: 0% 50%;
  }

  .sc-card:nth-of-type(6n){
    color: green;
    transform-origin: 100% 50%;
  }
}



</style>