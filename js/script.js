$("document").ready(function () {
  $(".project-name[data-type='react']").css("background-color", "#5b6ccf");
  $(".project-name[data-type='htmlcss']").css("background-color", "#2f6e3f");
  $(".project-name[data-type='game']").css("background-color", "#602c70");

  document
    .querySelector("#html-css")
    .addEventListener("change", function (evt) {
      updateProjectView("htmlcsss", evt.target.checked);
    });

  document.querySelector("#reactjs").addEventListener("change", function (evt) {
    updateProjectView("react", evt.target.checked);
  });

  document.querySelector("#games").addEventListener("change", function (evt) {
    updateProjectView("game", evt.target.checked);
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
    case "htmlcsss":
      dataSelectorVal = "h2[data-type='htmlcss']";
      break;
    case "react":
      dataSelectorVal = "h2[data-type='react']";
      break;
    case "game":
      dataSelectorVal = "h2[data-type='game']";
      break;
  }
  $(".project-item")
    .has(dataSelectorVal)
    .css("display", bVisible ? "" : "none");
}
