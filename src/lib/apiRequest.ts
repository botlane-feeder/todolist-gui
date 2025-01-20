import type { TaskType } from "$lib/types";

export async function getList():Promise<TaskType[]>{
  let list:TaskType[];
  const response = await fetch('http://localhost:9080/lists');
  list = await response.json();
  return list;
}

// Création d'une tâche via l'API serveur, d'après la tâche en paramètre
export async function postTask(task:{}):Promise<string>{
  const response = await fetch(
    'http://localhost:9080/task',
    {
      method:"POST",
      body: JSON.stringify(task)
    }
  );
  let responseData = await response.json();
  return responseData["idTask"];
}

export async function getTask(idTask:string):Promise<TaskType>{
  const response = await fetch('http://localhost:9080/task/'+idTask);
  let oneTask:TaskType = await response.json();
  return oneTask;
}
export async function updateTask(idTask:string, task:TaskType):Promise<number>{
  const response = await fetch(
    'http://localhost:9080/task/'+idTask,
    {
      method:"PUT",
      body: JSON.stringify(task)
    }
  );
  let successCode:number = await response.json();
  return successCode;
}
export async function deleteTask(idTask:string):Promise<number>{
  const response = await fetch( 'http://localhost:9080/task/'+idTask, { method:"DELETE" } );
  let successCode:number = await response.json();
  return successCode;
}