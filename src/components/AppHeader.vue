<template>

    <header>


<ul class="nav">
    <li class="nav-item">      
      <router-link to="/" class="nav-link ">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/about" class="nav-link">About</router-link>
    </li>    
  </ul>
</header>    

</template>

<script>
    export default {
            component:{ name:'AppHeader'}        
    }
</script>
<style scoped>
.router-link-active{
    background-color:cadetblue;
    color:white;

}
</style>