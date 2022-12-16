<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
import { createEventDispatcher } from "svelte";
const dispatch=createEventDispatcher();

//import components
import Tabs from "./Tabs.svelte";
import SleepStats from "./SleepStats.svelte";

//tabs
const tabArr=['Yesterday', 'Today', ''];
let activeTab='Today';
const tabColors= {font:'white', background:'rgb(63,63,116)', active:'rgb(51,50,89)', activeFont:'white'};
function changeTab(e){if(e.detail!='') activeTab=e.detail};

//required data
export let weekData;
export let sleepStatsToday;

//get current weekday
const date = new Date();
let weekday = date.getDay();    //0 - Sunday, 1 - Monday....
if (weekday===0) weekday=7;

//count how many days slept well
let well=0;
for (let a=0; a<weekday; a++){
if (weekData[a]===1) well=well+1;
}

//update data
function changeWake(e){dispatch('changeWake', e.detail);}
function changeBed(e){dispatch('changeBed', e.detail)}
function sleepStatus (e) {dispatch('sleepStatus', e.detail);
        weekData[weekday-1]=e.detail;
        well=0;
        for (let a=0; a<weekday; a++){
        if (weekData[a]===1) well=well+1;
        }}




//mark future days as inactive ( 2 )
for (let a=weekday; a<7; a++){
weekData[a]=2;
}
//



//
</script>
    
<div style="--fontColor:{tabColors.font};">

        <div class="container">
            <img class="tab" src="/img/sleeptab.png" alt="">
            <img class="button" src="/img/x-sleep.png" alt="" on:click={()=>{dispatch('closeTab')}}>
            <img class="icon" src="/img/sleep-icon.png" alt="">
            <h1 id="title">Sleep tracking</h1>

            <div class="tab-bar">
                <Tabs {tabArr} {activeTab} {tabColors} on:changeTab={changeTab}/>
            </div>

            <div class="content">
                {#if activeTab==='Today'}
                <div class="sleepStatsContainer"> <SleepStats data={sleepStatsToday} on:changeWake={changeWake} on:changeBed={changeBed} on:sleepStatus={sleepStatus}/> </div>
                <div class="weekdiv">
                    <div class="week1">
                        <p class="subtitle">This week:</p>
                        <div class=days>
                            {#each weekData as day}

                            {#if day===1}
                            <img class="circle" src="/img/sleep-completed.png" alt="" >
                            {:else if day===0}
                            <img class="circle" src="/img/sleep-NOTcompleted.png" alt="" >
                            {:else}
                            <img class="circle" src="/img/sleep-inactive.png" alt="" >
                            {/if}

                            {/each}
                        </div>
                        <div class="weekdayNames">
                            <p class="wd">Mon</p>
                            <p class="wd">Tue</p>
                            <p class="wd">Wed</p>
                            <p class="wd">Thu</p>
                            <p class="wd">Fri</p>
                            <p class="wd">Sat</p>
                            <p class="wd">Sun</p>
                        </div>
                    </div>

                    <div class="week2">
                        <p class="small">You slept well</p>
                        <p class="big">{well}/{weekday}</p>
                        <p class="small">times this week</p>
                    </div>
                </div>
        
                {:else if activeTab==='Yesterday'}
                <p>Yesterday's stats go here</p>

                {:else if activeTab==='Week'}
                <p>Week stats</p>
        
                {/if}
            </div>

        </div>
</div>
    






<style>
    .container{
        position: relative;
        display: flex;
        border: 5px solid rgb(34,32,52); 
        border-radius: 5%;
        padding: 5px;
        background-color: rgb(34,32,52); 

        
    }
    .tab{
        display:flex;
        height: 100%;
    }
    .button{position:absolute;
        left:90%;
        top: 5%;
        cursor:pointer;
    }
    .icon{position:absolute;
        right:80%;
        top: 5%;
        z-index:5;
    }

    #title{
        position:absolute;
        left: 23%;
        top:7%;
        font-family: 'Press Start 2P';
        font-size: 26px;
        color: var(--fontColor);
        font-weight: lighter;
    }

    .tab-bar{position:absolute;
        width: 95%;
        top: 18%;
        margin-left: 5px;
    }
    .content{
        position:absolute;
        /* border:2px solid white; */
        width: 96%;
        height: 63%;
        top: 30%;
        left: 1.8%;

        font-family: 'Press Start 2P';
        font-size: 18px;
        color: var(--fontColor);
        font-weight: lighter;

        display: flex;
        flex-direction: column;
        gap:20px;
        justify-content: center;
        align-items: center;
    }

    .sleepStatsContainer{
        width: 100%;
    }

    .weekdiv{
        width: 92%;
        height: 250px;
        background-color: rgb(37,35,58);
        border: 5px solid rgb(37,35,58);
        border-radius: 15px;
        display: flex;
        gap: 10px;
    }

    .subtitle{
        text-align: left;
        margin-left: 15px;
    }

    .week1{
        width:78%;
        display: flex;
        flex-direction: column;
    }

    .week2{
        width:20%;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .days{
        display: flex;
        margin-left: 15px;
    }

    .weekdayNames{
        display: flex;
        font-size: 10px;
        gap: 13px;
        margin-left: 15px;
    }

    .wd{font-size: 15px;}

    .small{
        font-size: 10px;
    }

    .big{
        font-size: 25px;
        margin: 0;
        background-color: rgb(98,92,147);
        border-radius: 5px;
        width: 80%;
        margin-left: 5%;
        padding: 5px;
    }
    
</style>