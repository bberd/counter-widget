widgetCount = 0; //adds counter var to global window obj

function insertCountWidget(divId, spanId) {
  spanId ? document.getElementById(spanId).innerHTML = 0 : ''; //if spanId provided, display initial count as 0;
  const counterDiv = document.getElementById(divId);
  counterDiv.innerHTML =
    `
    <style>
      #widget {
        display: inline-block;
        padding: 0px 70px 50px;
        border: 1px solid black;
        background: rgb(243,243,243);
    }
      #counter-btn {
        background:rgb(84,132,227);
        padding: 6px 23px;
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
      }
      #widget-heading {
        font-family: Arial, Helvetica, sans-serif;
      }
    </style>

    <div id="widget">
      <h4 id="widget-heading">
        Counting widget
      </h4>
      <button id="counter-btn" onclick="handleCounterClick(${spanId ? spanId : ''})">
        Count Up!
      </button>
    </div>
  `;
};

//increment count and, if provided, update displayed count
function handleCounterClick(countSpan) {
  widgetCount++;
  countSpan ? countSpan.innerHTML = widgetCount : '';
}
