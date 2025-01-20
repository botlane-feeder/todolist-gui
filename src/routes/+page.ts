import type { TaskType } from "$lib/types.js"
import { getList } from "$lib/apiRequest.js"

let SERVER="prod";

const taskList:TaskType[] = [
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
]

export const load:{}  = async () => {
  let list:TaskType[];
  if(SERVER === "prod"){
    list = await getList();
  }else{
    list = taskList;
  }

	return {"list":list};
};
