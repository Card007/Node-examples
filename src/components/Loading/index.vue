<template>
    <div>
        <div class="loading">
        </div>
        <h1>Loading</h1>
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style scoped>
 body{
  text-align:center;
  background-color:#c2c2c2;
  font-family:tahoma;
  text-transform:Uppercase
}

div{
  z-index: 100;
}

.loading{
   margin: 50% auto;
   margin-bottom: 10px;
   border-radius: 50%;
   border: 4px solid  #f1f1f1;
   border-top: 4px solid red;
   width:50px;
   height: 50px;
   animation: 1.64s loading infinite linear;
   transform: translate(-50%, -50%)
}

h1{
    text-align: center;
}

@keyframes loading {
  0%{
    transform: rotate(0)
  }
  100%{
    transform: rotate(360deg)
  }
}
</style>


