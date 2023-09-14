var rup,doll,der,pound

rup = document.getElementById("rupees")
doll = document.getElementById("dollars")
der = document.getElementById("derhams")
pound = document.getElementById("pounds")


function R_toOthers(){

    let r = rup.value
    let d = r*0.0121
    let dh = r*0.0443
    let pd = r*0.373
    doll.value = d
    der.value = dh
    pound.value = pd

}

function D_toOthers(){
    let d = doll.value
    let r = d*82.9105
    let dh = d*3.6731
    let pd = d*30.93

    rup.value = r
    der.value = dh
    pound.value = pd
}

function Dh_toOthers(){
    let dh = der.value
    let r = dh*22.5709
    let d = dh*0.2723
    let pd = dh*8.4207

    rup.value = r
    doll.value = d
    pound.value = pd
}

function P_toOthers(){
    let pd = pound.value
    let r = pd*2.6804
    let d = pd*0.0323
    let dh = pd*0.1188

    rup.value = r
    doll.value = d
    der.value = dh


    
}






