// code your solution here

function saturdayFun(activity="roller-skate") {
    console.log(`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office"){
    console.log(`This Monday, I will ${activity}`)
}
saturdayFun("bathe my dog");

mondayWork("work from home");


function wrapAdjective(arg="*"){
    return function(para="special"){
        console.log(`You are ${arg}${para}${arg}!`)
    }
}

wrapAdjective("||")("a dedicated programmer");
