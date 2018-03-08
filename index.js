widgetCount = 0; //adds counter var to global window obj

function insertCountWidget(divId, spanId) {
  spanId ? document.getElementById(spanId).innerHTML = 0 : ''; //if spanId provided, set initial span to 0;
  const counterDiv = document.getElementById(divId);
  counterDiv.innerHTML =
    `
    <style>
      #counter-btn {
        background:rgb(84,132,227);
        padding: 10px 20px;
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
      }
      #widget-heading {
        font-family: Arial, Helvetica, sans-serif;
      }
    </style>

    <h4 id="widget-heading">
      Counting widget
    </h4>
    <button id="counter-btn" onclick="handleCounterClick(${spanId ? spanId : ''})">
      Count Up!
    </button>
  `;
};

//increment count and, if provided, update span
function handleCounterClick(countSpan) {
  widgetCount++;
  countSpan ? countSpan.innerHTML = widgetCount : '';
}
