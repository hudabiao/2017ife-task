;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shunxuxunhuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M829.671 330.137c-48.578-48.578-113.165-75.331-181.863-75.331L377.889 254.806l0-51.632c0-16.49-11.334-22.662-25.186-13.716L228.44 269.713c-13.852 8.945-13.717 23.371 0.301 32.055l123.662 76.61c14.018 8.684 25.486 2.298 25.486-14.192l0-51.379 269.918 0c109.836 0 199.193 89.358 199.193 199.193 0 18.161-2.438 36.146-7.246 53.454-4.287 15.432 4.747 31.417 20.179 35.704 2.597 0.722 5.209 1.066 7.779 1.066 12.701 0 24.359-8.41 27.925-21.245 6.213-22.363 9.363-45.571 9.363-68.979C905.001 443.301 878.248 378.714 829.671 330.137z"  ></path>' +
    '' +
    '<path d="M781.787 722.232l-123.662-76.61c-14.018-8.684-25.486-2.298-25.486 14.192l0 51.379L341.194 711.193c-109.835 0-199.193-89.357-199.193-199.193 0-38.488 10.988-75.828 31.775-107.982 8.696-13.45 4.841-31.403-8.608-40.098-13.451-8.697-31.403-4.841-40.099 8.609C98.202 414.086 84.001 462.314 84.001 512c0 68.698 26.753 133.285 75.33 181.863 48.578 48.577 113.165 75.33 181.863 75.33l291.444 0 0 51.632c0 16.49 11.334 22.662 25.186 13.716l124.264-80.254C795.939 745.342 795.805 730.916 781.787 722.232z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xunhuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.271856 139.636751 512.271856 0 326.090231 186.181624l186.181624 186.181624L512.271856 232.727563c153.599467 0 279.272437 125.67297 279.272437 279.272437 0 46.544873-13.963782 93.090812-32.582157 130.327563l69.817843 69.817843c32.582157-60.508655 55.854061-125.67297 55.854061-200.145406C884.635104 307.2 717.071856 139.636751 512.271856 139.636751zM512.271856 791.272437c-153.599467 0-279.272437-125.67297-279.272437-279.272437 0-46.545939 13.963782-93.090812 32.582157-130.327563l-69.817843-69.817843c-32.582157 60.508655-55.854061 125.67297-55.854061 200.145406 0 204.8 167.563249 372.363249 372.363249 372.363249l0 139.636751 186.181624-186.181624-186.181624-186.181624L512.272922 791.272437z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M595.260013 790.248645l243.736162-243.736162c19.012556-19.012556 19.012556-49.891431 0-68.903988L595.260013 233.943164c-19.01388-19.012556-49.891431-19.012556-68.903988 0-19.013218 19.013384-19.013218 49.891431 0 68.904153l160.465889 160.465889L219.64771 463.313206c-26.946384 0-48.746868 21.800484-48.746868 48.74753 0 26.946881 21.800484 48.74753 48.746868 48.74753l467.174203 0-160.465889 160.536555c-9.506361 9.506195-14.295454 22.015131-14.295454 34.452077 0 12.50877 4.717103 24.945716 14.295454 34.451911C545.368581 809.261201 576.246132 809.261201 595.260013 790.248645z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiao06" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M952.64 689.792l-123.52-83.84c-33.344-22.656-75.328 0.768-75.392 39.872l0 27.776-26.624 0 0-0.704c-3.2 0.128-6.016 0.704-9.28 0.704-105.28 0-162.624-54.4-220.8-122.496 58.176-68.16 115.584-122.496 220.8-122.496 3.328 0 6.08 0.576 9.28 0.704L727.104 428.608l71.552 0L798.656 427.456c0.256 0 0.512 0.128 0.768 0.128 9.344 0 17.152-5.376 21.76-12.992l3.2 0L824.384 406.208c0.32-1.728 1.024-3.328 1.024-5.184s-0.704-3.456-1.024-5.184L824.384 363.52l63.68 43.2-48.064 32.576-26.112 19.84c-6.528-4.864-14.208-8.256-22.976-8.256-21.696 0-39.296 17.6-39.296 39.296 0 6.464 1.92 12.288 4.672 17.6 5.504 20.544 21.312 35.264 42.56 35.264 10.048 0 20.352-3.392 29.632-9.728l123.52-83.84c15.168-10.304 23.808-25.984 23.808-43.008-0.064-17.024-8.768-32.64-23.808-42.752l-123.52-83.84c-33.344-22.656-75.328 0.768-75.392 39.872l0 27.2-35.2 0c-132.8 0-209.344 70.4-272.384 143.104C382.464 417.664 306.048 347.52 173.504 347.52L173.504 347.072 92.672 347.072l0 0.896c-0.448 0-0.832-0.256-1.344-0.256C69.184 347.712 51.2 365.696 51.2 387.84c0 22.144 17.984 40.128 40.128 40.128 0.448 0 0.832-0.256 1.344-0.256l0 0.832 80.832 0 0 0.448c105.024 0 162.304 54.144 220.416 122.048-58.048 67.904-115.392 122.048-220.416 122.048l0 0.512L92.672 673.6l0 0.512c-0.32 0-0.576-0.192-0.896-0.192-22.144 0-40.128 17.984-40.128 40.128 0 22.144 17.984 40.128 40.128 40.128 0.32 0 0.576-0.192 0.896-0.192l0 1.024 80.832 0 0-0.448c132.544 0 208.96-70.144 271.936-142.592 63.04 72.704 139.584 143.104 272.384 143.104l80.832 0L798.656 753.28c0.512 0 0.96 0.32 1.472 0.32 9.344 0 17.152-5.376 21.76-12.992l3.2 0L825.088 732.16c0.32-1.728 1.024-3.328 1.024-5.184s-0.704-3.456-1.024-5.184l0-32.32 63.68 43.2-48.064 32.576-26.112 19.84c-6.528-4.864-14.208-8.256-22.976-8.256-21.696 0-39.296 17.6-39.296 39.296 0 6.464 1.92 12.288 4.672 17.6 5.504 20.544 21.312 35.264 42.56 35.264 10.048 0 20.352-3.392 29.632-9.728l123.52-83.84c15.168-10.304 23.808-25.984 23.808-43.008C976.384 715.52 967.68 699.904 952.64 689.792z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)