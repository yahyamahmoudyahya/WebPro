//page 0
//صفحة السوق
//page shope
//movments
//
//function for display logen page
const intologen = () => {
  document.getElementById("pageshop0").style.display = "none";
  document.getElementById("body2").style.display = "block";
  document.title = "loding";
};
//function for display shope page
const intoshop = () => {
  document.getElementById("body1").style.display = "none";
  document.getElementById("pageshop0").style.display = "block";
  document.title = "Beauty Tools";
};
document.getElementById("myshope0").addEventListener("click", () => {
  document.getElementById("myorder0").style.display = "block";
});
//my order
document.getElementById("hedin0").addEventListener("click", () => {
  document.getElementById("myorder0").style.display = "none";
});
//nav
document.getElementById("iconnav0").onclick = () => {
  if (document.getElementById("nav0").style.display == "none") {
    document.getElementById("nav0").style.display = "flex";
  }
};
/*time*/
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("t0").innerHTML = t;
}
//nav
window.onscroll = () => {
  document.getElementById("nav0").style.display = "none";
  document.getElementById("iconnav0").style.display = "block";
};
document.getElementById("iconnav0").onclick = () => {
  if (document.getElementById("nav0").style.display == "none") {
    document.getElementById("nav0").style.display = "flex";
  }
};

//page2
//movemint
//nav
window.onscroll = () => {
  document.getElementById("nav").style.display = "none";
  document.getElementById("iconnav").style.display = "block";
  document.getElementById("nav0").style.display = "none";
  document.getElementById("iconnav0").style.display = "block";
};
document.getElementById("iconnav").onclick = () => {
  if (document.getElementById("nav").style.display == "none") {
    document.getElementById("nav").style.display = "flex";
  }
};
//programing
  table = [],
  intoAdmin = [],
  order = [],
  fff = [];

document.getElementById("fi").addEventListener("click", () => {
  let a = document.getElementById("lestt");
  let b = a.value;
  if (a.value === "") {
    alert("please enter value");
  }
  if (a.value !== "" && search.includes(a.value)) {
    window.location.href = `#${a.value}`;
    a.value = "";
  }
  if (a.value != "" && search.includes(a.value) == false) {
    alert(`${a.value} not exest`);
  }
});
//
document.getElementById("fi0").addEventListener("click", () => {
  let a = document.getElementById("lestt0");
  let b = a.value;
  if (a.value === "") {
    alert("please enter value");
  }
  if (a.value !== "" && search.includes(a.value)) {
    window.location.href = `#${a.value}0`;
    a.value = "";
  }
  if (a.value != "" && search.includes(a.value) == false) {
    alert(`${a.value} not exest`);
  }
});


//set orders
let personName = document.getElementById("personName"),
  personTelephon = document.getElementById("personTelephon"),
  personTitle = document.getElementById("personTitle"),
  notes = document.getElementById("notes");
document.getElementById("setForm").addEventListener("click", () => {
  if (
    personName.value == "" ||
    personTelephon.value == "" ||
    personTitle.value == ""
  ) {
    alert("please, Fill out the first three fields at least");
  }
  if (
    personName.value != "" &&
    personTelephon.value !== "" &&
    personTitle.value !== "" &&
    table.length < 1
  ) {
    alert("Please, select at least one item");
  }
  if (
    personName.value != "" &&
    personTelephon.value !== "" &&
    personTitle.value !== "" &&
    table.length > 0
  ) {
    order.push([
      personName.value,
      personTelephon.value,
      personTitle.value,
      notes.value
    ]);
    intoAdmin.push([...order, ...table]);
    personName.value = "";
    personTelephon.value = "";
    personTitle.value = "";
    notes.value = "";
    let ff = document.getElementById("ff").innerHTML;
    fff.push(ff);
    /*---------------------*/
    document.getElementById(
      "myOrders"
    ).innerHTML = `<article class="item ord"  >
    <!--add the formate for order-->
      <div class="front" >
        <p class="titl titl2">order</p>
          <div class="divtextitem"><p class="titl titl3">name : </p><p class="textitem"> ${
            intoAdmin[0][0][0]
          }</p></div>
          <div class="divtextitem"><p class="titl titl3">titl : </p><p class="textitem"> ${
            intoAdmin[0][0][2]
          }</p></div>
          <div class="divtextitem"><p class="titl titl3">tel : </p><p class="textitem"> ${
            intoAdmin[0][0][1]
          }</p></div>
          <div class="divtextitem"><p class="titl titl3">notes : </p><p class="textitem"> ${
            intoAdmin[0][0][3] == "" ? "no exest nots" : intoAdmin[0][0][3]
          }</p></div>

      </div>

      <!--back-->
      <div class="back">  <table class="table">
      ${fff[0]}
     </table></div>
 </article>`;

    for (let i = 1; i < intoAdmin.length; i = i + 1) {
      document.getElementById(
        "myOrders"
      ).innerHTML += `<article class="item ord"  >
  <!--add the formate for order-->
    <div class="front" >
      <p class="titl titl2">order</p>
        <div class="divtextitem"><p class="titl titl3">name : </p><p class="textitem"> ${
          intoAdmin[i][0][0]
        }</p></div>
        <div class="divtextitem"><p class="titl titl3">titl : </p><p class="textitem"> ${
          intoAdmin[i][0][2]
        }</p></div>
        <div class="divtextitem"><p class="titl titl3">tel : </p><p class="textitem"> ${
          intoAdmin[i][0][1]
        }</p></div>
        <div class="divtextitem"><p class="titl titl3">notes : </p><p class="textitem"> ${
          intoAdmin[i][0][3] == "" ? "no exest nots" : intoAdmin[i][0][3]
        }</p></div>

    </div>

    <!--back-->
    <div class="back">  <table class="table">
    ${fff[i]}
   </table></div>
</article>`;

    }   document.getElementById("bodyTable").innerHTML = `<tr>
    <th class="td"> Name</th>
    <th class="td">Prise</th>
    <th class="td">Count</th>
    </tr>`;
    document.getElementById("ad").innerText = "";
    table = [];
    order = [];
    console.log(intoAdmin);
  }
});
console.log('yahya')
/*
//انشاء دف للعنصر
let item = document.createElement("article");
item.classList.add("item");
paranet.appendChild(item);
//انشاء div front
let front = document.createElement("div");
front.classList.add("front");
item.appendChild(front);
//انشاء دف للصورة
let divImgItem = document.createElement("div");
divImgItem.classList.add("divimgitem");
front.appendChild(divImgItem);
// الصورة
let addImg = document.createElement("img");
addImg.setAttribute("src", jason[i][2]);
addImg.classList.add("imgitem");
divImgItem.appendChild(addImg);
//انشاء دف للاسم
let addNamee = document.createElement("div");
addNamee.classList.add("divtextitem");
front.appendChild(addNamee);
//انشاء اسم
let addP1 = document.createElement("p");
addP1.classList.add("titl");
addP1.textContent = "name :";
addNamee.appendChild(addP1);
//انشاء النص للاسم
let addP2 = document.createElement("p");
addP2.classList.add("textitem");
addP2.textContent = `${jason[i][0]}.`;
addNamee.appendChild(addP2);
//انشاء دف للعنوان
let addPrisee = document.createElement("div");
addPrisee.classList.add("divtextitem");
front.appendChild(addPrisee);
//انشاء سعر
let addPForePrise = document.createElement("p");
addPForePrise.classList.add("titl");
addPForePrise.textContent = "prise :";
addPrisee.appendChild(addPForePrise);
// انشاء السعر
let addPForePrise2 = document.createElement("p");
addPForePrise2.classList.add("textitem");
addPForePrise2.textContent = `${jason[i][1]}$$.`;
addPrisee.appendChild(addPForePrise2);
//انشاء back
let back = document.createElement("div");
back.classList.add("back");
item.appendChild(back);
//انشاء نص للباك
let pForBack = document.createElement("p");
pForBack.classList.add("divtextitemback");

pForBack.textContent = "remove from the page";
back.appendChild(pForBack);
//انشاء input
let inputToBack = document.createElement("input");
inputToBack.classList.add("submit");
inputToBack.setAttribute("type", "submit");
inputToBack.setAttribute("value", "remove");
back.appendChild(inputToBack);*/
