// ............................... HOME & NAVBAR SECTION ......................

async function getHome() {
  let data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let fooddata = await data.json();

  return fooddata;
}

function foodDisplay(foodData) {
  let instbox = "";
  let box = "";
  for (let i = 0; i < foodData.meals.length; i++) {
    box += `
                    <div class="homepagemeals imgcontent rounded ">
                        <img class=" w-100" src="${foodData.meals[i].strMealThumb}" alt="dish-img">

                        <p class="d-none">${foodData.meals[i].strInstructions}</p>   
                        <h2 class = 'd-none'>${foodData.meals[i].strArea}</h2>
                        <h3 class = 'd-none'>${foodData.meals[i].strCategory}</h3>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient1}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient2}</h6>

                        <h6 class = "d-none">${foodData.meals[i].strIngredient3}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient4}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient5}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient6}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient7}</h6>

                        <h6 class = "d-none">${foodData.meals[i].strIngredient8}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient9}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient10}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient11}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strIngredient12}</h6>

                        <h6 class = "d-none">${foodData.meals[i].strIngredient13}</h6>
                        
                        <h5 class = "d-none">${foodData.meals[i].strTags}</h5>

                        <h6 class = "d-none">${foodData.meals[i].strMeasure1}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure2}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure3}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure4}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure5}</h6>

                        <h6 class = "d-none">${foodData.meals[i].strMeasure6}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure7}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure8}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure9}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure10}</h6>

                        <h6 class = "d-none">${foodData.meals[i].strMeasure11}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure12}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strMeasure13}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strSource}</h6>
                        <h6 class = "d-none">${foodData.meals[i].strYoutube}</h6>
                  
                        <div class="d-flex align-items-center  overlaycontent">
                            <p class="mealnametitle ms-2">${foodData.meals[i].strMeal}</p>
                        </div>
                    </div>
                        
                    
                    `;
  }

  document.getElementById("foodDemo").innerHTML = box;

  document.querySelectorAll(".homepagemeals").forEach((cards) => {
    cards.addEventListener("click", () => {
      $("#foodDemo .imgcontent").addClass("d-none");
      $(".homecontentarea .searchbars").addClass("d-none");
      $("#instructionpage").removeClass("d-none");

      instbox = `
      <div class="col-md-4">
                          <div class="selectedmealimg">
                              <img class="rounded w-100" src="${cards.children[0].src}" alt="burger_img">
                          </div>
                          <h1 class="text-white selectedmealtitle">${cards.children[33].children[0].innerHTML}</h1>
                      </div>
                      <div class="col-md-8">
                          <h2 class="text-white">Instructions</h2>
                          <p class="text-white">${cards.children[1].innerHTML}
                       
                          </p>
                          <ul class="list-unstyled text-white">
                              <li>
                                  <h2>Area : ${cards.children[2].innerHTML}</h2>
                              </li>
                              <li>
                                  <h2>Category : ${cards.children[3].innerHTML}</h2>
                              </li>
                              <li>
                                  <h2>Recipes : </h2>
                              </li>
                              <div class="recipes">
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[18].innerHTML} ${cards.children[4].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[19].innerHTML} ${cards.children[5].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[20].innerHTML} ${cards.children[6].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[21].innerHTML} ${cards.children[7].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[22].innerHTML} ${cards.children[8].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[23].innerHTML} ${cards.children[9].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[24].innerHTML} ${cards.children[10].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[25].innerHTML} ${cards.children[11].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[26].innerHTML} ${cards.children[12].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[27].innerHTML} ${cards.children[13].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[28].innerHTML} ${cards.children[14].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[29].innerHTML} ${cards.children[15].innerHTML}</span>
                                  <span class="badge mt-3 mx-2 text-bg-info">${cards.children[30].innerHTML} ${cards.children[16].innerHTML}</span>
                              </div>
                              <li class="mt-4">
                                  <h2>Tags : </h2>
                                  <div>
                                  <span class="badge mt-3 mx-2 text-bg-danger">${cards.children[17].innerHTML}</span>
                                  </div>
                              </li>
                              <div class="buttons">
                                  <a class="mt-3 me-1 btn btn-success" href="${cards.children[31].innerHTML}"
                                      role="button">Source</a>
                                  <a class="mt-3 btn btn-danger" href="${cards.children[32].innerHTML}"role="button">Youtube</a>
                              </div>
     
                          </ul>
                      </div>
     `;

      document.getElementById("instDemo").innerHTML = instbox;
      console.log(cards.children);
    });
  });
}

$(".nav-search").click(function () {
  $(".homecontentarea .searchbars").removeClass("d-none");
  $("#foodDemo .imgcontent").addClass("d-none");
});

$(".nav-cat").click(function () {
  $(".categories").removeClass("d-none");
  $("#foodDemo .imgcontent").addClass("d-none");
  $(".homecontentarea .searchbars").addClass("d-none");
  $(".ingrediants").addClass("d-none");
  $(".area").addClass("d-none");
  $(".contactus").addClass("d-none");
  $(".subcategoires").addClass("d-none");
  $("#instructionpage").addClass("d-none");
});

$(".nav-area").click(function () {
  $(".area").removeClass("d-none");
  $("#foodDemo .imgcontent").addClass("d-none");
  $(".homecontentarea .searchbars").addClass("d-none");
  $(".categories").addClass("d-none");
  $(".ingrediants").addClass("d-none");
  $(".contactus").addClass("d-none");
  $(".subcategoires").addClass("d-none");
  $("#instructionpage").addClass("d-none");
});

$(".nav-ingrediants").click(function () {
  $(".ingrediants").removeClass("d-none");
  $("#foodDemo .imgcontent").addClass("d-none");
  $(".homecontentarea .searchbars").addClass("d-none");
  $(".categories").addClass("d-none");
  $(".area").addClass("d-none");
  $(".contactus").addClass("d-none");
  $(".subcategoires").addClass("d-none");
  $("#instructionpage").addClass("d-none");
});

$(".nav-contact").click(function () {
  $(".contactus").removeClass("d-none");
  $(".ingrediants").addClass("d-none");
  $("#foodDemo .imgcontent").addClass("d-none");
  $(".homecontentarea .searchbars").addClass("d-none");
  $(".categories").addClass("d-none");
  $(".area").addClass("d-none");
  $(".subcategoires").addClass("d-none");
  $("#instructionpage").addClass("d-none");
});

function togglingBars() {
  document.getElementById("bars").addEventListener("click", () => {
    document.querySelectorAll("#blackbar")[0].classList.remove("d-none");
    document.getElementById("bars").classList.add("d-none");
    document.getElementById("closex").classList.remove("d-none");
  });
  document.getElementById("closex").addEventListener("click", () => {
    document.querySelectorAll("#blackbar")[0].classList.add("d-none");
    document.getElementById("bars").classList.remove("d-none");
    document.getElementById("closex").classList.add("d-none");
  });
}

////////////////////////////////////// CATEGORY SECTION  & SUB CATEGORIES //////////////////////

async function getCategory() {
  let catdata = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let catboxdata = await catdata.json();

  return catboxdata;
}

function catDisplay(catData) {
  let cartona = "";
  for (let m = 0; m < catData.categories.length; m++) {
    cartona += ` <div class=" imgcategorycontent rounded ">
                            <img class=" w-100" src="${
                              catData.categories[m].strCategoryThumb
                            }" alt="dish-img">
                            <div class="text-center justify-content-center overlaycontent">
                                <p class="cattitle">${
                                  catData.categories[m].strCategory
                                }</p>
                                <p class="catpara w-100 pb-5 px-5">
                                  ${catData.categories[
                                    m
                                  ].strCategoryDescription.slice(0, 100)}
                                </p>
                            </div>
                   </div>  
`;
  }
  document.getElementById("catDemo").innerHTML = cartona;

  // ......................................SUB CATEGORIES etc ... ex : SEAFOOD : SALMON , FISH , CALEMARI , CRAP

  document.querySelectorAll(".imgcategorycontent").forEach((subcatcards) => {
    subcatcards.addEventListener("click", () => {
      $(".categories").addClass("d-none");
      $(".homecontentarea .searchbars").addClass("d-none");
      $(".subcategoires").removeClass("d-none");

      async function getSubCat() {
        let subcatdata = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
        );
        let subcatboxdata = await subcatdata.json();

        return subcatboxdata;
      }

      function subcatDisplay(subcatData) {
        let subcatcartona = "";
        for (let s = 0; s < subcatData.meals.length; s++) {
          subcatcartona += ` 
           <div class="subcategorymeals imgcontent rounded ">
                        <img class=" w-100" src="${subcatData.meals[s].strMealThumb}" alt="dish-img">
                        <div class="d-flex align-items-center  overlaycontent">
                        <p class="">${subcatData.meals[s].strMeal}</p>
                        </div>
                    </div>
      
          `;
        }
        document.getElementById("subCatDemo").innerHTML = subcatcartona;
        console.log(subcatData);
      }

      async function allCat() {
        let subcatData = await getSubCat();
        subcatDisplay(subcatData);
      }

      allCat();
    });
  });
}

// ...................................... AREA SECTION ...........................//

async function getArea() {
  let areadata = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  let areaboxdata = await areadata.json();

  return areaboxdata;
}

function areaDisplay(areaData) {
  let areabox = "";
  for (let a = 0; a < areaData.meals.length; a++) {
    areabox += `
                        <div class="cardblock col-md-3 mt-3 d-flex flex-column align-items-center text-white">
                            <i class=" fa-4x fa-solid fa-house"></i>
                            <h3>${areaData.meals[a].strArea}</h3>
                        </div>
   `;
  }
  document.getElementById("areaDemo").innerHTML = areabox;
}

// ...............INGREDIANTS ........................

async function getIng() {
  let ingdata = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let ingboxdata = await ingdata.json();

  return ingboxdata;
}

function ingDisplay(ingData) {
  let ingbox = "";
  for (let r = 0; r < ingData.meals.length; r++) {
    ingbox += `
                  <div class="cardblock col-md-3 mt-5 text-white text-center">
                            <i class="fa-4x fa-solid fa-drumstick-bite"></i>
                            <h1 class="mealtitle">${ingData.meals[r].strIngredient}</h1>
                            <p class="mealpara">${ingData.meals[r].strDescription}</p>
                        </div>     
   `;
  }
  document.getElementById("ingDemo").innerHTML = ingbox;
}

// .............................. CONTACT US VERFICATION ..............................//

function validateName() {
  let valname = document.getElementById("valName");
  let regexName = /^[a-zA-Z\s]/;
  let isNameValid = regexName.test(valname.value);

  if (isNameValid) {
    $("#valNameError").addClass("d-none");

    return true;
  } else {
    $("#valNameError").removeClass("d-none");
  }
}

function validateMail() {
  let valmail = document.getElementById("valMail");
  let regexMail = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  let isMailValid = regexMail.test(valmail.value);

  if (isMailValid) {
    $("#valMailError").addClass("d-none");

    return true;
  } else {
    $("#valMailError").removeClass("d-none");
  }
}

function validatePhone() {
  let valphone = document.getElementById("valPhone");
  let regexPhone = /^(\d{11})$/;
  let isPhoneValid = regexPhone.test(valphone.value);

  if (isPhoneValid) {
    $("#valPhoneError").addClass("d-none");

    return true;
  } else {
    $("#valPhoneError").removeClass("d-none");
  }
}

function validateAge() {
  let valage = document.getElementById("valAge");
  let regexAge = /^(\d{2})$/;
  let isAgeValid = regexAge.test(valage.value);

  if (isAgeValid) {
    $("#valAgeError").addClass("d-none");

    return true;
  } else {
    $("#valAgeError").removeClass("d-none");
  }
}

function validatePass() {
  let valpass = document.getElementById("valPass");
  let regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let isPassValid = regexPass.test(valpass.value);

  if (isPassValid) {
    $("#valPassError").addClass("d-none");

    return true;
  } else {
    $("#valPassError").removeClass("d-none");
  }
}

function validateRepass() {
  let valRepass = document.getElementById("valRepass");
  let regexRepass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let isRepassValid = regexRepass.test(valRepass.value);

  if (isRepassValid) {
    $("#valRepassError").addClass("d-none");

    return true;
  } else {
    $("#valRepassError").removeClass("d-none");
  }
}

function redButton() {
  if (
    validateAge() &&
    validateMail() &&
    validateName() &&
    validatePass() &&
    validatePhone() &&
    validateRepass()
  ) {
   $("#redbtn").removeClass("disabled")
    return true;
  }
}

async function All() {
  let foodData = await getHome();
  togglingBars();
  foodDisplay(foodData);

  let catData = await getCategory();
  catDisplay(catData);

  let areaData = await getArea();
  areaDisplay(areaData);

  let ingData = await getIng();
  ingDisplay(ingData);
}

All();
