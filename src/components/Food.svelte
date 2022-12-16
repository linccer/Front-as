<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();

    //tabs
    import Tabs from "./Tabs.svelte";
    const tabArr=['Yesterday', 'Today', ''];
    let activeTab='Today';
    function changeTab(e){if(e.detail!='') activeTab=e.detail};

    //colors
    const tabColors= {font:'rgb(147,182,109)', background:'rgb(236,255,215)', active:'rgb(147,182,109)', activeFont:'white'};
    const contentColors={background:'white', title:'rgb(147,182,109)', field: 'rgb(216,235,177)', fill: 'rgb(173,196,132)'};

    import FoodStats from "./FoodStats.svelte";

    export let foodGoals;
    export let foodValueToday;

    function addWater (e) {dispatch('addWater', e.detail);}
    function addCarbs (e) {dispatch('addCarbs', e.detail);}
    function addFat (e) {dispatch('addFat', e.detail);}
    function addProtein (e) {dispatch('addProtein', e.detail);}
</script>
    
<div style="--fontColor:{tabColors.font};">

        <div class="container">
            <img class="tab" src="/img/nutritiontab.png" alt="">
            <img class="button" src="/img/x-food.png" alt="" on:click={()=>{dispatch('closeTab')}}>
            <img class="icon" src="/img/food-icon.png" alt="">
            <h1 id="title">Nutrition</h1>

            <div class="tab-bar">
                <Tabs {tabArr} {activeTab} {tabColors} on:changeTab={changeTab}/>
            </div>

            <div class="content">
                {#if activeTab==='Today'}
                <FoodStats {contentColors} {foodGoals} {foodValueToday} on:addWater={addWater} on:addCarbs={addCarbs} on:addProtein={addProtein} on:addFat={addFat}/>
        
                {:else if activeTab==='Yesterday'}
                <p>Yesterday's food</p>
        
                {/if}
            </div>
        </div>
</div>
    
<style>
    .container{
        position: relative;
        display: flex;
        border: 5px solid rgb(147,182,109);
        border-radius: 5%;
        padding: 5px;
        background-color: rgb(147,182,109);

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
        right:70%;
        top: 5%;
        z-index:5;
    }

    #title{
        position:absolute;
        left: 33%;
        top:7%;
        font-family: 'Press Start 2P';
        font-size: 26px;
        color: var(--fontColor);
        font-weight: lighter;
    }

    .tab-bar{position:absolute;
        width: 95%;
        top: 18%;
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
    }
</style>