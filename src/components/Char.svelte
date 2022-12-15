<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();

    import { onMount } from 'svelte';
    import { onDestroy } from 'svelte';

    // onMount(async () => {
	// 	const res = await fetch(`/tutorial/api/album`);
	// 	photos = await res.json();
	// });

    onMount (()=>{
        console.log('char mount')
    });
    onDestroy (()=>{
        console.log('char destroy')
    })

    export let gender;

    let sportProg=50;
    let sleepProg=30;
    let foodProg=75;

    let height=170;
    let weight= 70;

    let username='Petriukas';
    </script>
    
    <div>
        <div class="container">
            <img class="tab" src="/img/chartab.png" alt="">
            <img class="button" src="/img/x-char.png" alt="" on:click={()=>{dispatch('closeTab')}}>
            
            <img class="icon" src="/img/char-icon.png" alt="">
            <h1 id="title">User info</h1>

            <div class="left">

                <p class="smol">height</p>
                <div class="field" >

                    <input bind:value={height} />
                    <p class="unit">cm</p>

                </div>
                <p class="smol">weight</p>
                <div class="field">

                    <input bind:value={weight}/>
                    <p class="unit">kg</p>

                </div>
                <p>Today's progress</p>
                <div class="progC">
                    <div class="prog">
                        <img class="img" src="/img/sport.png" alt="">
                        <p>{sportProg}%</p>
                    </div>

                    <div class="prog">
                        <img class="img" src="/img/cleep.png" alt="">
                        <p>{sleepProg}%</p>
                    </div>

                    <div class="prog">
                        <img class="img" src="/img/avocado.png" alt="">
                        <p>{foodProg}%</p>
                    </div>
                </div>

            </div>




            <div class="right">

                {#if gender==='f'}
                <img class="person" src="/img/F.png" alt="">
                {:else}
                <img class="person" src="/img/M.png" alt="">
                {/if}

                <div class="cont">
                <div class="gender">
                    <img  src="/img/ficon.png" alt="" on:click={()=>{dispatch('changeGender', 'f')}}>
                    <img  src="/img/micon.png" alt="" on:click={()=>{dispatch('changeGender', 'm')}}>
                </div>
                <p class="smol">Username</p>
                <div class="fieldd" >
                    <input disabled bind:value={username}/>
                </div>

                <div class="buttonDiv">
                    <button style="visibility:hidden;">Settings</button>
                    <button>Log out</button>
                </div>
            
                </div>



            </div>
        </div>
    </div>
    
    <style>
    .container{
        position: relative;
        display: flex;
        border-radius: 5%;
        padding: 5px;
        background-color: black;
        color:white;
    }
    .tab{
        display:flex;
        height: 100%;
    }
    .button{position:absolute;
        left:88%;
        top: 7%;
        cursor:pointer;
    
    }

    .icon{position:absolute;
        left:5%;
        top: 6%;
        z-index:5;
    }

    #title{
        position:absolute;
        left: 15%;
        top:9%;
        font-family: 'Press Start 2P';
        font-size: 26px;
        color: white;
        font-weight: lighter;
    }


    .left{
        position: absolute;

        height: 310px;
        width: 350px;

        top: 25%;
        left: 5%;

        display:flex;
        flex-direction: column;
        align-items: center;
    
    }

    .right{
        position: absolute;

        height: 310px;
        width: 250px;

        top: 25%;
        right: 5%;}


    .smol{
        font-size:9px;
        width: 65%;
        text-align: left;
        padding-left: 10px;
    }

    .field{
        height: 30px;
        width: 65%;
        display: flex;
    }

    .fieldd{
        height: 30px;
        width: 100%;
        display: flex;
    }

    .progC{
        display: flex;
        width: 100%;
        height:150px;
    }

    .prog{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .img{
        height:80px;
        width:fit-content;
    }
    

    input{
    border:none;
    text-align: center;
    height: 100%;
    width: 80%;
    border-radius: 5px;
    background-color: rgb(67,47,75);;
    color: white;
    margin:0;
    font-family: "Press Start 2P";
    font-size: 11px;
    text-align: left;
    padding-left: 12px;
}


    
input:focus{
    outline:none;
}

.unit{
    position: relative;
    right: 35px;
    bottom: 5px;
    font-size: smaller;
}


.person{
    height: 210px;
    width:fit-content;
    position:relative;
    right: 30px;
    bottom:80px;
}

.cont{
    width: 100%;
    height:170px;

    position:relative;
    bottom: 70px;
}

.gender{
    height: 30px;
    width: 85%;
    display: flex;
    justify-content: right;
}

.buttonDiv{
    margin-top: 15px;
    height: 20px;
    width: 100%;
    display: flex;
    gap:15px;
}

button{width:40%;
background-color: rgb(67,63,100);
border: 2px solid black;
border-radius: 5px;
outline:none;
font-family: "Press Start 2P";
font-size: 11px;
}

button:active{
	background-color: rgb(79, 74, 119);
}





    </style>