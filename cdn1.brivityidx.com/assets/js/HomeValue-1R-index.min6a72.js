"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var homeValue1RUseStyles = MaterialUI.makeStyles(function () {
  var _mediaMaxWidth, _MaterialUI$createSty;
  return MaterialUI.createStyles((_MaterialUI$createSty = {
    componentsContainer: {
      position: "relative"
    },
    slider: {
      position: "relative",
      width: "100%",
      height: "1000px",
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      background: "#000"
    },
    slide: {
      position: "relative",
      height: "100%",
      minWidth: "100%",
      "-moz-transition": "transform ease-in-out 0.6s",
      transition: "transform ease-in-out 0.6s"
    },
    fade: {
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      minWidth: "100%",
      "-moz-transition": "opacity 0.6s",
      transition: "opacity 0.6s",
      opacity: "0"
    },
    fadeIn: {
      opacity: "1"
    },
    arrow: {
      height: "50px",
      width: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    },
    backArrow: {
      position: "absolute",
      top: "45%",
      left: "20px",
      zIndex: "9"
    },
    nextArrow: {
      position: "absolute",
      top: "45%",
      right: "20px",
      zIndex: "9"
    },
    dotsContainer: {
      position: "absolute",
      bottom: "20px",
      height: "50px",
      width: "100%",
      whiteSpace: "nowrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "9"
    },
    dot: {
      display: "flex",
      margin: "0px 10px 0px 10px"
    },
    overlayInit: {
      position: "absolute",
      top: "0px",
      height: "100%",
      width: "100%",
      zIndex: "8"
    },
    buttonStyles: {
      minHeight: "30px",
      minWidth: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none"
    },
    searchBarButton: {
      height: "32px",
      width: "136px",
      borderRadius: "6px",
      margin: "0px 10px"
    },
    buttonText: {
      margin: "0px",
      padding: "0px 15px",
      fontFamily: "Montserrat",
      fontWeight: "600"
    },
    contentActive: {
      height: "1000px",
      width: "100%",
      position: "absolute",
      top: "0px"
    },
    gridItemStyles: {
      padding: "24px 32px",
      zIndex: "9",
      maxWidth: "800px"
    },
    gridItemSearchBar: {
      position: "relative",
      width: "96%",
      margin: "40px 32px 40px 37px",
      boxShadow: "0px 7px 44px -2px rgba(0,0,0,0.7)",
      display: "flex"
    },
    searchButtonItemStyles: {
      display: "flex",
      alignItems: "center",
      background: "#fff",
      borderRadius: "0px 6px 6px 0px"
    },
    gridContainerStyles: {
      padding: "65px"
    },
    recap1: {
      marginRight: "32px",
      marginLeft: "37px",
      marginTop: "-25px",
      color: "#c0c0c0"
    },
    searchBarStyles: {
      boxShadow: "0px 7px 44px -2px rgba(0,0,0,0.7)",
      display: "flex"
    },
    inputGroup: {
      alignItems: "flex-start !important"
    },
    smallError: {
      lineHeight: "18.5px",
      color: "red",
      fontSize: "16px",
      marginTop: "-10px",
      marginBottom: "7px"
    },
    descText: {
      marginLeft: "5px",
      padding: "24px 32px"
    },
    textInputStyles: {
      width: "100%",
      height: "48px",
      fontWeight: "600",
      fontFamily: "Montserrat",
      fontSize: "20px",
      padding: "8px 16px 8px 24px",
      borderRadius: "6px 0px 0px 6px",
      border: "0px"
      // boxShadow: "0px 7px 44px -2px rgba(0,0,0,0.7)",
    },

    videoBackgroundContainer: {
      width: "100%",
      height: "1000px",
      overflow: "hidden"
    },
    iframeWrapper: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "-1",
      pointerEvents: "none",
      overflow: "hidden"
    },
    iframeBackground: {
      width: "100vw",
      height: "56.25vw",
      minHeight: "100vh",
      minWidth: "205.77vh",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    imageBackgroundContainer: {
      width: "100%",
      height: "1000px",
      overflow: "hidden"
    },
    imageWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    imageStyles: {
      width: "100%",
      height: "100%"
    },
    optOut: {
      textAlign: "center",
      fontSize: "14px",
      lineHeight: "1.4",
      margin: "20px 0 0",
      color: "#555"
    },
    solidBackgroundContainer: {
      width: "100%",
      height: "1000px"
    },
    solidStyles: {
      width: "100%",
      height: "100%"
    },
    mobileHeader: {
      padding: "24px 32px"
    }
  }, _defineProperty(_MaterialUI$createSty, "@media (max-width: 768px)", (_mediaMaxWidth = {
    solidBackgroundContainer: {
      height: "745px"
    },
    imageBackgroundContainer: {
      height: "745px"
    },
    videoBackgroundContainer: {
      height: "745px"
    },
    slider: {
      height: "745px"
    },
    contentActive: {
      height: "745px"
    }
  }, _defineProperty(_mediaMaxWidth, "slider", {
    height: "745px"
  }), _defineProperty(_mediaMaxWidth, "gridContainerStyles", {
    padding: "30px"
  }), _defineProperty(_mediaMaxWidth, "backArrow", {
    left: "10px",
    zIndex: "10"
  }), _defineProperty(_mediaMaxWidth, "nextArrow", {
    right: "10px",
    zIndex: "10"
  }), _mediaMaxWidth)), _defineProperty(_MaterialUI$createSty, "@media (max-width: 650px)", {
    mobileHeader: {
      fontSize: "54px !important",
      padding: "24px 0px"
    },
    gridItemStyles: {
      padding: "0px 0px",
      height: "100%"
    },
    gridItemSearchBar: {
      width: "100%",
      margin: "0px 0px 0px 0px"
    },
    descText: {
      marginLeft: "0px",
      padding: "24px 0px"
    },
    mobileReady: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    gridContainerStyles: {
      padding: "65px"
    },
    searchButtonItemStyles: {
      position: "absolute",
      right: "0px",
      top: "8px"
    },
    textInputStyles: {
      borderRadius: "6px 6px 6px 6px"
    }
  }), _defineProperty(_MaterialUI$createSty, "@media (max-width: 480px)", {
    recap1: {
      marginTop: "0px"
    }
  }), _defineProperty(_MaterialUI$createSty, "@media (max-width: 450px)", {
    mobileHeader: {
      fontSize: "50px !important"
    },
    gridContainerStyles: {
      padding: "100px 30px"
    }
  }), _defineProperty(_MaterialUI$createSty, "modalContainer", {
    position: "absolute",
    zIndex: "10000000"
  }), _MaterialUI$createSty));
});
var homeValue1RGenerateClassName = MaterialUI.createGenerateClassName({
  seed: "HV1R"
});
var HomeValue1RContext = function HomeValue1RContext(_ref) {
  var element = _ref.element;
  var _MaterialUI = MaterialUI,
    StylesProvider = _MaterialUI.StylesProvider;
  return /*#__PURE__*/React.createElement(StylesProvider, {
    generateClassName: homeValue1RGenerateClassName
  }, /*#__PURE__*/React.createElement(HomeValue1R, {
    element: element
  }));
};

/**
 * Root Component for block, gets settings and listens for when settings change so it can render.
 */
var HomeValue1R = function HomeValue1R(_ref2) {
  var element = _ref2.element;
  var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect,
    Fragment = _React.Fragment;
  var _MaterialUI2 = MaterialUI,
    useMediaQuery = _MaterialUI2.useMediaQuery;
  var classes = homeValue1RUseStyles();
  var _useState = useState(JSON.parse(document.getElementById(element).dataset.settings)),
    _useState2 = _slicedToArray(_useState, 2),
    settings = _useState2[0],
    setSettings = _useState2[1];
  var updateSettings = function updateSettings() {
    setSettings(JSON.parse(document.getElementById(element).dataset.settings));
  };
  var carousel = settings.carousel,
    video = settings.video,
    image = settings.image,
    solid = settings.solid,
    alignment = settings.alignment,
    position = settings.position,
    siteColors = settings.siteColors,
    header = settings.header,
    description = settings.description,
    buttonBackground = settings.buttonBackground,
    buttonText = settings.buttonText;
  var matchesDesk = useMediaQuery("(max-width: 1280px)");
  var matchesTablet = useMediaQuery("(max-width: 960px)");
  var matchesMobile = useMediaQuery("(max-width: 600px)");
  useEffect(function () {}, [matchesDesk, matchesTablet, matchesMobile, carousel.active, video.active, image.active, solid.active]);
  var _imageRescale = function imageRescale(url) {
    var newUrl = "";
    if (matchesDesk && !matchesTablet && !matchesMobile) {
      newUrl = "".concat(url, "?quality=80&height=2000");
    } else if (matchesTablet && matchesDesk && !matchesMobile) {
      newUrl = "".concat(url, "?quality=80&height=1000");
    } else if (matchesMobile && matchesDesk && matchesTablet) {
      newUrl = "".concat(url, "?quality=80&height=800");
    } else {
      newUrl = "".concat(url, "?quality=80");
    }
    return newUrl;
  };
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.componentsContainer, " components-container-hv-1r")
  }, carousel !== undefined && carousel.active ? /*#__PURE__*/React.createElement(HomeValue1RCarouselBackground, {
    carouselSettings: carousel,
    imageRescale: function imageRescale(i) {
      return _imageRescale(i);
    }
  }) : null, video !== undefined && video.active ? /*#__PURE__*/React.createElement(HomeValue1RVideoBackground, {
    videoSettings: video
  }) : null, image !== undefined && image.active ? /*#__PURE__*/React.createElement(HomeValue1RImageBackground, {
    imageSettings: image,
    imageRescale: function imageRescale(i) {
      return _imageRescale(i);
    }
  }) : null, solid !== undefined && solid.active ? /*#__PURE__*/React.createElement(HomeValue1RSolidBackground, {
    solidSettings: solid
  }) : null, /*#__PURE__*/React.createElement(HomeValue1RContent, {
    alignment: alignment,
    position: position,
    siteColors: siteColors,
    header: header,
    description: description,
    buttonBackground: buttonBackground,
    buttonText: buttonText
  }), /*#__PURE__*/React.createElement(HomeValue1RLoadingModal, null), /*#__PURE__*/React.createElement(HomeValue1RNewHomeValueModal, null), /*#__PURE__*/React.createElement(HomeValue1RPartialReportModal, null), /*#__PURE__*/React.createElement(HomeValue1RNoReportModal, null), /*#__PURE__*/React.createElement(HomeValue1RContactModal, null), /*#__PURE__*/React.createElement(HomeValue1RSimpleReportModal, null), /*#__PURE__*/React.createElement(HomeValue1RPopUpNoReportModal, null)), /*#__PURE__*/React.createElement("div", {
    id: "home-value-1R-settings-hook",
    onClick: function onClick() {
      return updateSettings();
    }
  }));
};
var HomeValue1RLoadingModal = function HomeValue1RLoadingModal() {
  var classes = homeValue1RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.modalContainer, " modal-container-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal fade",
    id: "hv-loading",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "loading-mask"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "loading-movement"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "item"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "checkmark"
  }), /*#__PURE__*/React.createElement("span", null, "Locating Your Home")), /*#__PURE__*/React.createElement("div", {
    "class": "item"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "checkmark"
  }), /*#__PURE__*/React.createElement("span", null, "Getting Your Home Details")), /*#__PURE__*/React.createElement("div", {
    "class": "item"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "checkmark"
  }), /*#__PURE__*/React.createElement("span", null, "Finding Comparable Homes")), /*#__PURE__*/React.createElement("div", {
    "class": "item"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "checkmark"
  }), /*#__PURE__*/React.createElement("span", null, "Calculating Estimate")), /*#__PURE__*/React.createElement("div", {
    "class": "item"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "checkmark"
  }), /*#__PURE__*/React.createElement("span", null, "Wrapping Up"))))))));
};
var HomeValue1RPartialReportModal = function HomeValue1RPartialReportModal() {
  var classes = homeValue1RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.modalContainer, " modal-container-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal fade",
    id: "hv-partial-report",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "top"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "68",
    height: "68",
    viewBox: "0 0 68 68",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M34 68C52.7777 68 68 52.7777 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 52.7777 15.2223 68 34 68ZM34 64.1668C17.3393 64.1668 3.83322 50.6607 3.83322 34C3.83322 17.3393 17.3393 3.83322 34 3.83322C50.6607 3.83322 64.1668 17.3393 64.1668 34C64.1668 50.6607 50.6607 64.1668 34 64.1668ZM28.1898 48.9202L51.8562 21.3784L49.7716 19.5677L28.1898 45.217L18.7178 36.6179L16.6332 38.4286L28.1898 48.9202Z",
    fill: "#47E6B1"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "esitmate-wrapper"
  }, /*#__PURE__*/React.createElement("span", null, "Rough Home Value Estimate"), /*#__PURE__*/React.createElement("span", {
    "class": "estimate"
  }, "$0"))), /*#__PURE__*/React.createElement("div", {
    "class": "seperator"
  }), /*#__PURE__*/React.createElement("div", {
    "class": "agent-info-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "avatar agent_pic_dynamic",
    style: {
      backgroundImage: "url('https://cdn1.brivityidx.com/assets/images/uploads/1833/0.jpg')"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "class": "agent-info"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "agent-name"
  }), /*#__PURE__*/React.createElement("div", {
    "class": "agent-contact"
  }, /*#__PURE__*/React.createElement("a", {
    "class": "simple_report_telephone prmry-color flex ai-center agent_phone_call"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-phone"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })), /*#__PURE__*/React.createElement("span", null, "Call")), /*#__PURE__*/React.createElement("a", {
    "class": "simple_report_email prmry-color flex ai-center set-contact-title",
    "data-title": "Send Email",
    "data-event-type": "contact_form_ask_a_question",
    "data-toggle": "modal",
    "data-target": "#contact-email-form"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-mail"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  })), /*#__PURE__*/React.createElement("span", null, "Send Email"))))), /*#__PURE__*/React.createElement("p", {
    "class": "agent_msg"
  }), /*#__PURE__*/React.createElement("a", {
    "class": "simple_report_email simple_report_email_btn btn-primary btn bg-prmry"
  }, "Email")))));
};
var HomeValue1RNoReportModal = function HomeValue1RNoReportModal() {
  var classes = homeValue1RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.modalContainer, " modal-container-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal fade",
    id: "hv-no-report",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "top"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "68",
    height: "68",
    viewBox: "0 0 68 68",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M34 68C52.7777 68 68 52.7777 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 52.7777 15.2223 68 34 68ZM34 64.1668C17.3393 64.1668 3.83322 50.6607 3.83322 34C3.83322 17.3393 17.3393 3.83322 34 3.83322C50.6607 3.83322 64.1668 17.3393 64.1668 34C64.1668 50.6607 50.6607 64.1668 34 64.1668ZM28.1898 48.9202L51.8562 21.3784L49.7716 19.5677L28.1898 45.217L18.7178 36.6179L16.6332 38.4286L28.1898 48.9202Z",
    fill: "#47E6B1"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "esitmate-wrapper"
  }, /*#__PURE__*/React.createElement("span", _defineProperty({
    "class": "no_report_headline"
  }, "class", "estimate")), /*#__PURE__*/React.createElement("span", {
    "class": "no_report_subheadline"
  }))), /*#__PURE__*/React.createElement("div", {
    "class": "seperator"
  }), /*#__PURE__*/React.createElement("div", {
    "class": "agent-info-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "avatar agent_pic_dynamic",
    style: {
      backgroundImage: "url('https://cdn1.brivityidx.com/assets/images/uploads/1833/0.jpg')"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "class": "agent-info"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "agent-name"
  }), /*#__PURE__*/React.createElement("div", {
    "class": "agent-contact"
  }, /*#__PURE__*/React.createElement("a", {
    "class": "no_report_telephone prmry-color flex ai-center agent_phone_call"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-phone"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })), /*#__PURE__*/React.createElement("span", null, "Call")), /*#__PURE__*/React.createElement("a", {
    "class": "no_report_email prmry-color flex ai-center set-contact-title",
    "data-title": "Send Email",
    "data-event-type": "contact_form_ask_a_question",
    "data-toggle": "modal",
    "data-target": "#contact-email-form"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-mail"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  })), /*#__PURE__*/React.createElement("span", null, "Send Email"))))), /*#__PURE__*/React.createElement("p", {
    "class": "agent_msg"
  }), /*#__PURE__*/React.createElement("a", {
    "class": "no_report_email no_report_email_btn btn-primary btn bg-prmry"
  }, "Email")))));
};
var HomeValue1RNewHomeValueModal = function HomeValue1RNewHomeValueModal() {
  var classes = homeValue1RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.modalContainer, " modal-container-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal fade",
    id: "new-home-value",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "map-wrapper map-box-container-cl mapboxgl-map",
    id: "map-box-container",
    style: {
      top: "0",
      bottom: "0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "class": "map-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "radius-select"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "dropdown"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("span", {
    id: "aria_label_miles"
  }, "1.0 mi"), /*#__PURE__*/React.createElement("span", {
    "class": "caret"
  })), /*#__PURE__*/React.createElement("ul", {
    "class": "dropdown-menu",
    "aria-labelledby": "dLabel"
  }, /*#__PURE__*/React.createElement("li", {
    "class": "update_circle_miles",
    miles_n: "1"
  }, "1.0 mi"), /*#__PURE__*/React.createElement("li", {
    "class": "update_circle_miles",
    miles_n: "2"
  }, "2.0 mi"), /*#__PURE__*/React.createElement("li", {
    "class": "update_circle_miles",
    miles_n: "3"
  }, "3.0 mi"), /*#__PURE__*/React.createElement("li", {
    "class": "update_circle_miles",
    miles_n: "4"
  }, "4.0 mi"), /*#__PURE__*/React.createElement("li", {
    "class": "update_circle_miles",
    miles_n: "5"
  }, "5.0 mi"))))), /*#__PURE__*/React.createElement("div", {
    "class": "form-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "class": "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/React.createElement("h3", {
    id: "title_popup_details"
  }, "Just One More Thing"), /*#__PURE__*/React.createElement("h6", {
    id: "title_popup_address"
  }), /*#__PURE__*/React.createElement("h4", {
    id: "errorMessage",
    className: classes.smallError
  }), /*#__PURE__*/React.createElement("form", {
    id: "subjectHomeValueImageForm",
    "data-toggle": "validator",
    onsubmit: "return false;",
    novalidate: "novalidate"
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    value: "seller",
    id: "hlead_intent"
  }), /*#__PURE__*/React.createElement("label", null, "Full Name"), /*#__PURE__*/React.createElement("input", {
    "class": "full-name",
    id: "hv_name",
    type: "text",
    placeholder: "Full Name"
  }), /*#__PURE__*/React.createElement("div", {
    id: "errorMessageName",
    className: classes.smallError
  }), /*#__PURE__*/React.createElement("div", {
    "class": "input-group ".concat(classes.inputGroup)
  }, /*#__PURE__*/React.createElement("div", {
    "class": "input-wrapper"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    "class": "email",
    id: "hv_email",
    type: "email",
    placeholder: "Email"
  }), /*#__PURE__*/React.createElement("div", {
    id: "errorMessageEmail",
    className: classes.smallError
  })), /*#__PURE__*/React.createElement("div", {
    "class": "input-wrapper"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    "class": "phone",
    id: "hv_phone",
    type: "tel",
    placeholder: "Phone"
  }), /*#__PURE__*/React.createElement("div", {
    id: "errorMessagePhone",
    className: classes.smallError
  }))), /*#__PURE__*/React.createElement("label", {
    "for": "hvi_sq_feet"
  }, "Sqft"), /*#__PURE__*/React.createElement("input", {
    "class": "sqft",
    id: "hvi_sq_feet",
    type: "text",
    placeholder: "Your home's square footage"
  }), /*#__PURE__*/React.createElement("div", {
    id: "errorMessageSqft",
    className: classes.smallError
  }), /*#__PURE__*/React.createElement("div", {
    "class": "input-group ".concat(classes.inputGroup)
  }, /*#__PURE__*/React.createElement("div", {
    "class": "input-wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "hvi_beds"
  }, "Beds"), /*#__PURE__*/React.createElement("input", {
    "class": "beds",
    id: "hvi_beds",
    type: "text",
    placeholder: "# of beds"
  }), /*#__PURE__*/React.createElement("div", {
    id: "errorMessageBeds",
    className: classes.smallError
  })), /*#__PURE__*/React.createElement("div", {
    "class": "input-wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "hvi_bath_full"
  }, "Baths"), /*#__PURE__*/React.createElement("input", {
    "class": "baths",
    id: "hvi_bath_full",
    type: "text",
    placeholder: "# of baths"
  }), /*#__PURE__*/React.createElement("div", {
    id: "errorMessageBaths",
    className: classes.smallError
  })), /*#__PURE__*/React.createElement("div", {
    "class": "input-wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "hvi_sq_ft"
  }, "Lot Size"), /*#__PURE__*/React.createElement("input", {
    "class": "land",
    id: "hvi_land_full",
    type: "text",
    placeholder: "Approx. Acres"
  }), /*#__PURE__*/React.createElement("div", {
    id: "errorMessageSqft",
    className: classes.smallError
  }))), /*#__PURE__*/React.createElement("label", null, "Please choose the property type"), /*#__PURE__*/React.createElement("div", {
    "class": "dropdown timeline"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("span", {
    id: "label_property_type"
  }, "Choose the property type"), /*#__PURE__*/React.createElement("span", {
    "class": "caret"
  })), /*#__PURE__*/React.createElement("ul", {
    id: "property_types_dropdown",
    "class": "dropdown-menu",
    "aria-labelledby": "dLabel"
  })), /*#__PURE__*/React.createElement("div", {
    id: "errorMessageProp",
    className: classes.smallError
  }), /*#__PURE__*/React.createElement("button", {
    id: "submit_hvi_form",
    "class": "submit-hv btn-primary"
  }, "Show my home value")), /*#__PURE__*/React.createElement("div", {
    className: classes.optOut
  }, "By digitally signing this form you are providing ", /*#__PURE__*/React.createElement("span", {
    "class": "agent_name_dynamic"
  }), " with your express written consent to send you business and marketing communications via text messages (SMS), email, and by calls or prerecorded messages dialed by a natural person or by an automatic or automated telephone dialing system. This express written consent applies to each such email address or telephone number that you provide to us now or in the future and permits such communications regardless of their purpose."))))));
};
var HomeValue1RContactModal = function HomeValue1RContactModal() {
  var classes = homeValue1RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.modalContainer, " modal-container-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal fade",
    id: "home-value-contact",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "contact-info"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url('https://s3-us-west-2.amazonaws.com/a.blueroof360.com/assets/images/agent_no_photo.jpg')"
    },
    id: "agent-img",
    "class": "team-agent-img profile img-circle"
  }), /*#__PURE__*/React.createElement("h3", {
    "class": "agent-name"
  }), /*#__PURE__*/React.createElement("h4", {
    "class": "agent-id",
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("ul", {
    "class": "list-unstyled margin-top-20"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    "class": "agent-phone",
    href: "sms: (510) 995-0035"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-phone"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })), /*#__PURE__*/React.createElement("span", null, "(510) 995-0035"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    "class": "agent-email",
    href: "mailto:joe@dickersonrealty.com"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-mail"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  })), "joe@dickersonrealty.com")))), /*#__PURE__*/React.createElement("div", {
    "class": "home-value-form"
  }, /*#__PURE__*/React.createElement("h3", {
    id: "title_popup_details"
  }, "Send ", /*#__PURE__*/React.createElement("span", {
    "class": "agent-name"
  }), " a Message"), /*#__PURE__*/React.createElement("form", {
    id: "form-contact-agent-modal"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "col-md-12 margin-bottom-0 form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Full Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    "class": "form-control input-sm",
    id: "contact_agent_full_name",
    name: "contact_agent_full_name",
    placeholder: "Your First and Last Name",
    required: ""
  })), /*#__PURE__*/React.createElement("div", {
    "class": "col-md-6 margin-bottom-0 form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    "class": "form-control input-sm",
    id: "contact_agent_email_address",
    name: "contact_agent_email_address",
    placeholder: "Your Email Address",
    required: ""
  })), /*#__PURE__*/React.createElement("div", {
    "class": "col-md-6 margin-bottom-0 form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    "class": "form-control input-sm contact_phone",
    id: "contact_agent_phone_number",
    name: "contact_agent_phone_number",
    placeholder: "Your Phone Number",
    required: ""
  })), /*#__PURE__*/React.createElement("div", {
    "class": "col-md-12 margin-bottom-20 form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Your Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "contact_agent_lead_message",
    name: "contact_agent_lead_message",
    "class": "form-control input-sm",
    rows: "4",
    required: "",
    placeholder: "Type Here"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "hcontacmodal_robot_field",
    name: "hcontacmodal_robot_field",
    style: {
      display: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    "class": "col-md-12 flex jc-center"
  }, /*#__PURE__*/React.createElement("button", {
    id: "contact_agent_sendbtn",
    type: "submit",
    "class": "btn btn-primary"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "flex ai-center"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-mail"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  })), " ", "Send")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "class": "btn btn-default",
    "data-dismiss": "modal"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "flex ai-center"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-x"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })), " ", "Nevermind")))))))));
};
var HomeValue1RSimpleReportModal = function HomeValue1RSimpleReportModal() {
  var classes = homeValue1RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.modalContainer, " modal-container-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal fade",
    id: "popup-simple-rpt",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      margin: "0",
      padding: "0",
      color: "#595959 !important",
      fontSize: "30px",
      position: "absolute",
      zIndex: "1",
      right: "15px",
      top: "10px"
    },
    "class": "close",
    href: "/"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    "class": "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "contact-info"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url('https://s3-us-west-2.amazonaws.com/a.blueroof360.com/assets/images/agent_no_photo.jpg')"
    },
    id: "agent-img",
    "class": "team-agent-img profile img-circle"
  }), /*#__PURE__*/React.createElement("h3", {
    "class": "agent-name"
  }), /*#__PURE__*/React.createElement("h4", {
    "class": "agent-id",
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("ul", {
    "class": "list-unstyled margin-top-20"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    "class": "agent-phone",
    href: "sms: (510) 995-0035"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-phone"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })), /*#__PURE__*/React.createElement("span", null, "(510) 995-0035")))), /*#__PURE__*/React.createElement("a", {
    "class": "btn btn-primary flex jc-center ai-center home-value-contact"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-user",
    style: {
      margin: "0 6px 0 0"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })), "Contact", /*#__PURE__*/React.createElement("span", {
    "class": "agent-name"
  }, "\xA0"))), /*#__PURE__*/React.createElement("div", {
    "class": "home-value-form"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "numbers"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "68",
    height: "68",
    viewBox: "0 0 68 68",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M34 68C52.7777 68 68 52.7777 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 52.7777 15.2223 68 34 68ZM34 64.1668C17.3393 64.1668 3.83322 50.6607 3.83322 34C3.83322 17.3393 17.3393 3.83322 34 3.83322C50.6607 3.83322 64.1668 17.3393 64.1668 34C64.1668 50.6607 50.6607 64.1668 34 64.1668ZM28.1898 48.9202L51.8562 21.3784L49.7716 19.5677L28.1898 45.217L18.7178 36.6179L16.6332 38.4286L28.1898 48.9202Z",
    fill: "#47E6B1"
  })), /*#__PURE__*/React.createElement("h3", {
    id: "title_popup_details"
  }, "Your Current Home Estimate"), /*#__PURE__*/React.createElement("div", {
    "class": "high-low"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "low min-val"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 6V12C24 12.6 23.6 13 23 13C22.4 13 22 12.6 22 12V8.4L14.2 16.2C13.8 16.6 13.2 16.6 12.8 16.2L8.5 11.9L1.7 18.7C1.5 18.9 1.3 19 1 19C0.7 19 0.5 18.9 0.3 18.7C-0.1 18.3 -0.1 17.7 0.3 17.3L7.8 9.8C8.2 9.4 8.8 9.4 9.2 9.8L13.5 14.1L20.6 7H17C16.4 7 16 6.6 16 6C16 5.4 16.4 5 17 5H23C23.1 5 23.3 5 23.4 5.1C23.6 5.2 23.8 5.4 23.9 5.6C24 5.7 24 5.9 24 6Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "5",
    width: "24",
    height: "14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 6V12C24 12.6 23.6 13 23 13C22.4 13 22 12.6 22 12V8.4L14.2 16.2C13.8 16.6 13.2 16.6 12.8 16.2L8.5 11.9L1.7 18.7C1.5 18.9 1.3 19 1 19C0.7 19 0.5 18.9 0.3 18.7C-0.1 18.3 -0.1 17.7 0.3 17.3L7.8 9.8C8.2 9.4 8.8 9.4 9.2 9.8L13.5 14.1L20.6 7H17C16.4 7 16 6.6 16 6C16 5.4 16.4 5 17 5H23C23.1 5 23.3 5 23.4 5.1C23.6 5.2 23.8 5.4 23.9 5.6C24 5.7 24 5.9 24 6Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0)"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0 0H24V24H0V0Z",
    fill: "#47E6B1"
  }))), "$0"), /*#__PURE__*/React.createElement("span", {
    "class": "prmry-color high max-val"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#FF6A6A",
    d: "M24 18C24 18.1 24 18.3 23.9 18.4C23.8 18.6 23.6 18.8 23.4 18.9C23.3 19 23.1 19 23 19H17C16.4 19 16 18.6 16 18C16 17.4 16.4 17 17 17H20.6L13.5 9.9L9.2 14.2C8.8 14.6 8.2 14.6 7.8 14.2L0.3 6.7C-0.1 6.3 -0.1 5.7 0.3 5.3C0.7 4.9 1.3 4.9 1.7 5.3L8.5 12.1L12.8 7.8C13.2 7.4 13.8 7.4 14.2 7.8L22 15.6V12C22 11.4 22.4 11 23 11C23.6 11 24 11.4 24 12V18Z"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "5",
    width: "24",
    height: "14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 18C24 18.1 24 18.3 23.9 18.4C23.8 18.6 23.6 18.8 23.4 18.9C23.3 19 23.1 19 23 19H17C16.4 19 16 18.6 16 18C16 17.4 16.4 17 17 17H20.6L13.5 9.9L9.2 14.2C8.8 14.6 8.2 14.6 7.8 14.2L0.3 6.7C-0.1 6.3 -0.1 5.7 0.3 5.3C0.7 4.9 1.3 4.9 1.7 5.3L8.5 12.1L12.8 7.8C13.2 7.4 13.8 7.4 14.2 7.8L22 15.6V12C22 11.4 22.4 11 23 11C23.6 11 24 11.4 24 12V18Z",
    fill: "white"
  }))), "$0")), /*#__PURE__*/React.createElement("div", {
    "class": "info"
  }, /*#__PURE__*/React.createElement("p", null, "I\u2019m putting your full report together now! You can contact me now if you need anything.")))))))));
};
var HomeValue1RPopUpNoReportModal = function HomeValue1RPopUpNoReportModal() {
  var classes = homeValue1RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.modalContainer, " modal-container-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal fade",
    id: "popup-no-report",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      margin: "0",
      padding: "0",
      color: "#595959 !important",
      fontSize: "30px",
      position: "absolute",
      zIndex: "1",
      right: "15px",
      top: "10px"
    },
    "class": "close",
    href: "/"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    "class": "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "contact-info"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url('https://s3-us-west-2.amazonaws.com/a.blueroof360.com/assets/images/agent_no_photo.jpg')"
    },
    id: "agent-img",
    "class": "team-agent-img profile img-circle"
  }), /*#__PURE__*/React.createElement("h3", {
    "class": "agent-name"
  }), /*#__PURE__*/React.createElement("h4", {
    "class": "agent-id",
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("ul", {
    "class": "list-unstyled margin-top-20"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    "class": "agent-phone",
    href: "sms: (510) 995-0035"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-phone"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })), /*#__PURE__*/React.createElement("span", null, "(510) 995-0035")))), /*#__PURE__*/React.createElement("a", {
    id: "home-value-contact",
    "class": "btn btn-primary flex jc-center ai-center"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-user",
    style: {
      margin: "0 6px 0 0"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })), "Contact", /*#__PURE__*/React.createElement("span", {
    "class": "agent-name"
  }, "\xA0"))), /*#__PURE__*/React.createElement("div", {
    "class": "home-value-form"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "numbers"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "68",
    height: "68",
    viewBox: "0 0 68 68",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M34 68C52.7777 68 68 52.7777 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 52.7777 15.2223 68 34 68ZM34 64.1668C17.3393 64.1668 3.83322 50.6607 3.83322 34C3.83322 17.3393 17.3393 3.83322 34 3.83322C50.6607 3.83322 64.1668 17.3393 64.1668 34C64.1668 50.6607 50.6607 64.1668 34 64.1668ZM28.1898 48.9202L51.8562 21.3784L49.7716 19.5677L28.1898 45.217L18.7178 36.6179L16.6332 38.4286L28.1898 48.9202Z",
    fill: "#47E6B1"
  })), /*#__PURE__*/React.createElement("h3", {
    id: "title_popup_details"
  }, "Your Report Is On The Way!"), /*#__PURE__*/React.createElement("h6", null, "We\u2019ll email your report within 24 hrs.")), /*#__PURE__*/React.createElement("div", {
    "class": "info"
  }, /*#__PURE__*/React.createElement("p", null, "I\u2019m putting your full report together now! You can contact me now if you need anything."))))))));
};
var HomeValue1RContent = function HomeValue1RContent(_ref3) {
  var alignment = _ref3.alignment,
    position = _ref3.position,
    siteColors = _ref3.siteColors,
    header = _ref3.header,
    description = _ref3.description,
    buttonBackground = _ref3.buttonBackground,
    buttonText = _ref3.buttonText;
  var _MaterialUI3 = MaterialUI,
    Grid = _MaterialUI3.Grid,
    Typography = _MaterialUI3.Typography;
  var classes = homeValue1RUseStyles();
  return /*#__PURE__*/React.createElement(Grid, {
    className: "".concat(classes.contentActive, " ").concat(classes.gridContainerStyles, " grid-container-hv-1r"),
    container: true,
    justify: position,
    alignItems: alignment,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    className: "".concat(classes.gridItemStyles, " grid-item-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.mobileReady, " mobile-ready-hv-1r")
  }, /*#__PURE__*/React.createElement(Typography, {
    className: "".concat(classes.mobileHeader, " mobile-header-hv-1r"),
    style: header.styles,
    variant: "h1",
    align: "left",
    react: "true",
    parent: ".home-value-1R",
    element: "header"
  }, header.content), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.gridItemSearchBar, " grid-item-search-bar-hv-1r")
  }, /*#__PURE__*/React.createElement("input", {
    className: "".concat(classes.textInputStyles, " text-input-hv-1r"),
    id: "home_value_1_search_address",
    name: "home_value_1_search_address",
    autocomplete: "off",
    type: "text",
    placeholder: "Enter Home Address"
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.searchButtonItemStyles, " search-button-item-hv-1r")
  }, /*#__PURE__*/React.createElement("a", {
    id: "homeValueSearchAddress",
    href: "#",
    style: buttonBackground.styles,
    className: "".concat(classes.buttonStyles, " ").concat(classes.searchBarButton, " ").concat(siteColors ? "btn-primary" : "", " button-background home-value-submit"),
    react: "true",
    parent: ".home-value-1R",
    element: "buttonBackground",
    contentModeIgnore: "true"
  }, /*#__PURE__*/React.createElement("p", {
    className: "".concat(classes.buttonText, " linktext button-text-hv-1r"),
    style: buttonText.styles,
    react: "true",
    parent: ".home-value-1R",
    element: "buttonText"
  }, buttonText.content)))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "left"
    },
    contentModeIgnore: "true",
    detailsmodeignore: "true",
    className: "grecaptcha-modal-text ".concat(classes.recap1),
    "data-selector": "p"
  }, "This site is protected by reCAPTCHA and the Google", /*#__PURE__*/React.createElement("a", {
    href: "https://policies.google.com/privacy"
  }, " Privacy Policy"), " and", /*#__PURE__*/React.createElement("a", {
    href: "https://policies.google.com/terms"
  }, " Terms of Service"), " apply."), /*#__PURE__*/React.createElement(Typography, {
    className: "".concat(classes.descText, " desc-text-hv-1r"),
    variant: "h4",
    align: "left",
    style: description.styles,
    react: "true",
    parent: ".home-value-1R",
    element: "description"
  }, description.content))));
};
var HomeValue1RVideoBackground = function HomeValue1RVideoBackground(_ref4) {
  var videoSettings = _ref4.videoSettings;
  var classes = homeValue1RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.videoBackgroundContainer, " background-video-container-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.iframeWrapper, " iframe-wrapper-hv-1r")
  }, /*#__PURE__*/React.createElement("iframe", {
    className: "".concat(classes.iframeBackground, " iframe-background-hv-1r"),
    src: "https://player.vimeo.com/video/".concat(videoSettings.videoID, "?background=1&dnt=1"),
    allow: "autoplay; fullscreen",
    allowfullscreen: true,
    frameborder: "0"
  })), videoSettings.overlay.active ? /*#__PURE__*/React.createElement(HomeValue1RBackgroundOverlay, {
    overlaySettings: videoSettings.overlay
  }) : null);
};
var HomeValue1RImageBackground = function HomeValue1RImageBackground(_ref5) {
  var imageSettings = _ref5.imageSettings,
    imageRescale = _ref5.imageRescale;
  var classes = homeValue1RUseStyles();
  var imageStyles = {
    backgroundImage: "url(".concat(imageRescale(imageSettings.imageURL), ")"),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    position: "absolute"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.imageBackgroundContainer, " background-image-container-hv-1r")
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(classes.imageStyles, " background-image-hv-1r"),
    style: imageStyles,
    role: "img",
    "aria-label": imageSettings.alt
  }), imageSettings.overlay.active ? /*#__PURE__*/React.createElement(HomeValue1RBackgroundOverlay, {
    overlaySettings: imageSettings.overlay
  }) : null);
};
var HomeValue1RSolidBackground = function HomeValue1RSolidBackground(_ref6) {
  var solidSettings = _ref6.solidSettings;
  var classes = homeValue1RUseStyles();
  var solidStyles = {
    background: solidSettings.color
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.solidBackgroundContainer, " solid-background-container-hv-1r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.solidStyles, " solid-background-hv-1r"),
    style: solidStyles
  }));
};
var HomeValue1RCarouselBackground = function HomeValue1RCarouselBackground(_ref7) {
  var carouselSettings = _ref7.carouselSettings,
    _imageRescale2 = _ref7.imageRescale;
  var _React2 = React,
    Fragment = _React2.Fragment,
    useState = _React2.useState,
    useEffect = _React2.useEffect;
  var classes = homeValue1RUseStyles();
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    activeSlide = _useState4[0],
    setActiveSlide = _useState4[1];
  var _useState5 = useState(carouselSettings.images),
    _useState6 = _slicedToArray(_useState5, 2),
    carouselImages = _useState6[0],
    setCarouselImages = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    x = _useState8[0],
    setX = _useState8[1];
  useEffect(function () {
    !carouselSettings.autoscroll ? null : (setActiveSlide(0), setX(0));
    carouselSettings.images.length > 2 ? setCarouselImages(carouselSettings.images) : null;
  }, [carouselSettings]);
  useEffect(function () {
    var autoScroll = setTimeout(function () {
      carouselSettings.autoscroll ? goToNextSlide() : clearTimeout(autoScroll);
    }, 7000);
    return function () {
      return clearTimeout(autoScroll);
    };
  });
  var goToNextSlide = function goToNextSlide() {
    setActiveSlide(activeSlide === carouselImages.length - 1 ? 0 : activeSlide + 1);
    carouselSettings.scroll ? x === -100 * (carouselImages.length - 1) ? setX(0) : setX(x - 100) : null;
  };
  var goToPrevSlide = function goToPrevSlide() {
    setActiveSlide(activeSlide === 0 ? carouselImages.length - 1 : activeSlide - 1);
    carouselSettings.scroll ? x === 0 ? setX(-100 * (carouselImages.length - 1)) : setX(x + 100) : null;
  };
  var CarouselDots = function CarouselDots(_ref8) {
    var activeSlide = _ref8.activeSlide,
      carouselImages = _ref8.carouselImages,
      dotsSettings = _ref8.dotsSettings;
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.dotsContainer, " dots-container-hv-1r")
    }, carouselImages.map(function (_, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "".concat(classes.dot, " dot-hv-1r")
      }, /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: activeSlide === i ? dotsSettings.color : "none",
        stroke: activeSlide !== i ? "".concat(dotsSettings.color).concat(dotsSettings.color.length !== 4 ? "90" : "9") : dotsSettings.color,
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })));
    })));
  };
  var LeftArrow = function LeftArrow(_ref9) {
    var action = _ref9.action,
      arrowSettings = _ref9.arrowSettings;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.backArrow, " ").concat(classes.arrow, " back-arrow-item-hv-1r"),
      onClick: action
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "56",
      height: "56",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: arrowSettings.color,
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })));
  };
  var RightArrow = function RightArrow(_ref10) {
    var action = _ref10.action,
      arrowSettings = _ref10.arrowSettings;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.nextArrow, " ").concat(classes.arrow, " next-arrow-item-hv-1r"),
      onClick: action
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "56",
      height: "56",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: arrowSettings.color,
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "9 18 15 12 9 6"
    })));
  };
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.slider, " slider-hv-1r")
  }, carouselImages.map(function (image, index) {
    return /*#__PURE__*/React.createElement(HomeValue1RCarouselSlide, {
      key: index,
      x: x,
      activeSlide: activeSlide,
      index: index,
      image: image,
      slideAnimation: carouselSettings.scroll,
      overlaySettings: carouselSettings.overlay,
      imageRescale: function imageRescale(i) {
        return _imageRescale2(i);
      }
    });
  }), carouselSettings.arrows.active ? /*#__PURE__*/React.createElement(LeftArrow, {
    action: function action() {
      return goToPrevSlide();
    },
    arrowSettings: carouselSettings.arrows
  }) : null, carouselSettings.arrows.active ? /*#__PURE__*/React.createElement(RightArrow, {
    action: function action() {
      return goToNextSlide();
    },
    arrowSettings: carouselSettings.arrows
  }) : null, carouselSettings.dots.active ? /*#__PURE__*/React.createElement(CarouselDots, {
    activeSlide: activeSlide,
    carouselImages: carouselImages,
    dotsSettings: carouselSettings.dots
  }) : null));
};
var HomeValue1RBackgroundOverlay = function HomeValue1RBackgroundOverlay(_ref11) {
  var overlaySettings = _ref11.overlaySettings;
  var classes = homeValue1RUseStyles();
  var overlayStyles = {
    background: overlaySettings.color,
    opacity: overlaySettings.opacity
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.overlayInit, " overlay-init-hv-1r"),
    style: overlayStyles
  });
};
var HomeValue1RCarouselSlide = function HomeValue1RCarouselSlide(_ref12) {
  var image = _ref12.image,
    slideAnimation = _ref12.slideAnimation,
    overlaySettings = _ref12.overlaySettings,
    x = _ref12.x,
    activeSlide = _ref12.activeSlide,
    index = _ref12.index,
    imageRescale = _ref12.imageRescale;
  var _React3 = React,
    Fragment = _React3.Fragment;
  var classes = homeValue1RUseStyles();
  var imageStyles = {
    backgroundImage: "url(".concat(imageRescale(image.url), ")"),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    transform: "translateX(".concat(x, "%)")
  };
  var overlayActive = overlaySettings.active ? /*#__PURE__*/React.createElement(HomeValue1RBackgroundOverlay, {
    overlaySettings: overlaySettings
  }) : null;
  return /*#__PURE__*/React.createElement(Fragment, null, slideAnimation ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.slide, " slide-hv-1r"),
    style: imageStyles
  }, overlayActive) : /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.fade, " ").concat(activeSlide === index ? classes.fadeIn : null, " fade-animation-hv-1r"),
    style: imageStyles
  }, overlayActive));
};
$(document).ready(function () {
  var isInIframe = window.frameElement && window.frameElement.nodeName == "IFRAME";
  if (isInIframe) {
    var getSiteId = function getSiteId() {
      return document.referrer.split("/sites/site/")[1].split("?")[0];
    };
    $.ajax({
      method: "GET",
      url: "/mls/getSiteMls/".concat(getSiteId())
    }).done(function (data) {
      var parseData = JSON.parse(data);
      var mlsIds = [];
      parseData.mls_list.map(function (mls) {
        mlsIds.push(mls.mls_id);
      });
      var settings = JSON.parse($("#home-value-1R").attr("data-settings"));
      settings.mlsIds = mlsIds.join("|");
      settings.mlsIdsComma = mlsIds.join(",");
      $("#home-value-1R").attr("data-settings", JSON.stringify(settings));
      $("#home-value-1R #home-value-1R-settings-hook").trigger("click");
    }).fail(function (err) {
      console.log("Unable to get site MLS ids!", err);
    });
  }
  if ($(".home-value-1R").length > 1) {
    $(".home-value-1R").each(function (_, el) {
      var elementId = $(el).attr("id");
      $("#".concat(elementId, " .HomeValue-1R")).removeAttr("id").attr("id", $("#".concat(elementId, " .HomeValue-1R")).attr("class"));
      $(el).removeAttr("id").attr("id", $(el).attr("class").split(" ")[0]);
    });
    $(".home-value-1R").each(function (index, el) {
      var elementId = $(el).attr("id");
      var elementRootId = $("#".concat(elementId, " .HomeValue-1R")).attr("id");
      $(el).removeAttr("id").attr("id", "".concat(elementId).concat(index));
      $("#".concat(elementId).concat(index, " .HomeValue-1R")).removeAttr("id").attr("id", "".concat(elementRootId).concat(index));
      ReactDOM.render( /*#__PURE__*/React.createElement(HomeValue1RContext, {
        element: elementId + index
      }), document.getElementById("HomeValue-1R" + index));
    });
  } else {
    $(".home-value-1R").each(function (_, el) {
      var elementId = $(el).attr("id");
      $("#".concat(elementId, " .HomeValue-1R")).removeAttr("id").attr("id", $("#".concat(elementId, " .HomeValue-1R")).attr("class"));
      $(el).removeAttr("id").attr("id", $(el).attr("class").split(" ")[0]);
    });
    ReactDOM.render( /*#__PURE__*/React.createElement(HomeValue1RContext, {
      element: "home-value-1R"
    }), document.getElementById("HomeValue-1R"));
  }
});
