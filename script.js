$(document).ready(function () {
  // NAV
  $("#top-nav a, #right-nav a").on("click", function (event) {
    $("#top-nav a, #right-nav a").removeClass("active");
    $(this).addClass("active");

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $(window)
    .on("scroll", function () {
      var scrollPos = $(document).scrollTop();
      var activeExist = false;

      $(".section").each(function () {
        var top = $(this).offset().top;
        var bottom = top + $(this).outerHeight();
        if (scrollPos >= top && scrollPos < bottom && !activeExist) {
          var id = $(this).attr("id");
          $("#right-nav a, #top-nav a").removeClass("active");
          $('#right-nav a[href="#' + id + '"]').addClass("active");
          $('#top-nav a[href="#' + id + '"]').addClass("active");
          activeExist = true;
        }
      });

      if (!activeExist) {
        $("#top-nav a:first-child").addClass("active");
      }
    })
    .trigger("scroll");

  // Video Player
  var videoID = "lrv3Fnb97To";
  $(".play-button").on("click", function () {
    $("#videoContainer").html(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        videoID +
        '?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>'
    );
  });

  // section 4 contents
  var linkContentMap = {
    "#video": {
      color: "black",
      content:
        "Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.",
    },
    "#photography": {
      color: "blue",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    "#social": {
      color: "green",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    "#PR": {
      color: "orange",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    "#radio": {
      color: "purple",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  };

  $(".links a").on("click", function (event) {
    event.preventDefault();
    var section = $(this).attr("href");
    var color = linkContentMap[section]["color"];
    var content = linkContentMap[section]["content"];
    $(".color-container").css("background-color", color);
    $(".body").html(content);
  });
});
