//dynamically update rate value
function updateRate()
{
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    //validate number greater than 0
  let x = document.getElementById("principal").value;
  let text;
  if (isNaN(x) || x < 1 ) {
    alert("Enter a positive number")
  } else {
      //return results
    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;

        document.getElementById("result").innerHTML = "\<br\>\<br\>If you deposit <span class='highlight'>" + principal + "</span>,\<br\>at an interest rate of <span class='highlight'>" + rate + "%</span>\<br\>You will receive an amount of <span class='highlight'>" + interest + "</span>,\<br\>in the year <span class='highlight'>" + year + "</span>.";
}

}
