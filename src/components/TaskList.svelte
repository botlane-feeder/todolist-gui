<script lang="ts">

  import OneTask from "../components/OneTask.svelte"
  import type { TaskType } from "$lib/types"
  import {getTask, postTask} from "$lib/apiRequest"

  let{ list=$bindable() }:{list:TaskType[]} = $props();
  async function addTask(){
    // Crée une tâche avec un placeholder : TODO : Ouvrir une modale pour définir un titre et un contenu initial ?
    let idTask = await postTask({
      title: "Lorem Ipsum Dolor",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    });
    //Récupère la tâche créée et l'ajoute dans la liste
    list.push( await getTask(idTask) );
  }
  // Retire la `list` l'element à l'id `idTask` passé en paramètre
  function removeOneTask(idTask:string){
    list.splice( list.findIndex((element)=>{return element.id==idTask}), 1); 
  }
</script>

<div class="container">
  <div class="listContainer">
    <div class="title">Application TodoList</div>
    <ul>
      <li><button class="add-button" onclick={addTask}>Ajouter une tâche</button></li>
    </ul>
  </div>
  <div class="taskContainer">
    {#each list as oneTask,i }
      <OneTask bind:oneTask={list[i]} {removeOneTask}/>
    {/each}
  </div>
</div>

<style>
  .container{
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 7fr;
    padding : 2%;
  }
  .title{
    font-size:24px;
    box-shadow: 3px 3px 3px 3px grey;
    padding: 10px;

    position : relative;
    top: -15px;
  }
  .taskContainer{
    display: grid;
    grid-gap:20px;
    grid-template-columns: repeat(3, 1fr);
  }
  
  ul{
    list-style-type: none;
    margin:0px;
    padding:0px;
  }

  .add-button{
    display: inline-block;
    width:80%;
    height:50px;
    margin: 10px 4px;
    border-radius: 34px;
    background-color: #1eaf0b;
    font-size: 16px;

    transition: all 0.2s ease;
  }
  .add-button:hover{
    box-shadow: 5px 5px 5px grey;
    scale: 1.2;
  }
</style>