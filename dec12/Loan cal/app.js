let form = document.getElementById("inp-form");
form.addEventListener("submit", calculateInterest);

function calculateInterest(e){
    e.preventDefault();

    let principal = document.getElementById("principal").value;
    let interest = document.getElementById("interest").value;
    let time = document.getElementById("time").value;

    let SI = (principal*interest*time)/100;

    let total_payment = document.getElementById("total_payment");
    let total_interest = document.getElementById("total_interest");
    let monthly_interest = document.getElementById("monthly_interest");

    let a = parseInt(principal) + parseInt(SI);
    total_payment.innerHTML=`total payment is: ${a}`;
    total_interest.innerHTML=`total interest is : ${SI}`;
    let temp = SI/(12*time);
    let c=temp.toFixed(2);
    monthly_interest.innerHTML=`monthly interest is ${c}`;

}
