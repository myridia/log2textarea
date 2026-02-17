var log = new Log2textarea("logger");

window.onload = function () {
  const $button1 = document.querySelector("#btn_1");
  const $button2 = document.querySelector("#btn_2");
  const $button3 = document.querySelector("#btn_3");

  $button1.addEventListener("click", (e) => {
    log.info("...click button: " + e.target.id);
  });

  $button2.addEventListener("click", (e) => {
    log.info("...click button: " + e.target.id);
  });

  $button3.addEventListener("click", (e) => {
    log.info("...click button: " + e.target.id);
  });
};
