<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
import { createEventDispatcher } from "svelte";
const dispatch=createEventDispatcher();

export let gender;
</script>
    
    
    
<div>
    <div class="imgContainer">
        <img src="/img/empty-room.png" alt="">

        <img class="items" id="fridge" src="/img/saldytuvas.png" alt="" on:click={()=>{dispatch('openTab', 'food')}}>
        <img class="items fridgeglow"  src="/img/saldytuvas.png" alt="">

        <img class="deco plant"  src="/img/plant.png" alt="">

        <img class="deco rug"  src="/img/rug.png" alt="">

        <img class="items" id="bed" src="/img/lova.png" alt="" on:click={()=>{dispatch('openTab', 'sleep')}}>
        <img class="items bedglow"  src="/img/lova.png" alt="">

        <img class="deco table"  src="/img/table.png" alt="">
        <img class="deco shelf"  src="/img/shelf.png" alt="">
        <img class="deco piggy"  src="/img/piggy.png" alt="">

        <img class="items" id="radio" src="/img/radio.png" alt="" on:click={()=>{dispatch('openTab', 'music')}}>
        <img class="items radioglow"  src="/img/radio.png" alt="">

        <img class="items" id="window1" src="/img/langas.png" alt="">
        <img class="items window1glow"  src="/img/langas.png" alt="">

        <img class="items" id="window2" src="/img/langas.png" alt="">
        <img class="items window2glow"  src="/img/langas.png" alt="">

        <img class="deco rug2"  src="/img/rug2.png" alt="">

        <img class="items" id="calendar" src="/img/calendar.png" alt="" on:click={()=>{dispatch('openTab', 'calendar')}}>
        <img class="items calendarglow"  src="/img/calendar.png" alt="">

        <img class="items" id="bench" src="/img/bench.png" alt="" on:click={()=>{dispatch('openTab', 'bench')}}>
        <img class="items benchglow"  src="/img/bench.png" alt="">

        <img class="deco deco1"  src="/img/deco1.png" alt="">
        <img class="deco ball"  src="/img/ball.png" alt="">
        <img class="deco deco2"  src="/img/deco2.png" alt="">
        <img class="deco deco3"  src="/img/deco3.png" alt="">
        <img class="deco deco33"  src="/img/deco3.png" alt="">
        <img class="deco deco4"  src="/img/deco4.png" alt="">
        <img class="deco deco5"  src="/img/deco5.png" alt="">
        <img class="deco deco55"  src="/img/deco5.png" alt="">

        {#if gender==='f'}
        <img class="items" id="char" src="/img/char.png" alt="" on:click={()=>{dispatch('openTab', 'char')}}>
        <img class="items charglow"  src="/img/char.png" alt="">
        {:else}
        <img class="items" id="char" src="/img/charM.png" alt="" on:click={()=>{dispatch('openTab', 'char')}}>
        <img class="items charglow"  src="/img/charM.png" alt="">
        {/if}



    </div>
</div>
    
    
    
<style>
div {
    width: 100%;
 
    height: 97vh;
    display: flex;
    justify-content: center;
}
.imgContainer{
    position: relative;
    width: fit-content;
}
img {
    display: flex;
    height: 100%;
}
.items{
    position: absolute;
    cursor:pointer;

}


#fridge{
    top: 15%;
    right: 85%;
    height: 30%;

    z-index: 2;
}
#fridge:hover ~ .fridgeglow{
    opacity:1;
}
.fridgeglow{
    top: 15%;
    right: 85%;
    height: 30%;
    
    z-index:1;
    transform: scale(1.1);
    
    filter: brightness(0) invert(1) blur(5px);
    opacity:0;
}



#bed{
    top: 47%;
    left: 18%;
    height: 30%;
    z-index: 3;
}
#bed:hover ~ .bedglow{
    opacity:1;
}
.bedglow{
    top: 47%;
    left: 18%;
    height: 30%;
    
    z-index:2;
    transform: scale(1.1) ;
    
    filter: brightness(0) invert(1) blur(5px);
    opacity:0;
}



#radio{
    height:10%;
    top: 24%;
    right: 50%;

    z-index:2;
}
#radio:hover ~ .radioglow{
    opacity:1;
}
.radioglow{
    height:10%;
    top: 24%;
    right: 50%;
    
    z-index:1;
    transform: scale(1.1);
    
    filter: brightness(0) invert(1) blur(5px);
    opacity:0;
}




/* #tv{
    height:24%;
    top: 17%;
    left: 45%;

    z-index:2;
}
#tv:hover ~ .tvglow{
    opacity:1;
}
.tvglow{
    height:24%;
    top: 17%;
    left: 45%;
    
    z-index:1;
    transform: scale(1.1);
    
    filter: brightness(0) invert(1) blur(5px);
    opacity:0;
} */





#window1{
    height:17%;
    top: 9%;
    right:62%;

    z-index:2;
}
#window1:hover ~ .window1glow{
    opacity:1;
}
.window1glow{
    height:17%;
    top: 9%;
    right:62%;
    
    z-index:1;
    transform: scale(1.1);
    
    filter: brightness(0) invert(1) blur(5px);
    opacity:0;
}






#window2{
    height:17%;
    top: 9%;
    left: 65%;

    z-index:2;
}
#window2:hover ~ .window2glow{
    opacity:1;
}
.window2glow{
    height:17%;
    top: 9%;
    left: 65%;
    
    z-index:1;
    transform: scale(1.1);
    
    filter: brightness(0) invert(1) blur(5px);
    opacity:0;
}







#char{
    height:17%;
    top: 60%;

    z-index:2;
}
#char:hover ~ .charglow{
    opacity:1;
}
.charglow{
    height:17%;
    top: 60%;
    
    z-index:1;
    transform: scale(1.1);
    
    filter: brightness(0) invert(1) blur(5px);
    opacity:0;
}





.deco{position:absolute;}

.plant{
    top: 15%;
    right: 77%;
    height: 28%;

    z-index: 2;
}

.rug{
    top: 60%;
    right: 60%;
    height: 28%;

    z-index: 1;
}

.table{
    top: 25%;
    right: 39%;
    height: 18%;

    z-index: 1;
}


.shelf{
    top: 7%;
    right: 41.5%;
    height: 12%;

    z-index: 1;
}

.piggy{
    height:10%;
    top: 24%;
    right: 42%;

    z-index:2;
}

.rug2{
    top: 34%;
    right: 3%;
    height: 55%;

    z-index: 1;
}



#calendar{
    top: 13%;
    right: 5%;
    height: 13%;

    z-index: 2;
}
#calendar:hover ~ .calendarglow{
    opacity:1;
}
.calendarglow{
    top: 13%;
    right: 5%;
    height: 13%;
    
    z-index:1;
    transform: scale(1.1);
    
    filter: brightness(0) invert(1) blur(5px);
    opacity:0;
}




#bench{
    top: 42%;
    right: 9%;
    height: 25%;

    z-index: 2;
}
#bench:hover ~ .benchglow{
    opacity:1;
}
.benchglow{
    top: 42%;
    right: 9%;
    height: 25%;
    
    z-index:1;
    transform: scale(1.1);
    
    filter: brightness(0) invert(1) blur(5px);
    opacity:0;
}


.deco1{
    top: 12%;
    right: 12%;
    height: 33%;

    z-index: 1;
}

.ball{
    top: 22%;
    right: 3%;
    height: 20%;

    z-index: 1;
}

.deco2{
    top: 40%;
    right: 3%;
    height: 20%;

    z-index: 1;
}

.deco3{
    top: 55%;
    right: 3%;
    height: 10%;

    z-index: 1;
}

.deco33{
    top: 59%;
    right: 3%;
    height: 10%;

    z-index: 1;
}

.deco4{
    top: 67%;
    right: 18%;
    height: 9%;

    z-index: 1;
}

.deco5{
    top: 70%;
    right: 7%;
    height: 7%;

    z-index: 1;
}

.deco55{
    top: 72.5%;
    right: 5%;
    height: 7%;

    z-index: 1;
}


</style>



