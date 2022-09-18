function jugar () {
    const album = new Array(612).fill(0);
    let albumLleno = 0;
    let sobres = parseInt(prompt("Cuantos sobres abris?"));
    console.log("Te salieron estas figuritas:");
    for(x = 1; x<=(sobres * 5); x++){
    // Esto genera un numero Random entre 0 y 611 para determinar la figurita
        let figu = Math.floor(Math.random() * 612);
        console.log(`Figurita ${figu}`);
        album[figu] += 1;
    }
    if(album[369] != 0){
        console.log("Te Salió Messi !!!");
        alert("Te Salió Messi !!!");
    }
    let figusUnicas = album.filter((item) => item != 0);
    let figusDelTotal = figusUnicas.length;
    let busqueda = album.some(item => item === 0);
    if (busqueda === false){
        albumLleno = 1;
    }
    let filtroRepetidas = album.filter((item) => item > 1);
    console.log("FILTRO REPETIDAS "+filtroRepetidas);
    let figusRepetidas = (filtroRepetidas.reduce((acum, item) => (acum + item),0)) - filtroRepetidas.length;
    console.log("FIGUS REPETIDAS "+figusRepetidas);
    console.log("Tenes: "+figusDelTotal+" de "+album.length);
    console.log("Tenes: "+figusRepetidas+" Repetidas");
    alert("Tenes: "+figusDelTotal+" de "+album.length);
    alert("Tenes: "+figusRepetidas+" Repetidas");
    if (albumLleno === 1) {
        console.log("LLENASTE EL ALBUM!!!");
        alert("LLENASTE EL ALBUM!!!");
    } else {
        console.log("NO LLENASTE EL ALBUM");
        alert("NO LLENASTE EL ALBUM");
    }
    console.log(album);
}