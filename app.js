$ ( () => {
  let input = "";
  const directorList = [];

  const $body = $("body");
  const $titleBtn = $("#title");
  const $directorBtn = $("#director");
  const $locationBtn = $("#location");
  const $list = $(".list");
  const $center = $(".center")
  const $generatedBtns = $("#generatedBtns");
  const $modal = $("#modal");
  const $modalDiv = $("#txt");
  const $modalTxt = $("#modalParagraph");
  const $modalBtn = $("#closeModal");
  const $modalImg = $(".modalImg")

  const promise = $.ajax({
    url: "https://ghibliapi.herokuapp.com/films/"
  });


  const func = () => {
    const promise2 = $.ajax({
      url: "https://ghibliapi.herokuapp.com/locations/"
    });

    promise.then(
      (data)=>{
        if (input === "TITLE") {
          console.log(data);
          $list.empty();
          for (var i = 0; i <= data.length; i++) {
            let val = i + 1;
            let test = data[i].description;
            const $output = $("<p>");
            const $buttonOutput = $("<button>").text("MORE INFO").addClass("buttons").attr("id", "generatedBtns");
            $output.text("Title: " + data[i].title + " - Director: " + data[i].director + " - Release Date: " + data[i].release_date);
            $buttonOutput.on("click", () => {
              const $img = $("<img>").attr("src", "img/NAUSICAA_01_NVW1012945.jpg").addClass("modalImage");
              $modalImg.append($img);
              console.log(test);
              $modalTxt.text(test);
              $modal.css("display", "block")
            })
            $output.append($buttonOutput);
            $list.append($output);
          }
        }
        else if (input === "DIRECTOR") {
          $list.empty();
          console.log("success");
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].director);
            if (data[i].director === "Hayao Miyazaki") {
              const $output = $("<p>");
              const $buttonOutput = $("<button>").text("MORE INFO").addClass("buttons").attr("id", "generatedBtns");
              $output.text("Director: " + data[i].director + " - Title: " + data[i].title + " - Release Date: " + data[i].release_date);
              $output.append($buttonOutput);
              $list.append($output);
            }
            else {
              console.log("hello");
            }
          }
        }

      },
      ()=>{
        console.log("oops");
      }
    )
  }

  $titleBtn.on("click", () => {
    input = "TITLE";
    console.log(input);
    func();
  })

  $directorBtn.on("click", () => {
    input = "DIRECTOR";
    console.log("test");
    func();
  })

  $modalBtn.on("click", () => {
    console.log("test");
    // $modalDiv.remove($(".modalImage"));
    $modalImg.empty();
    $modal.css("display", "none")
  })

});
