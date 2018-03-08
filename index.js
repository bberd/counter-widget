window.widgetCount = 0;

function handleClick(spanId) {
  widgetCount++;
  console.log(spanId)
  // const countSpan = document.getElementById(spanId);
  spanId.innerHTML = widgetCount;

}

function insertCountWidget(divId, spanId) {
  const counterDiv = document.getElementById(divId);
  counterDiv.innerHTML =
    `
    <div id="counter" style="background:lightgrey; text-align:center">
      <h1>
        Counter widget
      </h1>
      <button id="counter-btn" style="background:lightblue" onclick="handleClick(${spanId})">
        Count Up!
      </button>
    </div>
  `;



  // return `
  //   <div id="counter" style="background:lightgrey; text-align:center">
  //     <h1>
  //       Counter widget
  //     </h1>
  //     <button id="counter-btn" style="background:lightblue" onclick="handleClick()">
  //       Count Up!
  //     </button>
  //   </div>
  // `
};
