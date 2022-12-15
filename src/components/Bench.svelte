<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();




    export let exerciseArr;


    </script>
    
    <div>
        <div class="container">
            <img class="tab" src="/img/benchtab.png" alt="">
            <img class="button" src="/img/x-bench.png" alt="" on:click={()=>{dispatch('closeTab')}}>

            <img class="icon" src="/img/bench-icon.png" alt="">
            <h1 id="title">Fitness</h1>
            <p class="subtitle">Today's workout:</p>
            <p class="lilText">Completed</p>

            <div class="exercises">
            {#each exerciseArr as A}
        
                <div class="item">

                    <div class="imgdiv">
                    {#if A.completed===true}
                    <img class="circle" src="/img/completed.png" alt=""     on:click={()=>{dispatch('changeStatus', {index:A.index, status:!A.completed})}}>
                    {:else}
                    <img class="circle" src="/img/NOTcompleted.png" alt="" on:click={()=>{A.completed=!A.completed;}}>
                    {/if}
                    </div>

                    <span>{A.count}x {A.name}</span>

                </div>

            {/each}
            </div>

            
        </div>
    </div>
    
    <style>
    .container{
        position: relative;
        display: flex;
        border: 5px solid rgb(71,43,82); 
        border-radius: 5%;
        padding: 5px;
        background-color: rgb(71,43,82);
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
        top: 4%;
        z-index:5;
    }

    #title{
        position:absolute;
        left: 23%;
        top:7%;
        font-family: 'Press Start 2P';
        font-size: 26px;
        color: white;
        font-weight: lighter;
    }

    .subtitle{
        position:absolute;
        left: 9%;
        top:20%;
        font-family: 'Press Start 2P';
        font-size: 18px;
        color: white;
        font-weight: lighter;
    }

    .lilText{
        position:absolute;
        right: 7%;
        top:26%;
        font-family: 'Press Start 2P';
        font-size: 8px;
        color: white;
        font-weight: lighter;
    }

    .exercises{
        position: absolute;
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        top: 30%;
        left: 5%;

        font-size: 16px;
        font-weight: lighter;
        color: white;
        text-align: left;
    }

    .item{
        background-color: rgb(71,43,82);
        border-radius: 10px;

        padding: 15px;
    }

    .imgdiv{
        position:absolute;
        right: 3%;
    }

    .circle{
        position: relative;
        bottom:13px;

    }
    


    </style>