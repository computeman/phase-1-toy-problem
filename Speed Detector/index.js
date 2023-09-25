function calculateSpeed(speed){
    let speedLimit = 70;
    let demeritPoints = 0;

    if(speed < speedLimit){
        console.log("Ok")
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Demerit Points: ${demeritPoints}`);
        if(demeritPoints > 12){
            console.log("Licence suspended.")
        }
    }
}