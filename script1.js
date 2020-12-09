//page 0
//صفحة السوق
//page shope
//movments
//
//lllllll
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

//programing for items
//page1
/* enter into admin page*/
/* صفحة تسجيل الدخول */
//programing
let emileAdmin = document.getElementById("emileadmin"),
  passwordAdmin = document.getElementById("passwordadmin");
let inputLogin = document
  .getElementById("inputLogin")
  .addEventListener("click", () => {
    if (
      emileAdmin.value === "yahya_223311@hotmail.com" &&
      passwordAdmin.value === "12345"
    ) {
      document.getElementById("body2").style.display = "none";
      document.getElementById("body1").style.display = "block";
      document.title = "admin";
    }
  });

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
/*arrays*/
let makeup = [
    ["element 1", "10", "img/m2.jpg"],
    ["element 2", "20", "img/m3.jpg"],
    ["element 3", "30", "img/m4.jpg"],
    ["element 4", "30", "img/m5.jpg"],
    ["element 5", "10", "img/m2.jpg"],
    ["element 6", "20", "img/m3.jpg"],
    ["element 7", "30", "img/m4.jpg"],
    ["element 8", "30", "img/m5.jpg"]
  ],
  shawls = [
    ["element 9", "10", "img/m2.jpg"],
    ["element 10", "20", "img/m3.jpg"],
    ["element 11", "30", "img/m4.jpg"],
    ["element 12", "30", "img/m5.jpg"],
    ["element 13", "10", "img/m2.jpg"],
    ["element 14", "20", "img/m3.jpg"],
    ["element 15", "30", "img/m4.jpg"],
    ["element 16", "30", "img/m5.jpg"]
  ],
  bags = [
    ["element 17", "10", "img/m2.jpg"],
    ["element 18", "20", "img/m3.jpg"],
    ["element 19", "30", "img/m4.jpg"],
    ["element 20", "30", "img/m5.jpg"],
    ["element 21", "10", "img/m2.jpg"],
    ["element 22", "20", "img/m3.jpg"],
    ["element 23", "30", "img/m4.jpg"],
    ["element 24", "30", "img/m5.jpg"]
  ],
  perfumes = [
    ["element 25", "10", "img/m2.jpg"],
    ["element 26", "20", "img/m3.jpg"],
    ["element 27", "30", "img/m4.jpg"],
    ["element 28", "30", "img/m5.jpg"],
    ["element 29", "10", "img/m2.jpg"],
    ["element 30", "20", "img/m3.jpg"],
    ["element 31", "30", "img/m4.jpg"],
    ["element 32", "30", "img/m5.jpg"]
  ],
  search = [
    "element 1",
    "element 2",
    "element 3",
    "element 4",
    "element 5",
    "element 6",
    "element 7",
    "element 8",
    "element 9",
    "element 10",
    "element 11",
    "element 12",
    "element 13",
    "element 14",
    "element 15",
    "element 16",
    "element 17",
    "element 18",
    "element 19",
    "element 20",
    "element 21",
    "element 22",
    "element 23",
    "element 24",
    "element 25",
    "element 26",
    "element 27",
    "element 28",
    "element 29",
    "element 30",
    "element 31",
    "element 32"
  ],
  table = [],
  intoAdmin = [],
  order = [],
  fff = [];
/*display item in shop*/
(function auto() {
  document.getElementById(
    "makeup"
  ).innerHTML = `<article class="item"  id = "${makeup[0][0]}" >
        <!--front-->
          <div class="front" >
            <div class="divimgitem"><img src="${makeup[0][2]}" class="imgitem"></div>
            <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${makeup[0][0]}.</p></div>
            <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[0][1]}$.</p></div>
          </div>
          <!--back-->
        <div class="back"><p class="divtextitemback">remove from the page</p>
          <input type="submit" value='remove ' class=' submit makeup'   name="0" id = "${makeup[0][0]}">
        </div>
      </article>`;
  for (let i = 1; i < makeup.length; i = i + 1) {
    document.getElementById(
      "makeup"
    ).innerHTML += `<article class="item" id = "${makeup[i][0]}" >
            <!--front-->
              <div class="front" >
                <div class="divimgitem"><img src="${makeup[i][2]}" class="imgitem"></div>
                <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${makeup[i][0]}.</p></div>
                <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[i][1]}$.</p></div>
              </div>
              <!--back-->
            <div class="back" ><p class="divtextitemback">remove from the page</p>
            
              <input type="submit" value='remove ' class='submit makeup ' name='${i}'  id = "${makeup[i][0]}">
            </div>
          </article>`;
  }
  document.getElementById(
    "makeup0"
  ).innerHTML = `<article class="item" id= "${makeup[0][0]}0">
  <!--front-->
    <div class="front">
      <div class="divimgitem"><img src="${makeup[0][2]}" class="imgitem"></div>
      <div class="divtextitem"><p class="titl" id="thi0">name : </p><p class="textitem">${makeup[0][0]}</p></div>
      <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[0][1]}$.</p></div>
    </div>
    <!--back-->
    <div class="back" ><p class="divtextitemback">add to card</p>
    <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
    <input type="submit" value='Done' class='submit adding'></div>
  </article>`;

  for (let i = 1; i < makeup.length; i = i + 1) {
    document.getElementById("makeup0").innerHTML += `
    <article class="item" id= "${makeup[i][0]}0">
    <!--front-->
      <div class="front">
        <div class="divimgitem"><img src="${makeup[i][2]}" class="imgitem"></div>
        <div class="divtextitem"><p class="titl" id="thi0">name : </p><p class="textitem">${makeup[i][0]}.</p></div>
        <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[i][1]}$.</p></div>
      </div>
      <!--back-->
      <div class="back" ><p class="divtextitemback">add to card</p>
      <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
      <input type="submit" value='Done' class='submit adding' ></div>
    </article>`;
  }
  //add item for shawls
  document.getElementById(
    "shawls"
  ).innerHTML = `<article class="item" id='${shawls[0][0]}'  >
        <!--front-->
          <div class="front">
            <div class="divimgitem"><img src="${shawls[0][2]}" class="imgitem"></div>
            <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${shawls[0][0]}.</p></div>
            <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[0][1]}$.</p></div>
          </div>
          <!--back-->
        <div class="back"><p class="divtextitemback">remove from the page</p>
          <input type="submit" value='remove ' class='submit shawls' name="0" id='${shawls[0][0]}'>
        </div>
      </article>`;
  for (let i = 1; i < shawls.length; i = i + 1) {
    document.getElementById(
      "shawls"
    ).innerHTML += `<article class="item" id='${shawls[i][0]}'>
            <!--front-->
              <div class="front">
                <div class="divimgitem"><img src="${shawls[i][2]}" class="imgitem"></div>
                <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${shawls[i][0]}.</p></div>
                <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[i][1]}$.</p></div>
              </div>
              <!--back-->
            <div class="back"><p class="divtextitemback">remove from the page</p>
            
              <input type="submit" value='remove ' class='submit shawls' name='${i}' id='${shawls[i][0]}'>
            </div>
          </article>`;
  }
  document.getElementById(
    "shawls0"
  ).innerHTML = `<article class="item" id= '${shawls[0][0]}0' >
  <!--front-->
    <div class="front">
      <div class="divimgitem"><img src="${shawls[0][2]}" class="imgitem"></div>
      <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${shawls[0][0]}.</p></div>
      <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[0][1]}$.</p></div>
    </div>
    <!--back-->
    <div class="back" ><p class="divtextitemback">add to card</p>
    <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
    <input type="submit" value='Done' class='submit adding' ></div>
</article>`;
  for (let i = 1; i < shawls.length; i = i + 1) {
    document.getElementById("shawls0").innerHTML += `
    <article class="item" id= '${shawls[i][0]}0'>
    <!--front-->
      <div class="front">
        <div class="divimgitem"><img src="${shawls[i][2]}" class="imgitem"></div>
        <div class="divtextitem"><p class="titl" id="thi0">name : </p><p class="textitem">${shawls[i][0]}.</p></div>
        <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[i][1]}$.</p></div>
      </div>
      <!--back-->
      <div class="back" ><p class="divtextitemback">add to card</p>
      <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
      <input type="submit" value='Done' class='submit adding' ></div>
    </article>`;
  }
  // add item for bags
  document.getElementById(
    "bags"
  ).innerHTML = `<article class="item" id='${bags[0][0]}'>
              <!--front-->
                <div class="front">
                  <div class="divimgitem"><img src="${bags[0][2]}" class="imgitem"></div>
                  <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[0][0]}.</p></div>
                  <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[0][1]}$.</p></div>
                </div>
                <!--back-->
              <div class="back"><p class="divtextitemback">remove from the page</p>
                <input type="submit" value='remove ' class='submit bags' name="0" id='${bags[0][0]}'>
              </div>
            </article>`;
  for (let i = 1; i < bags.length; i = i + 1) {
    document.getElementById(
      "bags"
    ).innerHTML += `<article class="item"  id='${bags[i][0]}'>
                  <!--front-->
                    <div class="front">
                      <div class="divimgitem"><img src="${bags[i][2]}" class="imgitem"></div>
                      <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[i][0]}.</p></div>
                      <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[i][1]}$.</p></div>
                    </div>
                    <!--back-->
                  <div class="back"><p class="divtextitemback">remove from the page</p>
                  
                    <input type="submit" value='remove ' class='submit bags' name="${i}" id='${bags[i][0]}' >
                  </div>
                </article>`;
  }
  document.getElementById(
    "bags0"
  ).innerHTML = `<article class="item" id= '${bags[0][0]}0' >
              <!--front-->
                <div class="front">
                  <div class="divimgitem"><img src="${bags[0][2]}" class="imgitem"></div>
                  <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[0][0]}.</p></div>
                  <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[0][1]}$.</p></div>
                </div>
                <!--back-->
                <div class="back" ><p class="divtextitemback">add to card</p>
                <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                <input type="submit" value='Done' class='submit adding' ></div>
            </article>`;
  for (let i = 1; i < bags.length; i = i + 1) {
    document.getElementById(
      "bags0"
    ).innerHTML += `<article class="item" id= '${bags[i][0]}0' >
                  <!--front-->
                    <div class="front">
                      <div class="divimgitem"><img src="${bags[i][2]}" class="imgitem"></div>
                      <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[i][0]}.</p></div>
                      <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[i][1]}$.</p></div>
                    </div>
                    <!--back-->
                    <div class="back" ><p class="divtextitemback">add to card</p>
                    <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                    <input type="submit" value='Done' class='submit adding' ></div>
                </article>`;
  }
  //add item for perfumes

  document.getElementById(
    "perfumes"
  ).innerHTML = `<article class="item" id ='${perfumes[0][0]}'>
                      <!--front-->
                        <div class="front">
                          <div class="divimgitem"><img src="${perfumes[0][2]}" class="imgitem"></div>
                          <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[0][0]}.</p></div>
                          <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[0][1]}$.</p></div>
                        </div>
                        <!--back-->
                      <div class="back"><p class="divtextitemback">remove from the page</p>
                        <input type="submit" value='remove ' class='submit perfumes' name="0" id ='${perfumes[0][0]}'>
                      </div>
                    </article>`;
  for (let i = 1; i < perfumes.length; i = i + 1) {
    document.getElementById(
      "perfumes"
    ).innerHTML += `<article class="item" id ='${perfumes[i][0]}' >
                          <!--front-->
                            <div class="front">
                              <div class="divimgitem"><img src="${perfumes[i][2]}" class="imgitem"></div>
                              <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[i][0]}.</p></div>
                              <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[i][1]}$.</p></div>
                            </div>
                            <!--back-->
                          <div class="back"><p class="divtextitemback">remove from the page</p>
                          
                            <input type="submit" value='remove ' class='submit perfumes' name"${i}" id ='${perfumes[i][0]}'>
                          </div>
                        </article>`;
  }
  document.getElementById(
    "perfumes0"
  ).innerHTML = `<article class="item" id = '${perfumes[0][0]}0' >
                      <!--front-->
                        <div class="front">
                          <div class="divimgitem"><img src="${perfumes[0][2]}" class="imgitem"></div>
                          <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[0][0]}.</p></div>
                          <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[0][1]}$.</p></div>
                        </div>
                        <!--back-->
                        <div class="back" ><p class="divtextitemback">add to card</p>
                        <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                        <input type="submit" value='Done' class='submit adding' ></div>
                    </article>`;
  for (let i = 1; i < perfumes.length; i = i + 1) {
    document.getElementById(
      "perfumes0"
    ).innerHTML += `<article class="item" id ='${perfumes[i][0]}0' >
                          <!--front-->
                            <div class="front">
                              <div class="divimgitem"><img src="${perfumes[i][2]}" class="imgitem"></div>
                              <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[i][0]}.</p></div>
                              <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[i][1]}$.</p></div>
                            </div>
                            <!--back-->
                            <div class="back" ><p class="divtextitemback">add to card</p>
                            <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                            <input type="submit" value='Done' class='submit adding' ></div>
                        </article>`;
  }
  search.sort();
  document.getElementById(
    "item"
  ).innerHTML = ` <option value="${search[0]}" class = "searshitem"></option> `;
  for (let i = 1; i < search.length; i = i + 1) {
    document.getElementById(
      "item"
    ).innerHTML += ` <option value="${search[i]}" class = "searshitem" ></option> `;
  }
  // create element for search2
  document.getElementById(
    "item0"
  ).innerHTML = ` <option value="${search[0]}" class = "searshitem"></option> `;
  for (let i = 1; i < search.length; i = i + 1) {
    document.getElementById(
      "item0"
    ).innerHTML += ` <option value="${search[i]}" class = "searshitem" ></option> `;
  }
})();
/*addNewItem*/
let addName = document.getElementById("addName"),
  addNprise = document.getElementById("addPrise"),
  addSrc = document.getElementById("addSrc"),
  addType = document.getElementById("addType");
let addItem = document
  .getElementById("addNewItem")
  .addEventListener("click", () => {
    if (
      addName.value === "" ||
      addNprise.value === "" ||
      addSrc.value === "" ||
      addType.value === ""
    ) {
      alert("please , Fill in all fields");
    }
    if (
      addName.value !== "" &&
      addNprise.value !== "" &&
      addSrc.value !== "" &&
      addType.value !== ""
    ) {
      search.push(addName.value);
      switch (addType.value) {
        // add item for mukeup
        case "makeup":
          makeup.push([
            addName.value,
            addNprise.value,
            addSrc.value,
            addType.value
          ]);
          addName.value = "";
          addNprise.value = "";
          addSrc.value = "";
          addType.value = "";
          document.getElementById(
            "makeup"
          ).innerHTML = `<article class="item"  id = "${makeup[0][0]}" >
                <!--front-->
                  <div class="front" >
                    <div class="divimgitem"><img src="${makeup[0][2]}" class="imgitem"></div>
                    <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${makeup[0][0]}.</p></div>
                    <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[0][1]}$.</p></div>
                  </div>
                  <!--back-->
                <div class="back"><p class="divtextitemback">remove from the page</p>
                  <input type="submit" value='remove ' class=' submit makeup'   name="0" id = "${makeup[0][0]}">
                </div>
              </article>`;
          for (let i = 1; i < makeup.length; i = i + 1) {
            document.getElementById(
              "makeup"
            ).innerHTML += `<article class="item" id = "${makeup[i][0]}" >
                    <!--front-->
                      <div class="front" >
                        <div class="divimgitem"><img src="${makeup[i][2]}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${makeup[i][0]}.</p></div>
                        <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[i][1]}$.</p></div>
                      </div>
                      <!--back-->
                    <div class="back" ><p class="divtextitemback">remove from the page</p>
                    
                      <input type="submit" value='remove ' class='submit makeup ' name='${i}'  id = "${makeup[i][0]}">
                    </div>
                  </article>`;
          }
          document.getElementById(
            "makeup0"
          ).innerHTML = `<article class="item" id= "${makeup[0][0]}0">
          <!--front-->
            <div class="front">
              <div class="divimgitem"><img src="${makeup[0][2]}" class="imgitem"></div>
              <div class="divtextitem"><p class="titl" id="thi0">name : </p><p class="textitem">${makeup[0][0]}</p></div>
              <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[0][1]}$.</p></div>
            </div>
            <!--back-->
            <div class="back" ><p class="divtextitemback">add to card</p>
            <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
            <input type="submit" value='Done' class='submit adding'></div>
          </article>`;

          for (let i = 1; i < makeup.length; i = i + 1) {
            document.getElementById("makeup0").innerHTML += `
            <article class="item" id= "${makeup[i][0]}0">
            <!--front-->
              <div class="front">
                <div class="divimgitem"><img src="${makeup[i][2]}" class="imgitem"></div>
                <div class="divtextitem"><p class="titl" id="thi0">name : </p><p class="textitem">${makeup[i][0]}.</p></div>
                <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[i][1]}$.</p></div>
              </div>
              <!--back-->
              <div class="back" ><p class="divtextitemback">add to card</p>
              <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
              <input type="submit" value='Done' class='submit adding' ></div>
            </article>`;
          }

          break;
        //add item for shawls
        case "shawls":
          shawls.push([
            addName.value,
            addNprise.value,
            addSrc.value,
            addType.value
          ]);
          addName.value = "";
          addNprise.value = "";
          addSrc.value = "";
          addType.value = "";
          document.getElementById(
            "shawls"
          ).innerHTML = `<article class="item" id='${shawls[0][0]}'  >
                <!--front-->
                  <div class="front">
                    <div class="divimgitem"><img src="${shawls[0][2]}" class="imgitem"></div>
                    <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${shawls[0][0]}.</p></div>
                    <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[0][1]}$.</p></div>
                  </div>
                  <!--back-->
                <div class="back"><p class="divtextitemback">remove from the page</p>
                  <input type="submit" value='remove ' class='submit shawls' name="0" id='${shawls[0][0]}'>
                </div>
              </article>`;
          for (let i = 1; i < shawls.length; i = i + 1) {
            document.getElementById(
              "shawls"
            ).innerHTML += `<article class="item" id='${shawls[i][0]}'>
                    <!--front-->
                      <div class="front">
                        <div class="divimgitem"><img src="${shawls[i][2]}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${shawls[i][0]}.</p></div>
                        <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[i][1]}$.</p></div>
                      </div>
                      <!--back-->
                    <div class="back"><p class="divtextitemback">remove from the page</p>
                    
                      <input type="submit" value='remove ' class='submit shawls' name='${i}' id='${shawls[i][0]}'>
                    </div>
                  </article>`;
          }
          document.getElementById(
            "shawls0"
          ).innerHTML = `<article class="item" id= '${shawls[0][0]}0' >
          <!--front-->
            <div class="front">
              <div class="divimgitem"><img src="${shawls[0][2]}" class="imgitem"></div>
              <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${shawls[0][0]}.</p></div>
              <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[0][1]}$.</p></div>
            </div>
            <!--back-->
            <div class="back" ><p class="divtextitemback">add to card</p>
            <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
            <input type="submit" value='Done' class='submit adding' ></div>
        </article>`;
          for (let i = 1; i < shawls.length; i = i + 1) {
            document.getElementById("shawls0").innerHTML += `
            <article class="item" id= '${shawls[i][0]}0'>
            <!--front-->
              <div class="front">
                <div class="divimgitem"><img src="${shawls[i][2]}" class="imgitem"></div>
                <div class="divtextitem"><p class="titl" id="thi0">name : </p><p class="textitem">${shawls[i][0]}.</p></div>
                <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[i][1]}$.</p></div>
              </div>
              <!--back-->
              <div class="back" ><p class="divtextitemback">add to card</p>
              <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
              <input type="submit" value='Done' class='submit adding' ></div>
            </article>`;
          }
          break;
        // add item for bags
        case "bags":
          bags.push([
            addName.value,
            addNprise.value,
            addSrc.value,
            addType.value
          ]);
          addName.value = "";
          addNprise.value = "";
          addSrc.value = "";
          addType.value = "";
          document.getElementById(
            "bags"
          ).innerHTML = `<article class="item" id='${bags[0][0]}'>
                      <!--front-->
                        <div class="front">
                          <div class="divimgitem"><img src="${bags[0][2]}" class="imgitem"></div>
                          <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[0][0]}.</p></div>
                          <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[0][1]}$.</p></div>
                        </div>
                        <!--back-->
                      <div class="back"><p class="divtextitemback">remove from the page</p>
                        <input type="submit" value='remove ' class='submit bags' name="0" id='${bags[0][0]}'>
                      </div>
                    </article>`;
          for (let i = 1; i < bags.length; i = i + 1) {
            document.getElementById(
              "bags"
            ).innerHTML += `<article class="item"  id='${bags[i][0]}'>
                          <!--front-->
                            <div class="front">
                              <div class="divimgitem"><img src="${bags[i][2]}" class="imgitem"></div>
                              <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[i][0]}.</p></div>
                              <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[i][1]}$.</p></div>
                            </div>
                            <!--back-->
                          <div class="back"><p class="divtextitemback">remove from the page</p>
                          
                            <input type="submit" value='remove ' class='submit bags' name="${i}" id='${bags[i][0]}' >
                          </div>
                        </article>`;
          }
          document.getElementById(
            "bags0"
          ).innerHTML = `<article class="item" id= '${bags[0][0]}0' >
                      <!--front-->
                        <div class="front">
                          <div class="divimgitem"><img src="${bags[0][2]}" class="imgitem"></div>
                          <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[0][0]}.</p></div>
                          <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[0][1]}$.</p></div>
                        </div>
                        <!--back-->
                        <div class="back" ><p class="divtextitemback">add to card</p>
                        <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                        <input type="submit" value='Done' class='submit adding' ></div>
                    </article>`;
          for (let i = 1; i < bags.length; i = i + 1) {
            document.getElementById(
              "bags0"
            ).innerHTML += `<article class="item" id= '${bags[i][0]}0' >
                          <!--front-->
                            <div class="front">
                              <div class="divimgitem"><img src="${bags[i][2]}" class="imgitem"></div>
                              <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[i][0]}.</p></div>
                              <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[i][1]}$.</p></div>
                            </div>
                            <!--back-->
                            <div class="back" ><p class="divtextitemback">add to card</p>
                            <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                            <input type="submit" value='Done' class='submit adding' ></div>
                        </article>`;
          }

          break;
        //add item for perfumes
        case "perfumes":
          perfumes.push([
            addName.value,
            addNprise.value,
            addSrc.value,
            addType.value
          ]);
          addName.value = "";
          addNprise.value = "";
          addSrc.value = "";
          addType.value = "";
          document.getElementById(
            "perfumes"
          ).innerHTML = `<article class="item" id ='${perfumes[0][0]}'>
                              <!--front-->
                                <div class="front">
                                  <div class="divimgitem"><img src="${perfumes[0][2]}" class="imgitem"></div>
                                  <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[0][0]}.</p></div>
                                  <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[0][1]}$.</p></div>
                                </div>
                                <!--back-->
                              <div class="back"><p class="divtextitemback">remove from the page</p>
                                <input type="submit" value='remove ' class='submit perfumes' name="0" id ='${perfumes[0][0]}'>
                              </div>
                            </article>`;
          for (let i = 1; i < perfumes.length; i = i + 1) {
            document.getElementById(
              "perfumes"
            ).innerHTML += `<article class="item" id ='${perfumes[i][0]}' >
                                  <!--front-->
                                    <div class="front">
                                      <div class="divimgitem"><img src="${perfumes[i][2]}" class="imgitem"></div>
                                      <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[i][0]}.</p></div>
                                      <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[i][1]}$.</p></div>
                                    </div>
                                    <!--back-->
                                  <div class="back"><p class="divtextitemback">remove from the page</p>
                                  
                                    <input type="submit" value='remove ' class='submit perfumes' name"${i}" id ='${perfumes[i][0]}'>
                                  </div>
                                </article>`;
          }
          document.getElementById(
            "perfumes0"
          ).innerHTML = `<article class="item" id = '${perfumes[0][0]}0'>
                              <!--front-->
                                <div class="front">
                                  <div class="divimgitem"><img src="${perfumes[0][2]}" class="imgitem"></div>
                                  <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[0][0]}.</p></div>
                                  <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[0][1]}$.</p></div>
                                </div>
                                <!--back-->
                                <div class="back" ><p class="divtextitemback">add to card</p>
                                <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                                <input type="submit" value='Done' class='submit adding' ></div>
                            </article>`;
          for (let i = 1; i < perfumes.length; i = i + 1) {
            document.getElementById(
              "perfumes0"
            ).innerHTML += `<article class="item" id = '${perfumes[i][0]}0' >
                                  <!--front-->
                                    <div class="front">
                                      <div class="divimgitem"><img src="${perfumes[i][2]}" class="imgitem"></div>
                                      <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[i][0]}.</p></div>
                                      <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[i][1]}$.</p></div>
                                    </div>
                                    <!--back-->
                                    <div class="back" ><p class="divtextitemback">add to card</p>
                                    <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                                    <input type="submit" value='Done' class='submit adding' ></div>
                                </article>`;
          }
          break;
      }
    }
    // create element for search
    search.sort();
    document.getElementById(
      "item"
    ).innerHTML = ` <option value="${search[0]}" class = "searshitem"></option> `;
    for (let i = 1; i < search.length; i = i + 1) {
      document.getElementById(
        "item"
      ).innerHTML += ` <option value="${search[i]}" class = "searshitem" ></option> `;
    }
    // create element for search2
    document.getElementById(
      "item0"
    ).innerHTML = ` <option value="${search[0]}" class = "searshitem"></option> `;
    for (let i = 1; i < search.length; i = i + 1) {
      document.getElementById(
        "item0"
      ).innerHTML += ` <option value="${search[i]}" class = "searshitem" ></option> `;
    }
  });

/*الذهاب لعنصر عن طريق البحث*/
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
// delet items
document.body.addEventListener("click", e => {
  if (e.target.classList.contains("makeup")) {
    let a = e.target.name;
    makeup.splice(+a, 1);
    //delet from makeup
    document.getElementById(
      "makeup"
    ).innerHTML = `<article class="item" id = "${makeup[0][0]}">
          <!--front-->
            <div class="front">
              <div class="divimgitem"><img src="${makeup[0][2]}" class="imgitem"></div>
              <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${makeup[0][0]}.</p></div>
              <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[0][1]}$.</p></div>
            </div>
            <!--back-->
          <div class="back"><p class="divtextitemback">remove from the page</p>
            <input type="submit" value='remove ' class='submit makeup' name="0" id = "${makeup[0][0]}" >
          </div>
        </article>`;
    for (let i = 1; i < makeup.length; i = i + 1) {
      document.getElementById(
        "makeup"
      ).innerHTML += `<article class="item" id = "${makeup[i][0]}">
              <!--front-->
                <div class="front" >
                  <div class="divimgitem"><img src="${makeup[i][2]}" class="imgitem"></div>
                  <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${makeup[i][0]}.</p></div>
                  <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[i][1]}$.</p></div>
                </div>
                <!--back-->
              <div class="back"><p class="divtextitemback">remove from the page</p>
              
                <input type="submit" value='remove ' class='submit makeup' name='${i}' id = "${makeup[i][0]}" >
              </div>
            </article>`;
    }
    document.getElementById(
      "makeup0"
    ).innerHTML = `<article class="item" id= "${makeup[0][0]}0">
    <!--front-->
      <div class="front">
        <div class="divimgitem"><img src="${makeup[0][2]}" class="imgitem"></div>
        <div class="divtextitem"><p class="titl" id="thi0">name : </p><p class="textitem">${makeup[0][0]}.</p></div>
        <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[0][1]}$.</p></div>
      </div>
      <!--back-->
      <div class="back" ><p class="divtextitemback">add to card</p>
      <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
      <input type="submit" value='Done' class='submit adding' ></div>
    </article>`;

    for (let i = 1; i < makeup.length; i = i + 1) {
      document.getElementById("makeup0").innerHTML += `
      <article class="item" id= "${makeup[i][0]}0">
      <!--front-->
        <div class="front">
          <div class="divimgitem"><img src="${makeup[i][2]}" class="imgitem"></div>
          <div class="divtextitem"><p class="titl" id="thi0">name : </p><p class="textitem">${makeup[i][0]}.</p></div>
          <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${makeup[i][1]}$.</p></div>
        </div>
        <!--back-->
        <div class="back" ><p class="divtextitemback">add to card</p>
        <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
        <input type="submit" value='Done' class='submit adding' ></div>
      </article>`;
    }
    // deleat item from search
    for (let i = 0; i < search.length; i = i + 1) {
      if (e.target.id === search[i]) {
        search.splice(i, 1);
        // create element for search
        search.sort();
      }
    }
    // refresh item
    document.getElementById(
      "item"
    ).innerHTML = ` <option value="${search[0]}" class = "searshitem"></option> `;
    for (let i = 1; i < search.length; i = i + 1) {
      document.getElementById(
        "item"
      ).innerHTML += ` <option value="${search[i]}" class = "searshitem" ></option> `;
    }
  }
  // delete from shawls
  if (e.target.classList.contains("shawls")) {
    let a = e.target.name;
    shawls.splice(+a, 1);
    document.getElementById(
      "shawls"
    ).innerHTML = `<article class="item" id='${shawls[0][0]}' >
    <!--front-->
      <div class="front">
        <div class="divimgitem"><img src="${shawls[0][2]}" class="imgitem"></div>
        <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${shawls[0][0]}.</p></div>
        <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[0][1]}$.</p></div>
      </div>
      <!--back-->
    <div class="back"><p class="divtextitemback">remove from the page</p>
      <input type="submit" value='remove ' class='submit shawls' name="0" id='${shawls[0][0]}'>
    </div>
  </article>`;
    for (let i = 1; i < shawls.length; i = i + 1) {
      document.getElementById(
        "shawls"
      ).innerHTML += `<article class="item" id='${shawls[i][0]}' >
        <!--front-->
          <div class="front">
            <div class="divimgitem"><img src="${shawls[i][2]}" class="imgitem"></div>
            <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${shawls[i][0]}.</p></div>
            <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[i][1]}$.</p></div>
          </div>
          <!--back-->
        <div class="back"><p class="divtextitemback">remove from the page</p>
        
          <input type="submit" value='remove ' class='submit shawls' name='${i}' id='${shawls[i][0]}'>
        </div>
      </article>`;
    }
    document.getElementById(
      "shawls0"
    ).innerHTML = `<article class="item" id= '${shawls[0][0]}0' >
    <!--front-->
      <div class="front">
        <div class="divimgitem"><img src="${shawls[0][2]}" class="imgitem"></div>
        <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${shawls[0][0]}.</p></div>
        <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[0][1]}$.</p></div>
      </div>
      <!--back-->
      <div class="back" ><p class="divtextitemback">add to card</p>
      <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
      <input type="submit" value='Done' class='submit adding' ></div>
  </article>`;
    for (let i = 1; i < shawls.length; i = i + 1) {
      document.getElementById("shawls0").innerHTML += `
      <article class="item" id= '${shawls[i][0]}0'>
      <!--front-->
        <div class="front">
          <div class="divimgitem"><img src="${shawls[i][2]}" class="imgitem"></div>
          <div class="divtextitem"><p class="titl" id="thi0">name : </p><p class="textitem">${shawls[i][0]}.</p></div>
          <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${shawls[i][1]}$.</p></div>
        </div>
        <!--back-->
        <div class="back" ><p class="divtextitemback">add to card</p>
        <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
        <input type="submit" value='Done' class='submit adding' ></div>
      </article>`;
    }
    // deleat item from search
    for (let i = 0; i < search.length; i = i + 1) {
      if (e.target.id === search[i]) {
        search.splice(i, 1);
        // create element for search
        search.sort();
      }
    }
    // refresh item
    document.getElementById(
      "item"
    ).innerHTML = ` <option value="${search[0]}" class = "searshitem"></option> `;
    for (let i = 1; i < search.length; i = i + 1) {
      document.getElementById(
        "item"
      ).innerHTML += ` <option value="${search[i]}" class = "searshitem" ></option> `;
    }
  }
  // delet from bags
  if (e.target.classList.contains("bags")) {
    let a = e.target.name;
    bags.splice(+a, 1);
    document.getElementById(
      "bags"
    ).innerHTML = `<article class="item" id='${bags[0][0]}' >
    <!--front-->
      <div class="front">
        <div class="divimgitem"><img src="${bags[0][2]}" class="imgitem"></div>
        <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[0][0]}.</p></div>
        <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[0][1]}$.</p></div>
      </div>
      <!--back-->
    <div class="back"><p class="divtextitemback">remove from the page</p>
      <input type="submit" value='remove ' class='submit bags' name="0" id='${bags[0][0]}'>
    </div>
  </article>`;
    for (let i = 1; i < bags.length; i = i + 1) {
      document.getElementById(
        "bags"
      ).innerHTML += `<article class="item" id='${bags[i][0]}' >
        <!--front-->
          <div class="front">
            <div class="divimgitem"><img src="${bags[i][2]}" class="imgitem"></div>
            <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[i][0]}.</p></div>
            <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[i][1]}$.</p></div>
          </div>
          <!--back-->
        <div class="back"><p class="divtextitemback">remove from the page</p>
        
          <input type="submit" value='remove ' class='submit bags' name="${i}" id='${bags[i][0]}'>
        </div>
      </article>`;
    }
    document.getElementById(
      "bags0"
    ).innerHTML = `<article class="item" id= '${bags[0][0]}0' >
                <!--front-->
                  <div class="front">
                    <div class="divimgitem"><img src="${bags[0][2]}" class="imgitem"></div>
                    <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[0][0]}.</p></div>
                    <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[0][1]}$.</p></div>
                  </div>
                  <!--back-->
                  <div class="back" ><p class="divtextitemback">add to card</p>
                  <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                  <input type="submit" value='Done' class='submit adding' ></div>
              </article>`;
    for (let i = 1; i < bags.length; i = i + 1) {
      document.getElementById(
        "bags0"
      ).innerHTML += `<article class="item" id= '${bags[i][0]}0' >
                    <!--front-->
                      <div class="front">
                        <div class="divimgitem"><img src="${bags[i][2]}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${bags[i][0]}.</p></div>
                        <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${bags[i][1]}$.</p></div>
                      </div>
                      <!--back-->
                      <div class="back" ><p class="divtextitemback">add to card</p>
                      <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                      <input type="submit" value='Done' class='submit adding' ></div>
                  </article>`;
    }

    // deleat item from search
    for (let i = 0; i < search.length; i = i + 1) {
      if (e.target.id === search[i]) {
        search.splice(i, 1);
        // create element for search
        search.sort();
      }
    }
    // refresh item
    document.getElementById(
      "item"
    ).innerHTML = ` <option value="${search[0]}" class = "searshitem"></option> `;
    for (let i = 1; i < search.length; i = i + 1) {
      document.getElementById(
        "item"
      ).innerHTML += ` <option value="${search[i]}" class = "searshitem" ></option> `;
    }
  }
  // delet from perfumes
  if (e.target.classList.contains("perfumes")) {
    let a = e.target.name;
    perfumes.splice(+a, 1);
    document.getElementById(
      "perfumes"
    ).innerHTML = `<article class="item" id ='${perfumes[0][0]}' >
                        <!--front-->
                          <div class="front">
                            <div class="divimgitem"><img src="${perfumes[0][2]}" class="imgitem"></div>
                            <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[0][0]}.</p></div>
                            <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[0][1]}$.</p></div>
                          </div>
                          <!--back-->
                        <div class="back"><p class="divtextitemback">remove from the page</p>
                          <input type="submit" value='remove ' class='submit perfumes' name="0" id ='${perfumes[0][0]}'>
                        </div>
                      </article>`;
    for (let i = 1; i < perfumes.length; i = i + 1) {
      document.getElementById(
        "perfumes"
      ).innerHTML += `<article class="item" id ='${perfumes[i][0]}' >
                            <!--front-->
                              <div class="front">
                                <div class="divimgitem"><img src="${perfumes[i][2]}" class="imgitem"></div>
                                <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[i][0]}.</p></div>
                                <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[i][1]}$.</p></div>
                              </div>
                              <!--back-->
                            <div class="back"><p class="divtextitemback">remove from the page</p>
                            
                              <input type="submit" value='remove ' class='submit perfumes' name"${i}" id ='${perfumes[i][0]}'>
                            </div>
                          </article>`;
    }
    document.getElementById(
      "perfumes0"
    ).innerHTML = `<article class="item" id = '${perfumes[0][0]}0'>
                        <!--front-->
                          <div class="front">
                            <div class="divimgitem"><img src="${perfumes[0][2]}" class="imgitem"></div>
                            <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[0][0]}.</p></div>
                            <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[0][1]}$.</p></div>
                          </div>
                          <!--back-->
                          <div class="back" ><p class="divtextitemback">add to card</p>
                          <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                          <input type="submit" value='Done' class='submit adding' ></div>
                      </article>`;
    for (let i = 1; i < perfumes.length; i = i + 1) {
      document.getElementById(
        "perfumes0"
      ).innerHTML += `<article class="item" id ='${perfumes[i][0]}0' >
                            <!--front-->
                              <div class="front">
                                <div class="divimgitem"><img src="${perfumes[i][2]}" class="imgitem"></div>
                                <div class="divtextitem"><p class="titl">name : </p><p class="textitem">${perfumes[i][0]}.</p></div>
                                <div class="divtextitem"><p class="titl">prise : </p><p class="textitem">${perfumes[i][1]}$.</p></div>
                              </div>
                              <!--back-->
                              <div class="back" ><p class="divtextitemback">add to card</p>
                              <input type="number" min="1" max="99" placeholder="enter the number" form="form" class="number">
                              <input type="submit" value='Done' class='submit adding' ></div>
                          </article>`;
    }
    // deleat item from search
    for (let i = 0; i < search.length; i = i + 1) {
      if (e.target.id === search[i]) {
        search.splice(i, 1);
        // create element for search
        search.sort();
      }
    }
    // refresh item
    document.getElementById(
      "item"
    ).innerHTML = ` <option value="${search[0]}" class = "searshitem"></option> `;
    for (let i = 1; i < search.length; i = i + 1) {
      document.getElementById(
        "item"
      ).innerHTML += ` <option value="${search[i]}" class = "searshitem" ></option> `;
    }
  }
  if (e.target.classList.contains("adding")) {
    let count = e.path[1].children[1].value,
      theName = e.path[2].children[0].children[1].children[1].innerHTML,
      thePraise = e.path[2].children[0].children[2].children[1].innerHTML;

    if (e.path[1].children[1].value == "") {
      alert("Please, enter the required quantity.");
    }
    if (e.path[1].children[1].value < 1 && e.path[1].children[1].value != "") {
      alert("The smallest quantity is one.");
    }
    if (e.path[1].children[1].value != "" && e.path[1].children[1].value > 0) {
      table.push([theName, thePraise, count]);
      e.path[1].children[1].value = "";
      document.getElementById("bodyTable").innerHTML += `<tr>
      <td class="td">${theName}</td> 
      <td class="td">${thePraise}</td> 
      <td class="td">${count}</td>
  </tr>`;
      let ad = 0;
      for (let i = 0; i < table.length; i = i + 1) {
        let g = parseFloat(table[i][1]) * +table[i][2];
        ad += g;
      }
      document.getElementById("ad").innerText = ad + "$.";
    }
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
