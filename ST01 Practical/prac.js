function GenerateTable() {
    let num=Number(document.getElementById("num").value);
    let output="";
    for(let i=1; i<=10; i++){
        output=output+num+"x"+i+"="+(num*i)+"<br>";
    }
    document.getElementById("result").innerHTML=output;
}