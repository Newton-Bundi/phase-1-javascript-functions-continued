// code your solution here

function saturdayFun(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

saturdayFun();

function mondayWork(activity="go to the office"){
    return (`This Monday, I will ${activity}.`)
}

mondayWork();
saturdayFun("bathe my dog");

mondayWork("work from home");


function wrapAdjective(arg="*"){
    return function(para="special"){
        return(`You are ${arg}${para}${arg}!`)
    }
}

wrapAdjective("||")("a dedicated programmer");
