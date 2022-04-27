var imgyum = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4LSYUTyc2hnWFih9_oXImINJxaOFjJRKddsp_miufavaAqd-oO4GgfpH90Wtuxlgi-U&usqp=CAU",
  "https://i.ytimg.com/vi/FDqyQ0AbAb0/maxresdefault.jpg",
  "https://i.ytimg.com/vi/_fkvZhBEyY8/maxresdefault.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/12/dc/42/e3/bk-dolmen-mall.jpg",
];
function order() {
  document.getElementById("displayfood").innerText = null;
  let status = "open";
  alert("Please Have Patience Your Order is Preparing!!");
  let time = Math.round(Math.random() * 5);

  let orderDetails = document.getElementById("food").value;
  let food_promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (status == "open") {
        resolve(orderDetails);
      } else {
        reject("Told You it is Close!!!!!");
      }
    }, time * 1000);
  });
  food_promise.then(function (res) {
    eatFood(orderDetails);
  });
  food_promise.catch(function (err) {
    alert("Sorry for the inconvenience!!!");
  });
}
function eatFood(s) {
  document.getElementById("displayfood").innerText = null;
  var pic = document.createElement("img");
  if (s == "choose") {
    pic.src = imgyum[3];
  }
  if (s == "coffee") {
    pic.src = imgyum[0];
  }
  if (s == "burger") {
    pic.src = imgyum[1];
  }
  if (s == "shakes") {
    pic.src = imgyum[2];
  }
  document.getElementById("displayfood").append(pic);
}
