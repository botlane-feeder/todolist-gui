<script lang="ts">
  import Switch from "./Switch.svelte"
  import type { TaskType } from "$lib/types.ts"
  import deleteIcon from "$lib/assets/delete.svg"
  import {updateTask, deleteTask} from "$lib/apiRequest"

  let {oneTask=$bindable(), removeOneTask}:{oneTask:TaskType, removeOneTask:any} = $props();
  function updateTheTask(){
    updateTask(oneTask["id"], oneTask);
    console.log("Modification de la tâche : "+oneTask["id"]);
  }
  function changeDone(){
    updateTask(oneTask["id"], oneTask);
    console.log("Modification de la tâche : "+oneTask["id"]);
  }
  function updateTitle(){
    updateTask(oneTask["id"], oneTask);
    console.log("Modification de la tâche : "+oneTask["id"]);
  }
  function updateDescription(){
    updateTask(oneTask["id"], oneTask);
    console.log("Modification de la tâche : "+oneTask["id"]);
  }
  function deleteTheTask(){
    // TODO : Demander confirmation par une modal
    console.log("Suppression de la tâche : "+oneTask["id"])
    deleteTask(oneTask["id"]);
    //Suppression de l'id de la list gérée par le navigateur
    removeOneTask(oneTask["id"]);
  }

</script>

<div class="cardTask">
  <div class="headTask">
    <div class="titleTask" onblur={updateTitle} contenteditable=true bind:innerHTML={oneTask["title"]}> </div>
    <div class="dateTask">
      <span class="dateTask">{(new Date(oneTask["date"]*1000)).toISOString().split("T")[0]}</span>
      <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
      <img src={deleteIcon} alt="suppression" onclick={deleteTheTask}>
    </div>
  </div>  
  <div class="bodyTask">
    <div class="contentTask" onblur={updateDescription} contenteditable=true bind:innerHTML={oneTask["description"]}></div>
    <div class="settingsTask"> <Switch bind:done={oneTask["done"]} {changeDone}/> </div>
  </div>
</div>

<style>
  .cardTask{
    display : inline-block;
    border: 858585 solid 4px;
    box-shadow: 5px 5px 5px #858585;
    background-color: #ffffff;

    width : 100%;
    min-width:100px;
    min-height:100px;
  }
  .headTask{
    /* border : red solid 3px; */
    min-height : 50px;

    background-color: #2196F3;
    box-shadow: 0px 2px 2px grey;

    display: grid;
    grid-template-columns: 5fr 1fr;
  }
  .titleTask{
    padding : 8px;
    color: #ffffff;
    font-size: 32px;
  }
  .dateTask{
    display: flex;
    flex-direction: column-reverse;
    padding : 4px;
    align-items:end;
    color: #ffffff;
  }
  img{
    width:40px;
    cursor:pointer;
    position: relative;
    right:5px;
    transition: all 0.2s ease;
  }
  img:hover{
    box-shadow: 2px 2px 2px #186cb1;
    scale:1.2;
  }
  .bodyTask{
    padding: 8px 0px 8px 8px;
    display:grid;
    
    grid-template-columns: 11fr 1fr;
  }
  .contentTask{
    width:95%;
    min-width:100px;
    padding: 8px;
    overflow: auto;
  }
  .settingsTask{
    /* border: green solid 1px; */
    display: flex;
    flex-direction: column-reverse;
    align-items:end;
    padding: 8px;
  }
</style>