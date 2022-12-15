<script>


import Footer from "./components/Footer.svelte";

import Room from "./components/Room.svelte";
import Music from "./components/Music.svelte";
import Sleep from "./components/Sleep.svelte";
import Bench from "./components/Bench.svelte";
import Food from "./components/Food.svelte";
import Char from "./components/Char.svelte";
import Calendar from "./components/Calendar.svelte";

let activeTab="";

function openTab(e){activeTab=e.detail;}
function closeTab(){ activeTab="";}


//variables to pass down to components --- GET FROM DATABASE
let gender='m';

let exerciseArr=[
        {index:0, count:75, name:'Jumping Jacks', completed:true},
        {index:1, count:25, name:'Leg Raises', completed:false}, 
        {index:2, count:25, name:'Leg Raises', completed:true},
        {index:3, count:55, name:'Leg Raises', completed:true},
        {index:4, count:30, name:'Leg Raises', completed:true},
        {index:5, count:65, name:'Leg Raises', completed:true}
        ];
//--------------------------------------------------------------------------------------------------------------



// functions for events dispatched from components
function changeGender (e) {gender=e.detail;}
function changeExerciseStatus (e) {exerciseArr[e.detail.index].completed=e.detail.status;}
//--------------------------------------------------------------------------------------------------------------

</script>


<main>
	<Room on:openTab={openTab} {gender}/>

	{#if activeTab==='food'}
	<div class="tab">
		<Food on:closeTab={closeTab}/>
	</div>

	{:else if activeTab==='music'}
	<div class="tab">
		<Music on:closeTab={closeTab}/>
	</div>

	{:else if activeTab==='bench'}
	<div class="tab">
		<Bench on:closeTab={closeTab} on:changeStatus={changeExerciseStatus} {exerciseArr}/>
	</div>

	{:else if activeTab==='sleep'}
	<div class="tab">
		<Sleep on:closeTab={closeTab}/>
	</div>

	{:else if activeTab==='char'}
	<div class="tab">
		<Char on:closeTab={closeTab} {gender} on:changeGender={changeGender}/>
	</div>

	{:else if activeTab==='calendar'}
	<div class="tab">
		<Calendar on:closeTab={closeTab}/>
	</div>

	{/if}
	
</main>
<Footer />



<style>
	main {
		text-align: center;

		margin: 0;
	}

	.tab{
		position: absolute;
		height: 100%;

		display: flex;
    	justify-content: center;
    	align-items: center;


    /* background-color: rgba(44, 119, 119, 0.5); */

		bottom: 0%;
		left: 0%;
		right:0%;

		z-index: 10;
	}

</style>