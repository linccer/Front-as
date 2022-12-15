<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
import { createEventDispatcher } from "svelte";
const dispatch=createEventDispatcher();

export let tabArr;
export let activeTab;
export let tabColors; //font, background, active, activeFont
    
</script>



<div class="tabs"
style="--background: {tabColors.background};
       --active: {tabColors.active};
       --font: {tabColors.font};
       --activeFont: {tabColors.activeFont};">
    <ul>
        {#each tabArr as tab}
        
        <li on:click={()=>{dispatch('changeTab', tab)}}>
            <div class:active={tab===activeTab}>{tab}</div>
        </li>
        {/each}
    </ul>
</div>



<style>
    div{
        border: 7px solid;
        border-color: var(--background);
    }
    .tabs{
        margin-bottom:40px;
    }
    ul{
        display:flex;
        justify-content: center;
        list-style-type: none;
        gap: 2rem;
        font-size: 1.2rem;
        font-family: 'Press Start 2P';
        font-weight: lighter;
    }
    li{
        cursor: pointer;
        color: var(--font);
        width:100%;
    }
    li:nth-child(3){
        cursor: default;
    }
    .active{
        background-color: var(--active);
        border-color: var(--active);
        border-radius: 15px;
        border-style:solid;
        color: var(--activeFont);
    }

</style>