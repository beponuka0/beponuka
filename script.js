//alert("Привет, я JS");

function guess()
{
    var number = prompt("Введи число:");
    var guessNumber = 10;

    if (number == guessNumber) {
        return alert("Вы угадали!");
    }
    else if (number > guessNumber ) {
        alert("Это много!");
        return guess();
    }
    else {
        alert ("Это мало!");
        return guess();
    }
}
//guess();


function reminder() {
    window.close();
}

//setTimeout(reminder, 5000);


function validForm() {
    var name = document.getElementById("name").value;
    var reg_name = /^[a-zа-яё]+$/i;
    
    if (reg_name.test(name) == false) {
    alert("Неверные данные");
    }
    
}

document.querySelector(".button").addEventListener("click", validForm);

