<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
import { createEventDispatcher } from "svelte";
const dispatch=createEventDispatcher();
</script>









<div>
    <div class="container">
        <img class="tab" src="/img/musictab.png" alt="">
        <img class="button" src="/img/x-music.png" alt="" on:click={()=>{dispatch('closeTab')}}>
        <img class="icon" src="/img/music-icon.png" alt="">
        <h1 id="title">Music recommendations</h1>

        <div class="playlists">

            <a href="https://open.spotify.com/playlist/1SU3Xvf26zQ5PQwVOZZvfI" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist1.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/37i9dQZF1DXdURFimg6Blm" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist2.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/37i9dQZF1DX32NsLKyzScr" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist3.jpg" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/3dpeS3ymnMed2Qaf7fT7Uz" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist4.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/37i9dQZF1DX9oh43oAzkyx" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist5.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/37i9dQZF1DX6hvx9KDaW4s" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist6.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/2PAGgoyhVYdC0q6vnb8qAL" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist7.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/37i9dQZF1DWSJaGvRwFnf6" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist8.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/551SJmkXCINPQEZgAAEjVM" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist9.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/190wZ2oVo7MTrBvNlPiub2" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist10.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/37i9dQZF1DWUSyphfcc6aL" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist11.png" alt="">
            </a>

            <a href="https://open.spotify.com/playlist/37i9dQZF1DWYUYYlhkTuEn" target="_blank" rel="noreferrer">
                <img class="playlist-cover" src="/img/playlist12.png" alt="">
            </a>
            
        </div>
    </div>
</div>

<style>
.container{
    position: relative;
    display: flex;
    border: 5px solid black; 
    border-radius: 5%;
    padding: 5px;
    background-color: black;
}
.tab{
    display:flex;
    height: 100%;
}
.button{position:absolute;
    left:90%;
    top: 5%;
    cursor:pointer;
    z-index:5;
}
.icon{position:absolute;
        right:80%;
        top: 5%;
    }


#title{
    position:absolute;
    left: 23%;
    top:4%;
    font-family: 'Press Start 2P';
    font-size: 26px;
    color: white;
    font-weight: lighter;
    text-align: left;
    }
.playlists {
    position: absolute;
    height: 72%;
    width: 99%;
    left:0.3%;
    top: 22%;
}
.playlist-cover{
    height: 29%;
    border-radius: 10%;
    margin-top:0px;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:10px;
    
}

</style>