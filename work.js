but2=document.getElementById("but2")
l1=document.getElementById("layer1")
l2=document.getElementById("layer2")
function press1()
{
    l1.style.display="block";
    l2.style.display="block";
}
in1=document.getElementById("in1")
in2=document.getElementById("in2")
in3=document.getElementById("in3")
co1=document.getElementById("cont1")
bu3=document.getElementById("but3")
function save1(event)
{
    event.preventDefault()
    di=document.createElement("div")
    di.setAttribute("id","cont2")
    di.innerHTML=`<h1 id="hl">${in1.value}</h1>
    <h4 id="hl1">-${in2.value}</h4>
    <p id="hl">${in3.value}</p>
    <button id="but1" onclick="close2(event)">Delete</button>`
    co1.append(di)
    l1.style.display="none";
    l2.style.display="none";
}
function close1(event)
{
    event.preventDefault()
    l1.style.display="none";
    l2.style.display="none";
}
function close2(event)
{
    event.target.parentElement.remove()
}