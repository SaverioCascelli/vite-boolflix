<script>
import { store } from '../data/store';
export default {
    name: 'AppMain',
    data(){
        return{
            store,

        }
    }
}
</script>

<template>
    <main>
        <div v-for="(element,index) in store.apiArr.results" :key="index"
        >
            <ul>
                <li><h4>{{element.title}}</h4></li>
                <li>Original title: {{element.original_title}}</li>
                <li>lingua: {{element.original_language}}</li>
                <li>voto: {{element.vote_average}}</li>
            </ul>
        </div>
    </main>
  
</template>

<style>

</style>