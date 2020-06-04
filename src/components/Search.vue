<template>
    <div>
      <h3>Search Github Users</h3>
      <input type="text" placeholder="enter the name you search" v-model="searchName">
      <button @click="search">search</button>
    </div>
</template>

<script>
    export default {
      data (){
        return {
          searchName:''
        }
      },
      methods:{
        search(){
          const searchName = this.searchName.trim()
          if(searchName){
            this.$store.dispatch('search',searchName)
          }
        }
      }
    }
</script>

<style>

</style>
