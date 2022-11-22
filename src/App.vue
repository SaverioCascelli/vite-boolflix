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
        searchApi(search,typeOfSearch){
            let url = store.baseApiUrl + typeOfSearch + '?';
            axios.get(url,{
                params:{
                    api_key:store.apiKey,
                    query: search,
                    language: 'it',
                }
            })
            .then(api => {
                let arrObj = {
                    type: typeOfSearch,
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
                default:
                    console.log('select something');
                }
        }
    },
    mounted(){
       this.searchSwitchCase('matrix','both')
    }
 
}
</script>

<template>
    <div class="container-fluid">
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

</style>
