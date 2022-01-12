$("document").ready(function () {
  $(".product-name[data-type='mineralwater']").css(
    "background-color",
    "#5b6ccf"
  );
  $(".product-name[data-type='vitamin']").css("background-color", "#2f6e3f");
  $(".product-name[data-type='proteinbar']").css("background-color", "#602c70");

  document
    .querySelector("#html-css")
    .addEventListener("change", function (evt) {
      updateProductView("vitamins", evt.target.checked);
    });

  document.querySelector("#reactjs").addEventListener("change", function (evt) {
    updateProductView("mineralwater", evt.target.checked);
  });

  document.querySelector("#games").addEventListener("change", function (evt) {
    updateProductView("proteinbar", evt.target.checked);
  });

  $(".product-item").each(function () {
    var prodName = encodeURIComponent($(this).children("h2").text());
    var prodID = encodeURIComponent($(this).data("prod_id"));

    var link = $(
      "<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>"
    );
    $(this).children("img").wrap(link);
  });
});

function updateProductView(categoryName, bVisible) {
  var dataSelectorVal = "";
  switch (categoryName) {
    case "vitamins":
      dataSelectorVal = "h2[data-type='vitamin']";
      break;
    case "mineralwater":
      dataSelectorVal = "h2[data-type='mineralwater']";
      break;
    case "proteinbar":
      dataSelectorVal = "h2[data-type='proteinbar']";
      break;
  }
  $(".product-item")
    .has(dataSelectorVal)
    .css("display", bVisible ? "" : "none");
}
