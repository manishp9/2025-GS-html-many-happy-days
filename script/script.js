$(document).ready(function () {
  new WOW().init();
});

$(".navbar-toggle").click(function (e) {
  e.preventDefault();
  $("header-outer").addClass("active");
  $(".menu-box").addClass("active");
});
$(".menu-box .navbar-toggle").click(function (e) {
  e.preventDefault();
  $("header-outer").removeClass("active");
  $(".menu-box").removeClass("active");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    // You can adjust the scroll position threshold
    $("header").addClass("scrolled");
    $(".toogle-menu").slideUp();
    $("body").removeClass("slip");
  } else {
    $("header").removeClass("scrolled");
  }
});

$(".today-form-input input, .today-form-input textarea").focus(function () {
  $(this).parents(".today-form-inner").addClass("active");
});

$(".today-form-input input, .today-form-input textarea").blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".today-form-inner").removeClass("active");
  } else {
    $(this).addClass("filled");
  }
});

$("#currentYear").text(new Date().getFullYear());

$(document).ready(function () {
  // Open the first item by default
  $(".ques-accodian-items").first().find(".ques-items-data").show();
  $(".ques-accodian-items").first().addClass("active");

  $(".ques-items-btn").on("click", function () {
    var parentItem = $(this).closest(".ques-accodian-items");

    // Toggle the corresponding .ques-items-data
    parentItem.find(".ques-items-data").slideToggle();

    // Rotate the arrow image
    // $(this).find("i").addClass("fa-minus").removeClass("fa-plus");
    if ($(this).find("i").hasClass("fa-minus")) {
      $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
    } else if ($(this).find("i").hasClass("fa-plus")) {
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    }

    // Toggle 'active' class on the clicked item
    parentItem.toggleClass("active");

    // Close other open accordions
    $(".ques-accodian-items")
      .not(parentItem)
      .find(".ques-items-data")
      .slideUp();
    $(".ques-accodian-items").not(parentItem).find("img").removeClass("rotate");
    $(".ques-accodian-items").not(parentItem).removeClass("active");
  });
});
