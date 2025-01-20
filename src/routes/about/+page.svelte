<script lang="ts">
  // TODO : Récupérer les informations `about``
  let dataGUI = {name: "todolist-gui", version:"0.0.0"};
  // TODO : Faire un appel API `GET:/about`
  let dataAPI = {name: "todolist-api", version:"0.2.0"};
  
  let name=$state("test");
  let counter=$state(0);

  function addOne(){ counter +=1 ;}
  function resetCounter(){ 
    console.log(counter);
    counter = 0;
  }
  
</script>

<div>
  <div class="title">This is the <span>about</span> page of the project <span>{dataGUI["name"]}</span> at V<span>{dataGUI["version"]}</span></div>
  <div class="title">Working with the <span>API</span> of the project <span>{dataAPI["name"]}</span> at V<span>{dataAPI["version"]}</span></div>
  <p>This is my {name} Component</p>
  <button onclick={addOne}> {counter} </button>
  <button onclick={resetCounter}>Reset counter</button>
</div>

<style>
  .title{
    font-size:32px;
  }
  span{
    font-style: italic;
    font-weight: bold;
  }
</style>