// submit button 
function submit1(){

    // input value 
    var abedonkari_name = document.getElementById("abedonkari_name").value;
    var father = document.getElementById("father").value;
    var mother = document.getElementById("mother").value;
    var mobile_number = document.getElementById("mobile_number").value;
    var gram = document.getElementById("gram").value;
    var post_office = document.getElementById("post_office").value;
    var thana = document.getElementById("thana").value;
    var jela = document.getElementById("jela").value;
    var moja = document.getElementById("moja").value;
    var dag = document.getElementById("dag").value;
    var jomir_poriman = document.getElementById("jomir_poriman").value;
    // end input vale 




    document.getElementById("abedonkarir_name").innerHTML = abedonkari_name;
    document.getElementById("abedonkarir_father").innerHTML = father ;
    document.getElementById("abedonkarir_mother").innerHTML = mother ;
    document.getElementById("abedonkarir_sang").innerHTML = gram + ", " + post_office + ", " + thana + ", " + jela + "।";
    document.getElementById("abedonkarir_number").innerHTML = mobile_number ;
    document.getElementById("").innerHTML = "test";
    document.getElementById("").innerHTML = "test";
    document.getElementById("").innerHTML = "test";
    document.getElementById("").innerHTML = "test";
    document.getElementById("").innerHTML = "test";
    document.getElementById("").innerHTML = "test";




}
// end submit button 



// print button 
function printa(){
    var print_div = document.getElementById("print_box");
    print();
    
}

