<script>
    import { store } from '../data/store';

export default {
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    },
    methods:{
        emitNormalizeString(){
            store.searchString = store.searchString.trim();
            store.searchString = store.searchString.replace(/ +(?= )/g,'');
            this.$emit('search','both');
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
                        <input type="text" class="form-control" @keyup="emitNormalizeString()" v-model="store.searchString" placeholder="Cerca" aria-describedby="button-addon1">
                        <button class="btn btn-outline-secondary" type="button" 
                        @click="emitNormalizeString()"  id="button-addon1">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  
</template>

<style lang="scss" scoped>

header{
    height: 175px;
}
.logo{
    width: 120px;
}

</style>