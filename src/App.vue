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
        searchApi(search,typeOfMedia){
            let url = store.baseApiUrl + typeOfMedia + '?';
            if (typeOfMedia === "trending"){
                url = 'https://api.themoviedb.org/3/trending/all/day';
            }
            axios.get(url,{
                params:{
                    api_key:store.apiKey,
                    query: search,
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
        searchSwitchCase(search,searchBy){
            store.apiArr = [];
            switch (searchBy){
                case 'tv':
                    this.searchApi(search,'tv');
                    break;
                case 'movie':
                    this.searchApi(search,'movie');
                    break;
                case 'both':
                    this.searchApi(search,'movie');
                    this.searchApi(search,'tv');
                    break;
                case 'trending':
                    this.searchApi('','trending');
                    break;
                case '':
                    this.searchApi('','trending');
                    break;
                default:
                    console.log('select something');
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
            <div class="col">
                <AppMain/>
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
