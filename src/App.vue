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
        searchApi(string){
            axios.get(store.apiFilmUrl,{
                params:{
                    query: string
                }
            })
            .then(api => {
                store.apiArr = api.data;
                console.log(store.apiArr);
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
