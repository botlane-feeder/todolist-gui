import type { TaskType } from "$lib/types";

export async function getList():Promise<TaskType[]>{
  let data:TaskType[] = [
    {
      id:"123456789",
      title:"Lorem Ipsum Title 1",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      date:0,
      done:true
    },
    {
      id:"123456790",
      title:"Lorem Ipsum Title 2",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      date:0,
      done:false
    },
  ];
  
  return new Promise((json) => {
    setTimeout(() => {
      json(data);
    }, 300);
  });
}

export async function postTask(task:TaskType):Promise<string>{
  return JSON.stringify( Math.random()*100000000000000 );
}
export async function getTask(idTask:string):Promise<TaskType>{
  return { 
    id: "",
    title: "Lorem Ipsum Dolor",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    date:Date.now(),
    done:false
  };
}
export async function updateTask(idTask:string, task:TaskType):Promise<number>{
  return 0;
}
export async function deleteTask(idTask:string):Promise<number>{
  return 0;
}