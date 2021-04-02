
function calcEstim(){
    /* Put total at 0 to reset value at each function call */
    let total = 0;

    /* Calculate price for each value */
    let surfacePrice = 1000*document.getElementById("surface").value;
    let bedroomPrice = 10000*document.getElementById("bedroom").value;
    let materialID = document.getElementById("material").value;
    const material = {
        parpaing : 1.2,
        brique: 1.3,
        bois: 1.15,
    }
    let materialPrice = material[materialID];
    /* Calculate total. Had to use a Math.round or else price with "bois" over 100000 would give weird result like 114499.9999999 instead of 114500 */
    total = Math.round((surfacePrice+bedroomPrice)*materialPrice);
    /* Display result on the HTML page */
    let resultEstim = document.getElementById("resultEstim");
    resultEstim.innerText = "Le coût est estimé à " + total + " €.";
    return total;
}

