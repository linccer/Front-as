import {writable} from 'svelte/store';


//user info
//workout today

//today stats - nutrition, sleep, progress(sleep,food,workout)
//yesterday stats

//month/week info


/*
function del (id){

UserData.update(currentDATA=>{
    return currentDATA.filter(poll=>poll.id != id);
})}

*/

// creates a store of data
export const userData= writable([

	sportProg=50,
	sleepProg=30,
	foodProg=75,

	height=170,
    weight= 70,

    gender='f',
    username='Petriukas'
]);
