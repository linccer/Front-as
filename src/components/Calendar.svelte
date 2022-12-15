<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();

    let weekRange= '07/12 - 07-18';

    let calendar= ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

</script>
    
    <div>
        <div class="container">
            <img class="tab" src="/img/calendartab.png" alt="">
            <img class="button" src="/img/x-calendar.png" alt="" on:click={()=>{dispatch('closeTab')}}>
            
            <img class="icon" src="/img/calendar-icon.png" alt="">
            <h1 id="title">This week:</h1>
            <p class="subtitle">{weekRange}</p>

            <div class="content">
                {#each calendar as day}
        
                <div class="day">

                    <p class="d">{day}</p>
                    <p>stuff</p>
                </div>

            {/each}
            </div>

        </div>
    </div>
    
    <style>
    .container{
        position: relative;
        display: flex;
        border: 5px solid rgb(172,50,50);
        border-radius: 5%;
        padding: 5px;
        background-color: rgb(172,50,50);
        color: rgb(172,50,50);
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
        font-weight: lighter;
    }

    .subtitle{
        position:absolute;
        right: 7%;
        top:15%;
        font-family: 'Press Start 2P';
        font-size: 18px;
        font-weight: lighter;
    }

    .content{
        width: 96%;
        height: 68%;
        position: absolute;
        left: 2%;
        top: 24%;

        display:flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2%;

    }

    .day{
        border-radius: 5px;
        height: 45%;
        width: 22%;
        background-color: rgb(217,217,217);

        display:flex;
        flex-direction: column;
        padding:0;
    }
    
    .d{
        margin:0;
        background-color: rgb(172,50,50);
        color: white;
        height: 18%;
        border-radius: 5px;
        padding-top:8%;
    }
    </style>