<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './data/store';
import axios from 'axios';
import { ITERATE_KEY } from '@vue/reactivity';

export default{
    name:'App',
    data(){
        return{
            store,
        }
    },
    components:{
        AppHeader,
        AppMain,
    },
    methods:{
        searchApi(typeOfMedia){
            let url = store.baseApiUrl + typeOfMedia + '?';
            if (typeOfMedia === "trending" || store.searchString === ''){
                url = 'https://api.themoviedb.org/3/trending/all/day';
            }
            console.log(url);
            axios.get(url,{
                params:{
                    api_key:store.apiKey,
                    query: store.searchString,
                    language: 'it',
                }
            })
            .then(api => {
                let arrObj = {
                    type: typeOfMedia,
                    resultsArr : api.data,
                }
                store.apiArr.push(arrObj)
                console.log(store.apiArr);
            })
        },
        searchSwitchCase(searchBy){
            store.apiArr = [];
            switch (searchBy){
                case 'tv':
                    this.searchApi('tv');
                    break;
                case 'movie':
                    this.searchApi('movie');
                    break;
                case 'both':
                    if(store.searchString === ''){
                        this.searchApi('trending');
                        break;
                    }
                    this.searchApi('movie');
                    this.searchApi('tv');
                    break;
                case 'trending' || '':
                    this.searchApi('trending');
                    break;
                default:
                    this.searchApi('trending');
                    break;
                }
        }
    },
    mounted(){
       this.searchSwitchCase('','trending')
    }
 
}
</script>

<template>
    <div class="container-fluid py-3 sc-cont">
        <div class="row">
            <div class="col">
                <AppHeader @search="searchSwitchCase"/>
            </div>
        </div>
        <div class="row">
            <div v-if="store.apiArr.length > 0" class="col">
                <AppMain/>
            </div>
            <div v-else> 
                <p>loading...</p>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
@use './style/general.scss';

.sc-cont{
    padding: 0 5%;
}
</style>
