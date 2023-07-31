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
var homeValue3RUseStyles = MaterialUI.makeStyles(function () {
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
      top: "-30px",
      opacity: "0"
    },
    showContent: {
      top: "0",
      opacity: "1"
    },
    gridItemStyles: {
      padding: "24px 32px",
      zIndex: "9",
      maxWidth: "800px"
    },
    gridItemSearchBar: {
      position: "relative",
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
    recap2: {
      marginTop: "15px",
      textAlign: "center",
      color: "#c0c0c0"
    },
    searchBarStyles: {
      boxShadow: "0px 7px 44px -2px rgba(0,0,0,0.7)",
      display: "flex"
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
    },
    foundHome: {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: "600",
      marginBottom: "32px",
      textAlign: "center"
    },
    address: {
      fontSize: "42px",
      fontWeight: "700",
      lineHeight: "50px",
      marginBottom: "16px",
      textAlign: "center"
    },
    looks: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "19px",
      marginBottom: "32px",
      textAlign: "center"
    },
    names: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "19px",
      marginBottom: "8px"
    },
    foundParent: {
      position: "absolute",
      top: "-120px",
      zIndex: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      flexDirection: "column",
      color: "#fff",
      opacity: "0",
      transition: "0.4s",
      animationDelay: "0.4s"
    },
    loaded: {
      opacity: "0",
      transition: "0.4s",
      animationDelay: "0.4s"
    },
    loading: {
      opacity: "1"
    },
    showAddress: {
      zIndex: "8",
      top: "0px",
      opacity: "1"
    },
    topParent: {
      top: "-100px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    },
    inputParent: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end"
    },
    inputHolder: {
      display: "flex",
      flexDirection: "column",
      marginRight: "12px"
    },
    smallInput: {
      width: "100%",
      maxWidth: "132px",
      height: "32px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "3px",
      padding: "0 0 0 12px",
      border: "0",
      color: "#000"
    },
    loadingGif: {
      height: "160px",
      width: "200px",
      marginTop: "32px"
    },
    bigInput: {
      width: "100%",
      maxWidth: "185px",
      height: "32px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "3px",
      marginRight: "8px",
      padding: "0 0 0 12px",
      border: "0",
      color: "#000"
    },
    accessBtn: {
      padding: "8px 16px",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "19px",
      border: "0",
      borderRadius: "3px"
    },
    overFlex: {
      display: "flex",
      flexDirection: "row"
    }
  }, _defineProperty(_MaterialUI$createSty, "@media (max-width: 830px)", {
    accessBtn: {
      marginTop: "30px"
    },
    inputParent: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    overFlex: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "12px",
      marginLeft: "12px"
    },
    smallInput: {
      width: "100%",
      maxWidth: "185px"
    },
    foundParent: {
      padding: "0 50px"
    }
  }), _defineProperty(_MaterialUI$createSty, "@media (max-width: 768px)", (_mediaMaxWidth = {
    accessBtn: {
      marginTop: "15px"
    },
    foundParent: {
      top: "-20px"
    },
    showAddress: {
      top: "0px"
    },
    address: {
      fontSize: "34px",
      lineHeight: "40px"
    },
    names: {
      marginBottom: "3px"
    },
    looks: {
      fontSize: "14px",
      lineHeight: "17px",
      marginBottom: "12px"
    },
    foundHome: {
      marginBottom: "12px"
    },
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
    },
    modalContainer: {
      position: "absolute",
      zIndex: "10000000"
    },
    inputParent: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    overFlex: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "0"
    },
    smallInput: {
      maxWidth: "260px",
      width: "260px",
      marginBottom: "12px"
    },
    bigInput: {
      maxWidth: "260px",
      width: "260px",
      marginBottom: "9px",
      marginRight: "0"
    },
    foundParent: {
      padding: "0 30px"
    }
  }), _MaterialUI$createSty));
});
var homeValue3RGenerateClassName = MaterialUI.createGenerateClassName({
  seed: "HV3R"
});
var HomeValue3RContext = function HomeValue3RContext(_ref) {
  var element = _ref.element;
  var _MaterialUI = MaterialUI,
    StylesProvider = _MaterialUI.StylesProvider;
  return /*#__PURE__*/React.createElement(StylesProvider, {
    generateClassName: homeValue3RGenerateClassName
  }, /*#__PURE__*/React.createElement(HomeValue3R, {
    element: element
  }));
};

/**
 * Root Component for block, gets settings and listens for when settings change so it can render.
 */
var HomeValue3R = function HomeValue3R(_ref2) {
  var element = _ref2.element;
  var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect,
    Fragment = _React.Fragment,
    useRef = _React.useRef;
  var _MaterialUI2 = MaterialUI,
    useMediaQuery = _MaterialUI2.useMediaQuery;
  var classes = homeValue3RUseStyles();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showAddress = _useState2[0],
    setShowAddress = _useState2[1];
  var _useState3 = useState(JSON.parse(document.getElementById(element).dataset.settings)),
    _useState4 = _slicedToArray(_useState3, 2),
    settings = _useState4[0],
    setSettings = _useState4[1];
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
    className: "".concat(classes.componentsContainer, " components-container-hv-3r")
  }, /*#__PURE__*/React.createElement("input", {
    "class": "sqft",
    id: "hvi_sq_feet",
    type: "hidden",
    placeholder: "Your home's square footage"
  }), /*#__PURE__*/React.createElement("input", {
    "class": "beds",
    id: "hvi_beds",
    type: "hidden",
    placeholder: "# of beds"
  }), /*#__PURE__*/React.createElement("input", {
    "class": "baths",
    id: "hvi_bath_full",
    type: "hidden",
    placeholder: "# of baths"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    value: "seller",
    id: "hlead_intent"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "none"
    },
    id: "aria_label_miles"
  }, "1.0 mi"), carousel !== undefined && carousel.active ? /*#__PURE__*/React.createElement(HomeValue3RCarouselBackground, {
    carouselSettings: carousel,
    imageRescale: function imageRescale(i) {
      return _imageRescale(i);
    }
  }) : null, video !== undefined && video.active ? /*#__PURE__*/React.createElement(HomeValue3RVideoBackground, {
    videoSettings: video
  }) : null, image !== undefined && image.active ? /*#__PURE__*/React.createElement(HomeValue3RImageBackground, {
    imageSettings: image,
    imageRescale: function imageRescale(i) {
      return _imageRescale(i);
    }
  }) : null, solid !== undefined && solid.active ? /*#__PURE__*/React.createElement(HomeValue3RSolidBackground, {
    solidSettings: solid
  }) : null, /*#__PURE__*/React.createElement(HomeValue3RAddressModal, {
    show: showAddress
  }), /*#__PURE__*/React.createElement(HomeValue3RContent, {
    show: showAddress,
    setShowAddress: setShowAddress,
    alignment: alignment,
    position: position,
    siteColors: siteColors,
    header: header,
    description: description,
    buttonBackground: buttonBackground,
    buttonText: buttonText
  })), /*#__PURE__*/React.createElement("div", {
    id: "home-value-3R-settings-hook",
    onClick: function onClick() {
      return updateSettings();
    }
  }));
};
var HomeValue3RLoadingModal = function HomeValue3RLoadingModal() {
  var classes = homeValue3RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.modalContainer, " modal-container-hv-3r")
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
var HomeValue3RContent = function HomeValue3RContent(_ref3) {
  var alignment = _ref3.alignment,
    position = _ref3.position,
    siteColors = _ref3.siteColors,
    header = _ref3.header,
    description = _ref3.description,
    buttonBackground = _ref3.buttonBackground,
    buttonText = _ref3.buttonText,
    show = _ref3.show,
    setShowAddress = _ref3.setShowAddress;
  var _MaterialUI3 = MaterialUI,
    Grid = _MaterialUI3.Grid,
    Typography = _MaterialUI3.Typography;
  var classes = homeValue3RUseStyles();
  var checkAddress = function checkAddress() {
    if ($("#address_auto").val().trim() && $("#street").val().trim() && $("#zipcode").val().trim()) {
      setShowAddress(true);
    } else alert("Please enter a valid home address");
  };
  return /*#__PURE__*/React.createElement(Grid, {
    className: "".concat(classes.contentActive, " ").concat(!show ? classes.showContent : "", " ").concat(classes.gridContainerStyles, " grid-container-hv-3r"),
    container: true,
    justify: position,
    alignItems: alignment,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    className: "".concat(classes.gridItemStyles, " grid-item-hv-3r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.mobileReady, " mobile-ready-hv-3r")
  }, /*#__PURE__*/React.createElement(Typography, {
    className: "".concat(classes.mobileHeader, " mobile-header-hv-3r"),
    style: header.styles,
    variant: "h1",
    align: "left",
    react: "true",
    parent: ".home-value-3R",
    element: "header"
  }, header.content), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.gridItemSearchBar, " grid-item-search-bar-hv-3r")
  }, /*#__PURE__*/React.createElement("input", {
    className: "".concat(classes.textInputStyles, " text-input-hv-3r"),
    id: "home_value_1_search_address",
    name: "home_value_1_search_address",
    autocomplete: "off",
    type: "text",
    placeholder: "Enter Home Address"
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.searchButtonItemStyles, " search-button-item-hv-3r")
  }, /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return checkAddress();
    },
    style: buttonBackground.styles,
    className: "".concat(classes.buttonStyles, " ").concat(classes.searchBarButton, " ").concat(siteColors ? "btn-primary" : "", " button-background home-value-submit"),
    react: "true",
    parent: ".home-value-3R",
    element: "buttonBackground",
    contentModeIgnore: "true"
  }, /*#__PURE__*/React.createElement("p", {
    className: "".concat(classes.buttonText, " linktext button-text-hv-3r"),
    style: buttonText.styles,
    react: "true",
    parent: ".home-value-3R",
    element: "buttonText"
  }, buttonText.content)))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: header.styles.textAlign
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
    className: "".concat(classes.descText, " desc-text-hv-3r"),
    variant: "h4",
    align: "left",
    style: description.styles,
    react: "true",
    parent: ".home-value-3R",
    element: "description"
  }, description.content))));
};
var HomeValue3RAddressModal = function HomeValue3RAddressModal(_ref4) {
  var show = _ref4.show;
  var _React2 = React,
    useState = _React2.useState,
    useEffect = _React2.useEffect;
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    address = _useState6[0],
    setAddress = _useState6[1];
  var isInIframe = window.frameElement && window.frameElement.nodeName === "IFRAME";
  var classes = homeValue3RUseStyles();
  useEffect(function () {
    if (!isInIframe) {
      setAddress(document.getElementById("home_value_1_search_address").value);
    }
  }, [show]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.foundParent, " ").concat(show ? classes.showAddress : "", " found-parent-hv-3r")
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.topParent
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.foundHome, " found-home-hv-3r")
  }, "Looking for the home you requested!"), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.address, " address-hv-3r")
  }, address), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 1
    },
    className: "".concat(classes.loaded, " address-loading-hv3")
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      display: "block"
    },
    src: "https://cdn1.brivityidx.com/assets/images/blocks/home-value/loading.gif",
    alt: "loading house",
    className: "".concat(classes.loadingGif, " address-image-hv3")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0
    },
    className: "".concat(classes.loaded, " address-content-hv3")
  }, /*#__PURE__*/React.createElement("div", {
    className: "address-child-hv3",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.looks, " looks-hv-3r")
  }, "Looks like the value of your home has changed in the last 30 days."), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.looks, " looks-2-hv-3r")
  }, "Would you like full access to the Market Report? Fill out the information below!"), /*#__PURE__*/React.createElement("form", {
    className: "".concat(classes.inputParent, " input-parent-2-hv-3r")
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.overFlex
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.inputHolder, " holder-2-hv-3r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.names, " names-2-hv-3r")
  }, "First Name"), /*#__PURE__*/React.createElement("input", {
    name: "firstname",
    id: "hv_fname",
    required: true,
    className: "".concat(classes.smallInput, " small-input-2-hv-3r"),
    placeholder: "First Name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.inputHolder, " holder-2-hv-3r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.names, " names-2-hv-3r")
  }, "Last Name"), /*#__PURE__*/React.createElement("input", {
    name: "lastname",
    id: "hv_lname",
    required: true,
    className: "".concat(classes.smallInput, " small-input-2-hv-3r"),
    placeholder: "Last Name"
  }))), /*#__PURE__*/React.createElement("div", {
    className: classes.overFlex
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.inputHolder, " holder-2-hv-3r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.names, " names-2-hv-3r")
  }, "Phone Number"), /*#__PURE__*/React.createElement("input", {
    name: "phone",
    id: "hv_phone",
    type: "tel",
    required: true,
    className: "".concat(classes.smallInput, " phone small-input-2-hv-3r"),
    placeholder: "000-000-0000"
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.inputHolder, " holder-2-hv-3r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.names, " names-2-hv-3r")
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    id: "hv_email",
    required: true,
    className: "".concat(classes.bigInput, " big-input-2-hv-3r"),
    placeholder: "Email Address"
  }))), /*#__PURE__*/React.createElement("button", {
    id: "submit_hvi_form3",
    contentModeIgnore: "true",
    type: "submit",
    className: "".concat(classes.accessBtn, " btn-primary btn-form-hv-3r")
  }, "Access Now!")), /*#__PURE__*/React.createElement("p", {
    className: "grecaptcha-modal-text ".concat(classes.recap2),
    contentModeIgnore: "true",
    detailsmodeignore: "true"
  }, "This site is protected by reCAPTCHA and the Google", /*#__PURE__*/React.createElement("a", {
    href: "https://policies.google.com/privacy"
  }, " Privacy Policy"), " and", /*#__PURE__*/React.createElement("a", {
    href: "https://policies.google.com/terms"
  }, " Terms of Service"), " apply.")))));
};
var HomeValue3RVideoBackground = function HomeValue3RVideoBackground(_ref5) {
  var videoSettings = _ref5.videoSettings;
  var classes = homeValue3RUseStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.videoBackgroundContainer, " background-video-container-hv-3r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.iframeWrapper, " iframe-wrapper-hv-3r")
  }, /*#__PURE__*/React.createElement("iframe", {
    className: "".concat(classes.iframeBackground, " iframe-background-hv-3r"),
    src: "https://player.vimeo.com/video/".concat(videoSettings.videoID, "?background=1&dnt=1"),
    allow: "autoplay; fullscreen",
    allowfullscreen: true,
    frameborder: "0"
  })), videoSettings.overlay.active ? /*#__PURE__*/React.createElement(HomeValue3RBackgroundOverlay, {
    overlaySettings: videoSettings.overlay
  }) : null);
};
var HomeValue3RImageBackground = function HomeValue3RImageBackground(_ref6) {
  var imageSettings = _ref6.imageSettings,
    imageRescale = _ref6.imageRescale;
  var classes = homeValue3RUseStyles();
  var imageStyles = {
    backgroundImage: "url(".concat(imageRescale(imageSettings.imageURL), ")"),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    position: "absolute"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.imageBackgroundContainer, " background-image-container-hv-3r")
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(classes.imageStyles, " background-image-hv-3r"),
    style: imageStyles,
    role: "img",
    "aria-label": imageSettings.alt
  }), imageSettings.overlay.active ? /*#__PURE__*/React.createElement(HomeValue3RBackgroundOverlay, {
    overlaySettings: imageSettings.overlay
  }) : null);
};
var HomeValue3RSolidBackground = function HomeValue3RSolidBackground(_ref7) {
  var solidSettings = _ref7.solidSettings;
  var classes = homeValue3RUseStyles();
  var solidStyles = {
    background: solidSettings.color
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.solidBackgroundContainer, " solid-background-container-hv-3r")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.solidStyles, " solid-background-hv-3r"),
    style: solidStyles
  }));
};
var HomeValue3RCarouselBackground = function HomeValue3RCarouselBackground(_ref8) {
  var carouselSettings = _ref8.carouselSettings,
    _imageRescale2 = _ref8.imageRescale;
  var _React3 = React,
    Fragment = _React3.Fragment,
    useState = _React3.useState,
    useEffect = _React3.useEffect;
  var classes = homeValue3RUseStyles();
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    activeSlide = _useState8[0],
    setActiveSlide = _useState8[1];
  var _useState9 = useState(carouselSettings.images),
    _useState10 = _slicedToArray(_useState9, 2),
    carouselImages = _useState10[0],
    setCarouselImages = _useState10[1];
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    x = _useState12[0],
    setX = _useState12[1];
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
  var CarouselDots = function CarouselDots(_ref9) {
    var activeSlide = _ref9.activeSlide,
      carouselImages = _ref9.carouselImages,
      dotsSettings = _ref9.dotsSettings;
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.dotsContainer, " dots-container-hv-3r")
    }, carouselImages.map(function (_, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "".concat(classes.dot, " dot-hv-3r")
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
  var LeftArrow = function LeftArrow(_ref10) {
    var action = _ref10.action,
      arrowSettings = _ref10.arrowSettings;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.backArrow, " ").concat(classes.arrow, " back-arrow-item-hv-3r"),
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
  var RightArrow = function RightArrow(_ref11) {
    var action = _ref11.action,
      arrowSettings = _ref11.arrowSettings;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(classes.nextArrow, " ").concat(classes.arrow, " next-arrow-item-hv-3r"),
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
    className: "".concat(classes.slider, " slider-hv-3r")
  }, carouselImages.map(function (image, index) {
    return /*#__PURE__*/React.createElement(HomeValue3RCarouselSlide, {
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
var HomeValue3RBackgroundOverlay = function HomeValue3RBackgroundOverlay(_ref12) {
  var overlaySettings = _ref12.overlaySettings;
  var classes = homeValue3RUseStyles();
  var overlayStyles = {
    background: overlaySettings.color,
    opacity: overlaySettings.opacity
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.overlayInit, " overlay-init-hv-3r"),
    style: overlayStyles
  });
};
var HomeValue3RCarouselSlide = function HomeValue3RCarouselSlide(_ref13) {
  var image = _ref13.image,
    slideAnimation = _ref13.slideAnimation,
    overlaySettings = _ref13.overlaySettings,
    x = _ref13.x,
    activeSlide = _ref13.activeSlide,
    index = _ref13.index,
    imageRescale = _ref13.imageRescale;
  var _React4 = React,
    Fragment = _React4.Fragment;
  var classes = homeValue3RUseStyles();
  var imageStyles = {
    backgroundImage: "url(".concat(imageRescale(image.url), ")"),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    transform: "translateX(".concat(x, "%)")
  };
  var overlayActive = overlaySettings.active ? /*#__PURE__*/React.createElement(HomeValue3RBackgroundOverlay, {
    overlaySettings: overlaySettings
  }) : null;
  return /*#__PURE__*/React.createElement(Fragment, null, slideAnimation ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.slide, " slide-hv-3r"),
    style: imageStyles
  }, overlayActive) : /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.fade, " ").concat(activeSlide === index ? classes.fadeIn : null, " fade-animation-hv-3r"),
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
      var settings = JSON.parse($("#home-value-3R").attr("data-settings"));
      settings.mlsIds = mlsIds.join("|");
      settings.mlsIdsComma = mlsIds.join(",");
      $("#home-value-3R").attr("data-settings", JSON.stringify(settings));
      $("#home-value-3R #home-value-3R-settings-hook").trigger("click");
    }).fail(function (err) {
      console.log("Unable to get site MLS ids!", err);
    });
  }
  if ($(".home-value-3R").length > 1) {
    $(".home-value-3R").each(function (_, el) {
      var elementId = $(el).attr("id");
      $("#".concat(elementId, " .HomeValue-3R")).removeAttr("id").attr("id", $("#".concat(elementId, " .HomeValue-3R")).attr("class"));
      $(el).removeAttr("id").attr("id", $(el).attr("class").split(" ")[0]);
    });
    $(".home-value-3R").each(function (index, el) {
      var elementId = $(el).attr("id");
      var elementRootId = $("#".concat(elementId, " .HomeValue-3R")).attr("id");
      $(el).removeAttr("id").attr("id", "".concat(elementId).concat(index));
      $("#".concat(elementId).concat(index, " .HomeValue-3R")).removeAttr("id").attr("id", "".concat(elementRootId).concat(index));
      ReactDOM.render( /*#__PURE__*/React.createElement(HomeValue3RContext, {
        element: elementId + index
      }), document.getElementById("HomeValue-3R" + index));
    });
  } else {
    $(".home-value-3R").each(function (_, el) {
      var elementId = $(el).attr("id");
      $("#".concat(elementId, " .HomeValue-3R")).removeAttr("id").attr("id", $("#".concat(elementId, " .HomeValue-3R")).attr("class"));
      $(el).removeAttr("id").attr("id", $(el).attr("class").split(" ")[0]);
    });
    ReactDOM.render( /*#__PURE__*/React.createElement(HomeValue3RContext, {
      element: "home-value-3R"
    }), document.getElementById("HomeValue-3R"));
  }
});
