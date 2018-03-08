function addOne() {
  widgetCount++;
}

function insertCountWidget(divId) {
  const counterDiv = document.getElementById(divId);
  window.widgetCount = 0;
  counterDiv.innerHTML =
    `
    <div id="counter" style="background:lightgrey; text-align:center">
      <h1>
        Counter widget
      </h1>
      <button id="counter-btn" style="background:lightblue" onclick="addOne()">
        Count Up!
      </button>
    </div>
  `;



  // return `
  //   <div id="counter" style="background:lightgrey; text-align:center">
  //     <h1>
  //       Counter widget
  //     </h1>
  //     <button id="counter-btn" style="background:lightblue" onclick="addOne()">
  //       Count Up!
  //     </button>
  //   </div>
  // `
};
