//<button onclick="document.getElementById('correct').innerHTML=You are correct">yes</button>
document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("tester").innerHTML = "You are Correct!";
}
