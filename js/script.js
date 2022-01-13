$("document").ready(function () {
  $(".project-name[data-type='mineralwater']").css(
    "background-color",
    "#5b6ccf"
  );
  $(".project-name[data-type='vitamin']").css("background-color", "#2f6e3f");
  $(".project-name[data-type='proteinbar']").css("background-color", "#602c70");

  document
    .querySelector("#html-css")
    .addEventListener("change", function (evt) {
      updateProjectView("vitamins", evt.target.checked);
    });

  document.querySelector("#reactjs").addEventListener("change", function (evt) {
    updateProjectView("mineralwater", evt.target.checked);
  });

  document.querySelector("#games").addEventListener("change", function (evt) {
    updateProjectView("proteinbar", evt.target.checked);
  });

  $(".project-item").each(function () {
    var prodName = encodeURIComponent($(this).children("h2").text());
    var prodID = encodeURIComponent($(this).data("prod_id"));

    var link = $(
      "<a href='project.html?prodName=" + prodName + "&prodID=" + prodID + "'/>"
    );
    $(this).children("img").wrap(link);
  });
});

function updateProjectView(categoryName, bVisible) {
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
  $(".project-item")
    .has(dataSelectorVal)
    .css("display", bVisible ? "" : "none");
}
