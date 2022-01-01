<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->





<!-- PROJECT LOGO -->

<p align="center">
  <a href="https://github.com/bumoonio/BooWidgets">
    <img src="example2.png" alt="Logo" width="250" height="120">
  </a>

  <h1 style="font-weight:bold" align="center">Boo! Widgets</h1>

  <p align="center">
    Javascript library for embedding deep linking Widgets on your website
  
  </p>
</p>
 
 <p align="center">
  <img src="https://github.com/trustwallet/assets/workflows/Check/badge.svg">
</p>


## Information

This repository contains Javascript library in purpose to embed deep linking widgets easily on a website served via <a href="https://jsdelivr.com">jsDelivr</a>.

## Trade Widget
Append this tag on your website
```js
<script src="https://cdn.jsdelivr.net/gh/bumoonio/BooWidgets/BooTrWidgets.js"></script>
```
Use this tag to generate Boo! Trade Widgets
```html
<bootradewidget></bootradewidget>
```
Insert your token address to automatically redirect to Swap page and set your token as the Swap target
```html
//Example with BUMooN tokens
 <bootradewidget>0x3aeff4e27e1f9144ed75ba65a80bdfee345f413e</bootradewidget>
```
## Transfer Widget
Append this tag on your website
```js
<script src="https://cdn.jsdelivr.net/gh/bumoonio/BooWidgets/BooTxWidgets.js"></script>
```
Use this tag to generate Boo Transfer Widget
```html
<bootransferwidget></bootransferwidget>
```
Format to;token;amount separated with semicolon per parameter
```html
//Example with BUMooN tokens
 <bootransferwidget>0x0000000000000000000000000000000000000000;0x3aeff4e27e1f9144ed75ba65a80bdfee345f413e;100</bootransferwidget>
```
**Note : We encourage you to use checksummed address

## Customize
To enable customize, use available direct selector id = BooTxWidgetSelector / BooTrWidgetSelector
```css
#BooTrWidgetSelector{
  width : ...
  height : ...
}
```
```js
${'#BooTrWidgetSelector'}.css('height','...');
```




## Copyright

© 2022 Bumoon.io






<!-- MARKDOWN LINKS & IMAGES -->
[contributors-url]: https://github.com/bumoonio/bumoon/graphs/contributors
[linkedin-url]: https://www.linkedin.com/company/bumoon/mycompany/
