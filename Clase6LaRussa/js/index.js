function jugar () {
    let nombre = "Figuritas";
    let sobres = parseInt(prompt("Cuantos sobres abris?"));
    console.log("Te salieron estas figuritas:");
    for(x = 1; x<=(sobres * 5); x++){
    // Esto genera un numero Random entre 1 y 34 para la hoja, y 1 y 18 para la figurita
        let hoja = Math.floor(Math.random() * 34) + 1;
        let figu = Math.floor(Math.random() * 18) + 1;
        console.log(`Figurita ${hoja}-${figu}`);
        if(hoja == 20 && figu == 10){
            alert("Te Salió Messi !!!");
        }
    }
}