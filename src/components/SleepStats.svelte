<script>
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();

    export let data;

    let bedtime= data.bedtime;
    let waketime= data.waketime;
    let goal = data.goal;

    let bh = Math.floor(bedtime/60);
    let bm = bedtime - (Math.floor(bedtime/60))*60;
    if (bm===0) bm='00';

    let wh = Math.floor(waketime/60);
    let wm = waketime - (Math.floor(waketime/60))*60;
    if (wm===0) wm='00';

    let dh=0;
    let dm=0;
    $: if (Number(bh) > Number(wh)) {dh= (24-Number(bh)) + Number(wh);}
    $: if (Number(bh)<=Number(wh)) {dh= Number(wh) - Number(bh);}
    $: if (Number(wm) > Number(bm)) {dm= Number(wm)-Number(bm);}
    $: if (Number(wm)<Number(bm)) {dm=(60-Number(bm))+Number(wm);}
    $: if (Number(wm)<Number(bm) && Number(wh) != Number(bh)) {dh=Number(dh)-1;}
    $: if (Number(wm)===Number(bm)) {dm=0;}
    $: if (Number(dh) === -1) {dh=23};




    let gh = Math.floor(goal/60);
    let gm = goal - gh*60;
    if (gm===0) gm='00';
    let goaltext=` / ${gh}h ${gm}min`;


    $: percent = Math.floor(100/goal*(dh*60+dm)) || 0;  $: if (percent>100) percent=100;

    $: if (percent >=80){dispatch('sleepStatus', 1);} 
    $: if (percent <80){dispatch('sleepStatus', 0);} 


    function changeBedtime (){
       bedtime=Number(bh)*60+Number(bm);
       dispatch('changeBed', bedtime);
    }

    function changeWaketime(){
    waketime=Number(wh)*60+Number(wm);
    dispatch('changeWake', waketime);
    }



</script>

<div>
    <div class="container">
        
        <div class="subdiv">
            <p>Sleep at time</p>
            <h3>
            <input bind:value={bh} on:change={()=>{changeBedtime()}} />h <span>_</span>
            <input bind:value={bm} on:change={()=>{changeBedtime()}} />min
            </h3>
            <img class= "decoIcon" src="/img/moon.png" alt="">
        </div>

        <div class="subdiv">
            <p>Wake up time</p>
            <h3>
            <input bind:value={wh} on:change={()=>{changeWaketime()}} />h <span>_</span>
            <input bind:value={wm} on:change={()=>{changeWaketime()}} />min
            </h3>
            <img class= "decoIcon" src="/img/sun.png" alt="">
        </div>

        <div class="subdiv"> <p>Sleep duration</p> <h3>{dh}h {dm}min<span>{goaltext}</span> </h3> </div>
        <div class="subdiv"> <p>Goal reached</p> <div class="percentBar">   <div class="percentBarFilled" style="width:{180*percent/100}px"></div>    </div><h3 id="percent"> {percent}% </h3> </div>

    </div>
</div>

<style>
.container{
    position: relative;
    left: 2.6%;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 91%;
    height: 140px;
    background-color: rgb(37,35,58);
    border: 5px solid rgb(37,35,58);
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 6px;
}
.subdiv{
display: flex;
flex-shrink: 0;
width: 250px;
height: 38%;
background-color: rgb(98,92,147);
border: 1px solid rgb(98,92,147);
border-radius: 10px;
padding: 5px;
margin-right: 5px;
margin-left: 5px;
margin-top:0;
flex-direction: column;
}

p{  display: flex;
    font-size: 12px;
    margin:0; 
    font-weight: lighter;
}

h3{  display: flex;
    font-size: 15px;
    margin-top: 14px;
    margin-left: 10px;
    font-weight: lighter;
}
span{font-size: 10px;
    margin-top: 5px;}

.percentBar{
    width: 180px;
    height: 20px;
    background-color: rgb(132,125,191);
    position: absolute;
    bottom: 20px;
    border-radius: 5px;
}
.percentBarFilled{
    height: 20px;
    background-color: rgb(198,192,253);
    position: absolute;
    border-radius: 5px;
}
#percent{
    display: flex;
    margin-left: 190px;
    width: fit-content;
}

.decoIcon{
    position: absolute;
    width: 55px;
    margin-left: 190px;
}

input{
    outline: none;
    width:28px;
    background: none;
    color:white;
    font-family: "Press Start 2P";
    border: none;
}

span{visibility: hidden;}
</style>