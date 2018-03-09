# counter-widget
A widget that can be dropped into your HTML to keep an incrementing count

### How to Use
1. load the *index.js* script or its contents into your javascript
2. call *insertCountWidget(arg1, arg2)*, where:
   - *arg1* is the id attribute of the placeholder element where the widget is to be placed
   - *arg2*(optional) is the id attribute of the placeholder element where the count is to be displayed
     - Note: If omitting arg2, the current count can be found on the window object as *window.widgetCount* or *widgetCount*, returning an integer.

### Example
```html
<!DOCTYPE html>
<html>
<head>
  <title>External Page</title>
</head>
<body>
  <div id="external" style="display:inline-block; padding: 0px 50px;">
    <h2>
      An external company web page
    </h2>
    <h3>
      You have counted to: <span id="countPH"></span>
    </h3>
  </div>

  <div id="widgetPH" style="display:inline-block"></div>

  <script src="https://rawgit.com/bberd/counter-widget/master/index.js"></script>
  <script>insertCountWidget('widgetPH', 'countPH')</script>
</body>
</html>
...
```
