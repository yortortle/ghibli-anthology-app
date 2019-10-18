

$ ( () => {
  const $body = $("body");
  let input = "";
  const $titleBtn = $("#title");
  const $directorBtn = $("#director");
  const $locationBtn = $("#location");

  const promise = $.ajax({
    url: "https://ghibliapi.herokuapp.com/films/"
  });

  const func = () => {
    promise.then(
      (data)=>{
        if (input === "TITLE") {
          console.log(data);
          for (var i = 1; i <= data.length; i++) {
            console.log(i + ": " + data[i].title + " " + data[i].director);
            // console.log(data[i].director);
          }
        }
      },
      ()=>{
        console.log("oops");
      }
    )
  }

  $titleBtn.on("click", () => {
    input = "TITLE"
    console.log(input);
    func();
  })

});
