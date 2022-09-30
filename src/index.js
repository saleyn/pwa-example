if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(reg => {
    console.log("SW Registered");
    console.log(reg);
  }).catch(e => {
    console.log("SW Registration Failed!");
    console.log(e);
  });
}
