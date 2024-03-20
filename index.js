// Code your solution in this file!
function distanceFromHqInBlocks(value){
    // return block - 42;
    if (value > 42){
        return value - 42;
    }else{
        return 42 - value;
    }
}

function distanceFromHqInFeet(value){
    distanceFromHqInBlocks(value);
    return distanceFromHqInBlocks(value) * 264;
}
function distanceTravelledInFeet(start, destination){
 if( start > destination){
    return ( start - destination) * 264;
 }else{
    return (destination - start) * 264;
     }
}
function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(start, destination);
    if(distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    }
    else if(distanceTravelledInFeet(start, destination) > 
    400 && distanceTravelledInFeet(start, destination) <= 2000){
       return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    }
    else if(distanceTravelledInFeet(start, destination) > 2000 && 
    distanceTravelledInFeet(start, destination) <= 2500){
        return 25;
    }else{
        return "cannot travel that far";
    }
};