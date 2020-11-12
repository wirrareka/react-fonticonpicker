if (!("boxShadow" in document.body.style)) {
  document.body.setAttribute("class", "noBoxShadow");
}
document.body.addEventListener("click", function(e) {
  var target = e.target as HTMLElement;
  if (
    target.tagName === "INPUT" &&
    target.getAttribute("class").indexOf("liga") === -1
  ) {
    (target as HTMLInputElement).select();
  }
});
(function() {
  var fontSize = document.getElementById("fontSize") as HTMLInputElement,
    testDrive = document.getElementById("testDrive") as HTMLInputElement,
    testText = document.getElementById("testText") as HTMLInputElement;
  function updateTest() {
    testDrive.innerHTML = testText.value || String.fromCharCode(160);
    const anyWindow = window as any;
    if (anyWindow.icomoonLiga) {
      anyWindow.icomoonLiga(testDrive);
    }
  }
  function updateSize() {
    testDrive.style.fontSize = fontSize.value + "px";
  }
  fontSize.addEventListener("change", updateSize, false);
  testText.addEventListener("input", updateTest, false);
  testText.addEventListener("change", updateTest, false);
  updateSize();
})();
