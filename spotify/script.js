async function getSongs(){
    let a= await fetch()
    let response= await a.text;
    console.log(response)
    let div= document.createElement("div")
    div.innerHTML=response;
    let as=div.getElementsByTagName("a");
    let songs= []
    for(let index=0;index<as.length;length++){
        const element=as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    return songs 
}
async function main(){
    let songs= await getSongs();
    console.log(songs)
    var audio= new Audio(songs[0]);
    audio.play();
    audio.addEventListener("loadeddata",() =>{
        let duration=audio.duration;
        console.log(audio.duration,audio.currentSrc,audio.currentTime)
    });
}
main()