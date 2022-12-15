<script>
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();

    export let contentColors;   //background, title, field, fill



    let KCALgoal=2400;
    let waterGoal=1.9;

    let carbGoal= 310;
    let proteinGoal=150;
    let fatGoal=60;

    let carbValue=160;
    let proteinValue=96;
    let fatValue=32;

    let waterValue=0.5;

    $: carbs=`${carbValue}g / ${carbGoal}g`;
    $: protein=`${proteinValue}g / ${proteinGoal}g`;
    $: fat=`${fatValue}g / ${fatGoal}g`;

    $: carbCL= 100-(carbValue/carbGoal*100);               $:if (carbCL<0) carbCL=0;
    $: proteinCL=100-(proteinValue/proteinGoal*100);       $:if (proteinCL<0) proteinCL=0;
    $: fatCL =100-(fatValue/fatGoal*100);                  $:if (fatCL<0) fatCL=0;
    $: waterCL =100-(waterValue/waterGoal*100);            $:if (waterCL<0) waterCL=0;




    $: percentTOTALnutrition= (300-carbCL-proteinCL-fatCL)/3;
    $:if (percentTOTALnutrition > 100) percentTOTALnutrition=100;



    let carbInput=0;
    let proteinInput=0;
    let fatInput=0;
    let waterInput=0;

    function addCarbs (){
        carbValue= carbValue + Number(carbInput);
        carbInput=0;}
    function addProtein (){
        proteinValue= proteinValue + Number(proteinInput);
        proteinInput=0;}
    function addFat (){
        fatValue= fatValue + Number(fatInput);
        fatInput=0;}
    function addWater (){
        waterValue= waterValue + Math.floor(Number(waterInput))/1000;
        waterInput=0;}
    
    
    
    $: percentKCAL=(proteinValue*4 + carbValue*4 + fatValue*9)/KCALgoal*100;        $:if (percentKCAL > 100) percentKCAL=100;
    $: percentWATER=waterValue/waterGoal*100;                                       $:if (percentWATER > 100) percentWATER=100;
    $: percentTOTAL=(percentKCAL+percentWATER)/2;
    $: if (percentTOTAL > 100) percentTOTAL=100;




</script>

<div class="content"
style="--background: {contentColors.background};
       --title: {contentColors.title};
       --field: {contentColors.field};
       --fill: {contentColors.fill};
       
       --carb-cl: {carbCL}%;
       --protein-cl: {proteinCL}%;
       --fat-cl: {fatCL}%;
       --water-cl: {waterCL}%;

       ">


       <div class="nutri">
            <p class="title">Nutrition</p>

            <div class="row">

            <div class="foodPics">

                <div class="foodContainer">
                <img class="foodpic carbimg wheat" src="/img/carb-full.png" alt="">
                <img class="foodpic imgshadow wheat" src="/img/carb-outline.png" alt="">
                <img class="foodpic outline wheat" src="/img/carb-outline.png" alt="">
                </div>
                
                <div class="foodContainer">
                <img class="foodpic proteinimg" src="/img/protein-full.png" alt="">
                <img class="foodpic imgshadow" src="/img/protein-outline.png" alt="">
                <img class="foodpic outline" src="/img/protein-outline.png" alt="">
                </div>
                
                <div class="foodContainer">
                <img class="foodpic fatimg" src="/img/fat-full.png" alt="">
                <img class="foodpic imgshadow" src="/img/fat-outline.png" alt="">
                <img class="foodpic outline" src="/img/fat-outline.png" alt="">
                </div>
                
            </div>

            <div class="littleRow">

                <div class="grams"> <input bind:value={carbInput} /> g</div>
                <button class="plus" on:click={()=>{addCarbs();}}>+</button>

                <div class="grams">  <input  bind:value={proteinInput} /> g</div>
                <button class="plus" on:click={()=>{addProtein();}}>+</button>

                <div class="grams">  <input  bind:value={fatInput}/> g</div> 
                <button class="plus" on:click={()=>{addFat();}}>+</button>
            </div>





            <div class="nutriBars">

                <div class="percentBar">
                    <p class="percentText">{carbs}</p>
                    <img class="barIcon" src="/img/carb-icon.png" alt="">
                </div>

                <div class="percentBar">
                    <p class="percentText">{protein}</p>
                    <img class="barIcon" src="/img/protein-icon.png" alt="">
                </div>

                <div class="percentBar">
                    <p class="percentText">{fat}</p>
                    <img class="barIcon" src="/img/fat-icon.png" alt="">
                </div>

                <div class="percentBar">
                    <div class="filled" style="width:{180*percentTOTALnutrition/100}px"></div>
                    <p class="percentText">Total</p>
                </div>
            </div>
            </div>
       </div>

       <div class=row>
            <div class="hydra">
                <p class="title">Hydration</p>

                <div class="hydradiv">

                    <div class="hydra1">

                        <p class="ml">{waterInput} ml</p>

                        <div class="slidecontainer">
                            <input type="range" min="0" max="500" bind:value={waterInput} class="slider" id="myRange">
                        </div>

                        <button class="add" on:click={()=>{addWater();}}>+ Add</button>

                    </div>


                    <div class="hydra2">

                        <p class="hydra2-text">Current intake:</p>
                        <p class="hydra2-text2">{waterValue} l</p>
                        <p class="hydra2-text">Daily goal:</p>
                        <p class="hydra2-text2">{waterGoal} l</p>

                    </div>


                    <div class="hydra3">

                        <img class="foodpic waterpic water" src="/img/water-full.png" alt="">
                        <img class="foodpic outline water" src="/img/water-empty.png" alt="">

                        <p class="waterTXT">{Math.floor(percentWATER)}%</p>

                    </div>

                </div>

            </div>

            <div class="goals">
                <p class="title">Your goals</p>

                <div class="kcal">
                    <div class="percentBar">
                        <div class="filled" style="width:{180*percentKCAL/100}px"></div>
                        <p class="percentText">{KCALgoal} kcal</p>
                        <img class="barIcon" src="/img/kcal-icon.png" alt="">
                    </div>
                </div>


                <div class="liters">
                    <div class="percentBar">
                        <div class="filled" style="width:{180*percentWATER/100}px"></div>
                        <p class="percentText">{waterGoal} l</p>
                        <img class="barIcon" src="/img/water-icon.png" alt="">
                    </div>
                </div>


                <div class="total">
                    <div class="percentBar">
                        <div class="filled" style="width:{180*percentTOTAL/100}px"></div>
                        <p class="percentText">Total</p>
                    </div>
                </div>

            </div>
       </div>


</div>

<style>

    .content {
        height: 370px;
        width: 600px;
        margin-left: 8px;
    }

    .nutri{
        height: 52%;
        margin-bottom: 10px;
        padding-top: 1px;

        background-color: var(--background);
        border-radius: 10px;
    }

    .row{
        height: 42%;
        display: flex;
        gap: 3%;
    }

    .hydra{
        height: 100%;
        width: 58.5%;

        background-color: var(--background);
        border-radius: 10px;
    }

    .goals{
        height: 100%;
        width: 38.5%;

        background-color: var(--background);
        border-radius: 10px;
    }

    .title{
        margin-bottom:10px;
        margin-top: 6px;
        margin-left:5px;
        margin-right: 5px;;
        border-radius: 5px;
        background-color: var(--title);
        padding: 4px;
        padding-left: 12px;
        text-align: left;
        color: var(--background);
        font-weight: light;
        font-size: 15px;
    }

    .percentBar{
        height: 30px;
        width: 180px;
        margin-left: 10px;
        margin-bottom: 7px;
        border-radius: 6px;

        background-color: var(--field);

        display: flex;
    }
    .filled{
        position: absolute;
        height: 30px;
        margin-bottom: 7px;
        border-radius: 6px;

        background-color: var(--fill);
    }

    .percentText{
        position: absolute;
        margin-top: 8px;
        width: 176px;
        text-align: right;

        font-size: 12px;
        font-weight: lighter;

        color: var(--background);
    }


.foodPics{
    width: 58.5%;
}
.nutriBars{
    width: 38.5%;
}


.barIcon{
    position: absolute;
    right: 200px;
    align-self: center;
}



.foodPics{
    display: flex;
    
}

.foodContainer{
    width: 30%;
    margin-left: 23px;
    display: flex;
}
.foodpic{
    height: 110px;
    
}

 .carbimg{
    clip-path: inset(var(--carb-cl) 0px 0px 0px);
    position: absolute;

    z-index:10;
}

.proteinimg{
    clip-path: inset(var(--protein-cl) 0px 0px 0px);
    position: absolute;


}

.fatimg{
    clip-path: inset(var(--fat-cl) 0px 0px 0px);
    position: absolute;


    z-index:20;
} 

.waterpic{
    clip-path: inset(var(--water-cl) 0px 0px 0px);
    position: absolute;


    z-index:20;
}


.imgshadow{
    position:absolute;

    transform: scale(1.05);
    
    filter: brightness(0);
    opacity: 0.1;
}

/* .outline {   } */

.wheat{
    transform: scale(1.2);
}






.littleRow{
    display:flex;
    position: absolute;
    top: 165px;
    left: 20px;
}
.grams{
    width: 54px;
    background-color: var(--field);
    border-radius: 5px;
    font-size: 12px;
    padding-top:4px;
    color: var(--background);
    margin-right: 5px;
    display: flex;
}

input{
    border:none;
    text-align: center;
    font-size: 15px;
    width: 60%;
    border-radius: 5px;
    background-color: var(--field);
    color: var(--background);
    margin:0;
    font-family: "Press Start 2P";
    font-size: 11px;
    text-align: right;
}


    
input:focus{
    outline:none;
}
.plus{
    width: 30px;
    margin-right:30px;

    background-color: var(--fill);
    border-radius: 5px;
    font-size: 20px;
    padding:0;

    color: var(--background);
    border:none;
}

.plus:active{
    background-color: var(--title);
}




.hydradiv{display:flex;
gap: 10px;}

.hydra1{
    width:95px;
    height: 100px;
    margin-left: 10px;
}

.hydra2{
    width:135px;
    height: 100px;
}

.hydra3{
    width:70px;
    height: 100px;
}

.waterTXT{
    position: absolute;
    bottom: 17px;
    left: 295px;
    z-index: 30;

    color: var(--background);
    font-size: 14px;
    text-shadow: 1px 1px black;
}

.hydra2-text{
    font-size:10px;

    white-space: nowrap;
    margin:0;
    text-align: left;
    margin-left: 10%;

}

.hydra2-text2{
    font-size:10px;
    margin-bottom:15px;
    margin-left: 10%;

    text-align: left;
    border: 1px solid;
    border-radius: 5px;
    color: var(--background);
    background-color: var(--title);
    width: 70%;
    padding: 6px;

}




.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 5px; /* Specified height */
  background: var(--field); /* Grey background */
  outline: none; /* Remove outline */
  border: 1px solid var(--title);
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 5px; /* Set a specific slider handle width */
  height: 15px; /* Slider handle height */
  background: var(--title); /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 5px; /* Set a specific slider handle width */
  height: 15px; /* Slider handle height */
  background: var(--title); /* Green background */
  cursor: pointer; /* Cursor on hover */
}


.ml{
    font-size:15px;
    white-space: nowrap;
    margin-top:20px;
    margin-bottom: 0;
}

.add{
    width: 80px;
    margin-top: 15px;
    white-space: nowrap;
    background-color: var(--fill);
    border-radius: 5px;
    font-size: 12px;
    padding:5px;

    color: var(--background);
    border:none;

    font-family: "Press Start 2P";
}

.add:active{
    background-color: var(--title);
}

</style>