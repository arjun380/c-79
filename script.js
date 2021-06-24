var name_array = [];

//function submit//
function submiting()
{
    var n1 = document.getElementById("std1").value;
    var n2 = document.getElementById("std2").value;
    var n3 = document.getElementById("std3").value;
    var n4 = document.getElementById("std4").value;
    var n5 = document.getElementById("std5").value;

    name_array.push(n1);
    name_array.push(n2);
    name_array.push(n3);
    name_array.push(n4);
    name_array.push(n5);

    console.log(name_array);

    document.getElementById("display_name").innerHTML = name_array;
    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("sort_btn").style.display = "inline-block";


}
//function sorting//
function sorting()
{
    name_array.sort();
    console.log(name_array);
    document.getElementById("display_name").innerHTML = name_array;
}