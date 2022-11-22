<script>
    import { store } from '../data/store';

export default {
    name: 'AppHeader',
    data(){
        return{
            searchString:"matrix",
        }
    },
    methods:{
        emitNormalizeString(){
            this.searchString = this.searchString.trim();
            this.searchString = this.searchString.replace(/ +(?= )/g,'');
            this.$emit('search',this.searchString,'movie');
        },
        
    }
    

}
</script>

<template>
    <header>
        <div class="container-fluid ">
            <div class="row justify-content-between">
                <div class="col-1 logo">
                    <img src="/logo-boolflix.png" class="w-100" alt="boolflix logo">
                </div>
                <div class="col-4 col-input">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="searchString" placeholder="Cerca" aria-describedby="button-addon1">
                        <button class="btn btn-outline-secondary" type="button" 
                        @click="emitNormalizeString()" id="button-addon1">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  
</template>

<style>

</style>