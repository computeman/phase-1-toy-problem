function calculateSpeed(){
    let speed = prompt("Enter the speed of the vehicle");
    speedint = parseFloat(speed);
    let speedLimit = 70;
    let demeritPoints = 0;

    if(speedint < speedLimit){
        console.log("Ok")
    } else {
        demeritPoints = Math.floor((speedint - speedLimit) / 5);
        console.log(`Demerit Points: ${demeritPoints}`);
        if(demeritPoints > 12){
            console.log("Licence suspended.")
        }
    }
}
calculateSpeed();