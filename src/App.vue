<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './data/store';
import axios from 'axios'

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
    }

}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <AppHeader/>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
@use './style/general.scss';

</style>
