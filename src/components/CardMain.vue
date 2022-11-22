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
    <div class="sc-card col-2"
    :class="{'d-none': !cardInfo.backdrop_path}" >
        <div class="img-wrap">
            <img :src="genImgUrl(cardInfo.backdrop_path)" alt="...">
            <p class="title">{{cardInfo.original_title || cardInfo.original_name}}</p>
        </div>
        <div class="bottom-sc d-none d-flex justify-content-between">
            <div class="left">
                <div class="flag-wrap">
                    <span :class="'fi ' + convertInLenguage(cardInfo.original_language)"></span>
                    <span class="text-leng">{{cardInfo.original_language}}</span>
                </div>
            </div>
            <div class="righ">
                <div class="d-inline-block " v-html="getStarReview(cardInfo.vote_average)"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.sc-card{
    margin-bottom: 105px;
    width: calc(100% / 6);
    overflow: hidden;
    &:hover{
        overflow: visible;
        transform: scale(1.5);
        z-index: 999;

    }
    .img-wrap{
        position: relative;
    }
    &:hover .bottom-sc{
        display: block !important;
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

}



</style>