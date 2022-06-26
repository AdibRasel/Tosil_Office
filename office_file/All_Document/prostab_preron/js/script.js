
// var Mc_info = {
//     Mc_No: Grahker_Name,
//     Grahker_Name: Grahker_Name,
//     Mobile_No: Mobile_No
// }

function Submit(){
    // tbody.appendChild(new_tr);

    // input value 
    var Mc_No = document.getElementById("MC_No").value;
    var Grahker_Name = document.getElementById("Grahker_Name").value;
    var Mobile_No = document.getElementById("Mobile_No").value;
    var Abedon_jomadan_Kari = document.getElementById("Abedon_jomadan_Kari").value;

    // show id 
    // var Mc_No_Show = document.getElementById("Mc_No_Show");
    // var Name_Show = document.getElementById("Name_Show");
    // var Mobile_No_Show = document.getElementById("Mobile_No_Show");
    // var Abedon_jomadan_Kari_Show = document.getElementById("Abedon_jomadan_Karis");
    
    // Mc_No_Show.innerHTML = Mc_No;
    // Name_Show.innerHTML = Grahker_Name;
    // Mobile_No_Show.innerHTML = Mobile_No;
    // Abedon_jomadan_Kari_Show.innerHTML = Abedon_jomadan_Kari;
    // alert("Hello")
    // document.getElementById("Mc_No_Show").innerHTML = "Hello"



    // Mc_No = {
    //     Mc_No: Mc_No,
    //     Grahker_Name: Grahker_Name,
    //     Mobile_No: Mobile_No
    // }

    // console.log(Abedon_jomadan_Kari)
    var tbody = document.getElementById("tbody")

    var new_tr = document.createElement("tr")
    // new_tr.appendChild(new_td)
    

    var new_td = document.createElement("td");
    new_td.innerHTML = Mc_No;
    new_tr.appendChild(new_td);

    var new_td = document.createElement("td");
    new_td.innerHTML = Grahker_Name;
    new_tr.appendChild(new_td)

    var new_td = document.createElement("td")
    new_td.innerHTML = Mobile_No
    new_tr.appendChild(new_td)

    var new_td = document.createElement("td")
    new_td.innerHTML = Abedon_jomadan_Kari
    new_tr.appendChild(new_td)

    tbody.appendChild(new_tr);
    // console.log(new_tr)
}
