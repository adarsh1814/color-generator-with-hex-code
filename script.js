function colorChange() {
    let hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexCode = '';

    for (let i = 0; i <= 5; i++) {
        let randomIndex = Math.floor(Math.random() * hexNum.length);
        hexCode += hexNum[randomIndex];
        console.log(randomIndex);
    }


    document.getElementById("hex-code").innerHTML = hexCode;
    document.body.style.backgroundColor = '#' + hexCode;
}
