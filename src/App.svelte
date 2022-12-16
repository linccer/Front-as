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

//get current weekday
const date = new Date();
let weekday = date.getDay();    //0 - Sunday, 1 - Monday....
if (weekday===0) weekday=7;
//

//vars for data load status?

//

//variables to pass down to components --- GET FROM DATABASE-----------------------------------------------

//food
let foodGoals={
        KCALgoal:2400,
        waterGoal:1.9,
        carbGoal:310,
        proteinGoal:150,
        fatGoal:60
    }
let foodValueToday={
	carbValue:160,
	proteinValue:96,
	fatValue:32,
	waterValue:0.5
}
//

//char
let username='Johnny';
let gender='m';
let height=170;
let weight= 70;

let sportProg=50;
let sleepProg=40;
let foodProg=75;
//

//BENCH
let exerciseArr=[
        {index:0, count:75, name:'Jumping Jacks', completed:true},
        {index:1, count:25, name:'Leg Raises', completed:false}, 
        {index:2, count:25, name:'Leg Raises', completed:true},
        {index:3, count:55, name:'Leg Raises', completed:true},
        {index:4, count:30, name:'Leg Raises', completed:true},
        {index:5, count:65, name:'Leg Raises', completed:true}
        ];
//

//SLEEP
let sleepStatsToday={
    bedtime:1380,
    waketime:394,
    goal:480,
	well: 1
}
let weekData= [1, 1, 1, 1, 1, 1, 1 ];
//

//CALENDAR
let weekRange= '07/12 - 07-18';
let fitnessWeek=['Push', 'Pull', 'Rest', 'Legs', 'Push', 'Pull', 'Rest'];
//
//--------------------------------------------------------------------------------------------------------------



// functions for data updates
//char
function changeGender (e) {gender=e.detail;}
function changeHeight (e) {height=e.detail;}
function changeWeight (e) {weight=e.detail;}
//

//food
function addWater (e) {foodValueToday.waterValue= e.detail;}
function addCarbs (e) {foodValueToday.carbValue= e.detail;}
function addFat (e) {foodValueToday.fatValue= e.detail;}
function addProtein (e) {foodValueToday.proteinValue= e.detail;}
//

//bench
function changeExerciseStatus (e) {exerciseArr[e.detail.index].completed=e.detail.status;}
//

//sleep
function changeWake(e){sleepStatsToday.waketime=e.detail;}
function changeBed(e){sleepStatsToday.bedtime=e.detail;}
function sleepStatus (e) {sleepStatsToday.well=e.detail;}
$: if(sleepStatsToday.well === 1){weekData[weekday-1]=1;} else {weekData[weekday-1]=0;}
//
//--------------------------------------------------------------------------------------------------------------

</script>


<main>
	<Room on:openTab={openTab} {gender}/>

	{#if activeTab==='food'} <!-- && data load status-->
	<div class="tab">
		<Food on:closeTab={closeTab} {foodGoals} {foodValueToday} on:addWater={addWater} on:addCarbs={addCarbs} on:addProtein={addProtein} on:addFat={addFat}/>
	</div>

	{:else if activeTab==='music'}
	<div class="tab">
		<Music on:closeTab={closeTab}/>
	</div>

	{:else if activeTab==='bench'} <!-- && data load status-->
	<div class="tab">
		<Bench on:closeTab={closeTab} on:changeStatus={changeExerciseStatus} {exerciseArr}/>
	</div>

	{:else if activeTab==='sleep'} <!-- && data load status-->
	<div class="tab">
		<Sleep on:closeTab={closeTab} {sleepStatsToday} on:changeWake={changeWake} on:changeBed={changeBed} on:sleepStatus={sleepStatus} {weekData}/>
	</div>

	{:else if activeTab==='char'} <!-- && data load status-->
	<div class="tab">
		<Char on:closeTab={closeTab} {username} {gender} on:changeGender={changeGender} on:changeHeight={changeHeight} on:changeWeight={changeWeight} {sportProg} {sleepProg} {foodProg} {height} {weight}/>
	</div>

	{:else if activeTab==='calendar'} <!-- && data load status-->
	<div class="tab">
		<Calendar on:closeTab={closeTab} {weekRange} {fitnessWeek}/>
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
		bottom: 0%;
		left: 0%;
		right:0%;
		z-index: 10;
	}

</style>