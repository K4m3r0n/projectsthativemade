javascript:void((function lo7NAB(doc) {
  var toggley = true;
  var lo7NABOpened = true;
  if (typeof jQuery == 'undefined') {
    var script_jQuery = document.createElement('script');
    script_jQuery.setAttribute('src', 'https://code.jquery.com/jquery-latest.min.js');
    Node.prototype.appendChild.call(document.body, script_jQuery);
  }

  function colourNameToHex(colour) {
    var colours = {
      "aliceblue": "#f0f8ff",
      "antiquewhite": "#faebd7",
      "aqua": "#00ffff",
      "aquamarine": "#7fffd4",
      "azure": "#f0ffff",
      "beige": "#f5f5dc",
      "bisque": "#ffe4c4",
      "black": "#000000",
      "blanchedalmond": "#ffebcd",
      "blue": "#0000ff",
      "blueviolet": "#8a2be2",
      "brown": "#a52a2a",
      "burlywood": "#deb887",
      "cadetblue": "#5f9ea0",
      "chartreuse": "#7fff00",
      "chocolate": "#d2691e",
      "coral": "#ff7f50",
      "cornflowerblue": "#6495ed",
      "cornsilk": "#fff8dc",
      "crimson": "#dc143c",
      "cyan": "#00ffff",
      "darkblue": "#00008b",
      "darkcyan": "#008b8b",
      "darkgoldenrod": "#b8860b",
      "darkgray": "#a9a9a9",
      "darkgreen": "#006400",
      "darkkhaki": "#bdb76b",
      "darkmagenta": "#8b008b",
      "darkolivegreen": "#556b2f",
      "darkorange": "#ff8c00",
      "darkorchid": "#9932cc",
      "darkred": "#8b0000",
      "darksalmon": "#e9967a",
      "darkseagreen": "#8fbc8f",
      "darkslateblue": "#483d8b",
      "darkslategray": "#2f4f4f",
      "darkturquoise": "#00ced1",
      "darkviolet": "#9400d3",
      "deeppink": "#ff1493",
      "darkpink": "#AA336A",
      "deepskyblue": "#00bfff",
      "dimgray": "#696969",
      "dodgerblue": "#1e90ff",
      "firebrick": "#b22222",
      "floralwhite": "#fffaf0",
      "forestgreen": "#228b22",
      "fuchsia": "#ff00ff",
      "gainsboro": "#dcdcdc",
      "ghostwhite": "#f8f8ff",
      "gold": "#ffd700",
      "goldenrod": "#daa520",
      "gray": "#808080",
      "green": "#008000",
      "greenyellow": "#adff2f",
      "honeydew": "#f0fff0",
      "hotpink": "#ff69b4",
      "indianred ": "#cd5c5c",
      "indigo": "#4b0082",
      "ivory": "#fffff0",
      "khaki": "#f0e68c",
      "lavender": "#e6e6fa",
      "lavenderblush": "#fff0f5",
      "lawngreen": "#7cfc00",
      "lemonchiffon": "#fffacd",
      "lightblue": "#add8e6",
      "lightcoral": "#f08080",
      "lightcyan": "#e0ffff",
      "lightgoldenrodyellow": "#fafad2",
      "lightgrey": "#d3d3d3",
      "lightgreen": "#90ee90",
      "lightpink": "#ffb6c1",
      "lightsalmon": "#ffa07a",
      "lightseagreen": "#20b2aa",
      "lightskyblue": "#87cefa",
      "lightslategray": "#778899",
      "lightsteelblue": "#b0c4de",
      "lightyellow": "#ffffe0",
      "lime": "#00ff00",
      "limegreen": "#32cd32",
      "linen": "#faf0e6",
      "magenta": "#ff00ff",
      "maroon": "#800000",
      "mediumaquamarine": "#66cdaa",
      "mediumblue": "#0000cd",
      "mediumorchid": "#ba55d3",
      "mediumpurple": "#9370d8",
      "mediumseagreen": "#3cb371",
      "mediumslateblue": "#7b68ee",
      "mediumspringgreen": "#00fa9a",
      "mediumturquoise": "#48d1cc",
      "mediumvioletred": "#c71585",
      "midnightblue": "#191970",
      "mintcream": "#f5fffa",
      "mistyrose": "#ffe4e1",
      "moccasin": "#ffe4b5",
      "navajowhite": "#ffdead",
      "navy": "#000080",
      "oldlace": "#fdf5e6",
      "olive": "#808000",
      "olivedrab": "#6b8e23",
      "orange": "#ffa500",
      "orangered": "#ff4500",
      "orchid": "#da70d6",
      "palegoldenrod": "#eee8aa",
      "palegreen": "#98fb98",
      "paleturquoise": "#afeeee",
      "palevioletred": "#d87093",
      "papayawhip": "#ffefd5",
      "peachpuff": "#ffdab9",
      "peru": "#cd853f",
      "pink": "#ffc0cb",
      "plum": "#dda0dd",
      "powderblue": "#b0e0e6",
      "purple": "#800080",
      "rebeccapurple": "#663399",
      "red": "#ff0000",
      "rosybrown": "#bc8f8f",
      "royalblue": "#4169e1",
      "saddlebrown": "#8b4513",
      "salmon": "#fa8072",
      "sandybrown": "#f4a460",
      "seagreen": "#2e8b57",
      "seashell": "#fff5ee",
      "sienna": "#a0522d",
      "silver": "#c0c0c0",
      "skyblue": "#87ceeb",
      "slateblue": "#6a5acd",
      "slategray": "#708090",
      "snow": "#fffafa",
      "springgreen": "#00ff7f",
      "steelblue": "#4682b4",
      "tan": "#d2b48c",
      "teal": "#008080",
      "thistle": "#d8bfd8",
      "tomato": "#ff6347",
      "turquoise": "#40e0d0",
      "violet": "#ee82ee",
      "wheat": "#f5deb3",
      "white": "#ffffff",
      "whitesmoke": "#f5f5f5",
      "yellow": "#ffff00",
      "yellowgreen": "#9acd32",
      "cobalt": "#0047AB",
      "lilac": "#C8A2C8"
    };

    if (typeof colours[colour.toLowerCase()] != 'undefined')
      return colours[colour.toLowerCase()];

    return false;
  }

  function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
  }

  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }

  function displayOverlay() {
    $("<div id='overlay'><tbody><tr><td></td></tr></tbody></div>").css({
      "position": "fixed",
      "top": 0,
      "left": 0,
      "width": 102,
      "height": 69,
      "background-color": "rgba(30,30,30,1)",
      "z-index": 10000,
      "color": "#0a9100",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "grab"
    }).appendTo("body");
    $("<div id='overlay-1'><tbody><tr><td></td></tr></tbody></div>").css({
      "position": "fixed",
      "top": 3,
      "left": 3,
      "width": 30,
      "height": 30,
      "background-color": "rgba(16, 171, 2, 0.9)",
      "z-index": 10000,
      "color": "#000000",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "crosshair",
      "border-radius": "50%"
    }).appendTo("body");
    $("<div id='overlay-2'><tbody><tr><td></td></tr></tbody></div>").css({
      "position": "fixed",
      "top": 3,
      "left": 36,
      "width": 30,
      "height": 30,
      "background-color": "rgba(2, 0, 70, 0.9)",
      "z-index": 10000,
      "color": "#000000",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "crosshair",
      "border-radius": "50%"
    }).appendTo("body");
    $("<div id='overlay-3'><tbody><tr><td></td></tr></tbody></div>").css({
      "position": "fixed",
      "top": 3,
      "left": 69,
      "width": 30,
      "height": 30,
      "background-color": "rgba(219, 22,0,0.9)",
      "z-index": 10000,
      "color": "#000000",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "crosshair",
      "border-radius": "50%"
    }).appendTo("body");
    $("<div id='overlay-4'><tbody><tr><td></td></tr></tbody></div>").css({
      "position": "fixed",
      "top": 36,
      "left": 3,
      "width": 30,
      "height": 30,
      "background-color": "rgba(3, 252, 115, 0.9)",
      "z-index": 10000,
      "color": "#000000",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "crosshair",
      "border-radius": "50%"
    }).appendTo("body");
    $("<div id='overlay-5'><tbody><tr><td></td></tr></tbody></div>").css({
      "position": "fixed",
      "top": 36,
      "left": 36,
      "width": 30,
      "height": 30,
      "background-color": "rgba(209, 201, 50, 0.9)",
      "z-index": 10000,
      "color": "#000000",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "crosshair",
      "border-radius": "50%"
    }).appendTo("body");
    $("<div id='overlay-6'><tbody><tr><td></td></tr></tbody></div>").css({
      "position": "fixed",
      "top": 0,
      "left": 0,
      "width": 1,
      "height": 1,
      "background-color": "rgba(0, 0, 0, 0)",
      "z-index": 10000,
      "color": "#000000",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "crosshair",
      "border-radius": "0%",
    }).appendTo("body");
  }

  function clickInElement(e) {
    var isClickInsideElement = document.getElementById('overlay').contains(e.target);
    var isClickInsideElement1 = document.getElementById('overlay-1').contains(e.target);
    var isClickInsideElement2 = document.getElementById('overlay-2').contains(e.target);
    var isClickInsideElement3 = document.getElementById('overlay-3').contains(e.target);
    var isClickInsideElement4 = document.getElementById('overlay-4').contains(e.target);
    var isClickInsideElement5 = document.getElementById('overlay-5').contains(e.target);
    var isClickInsideElement7 = document.getElementById('overlay-7').contains(e.target);
    var isClickInsideElement8 = document.getElementById('overlay-8').contains(e.target);
    var isClickInsideElement9 = document.getElementById('overlay-9').contains(e.target);
    var isClickInsideElement10 = document.getElementById('overlay-10').contains(e.target);
    var isClickInsideElement11 = document.getElementById('overlay-hacker1').contains(e.target);
    var isClickInsideElement12 = document.getElementById('overlay-hacker2').contains(e.target);
    var isClickInsideElement13 = document.getElementById('overlay-hacker3').contains(e.target);
    var isClickInsideElement14 = document.getElementById('overlay-hacker11').contains(e.target);
    var isClickInsideElement15 = document.getElementById('overlay-hacker12').contains(e.target);
    var isClickInsideElement16 = document.getElementById('overlay-hacker13').contains(e.target);
    var isClickInsideElement17 = document.getElementById('overlay-hacker-shell').contains(e.target);
    var isClickInsideElement18 = document.getElementById('overlay-hacker-gaming').contains(e.target);
    if (isClickInsideElement && isClickInsideElement1 && isClickInsideElement2 && isClickInsideElement3 && isClickInsideElement4 && isClickInsideElement5 && isClickInsideElement7 && isClickInsideElement8 && isClickInsideElement9 && isClickInsideElement10 && isClickInsideElement11 && isClickInsideElement12 && isClickInsideElement13 && isClickInsideElement14 && isClickInsideElement15 && isClickInsideElement16 && isClickInsideElement17 && isClickInsideElement18) {
      return true;
    } else {
      return false;
    }
  }

  function removeOverlay() {
    $("#overlay").remove();
    $("#overlay-1").remove();
    $("#overlay-2").remove();
    $("#overlay-3").remove();
    $("#overlay-4").remove();
    $("#overlay-5").remove();
    $("#overlay-hacker1").remove();
    $("#overlay-hacker2").remove();
    $("#overlay-hacker3").remove();
    $("#overlay-hacker11").remove();
    $("#overlay-hacker12").remove();
    $("#overlay-hacker13").remove();
    $("#overlay-hacker-shell").remove();
    $("#overlay-hacker-gaming").remove();
    $("#overlay-hacker-seasonal").remove();
    document.getElementsByTagName('body')[0].style.cursor = "auto";
  }

  function goaway() {
    var divey = document.getElementById('overlay-6');
    divey.style.background = "rgba(0, 0, 0, 0)";
    divey.style.top = "0px";
    divey.style.left = "0px";
    divey.style.width = "1px";
    divey.style.height = "1px";
  }

  function changeColor() {
    var jasper = prompt('Background color? Hex or name will do. You can also write nothing to revert to default. Type random for randomized coloration.', 'black');
    if (jasper == "chaos") {
      function ono() {
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
        lo7NAB();
        setTimeout(ono, 50)
      }
      ono();
    } else {
      if (jasper == "random") {
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
      } else {
        if (!jasper.includes("#")) {
          jasper = jasper.replace(' ', '');
          jasper = (colourNameToHex(jasper));
        }
        document.body.style.background = jasper;
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.backgroundColor = jasper;
        }
        var all = document.getElementsByTagName("*");
        jasper = invertColor(jasper);
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.color = jasper;
        }
      }
    }
    lo7NAB();
  }
  var edit = false;

  function makeItEdit() {
    if (edit) {
      edit = false;
      document.body.contentEditable = false;
      document.designMode = 'off';
    } else {
      edit = true;
      document.body.contentEditable = true;
      document.designMode = 'on';
    }
  }

  function gcloak() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico';
    document.title = 'My Drive - Google Drive';
    console.log(document.title);
    document.getElementsByTagName('head')[0].appendChild(link)
  }

  function hideTab() {
    gcloak();
    setInterval(gcloak, 1000);
  }

  function fontChanger() {
    var font = prompt("what font?");
    var ccolor = prompt("what font color?");
    var all = document.getElementsByTagName("*");
    if (!ccolor.includes("#")) {
      ccolor = ccolor.replace(' ', '');
      ccolor = colourNameToHex(ccolor);
    }
    for (var i = 0, max = all.length; i < max; i++) {
      all[i].style.color = ccolor;
    }

    for (var i = 0, max = all.length; i < max; i++) {
      all[i].style.fontFamily = font;
    }
  }

  var big = false;

  function cpsslow() {
    var DELAY = 125;
    var autoClickerStyleElement = document.createElement("style");
    autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
    document.body.appendChild(autoClickerStyleElement);

    function addClicker(e) {
      if (!e.isTrusted) {
        return;
      }
      if (e.target.classList.contains("auto-clicker-target")) {
        e.target.classList.remove("auto-clicker-target");
      } else {
        e.target.classList.add("auto-clicker-target");
      }
      document.body.removeChild(autoClickerStyleElement);
      document.body.removeEventListener("click", addClicker);
      e.preventDefault();
      autoClick(e.target);
    }

    function autoClick(element) {
      if (element.classList.contains("auto-clicker-target")) {
        element.click();
        setTimeout(function() {
          autoClick(element);
        }, DELAY);
      }
    }
    document.body.addEventListener("click", addClicker, 0);
  }

  function cpsslow_sub() {
    setTimeout(function() {
      cpsslow();
    }, 10);
  }

  function cpsmed() {
    var DELAY = 0;
    var autoClickerStyleElement = document.createElement("style");
    autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
    document.body.appendChild(autoClickerStyleElement);

    function addClicker(e) {
      if (!e.isTrusted) {
        return;
      }
      if (e.target.classList.contains("auto-clicker-target")) {
        e.target.classList.remove("auto-clicker-target");
      } else {
        e.target.classList.add("auto-clicker-target");
      }
      document.body.removeChild(autoClickerStyleElement);
      document.body.removeEventListener("click", addClicker);
      e.preventDefault();
      autoClick(e.target);
    }

    function autoClick(element) {
      if (element.classList.contains("auto-clicker-target")) {
        element.click();
        setTimeout(function() {
          autoClick(element);
        }, DELAY);
      }
    }
    document.body.addEventListener("click", addClicker, 0);
  }

  function cpsmed_sub() {
    setTimeout(function() {
      cpsmed();
    }, 10);
  }

  function cpsfast() {
    var DELAY = 0;
    var autoClickerStyleElement = document.createElement("style");
    autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
    document.body.appendChild(autoClickerStyleElement);

    function addClicker(e) {
      if (!e.isTrusted) {
        return;
      }
      if (e.target.classList.contains("auto-clicker-target")) {
        e.target.classList.remove("auto-clicker-target");
      } else {
        e.target.classList.add("auto-clicker-target");
      }
      document.body.removeChild(autoClickerStyleElement);
      document.body.removeEventListener("click", addClicker);
      e.preventDefault();
      autoClick(e.target);
    }
		function manyClicks(element) {
    		element.click();
        element.click();
        element.click();
        element.click();
        element.click();
        element.click();
        element.click();
        element.click();
        element.click();
        element.click();
    }
    function autoClick(element) {
      if (element.classList.contains("auto-clicker-target")) {
        manyClicks(element);
        manyClicks(element);
        manyClicks(element);
        manyClicks(element);
        manyClicks(element);
        manyClicks(element);
        manyClicks(element);
        manyClicks(element);
        manyClicks(element);
        manyClicks(element);
        setTimeout(function() {
          autoClick(element);
        }, DELAY);
      }
    }
    document.body.addEventListener("click", addClicker, 0);
  }

  function cpsfast_sub() {
    setTimeout(function() {
      cpsfast();
    }, 10);
  }
  var bombing = false;

  function autoClickBig(e) {
    var element = e.target;
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
  }

  function bombbig() {
    if (bombing == true) {
      bombing = false;
      event.removeEventListener();
    } else {
      var autoClickerStyleElement = document.createElement("style");
      autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
      document.body.appendChild(autoClickerStyleElement);
      var event = document.body.addEventListener("click", autoClickBig);
    }
  }

  function bombbig_sub() {
    setTimeout(function() {
      bombbig();
    }, 10);
  }

  function autoClickMed(e) {
    var element = e.target;
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
  }

  function bombmed() {
    if (bombing == true) {
      bombing = false;
      event.removeEventListener();
    } else {
      var autoClickerStyleElement = document.createElement("style");
      autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
      document.body.appendChild(autoClickerStyleElement);
      var event = document.body.addEventListener("click", autoClickMed);
    }
  }

  function bombmed_sub() {
    setTimeout(function() {
      bombmed();
    }, 10);
  }

  function autoClickSmall(e) {
    var element = e.target;
    element.click();
  }

  function bombsmall() {
    if (bombing == true) {
      bombing = false;
      event.removeEventListener();
    } else {
      var autoClickerStyleElement = document.createElement("style");
      autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
      document.body.appendChild(autoClickerStyleElement);
      var event = document.body.addEventListener("click", autoClickSmall);
    }
  }

  function bombsmall_sub() {
    setTimeout(function() {
      bombsmall();
    }, 10);
  }

  function shell() {
    void((function(doc) {

      function displayOverlayShell() {
        $("<div id='overlay-main-shell'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": 0,
          "left": 0,
          "width": "100vw",
          "height": "100vh",
          "background-color": "rgba(1,0,1,1)",
          "z-index": 10000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "auto"
        }).appendTo("body");
        $("<div id='X-shell'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": "2vw",
          "left": "95vw",
          "width": "3vw",
          "height": "3vw",
          "background-color": "#00b003",
          "z-index": 10001,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%"
        }).appendTo("body");
        $("<input id='box-shell'><tbody><tr><td></td></tr></tbody></input>").css({
          "position": "fixed",
          "top": "25vh",
          "left": "25vw",
          "width": "50vw",
          "height": "50vh",
          "background-color": "rgba(0,2,0,1)",
          "z-index": 10000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "text",
          "border-radius": "5%",
          "outline-style": "solid",
          "outline-color": "#00b003",
          "outline-width": "1vmin"
        }).appendTo("body");
      }

      function devil() {
        /*$("<div id='bg-devil'></div>").css({
            "position": "fixed",
            "top": "0vh",
            "left": "0vw",
            "width": "100vw",
            "height": "100vh",
            "background-color": "rgba(0,0,0,1)",
            "background-image": "radial-gradient(#00ba03,#009e03 40%,#000000)",
            "z-index": 1000000,
            "color": "#0a9100",
            "font-family": "Georgia, serif",
            "font-size": "10px",
            "font-weight": "bold",
            "cursor": "auto",
            "border-radius": "0%",
            "outline-style": "solid",
            "outline-color": "#00b003",
            "outline-width": "1vmin"
          }).appendTo("body");
          $("<div id='button-devil'></div>").css({
            "height": "200px",
            "width": "100px",
            "background-color": "#000000",
            "border": "5px solid #009e03",
            "transform": "translate(-50%, -50%)",
            "cursor": "crosshair",
            "left": "50%",
            "top": "50%"
          }).appendTo("body");
          $("<div id='upgrade1-devil'>money per click +1<br><a id = 'price_counter'>50</a></div>").css({
            "position": "fixed",
            "top": "10vh",
            "left": "5vw",
            "width": "15vw",
            "height": "7vh",
            "background-color": "#0a9100",
            "z-index": 1000000,
            "color": "#000000",
            "font-family": "Georgia, serif",
            "font-size": "10px",
            "font-weight": "bold",
            "cursor": "crosshair",
            "border-radius": "1%",
            "outline-style": "solid",
            "outline-color": "#000000",
            "outline-width": "1vmin",
            "transform": "translate",
            "text-align": "center",
            "vertical-align": "center"
          }).appendTo("body");
          $("<div id='upgrade2-devil'>fortify 20<br>100</div>").css({
            "position": "fixed",
            "top": "30vh",
            "left": "5vw",
            "width": "15vw",
            "height": "7vh",
            "background-color": "#0a9100",
            "z-index": 1000000,
            "color": "#000000",
            "font-family": "Georgia, serif",
            "font-size": "10px",
            "font-weight": "bold",
            "cursor": "crosshair",
            "border-radius": "1%",
            "outline-style": "solid",
            "outline-color": "#000000",
            "outline-width": "1vmin",
            "transform": "translate",
            "text-align": "center",
            "vertical-align": "center"
          }).appendTo("body"); */
        $("<iframe width='1200px' height='700px' id='devil-game' src='//jsfiddle.net/jaspertherock/qvwaphyb/33/embedded/result/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function bone() {
        function boneMenu() {
          $("<div id='overlay-main-bone'><tbody><tr><td></td></tr></tbody></div>").css({
            "position": "fixed",
            "top": 0,
            "left": 0,
            "width": "100vw",
            "height": "100vh",
            "background-color": "rgba(0,1,0,1)",
            "z-index": 10000,
            "color": "#0a9100",
            "font-family": "Georgia, serif",
            "font-size": "10px",
            "font-weight": "bold",
            "cursor": "auto"
          }).appendTo("body");
          $("<div id='X-bone'><tbody><tr><td></td></tr></tbody></div>").css({
            "position": "fixed",
            "top": "2vw",
            "left": "95vw",
            "width": "3vw",
            "height": "3vw",
            "background-color": "rgb(237, 255, 253)",
            "z-index": 10001,
            "color": "#0a9100",
            "font-family": "Georgia, serif",
            "font-size": "10px",
            "font-weight": "bold",
            "cursor": "crosshair",
            "border-radius": "10%"
          }).appendTo("body");
        }

        function closeBone() {
          $("#X-bone").remove();
          $("#overlay-main-bone").remove();
        }
        var bonify = document.getElementById('X-bone');
        bonify.addEventListener('click', closeBone);
        boneMenu();
      }

      function clickerGame() {
        $("<iframe width='1200px' height='700px' id='clicker-game' src='//jsfiddle.net/jaspertherock/tmx3pw9f/35/embedded/result/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function superHeatedGame() {
        $("<iframe width='1200px' height='700px' id='superHeated-game' src='//jsfiddle.net/jaspertherock/u2Lxrhte/167/embedded/result/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function dinoGame() {
        $("<div id='overlay-dino-game'></div>").css({
          "position": "fixed",
          "top": 0,
          "left": 0,
          "width": "100vw",
          "height": "100vh",
          "background-color": "rgba(0,0,0,1)",
          "z-index": 1000000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "auto"
        }).appendTo("body");
        $("<iframe width='1200px' height='700px' id='dino-game' src='https://offline-dino-game.firebaseapp.com/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function urbanEgger() {
        var iframe = document.createElement('iframe');
var html = '<button><a href="https://shellsocks.com">CLICK</a></button>';
document.body.appendChild(iframe);
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(html);
iframe.contentWindow.document.close();

      function stopAtNothing() {
        $("<iframe width='1200px' height='700px' id='stop-game' src='https://www.stopatnothinggame.com' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function particleClicker() {
        $("<iframe width='1200px' height='620px' id='particle-game' src='https://particle-clicker.web.cern.ch/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function kickSomeAss() {
        var KICKASSVERSION = '2.0';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        document.body.appendChild(s);
        s.src = '//hi.kickassapp.com/kickass.js';
        void(0);
      }

      function rickRolled() {
        $("<iframe id='shooter-game' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&enablejsapi=1' width='1200' height='700' allow='autoplay' frameborder='2' allowfullscreen></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function proxy() {
        function removeOverlayproxy() {
          $("#overlay-main-proxy").remove();
          $("#overlay-main-proxybg").remove();
          $("#X-proxy").remove();
          $("#proxy-frame1").remove();
          $("#proxy-frame2").remove();
          $("#proxy-frame3").remove();
          $("#tab1-proxy").remove();
          $("#tab2-proxy").remove();
          $("#tab3-proxy").remove();
        }

        function changeTabs(num) {
          document.getElementById("proxy-frame1").hidden = "hidden";
          document.getElementById("proxy-frame2").hidden = "hidden";
          document.getElementById("proxy-frame3").hidden = "hidden";
          document.getElementById("tab1-proxy").style.color = "rgba(0, 0, 0, 1)";
          document.getElementById("tab2-proxy").style.color = "rgba(0, 0, 0, 1)";
          document.getElementById("tab3-proxy").style.color = "rgba(0, 0, 0, 1)";
          document.getElementById("tab1-proxy").style.backgroundColor = "rgb(204,235,0)";
          document.getElementById("tab2-proxy").style.backgroundColor = "rgb(204,235,0)";
          document.getElementById("tab3-proxy").style.backgroundColor = "rgb(204,235,0)";
          document.getElementById("tab" + num + "-proxy").style.backgroundColor = "rgb(224,255,20)";
          document.getElementById("tab" + num + "-proxy").style.color = "rgba(20, 20, 20, 1)";
          document.getElementById("proxy-frame" + num).hidden = "";
        }
        $("<iframe scrolling='no' width='1300px' height='700px' id='proxy-frame1' src='about:blank' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 214748360,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
        $("<iframe scrolling='no' width='1300px' height='700px' id='proxy-frame2' src='about:blank' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0' hidden='hidden'</iframe>").css({
          "position": "fixed",
          "z-index": 214748360,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
        $("<iframe scrolling='no' width='1300px' height='700px' id='proxy-frame3' src='about:blank' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0' hidden='hidden'</iframe>").css({
          "position": "fixed",
          "z-index": 214748360,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
        $("<div id='overlay-main-proxy'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": 0,
          "left": 0,
          "width": "100vw",
          "height": "100vh",
          "background-color": "rgba(1,0,1,1)",
          "z-index": 100000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "auto"
        }).appendTo("body");
        $("<div id='overlay-main-proxybg'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": "6vh",
          "left": 0,
          "width": "1300px",
          "height": "700px",
          "background-color": "rgba(255,255,255,1)",
          "z-index": 214748359,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "auto"
        }).appendTo("body");
        $("<div id='X-proxy'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": "2vw",
          "left": "95vw",
          "width": "3vw",
          "height": "3vw",
          "background-color": "rgb(204,235,0)",
          "z-index": 100000000000000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%"
        }).appendTo("body");
        $("<div id='tab1-proxy'>Tab 1</div>").css({
          "position": "fixed",
          "top": "1vh",
          "left": "0.75vw",
          "width": "7vw",
          "height": "7vw",
          "background-color": "rgb(224,255,20)",
          "z-index": 1000000,
          "color": "rgba(20, 20, 20, 1)",
          "font-family": "Georgia, serif",
          "font-size": "14px",
          "font-weight": "bold",
          "cursor": "pointer",
          "border-radius": "10%",
          "text-align": "center",
          "line-height": "2vw"
        }).appendTo("body");
        $("<div id='tab2-proxy'>Tab 2</div>").css({
          "position": "fixed",
          "top": "1vh",
          "left": "7.75vw",
          "width": "7vw",
          "height": "7vw",
          "background-color": "rgb(204,235,0)",
          "z-index": 1000000,
          "color": "rgba(0, 0, 0, 1)",
          "font-family": "Georgia, serif",
          "font-size": "14px",
          "font-weight": "bold",
          "cursor": "pointer",
          "border-radius": "10%",
          "text-align": "center",
          "line-height": "2vw"
        }).appendTo("body");
        $("<div id='tab3-proxy'>Tab 3</div>").css({
          "position": "fixed",
          "top": "1vh",
          "left": "14.75vw",
          "width": "7vw",
          "height": "7vw",
          "background-color": "rgb(204,235,0)",
          "z-index": 1000000,
          "color": "rgba(0, 0, 0, 1)",
          "font-family": "Georgia, serif",
          "font-size": "14px",
          "font-weight": "bold",
          "cursor": "pointer",
          "border-radius": "10%",
          "text-align": "center",
          "line-height": "2vw"
        }).appendTo("body");
        var browserCloser = document.getElementById('X-proxy');
        browserCloser.addEventListener('click', removeOverlayproxy);
        var changeTab1 = document.getElementById('tab1-proxy');
        changeTab1.addEventListener("click", function() {
          changeTabs(1);
        }, false);
        var changeTab2 = document.getElementById('tab2-proxy');
        changeTab2.addEventListener("click", function() {
          changeTabs(2);
        }, false);
        var changeTab3 = document.getElementById('tab3-proxy');
        changeTab3.addEventListener("click", function() {
          changeTabs(3);
        }, false);
      }

      function Bing() {
        function removeOverlayBing() {
          $("#overlay-main-bing").remove();
          $("#X-bing").remove();
          $("#bing-frame1").remove();
          $("#bing-frame2").remove();
          $("#bing-frame3").remove();
          $("#tab1-bing").remove();
          $("#tab2-bing").remove();
          $("#tab3-bing").remove();
        }

        function changeTabs(num) {
          document.getElementById("bing-frame1").hidden = "hidden";
          document.getElementById("bing-frame2").hidden = "hidden";
          document.getElementById("bing-frame3").hidden = "hidden";
          document.getElementById("tab1-bing").style.color = "rgba(0, 0, 0, 1)";
          document.getElementById("tab2-bing").style.color = "rgba(0, 0, 0, 1)";
          document.getElementById("tab3-bing").style.color = "rgba(0, 0, 0, 1)";
          document.getElementById("tab1-bing").style.backgroundColor = "rgba(0, 0, 150, 1)";
          document.getElementById("tab2-bing").style.backgroundColor = "rgba(0, 0, 150, 1)";
          document.getElementById("tab3-bing").style.backgroundColor = "rgba(0, 0, 150, 1)";
          document.getElementById("tab" + num + "-bing").style.backgroundColor = "rgba(20, 20, 170, 1)";
          document.getElementById("tab" + num + "-bing").style.color = "rgba(20, 20, 20, 1)";
          document.getElementById("bing-frame" + num).hidden = "";
        }
        $("<iframe scrolling='yes' width='1300px' height='700px' id='bing-frame1' src='https://www.bing.com/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 214748360,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
        $("<iframe scrolling='yes' width='1300px' height='700px' id='bing-frame2' src='https://www.bing.com/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0' hidden='hidden'</iframe>").css({
          "position": "fixed",
          "z-index": 214748360,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
        $("<iframe scrolling='yes' width='1300px' height='700px' id='bing-frame3' src='https://www.bing.com/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0' hidden='hidden'</iframe>").css({
          "position": "fixed",
          "z-index": 214748360,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
        $("<div id='overlay-main-bing'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": 0,
          "left": 0,
          "width": "100vw",
          "height": "100vh",
          "background-color": "rgba(1,0,1,1)",
          "z-index": 100000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "auto"
        }).appendTo("body");
        $("<div id='X-bing'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": "2vw",
          "left": "95vw",
          "width": "3vw",
          "height": "3vw",
          "background-color": "rgba(0, 0, 189, 1)",
          "z-index": 100000000000000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%"
        }).appendTo("body");
        $("<div id='tab1-bing'>Tab 1</div>").css({
          "position": "fixed",
          "top": "1vh",
          "left": "0.75vw",
          "width": "7vw",
          "height": "7vw",
          "background-color": "rgba(20, 20, 170, 1)",
          "z-index": 1000000,
          "color": "rgba(20, 20, 20, 1)",
          "font-family": "Georgia, serif",
          "font-size": "14px",
          "font-weight": "bold",
          "cursor": "pointer",
          "border-radius": "10%",
          "text-align": "center",
          "line-height": "2vw"
        }).appendTo("body");
        $("<div id='tab2-bing'>Tab 2</div>").css({
          "position": "fixed",
          "top": "1vh",
          "left": "7.75vw",
          "width": "7vw",
          "height": "7vw",
          "background-color": "rgba(0, 0, 150, 1)",
          "z-index": 1000000,
          "color": "rgba(0, 0, 0, 1)",
          "font-family": "Georgia, serif",
          "font-size": "14px",
          "font-weight": "bold",
          "cursor": "pointer",
          "border-radius": "10%",
          "text-align": "center",
          "line-height": "2vw"
        }).appendTo("body");
        $("<div id='tab3-bing'>Tab 3</div>").css({
          "position": "fixed",
          "top": "1vh",
          "left": "14.75vw",
          "width": "7vw",
          "height": "7vw",
          "background-color": "rgba(0, 0, 150, 1)",
          "z-index": 1000000,
          "color": "rgba(0, 0, 0, 1)",
          "font-family": "Georgia, serif",
          "font-size": "14px",
          "font-weight": "bold",
          "cursor": "pointer",
          "border-radius": "10%",
          "text-align": "center",
          "line-height": "2vw"
        }).appendTo("body");
        var browserCloser = document.getElementById('X-bing');
        browserCloser.addEventListener('click', removeOverlayBing);
        var changeTab1 = document.getElementById('tab1-bing');
        changeTab1.addEventListener("click", function() {
          changeTabs(1);
        }, false);
        var changeTab2 = document.getElementById('tab2-bing');
        changeTab2.addEventListener("click", function() {
          changeTabs(2);
        }, false);
        var changeTab3 = document.getElementById('tab3-bing');
        changeTab3.addEventListener("click", function() {
          changeTabs(3);
        }, false);
      }

      function removeOverlayShell() {
        $("#overlay-main-shell").remove();
        $("#box-shell").remove();
        $("#X-shell").remove();
        $("#mogus").remove();
      }

      function openGameMenu() {
        function removeOverlayMenu() {
          $("#option-devil-game").remove();
          $("#option-clicker-game").remove();
          $("#option-dino-game").remove();
          $("#option-egg-game").remove();
          $("#option-superHeated-game").remove();
          $("#option-amazing-game").remove();
          $("#option-stop-game").remove();
          $("#option-particle-game").remove();
        }

        function removeOverlayGame() {
          $("#overlay-main-game").remove();
          $("#X-game").remove();
          $("#devil-game").remove();
          $("#clicker-game").remove();
          $("#dino-game").remove();
          $("#egg-game").remove();
          $("#superHeated-game").remove();
          $('#overlay-dino-game').remove();
          $('#shooter-game').remove();
          $('#stop-game').remove();
          $('#particle-game').remove();
          removeOverlayMenu();
          removeOverlayShell();
        }
        $("<div id='overlay-main-game'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": 0,
          "left": 0,
          "width": "100vw",
          "height": "100vh",
          "background-color": "rgba(1,0,1,1)",
          "z-index": 100000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "auto"
        }).appendTo("body");
        $("<div id='X-game'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": "2vw",
          "left": "95vw",
          "width": "3vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100000000000000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%"
        }).appendTo("body");
        $("<div id='option-devil-game'>Devil's Eye</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "10vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-clicker-game'>Generic Clicker</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "17vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-dino-game'>Chrome Dino</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "24vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-superHeated-game'>Super Heated</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "31vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-egg-game'>Shell Shockers</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "38vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-amazing-game'>Generic Shooter</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "45vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-stop-game'>Stop at Nothing</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "52vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-particle-game'>Particle Clicker</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "59vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        var gameCloser = document.getElementById('X-game');
        gameCloser.addEventListener('click', removeOverlayGame);
        var gameDevil = document.getElementById('option-devil-game');
        gameDevil.addEventListener('click', devil);
        var gameClicker = document.getElementById('option-clicker-game');
        gameClicker.addEventListener('click', clickerGame);
        var gameDino = document.getElementById('option-dino-game');
        gameDino.addEventListener('click', dinoGame);
        var gamehot = document.getElementById('option-superHeated-game');
        gamehot.addEventListener('click', superHeatedGame);
        var gameEgg = document.getElementById('option-egg-game');
        gameEgg.addEventListener('click', urbanEgger);
        var gameShooter = document.getElementById('option-amazing-game');
        gameShooter.addEventListener('click', rickRolled);
        var gameStop = document.getElementById('option-stop-game');
        gameStop.addEventListener('click', stopAtNothing);
        var gamepart = document.getElementById('option-particle-game');
        gamepart.addEventListener('click', particleClicker);
      }

      function killScreen() {
        $("<img src='https://chromeready.com/wp-content/uploads/sites/3/2022/01/google-chrome-critical-error-red-screen.png'id='deadScreen'>").css({
          "position": "fixed",
          "top": "0vh",
          "left": "0vw",
          "width": "100vw",
          "height": "100vh",
          "z-index": 1000000001
        }).appendTo("body");
      }

      function trollScreen() {
        $("<img src='https://cdnb.artstation.com/p/assets/images/images/004/456/215/large/wil-hughes-troll-face.jpg'id='deadScreen'>").css({
          "position": "fixed",
          "top": "0vh",
          "left": "0vw",
          "width": "100vw",
          "height": "100vh",
          "z-index": 1000000001
        }).appendTo("body");
      }

      function doStuff() {
        displayOverlayShell();
        var commands = [];
        var devItUp = false;
        var gobyebye = document.getElementById('X-shell');
        gobyebye.addEventListener("click", removeOverlayShell);
        $(this).keypress(function(event) {
          if (event.keyCode == 13) {
            var Val = document.getElementById("box-shell").value;
            if (Val.includes("fuck") || Val.includes("Fuck") || Val.includes("shit") || Val.includes("Shit") || Val.includes("dick") || Val.includes("Dick") || Val.includes("bitch") || Val.includes("Bitch") || Val.includes("fag") || Val.includes("faggot")) {
              alert("no cussing or funny numbers, please");
              document.getElementById("box-shell").value = "REDACTED";
            } else {
              if (Val == 'close shell' || Val == 'close' || Val == 'quit' || Val == 'clear') {
                removeOverlayShell();
              } else if (Val.substring(0, 5) == 'solve') {
                document.getElementById("box-shell").value = eval(Val.substring(6, 1000));
              } else if (Val.substring(0, 4) == 'math') {
                document.getElementById("box-shell").value = eval(Val.substring(5, 1000));
              } else if (Val.includes('bing') || Val.includes('browser')) {
                document.getElementById("box-shell").value = 'browser';
                Bing();
              } else if (Val.includes('proxy')) {
                document.getElementById("box-shell").value = 'proxy';
                proxy();
              } else if (Val == 'ass') {
                document.getElementById("box-shell").value = 'ass kicking';
                kickSomeAss();
              } else if (Val == 'bone') {
                document.getElementById("box-shell").value = 'inside the bone';
                bone();
              } else if (Val.includes('69') || Val.includes('420')) {
                document.getElementById("box-shell").value = 'hehehe';
              } else if (Val == "ur mom" || Val == "your mom") {
                alert("is stupid");
                document.getElementById("box-shell").value = "";
              } else if (Val.substring(0, 7) == 'what is') {
                document.getElementById("box-shell").value = eval(Val.substring(8, 1000));
              } else if (Val == 'die' || Val == 'error') {
                document.getElementById("box-shell").value = "";
                killScreen();
              } else if (Val == 'troll' || Val == 'troll face') {
                document.getElementById("box-shell").value = "";
                trollScreen();
              } else if (Val.includes("game") || Val.includes("consol")) {
                openGameMenu();
                document.getElementById("box-shell").value = "";
              } else if (Val == "REDACTED") {
                document.getElementById("box-shell").value = "like ur mom";
              } else if (Val == "like ur mom") {
                document.getElementById("box-shell").value = "is stupid";
              } else if (Val == "is stupid") {
                document.getElementById("box-shell").value = "get it?";
              } else if (Val == "Ingot" && devItUp) {
                var a = document.createElement('script');
                a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot@latest/ingot.min.js';
                document.body.appendChild(a);
              } else if (Val == "LABurt") {
                alert('You found the linewize hack! A thing will tell you to redirect, and do it. then, it will open a 404 error. then, use this exact command within the lonab on that site to be able to turn off certain extensions "like linewize"')
                var a = document.createElement('script');
                a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot@latest/ingot.min.js';
                document.body.appendChild(a);
              } else if (Val == "dev_mode_12") {
                pass_attempt = prompt("hello, jasper/kameron. Please enter the passcode");
                if (pass_attempt == "ur mother haha L") {
                  alert("hello. DEV TIME!");
                  devItUp = true;
                }
              } else if (Val == "sussy" || Val == "amogus" || Val == "amongus" || Val == "sus") {
                document.getElementById("box-shell").value = "amogus";
                $("<img src='https://ideawallpapers.com/wp-content/uploads/2021/12/among-us-wallpaper.jpg'id='mogus'>").css({
                  "position": "fixed",
                  "top": "0vh",
                  "left": "0vw",
                  "width": "100vw",
                  "height": "100vh",
                  "z-index": 10000
                }).appendTo("body");
              } else if (Val == "piano") {
                document.getElementById("box-shell").value = "ooh... easter egg!";
                (function() {
                  var js = document.body.appendChild(document.createElement("script"));
                  js.onerror = function() {
                    document.getElementById("box-shell").value = "ooh... easter egg! ... is broken ...";
                  };
                  js.src = "https://rawgita.com/Krazete/bookmarklets/master/piano.js"
                })();
              } else if (Val == "quizizz") {
                document.getElementById("box-shell").value = "ooh... easter egg! It cheats on quizizz!";
                fetch("https://raw.githubusercontent.com/gbaranski/quizizz-cheat/master/dist/bundle.js").then((res) => res.text().then((t) => eval(t)))
              } else if (Val == "hacker time") {
                document.getElementById("box-shell").value = "01101000 01100001 01100011 01101011 01101001 01101110 01100111 00100000 01110100 01101001 01101101 01100101";
                alert("hacker time");
                document.getElementById("box-shell").value = "";
                window.open("https://jsfiddle.net/user/fiddles/all/", '_blank');
              } else {
                commands.push(eval(Val));
              }
            }
          }
        });
      }
      doStuff();
    })(document));
  }

  function seasonalEvent() {
    function makeItSnow(snow) {

      var container = document.createElement('div');
      document.body.appendChild(container);
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.overflow = 'hidden';
      container.style.pointerEvents = 'none';
      container.zIndex = "0";

      function init() {
        var injection = document.createElement('style');
        document.body.appendChild(injection);
        injection.innerHTML = '@-webkit-keyframes snow {\nfrom {top:-1%;}\nto{top:121%;}}\n@-moz-keyframes snow {\nfrom {top: -1%;}\nto {top: 121%;}\n}';
      }
      init();
      if (snowy) {
        clearInterval(repeat);
      }
      var repeat = window.setInterval(createParticle, 50);
      snowy = true;
      sizeChoices = ['xx-small', 'x-small', 'x-small', 'small', 'medium', 'large', 'x-large'];

      function destroy(evt) {
        container.removeChild(evt.target);
      }

      function createParticle() {
        var particle = document.createElement('span');
        var size = sizeChoices[Math.floor(Math.random() * sizeChoices.length)];
        particle.innerHTML = '❄️';
        particle.className = 'flake';
        particle.style.position = 'absolute';
        particle.style.color = "blue";
        particle.style.fontSize = size;
        particle.style.backgroundColor = 'transparent';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.zIndex = 100000000000000000000;
        particle.style.pointerEvents = 'none';
        particle.style.right = Math.random() * 100 + '%';
        particle.style.borderRadius = '50%';
        var speed = (Math.random() * 5) + 3;
        particle.style.WebkitAnimation = 'snow ' + speed + 's linear';
        particle.style.MozAnimation = 'snow ' + speed + 's linear';
        container.appendChild(particle);
        particle.addEventListener('webkitAnimationEnd', destroy);
        particle.addEventListener('AnimationEnd', destroy);
      }
    }
    var z = 200;
    var x = -100 - (Math.random() * 10);
    var y = 90;
    while (x < (screen.width * 1.1)) {
      z = z + ((Math.random() * 100) - 50);
      if (z <= 100) {
        z = z + 30;
      }
      if (z >= 400) {
        z = z - 30;
      }
      y = y + ((Math.random() * 6) - 3);
      if (z <= 100) {
        z = z + 30;
      }
      if (z >= 400) {
        z = z - 30;
      }
      $("<div class='snow'></div>").css({
        "position": "fixed",
        "top": (Math.random() * 10 + 80) + "vh",
        "left": x,
        "width": z,
        "height": z,
        "background-color": "rgba(255, 250, 250, 1)",
        "z-index": 10000000000,
        "color": "#000000",
        "border-radius": "100%"
      }).appendTo("body");
      x = x + (z / 5);
    }
    makeItSnow();
  }

  function hacker_mode() {
    if (big) {
      var backy = document.getElementById('overlay');
      backy.style.height = "69px";
      big = false;
      $("#overlay-hacker1").remove();
      $("#overlay-hacker2").remove();
      $("#overlay-hacker3").remove();
      $("#overlay-hacker11").remove();
      $("#overlay-hacker12").remove();
      $("#overlay-hacker13").remove();
      $("#overlay-hacker-shell").remove();
      $("#overlay-hacker-gaming").remove();
    } else {
      var backy = document.getElementById('overlay');
      backy.style.height = "168px";
      big = true;
      $("<div id='overlay-hacker1'><tbody><tr><td></td></tr></tbody></div>").css({
        "position": "fixed",
        "top": 69,
        "left": 3,
        "width": 30,
        "height": 30,
        "background-color": "rgba(70, 250, 5, 1)",
        "z-index": 10000,
        "color": "#000000",
        "font-family": "Georgia, serif",
        "font-size": "10px",
        "font-weight": "bold",
        "cursor": "crosshair",
        "border-radius": "50%",
      }).appendTo("body");
      $("<div id='overlay-hacker2'><tbody><tr><td></td></tr></tbody></div>").css({
        "position": "fixed",
        "top": 69,
        "left": 36,
        "width": 30,
        "height": 30,
        "background-color": "rgba(70, 250, 5, 0.66)",
        "z-index": 10000,
        "color": "#000000",
        "font-family": "Georgia, serif",
        "font-size": "10px",
        "font-weight": "bold",
        "cursor": "crosshair",
        "border-radius": "50%",
      }).appendTo("body");
      $("<div id='overlay-hacker3'><tbody><tr><td></td></tr></tbody></div>").css({
        "position": "fixed",
        "top": 69,
        "left": 69,
        "width": 30,
        "height": 30,
        "background-color": "rgba(70, 250, 5, 0.33)",
        "z-index": 10000,
        "color": "#000000",
        "font-family": "Georgia, serif",
        "font-size": "10px",
        "font-weight": "bold",
        "cursor": "crosshair",
        "border-radius": "50%",
      }).appendTo("body");
      $("<div id='overlay-hacker11'><tbody><tr><td></td></tr></tbody></div>").css({
        "position": "fixed",
        "top": 102,
        "left": 3,
        "width": 30,
        "height": 30,
        "background-color": "rgba(245, 0, 241, 1)",
        "z-index": 10000,
        "color": "#000000",
        "font-family": "Georgia, serif",
        "font-size": "10px",
        "font-weight": "bold",
        "cursor": "crosshair",
        "border-radius": "50%",
      }).appendTo("body");
      $("<div id='overlay-hacker12'><tbody><tr><td></td></tr></tbody></div>").css({
        "position": "fixed",
        "top": 102,
        "left": 36,
        "width": 30,
        "height": 30,
        "background-color": "rgba(245, 0, 241, 0.66)",
        "z-index": 10000,
        "color": "#000000",
        "font-family": "Georgia, serif",
        "font-size": "10px",
        "font-weight": "bold",
        "cursor": "crosshair",
        "border-radius": "50%",
      }).appendTo("body");
      $("<div id='overlay-hacker13'><tbody><tr><td></td></tr></tbody></div>").css({
        "position": "fixed",
        "top": 102,
        "left": 69,
        "width": 30,
        "height": 30,
        "background-color": "rgba(245, 0, 241, 0.33)",
        "z-index": 10000,
        "color": "#000000",
        "font-family": "Georgia, serif",
        "font-size": "10px",
        "font-weight": "bold",
        "cursor": "crosshair",
        "border-radius": "50%",
      }).appendTo("body");
      $("<div id='overlay-hacker-shell'>Shell</div>").css({
        "position": "fixed",
        "top": 135,
        "left": 3,
        "width": 96,
        "height": 30,
        "background-color": "rgba(0, 0, 0, 1)",
        "z-index": 10000,
        "color": "rgba(0, 176, 3, 1)",
        "font-family": "Georgia, serif",
        "font-size": "10px",
        "font-weight": "bold",
        "cursor": "crosshair",
        "border-radius": "20%",
        "outline-style": "solid",
        "outline-color": "rgba(0, 176, 3, 1)",
        "outline-width": "1px",
        "text-align": "center",
        "vertical-align": "center"
      }).appendTo("body");
      $("<div id='overlay-hacker-seasonal'></div>").css({
        "position": "fixed",
        "top": 37,
        "left": 70,
        "width": 28,
        "height": 28,
        "background-color": "rgba(0,135,62, 1)",
        "z-index": 10000,
        "color": "rgba(214,0,28, 1)",
        "font-family": "Georgia, serif",
        "font-size": "10px",
        "font-weight": "bold",
        "cursor": "crosshair",
        "border-radius": "20%",
        "outline-style": "solid",
        "outline-color": "rgba(214,0,28, 1)",
        "outline-width": "3px",
        "text-align": "center",
        "vertical-align": "center"
      }).appendTo("body");
      var shellOpener = document.getElementById('overlay-hacker-shell');
      shellOpener.addEventListener('click', shell);
      var fast_clicker = document.getElementById('overlay-hacker1');
      fast_clicker.addEventListener('click', cpsfast_sub);
      var med_clicker = document.getElementById('overlay-hacker2');
      med_clicker.addEventListener('click', cpsmed_sub);
      var slow_clicker = document.getElementById('overlay-hacker3');
      slow_clicker.addEventListener('click', cpsslow_sub);
      var big_bomb = document.getElementById('overlay-hacker11');
      big_bomb.addEventListener('click', bombbig_sub);
      var med_bomb = document.getElementById('overlay-hacker12');
      med_bomb.addEventListener('click', bombmed_sub);
      var med_bomb = document.getElementById('overlay-hacker13');
      med_bomb.addEventListener('click', bombsmall_sub);
      var seasonalButton = document.getElementById('overlay-hacker-seasonal');
      seasonalButton.addEventListener('click', seasonalEvent);
    }
  }
  var toggle = false;
  var toggley = true;
  var many = false;
  var edit = false;
  var toggle = true;
  var snowy = false;
  removeOverlay();
  displayOverlay();
  hacker_mode();
  var shape = document.getElementById('overlay-6');
  shape.addEventListener("click", hideTab);
  var mouse = document.getElementById('overlay-5');
  mouse.addEventListener("click", hideTab);
  var font_change = document.getElementById('overlay-4');
  font_change.addEventListener("click", fontChanger);
  var kill = document.getElementById('overlay-3');
  kill.addEventListener("click", removeOverlay);
  var bb = document.getElementById('overlay-2');
  bb.addEventListener("click", changeColor);
  var editor = document.getElementById("overlay-1");
  editor.addEventListener("click", makeItEdit);
})(document)); // credits: jasper, jasper, jasper, and k4m3r0n.
