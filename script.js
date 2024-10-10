let depoAmt = 1000

let balance = document.querySelector("#balance");

balance.innerText = depoAmt
let depositButton = document.querySelector("#depositbutton")


function getNumber() {
    let dep_amt = parseInt(document.getElementById("dep_amt").value);
    if (isNaN(dep_amt)) {
        document.getElementById("dep_amt").value = "" ;
        alert("Please enter a valid Number!")
    }
    else {
        depoAmt += dep_amt;
        balance.innerText = depoAmt
        document.getElementById("dep_amt").value = "" ;
    }
    // console.log(dep_amt + 2)
    // bal_amt += dep_amt;
    // alert("Entered Number: " + dep_amt + " " );        
}

function getWithNumber() {
    let with_amt = parseInt(document.getElementById("with_amt").value);
    if (isNaN(with_amt)) {
        document.getElementById("with_amt").value = "" ;
        alert("Please enter a valid number!")
    }
    else {
        if (with_amt > depoAmt) {
            document.getElementById("with_amt").value = "" ;
    
            alert("Insufficient balance! Your current balance is: $" + depoAmt);
            console.error("Withdrawal amount exceeds the available balance.");
            
        }
        else {
            depoAmt -= with_amt;
            balance.innerText = depoAmt;
            document.getElementById("with_amt").value = "" ;
    
        }
    }
    


            
       
}



