const 
toggler = document.querySelector(".toggler");
basicPrice = document.querySelector(".basic-price");
proPrice = document.querySelector(".pro-price");
masterPrice = document.querySelector(".master-price");

// процент скидки при оплате за год
percent = 15.75;

// расчет стоимости тарифа basic
basicMonth = 19;
yearSummBasic = basicMonth*12;
basicYear = Math.round(yearSummBasic-yearSummBasic*percent/100);

// расчет стоимости тарифа professional
proMonth = 25;
yearSummPro = proMonth*12;
proYear = Math.round(yearSummPro-yearSummPro*percent/100);

// расчет стоимости тарифа master
masterMonth = 40;
yearSummMaster = masterMonth*12;
masterYear = Math.round(yearSummMaster-yearSummMaster*percent/100);


toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        basicPrice.innerHTML = basicYear;
        proPrice.innerHTML = proYear;
        masterPrice.innerHTML = masterYear;
    }
    else{
        basicPrice.innerHTML = basicMonth;
        proPrice.innerHTML = proMonth;
        masterPrice.innerHTML = masterMonth; 
    }
})