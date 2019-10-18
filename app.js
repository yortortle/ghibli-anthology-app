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

  const promise = $.ajax({
    url: "https://ghibliapi.herokuapp.com/films/"
  });


  const func = () => {
    const promise = $.ajax({
      url: "https://ghibliapi.herokuapp.com/films/"
    });

    promise.then(
      (data)=>{
        if (input === "TITLE") {
          console.log(data);
          $list.empty();
          for (var i = 0; i <= data.length; i++) {
            let val = i + 1;
            const $output = $("<p>");
            const $buttonOutput = $("<button>").text("MORE INFO").addClass("buttons").attr("id", "generatedBtns");
            $output.text(val + ": " + data[i].title + " - Director: " + data[i].director + " - Release Date: " + data[i].release_date);
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

});
