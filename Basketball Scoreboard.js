let scoreElOne = document.getElementById("score-el-1")
let scoreElTwo = document.getElementById("score-el-2")
let count1 = 0
let count2 = 0

function plusOne1() {
    count1 += 1
    scoreElOne.innerText = count1
}

function plusTwo1() {
    count1 += 2
    scoreElOne.innerText = count1
}

function plusThree1() {
    count1 += 3
    scoreElOne.innerText = count1
}


function plusOne2() {
    count2 += 1
    scoreElTwo.innerText = count2
}

function plusTwo2() {
    count2 += 2
    scoreElTwo.innerText = count2
}

function plusThree2() {
    count2 += 3
    scoreElTwo.innerText = count2
}

function reset() {
    count1 = 0
    count2 = 0
    scoreElOne.innerText = count1
    scoreElTwo.innerText = count2
}