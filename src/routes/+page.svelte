<script lang="ts">

  import TaskList from "../components/TaskList.svelte"

  import type { TaskType } from "$lib/types"

  //Récupération de la donnée depuis le serveur +page.ts
  const { data }:{data:any} = $props();
  let list:TaskType[] = $state(data["list"]);

</script>

<div class="card">
    <TaskList bind:list={list}/>
</div>
