const buyChocolate = {
    flavor: "Milk chocolate"
}

const addFlavoring = {
    flavor: "Mint"
}

const makeBarkMixture = (obj) => {
    if  (obj.flavor === "Mint") {
        obj.mixed = true;
    }
    else if  (obj.flavor != "Mint") {
        obj.mixed = false;

    }
    return obj 
}

const bakeCandy = (obj) => {
    if (obj.mixed === true) {
        obj.baked = true
    } else if (obj.mixed != true){
        obj.baked = false;
    }
    return obj 
}

const breakBark = (obj) => {
    if (obj.baked === true){
        return  [`Mint Chocolate Bark Piece, Mint Chocolate Bark Piece, Mint Chocolate Bark Piece, Mint Chocolate Bark Piece, Mint Chocolate Bark Piece, Mint Chocolate Bark Piece,`]
    }

}


makeBarkMixture(addFlavoring);
const mixture = makeBarkMixture(addFlavoring)
const mixture2 = bakeCandy(addFlavoring)
const mixture3 = breakBark(addFlavoring)



console.log(mixture)
console.log(mixture2)
console.log(mixture3)


