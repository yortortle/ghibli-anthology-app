

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
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].title);
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
