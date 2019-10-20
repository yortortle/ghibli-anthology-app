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
            const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
            $buttonOutput.on("click", () => {
              // const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
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
              let test = data[i].description;
              const $output = $("<p>");
              const $buttonOutput = $("<button>").text("MORE INFO").addClass("buttons").attr("id", "generatedBtns");
              $output.text("Director: " + data[i].director + " - Title: " + data[i].title + " - Release Date: " + data[i].release_date);

              const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
              $buttonOutput.on("click", () => {
                // const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
                $modalImg.append($img);
                console.log(test);
                $modalTxt.text(test);
                $modal.css("display", "block")
              })
              $output.append($buttonOutput);
              $list.append($output);
            }
          }
        }
        else if (input === "DIRECTOR2") {
          console.log("test2");
          $list.empty();
          console.log("success");
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].director);
            if (data[i].director === "Isao Takahata") {
              let test = data[i].description;
              const $output = $("<p>");
              const $buttonOutput = $("<button>").text("MORE INFO").addClass("buttons").attr("id", "generatedBtns");
              $output.text("Director: " + data[i].director + " - Title: " + data[i].title + " - Release Date: " + data[i].release_date);

              const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
              $buttonOutput.on("click", () => {
                // const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
                $modalImg.append($img);
                console.log(test);
                $modalTxt.text(test);
                $modal.css("display", "block")
              })
              $output.append($buttonOutput);
              $list.append($output);
            }
          }
        }
        else if (input === "DIRECTOR3") {
          console.log("test2");
          $list.empty();
          console.log("success");
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].director);
            if (data[i].director === "Yoshifumi Kondō") {
              let test = data[i].description;
              const $output = $("<p>");
              const $buttonOutput = $("<button>").text("MORE INFO").addClass("buttons").attr("id", "generatedBtns");
              $output.text("Director: " + data[i].director + " - Title: " + data[i].title + " - Release Date: " + data[i].release_date);

              const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
              $buttonOutput.on("click", () => {
                // const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
                $modalImg.append($img);
                console.log(test);
                $modalTxt.text(test);
                $modal.css("display", "block")
              })
              $output.append($buttonOutput);
              $list.append($output);
            }
          }
        }
        else if (input === "DIRECTOR4") {
          console.log("test2");
          $list.empty();
          console.log("success");
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].director);
            if (data[i].director === "Hiroyuki Morita") {
              let test = data[i].description;
              const $output = $("<p>");
              const $buttonOutput = $("<button>").text("MORE INFO").addClass("buttons").attr("id", "generatedBtns");
              $output.text("Director: " + data[i].director + " - Title: " + data[i].title + " - Release Date: " + data[i].release_date);

              const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
              $buttonOutput.on("click", () => {
                // const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
                $modalImg.append($img);
                console.log(test);
                $modalTxt.text(test);
                $modal.css("display", "block")
              })
              $output.append($buttonOutput);
              $list.append($output);
            }
          }
        }
        else if (input === "DIRECTOR5") {
          console.log("test2");
          $list.empty();
          console.log("success");
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].director);
            if (data[i].director === "Gorō Miyazaki") {
              let test = data[i].description;
              const $output = $("<p>");
              const $buttonOutput = $("<button>").text("MORE INFO").addClass("buttons").attr("id", "generatedBtns");
              $output.text("Director: " + data[i].director + " - Title: " + data[i].title + " - Release Date: " + data[i].release_date);

              const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
              $buttonOutput.on("click", () => {
                // const $img = $("<img>").attr("src", "img/img2/gh" + i + ".jpg").addClass("modalImage");
                $modalImg.append($img);
                console.log(test);
                $modalTxt.text(test);
                $modal.css("display", "block")
              })
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

  $("#director2").on("click", () => {
    console.log("hi");
    input = "DIRECTOR2";
    func();
  })

  $("#director3").on("click", () => {
    console.log("hi");
    input = "DIRECTOR3";
    func();
  })

  $("#director4").on("click", () => {
    console.log("hi");
    input = "DIRECTOR4";
    func();
  })

  $("#director5").on("click", () => {
    console.log("hi");
    input = "DIRECTOR5";
    func();
  })

  $("#director6").on("click", () => {
    console.log("hi");
    input = "DIRECTOR3";
    func();
  })

  $modalBtn.on("click", () => {
    console.log("test");
    // $modalDiv.remove($(".modalImage"));
    $modalImg.empty();
    $modal.css("display", "none")
  })



});
