<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './data/store';
import axios from 'axios';

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
        searchApi(search,whatToSearch){
            let url = store.baseApiUrl + whatToSearch + '?';
            axios.get(url,{
                params:{
                    api_key:store.apiKey,
                    query: search
                }
            })
            .then(api => {
                store.apiArr = api.data;
            })
    }
    }

}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <AppHeader @search="searchApi"/>
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
