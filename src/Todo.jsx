// export default function Todo({task, isDone}){
//     return (
//         <div>
//             <li>Task: {task} </li>
//         </div>
//     )
// }


// conditional rendering option 1: if-else
// export default function Todo({task, isDone}){
//    if(isDone === true){
//     return <li>Finished: {task}</li>
//    }
//    else{
//     return <li>Work on: {task}</li>
//    }
// }


// conditional rendering option 2: if
// export default function Todo({task, isDone}){
//    if(isDone){
//     return <li>Finished: {task}</li>
//    }
//     return <li>Work on: {task}</li>
// }


// conditional rendering option 3: ***ternary operator***
// export default function Todo({task, isDone}){
//    return (
//         <li>{isDone? 'Finished:': "Unfinished:"} {task}</li>
//    )
// }


// conditional rendering option 4: &&
// export default function Todo({task, isDone}){
//    return (
//         <li>{ isDone && 'Finished:'} {task} </li>
//    )
// }


// conditional rendering option 5: ||
// export default function Todo({task, isDone}){
//    return (
//         <li>{ isDone || 'Unfinished:'} {task} </li>
//    )
// }


// conditional rendering option 6: using variable
export default function Todo({task, isDone}){
    let listItem;
   if(isDone === true){
    listItem =  <li>Finished: {task}</li>
   }
   else{
    listItem = <li>Work on: {task}</li>
   }
   return listItem;
}