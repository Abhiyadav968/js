const age = ["10", "20", "15", "18","19","55"];
document.write(age + " <br><br>");

const b = age.filter(check);

function check(ages){
    return ages >= 18;
}
document.write(b + "<br><br>");