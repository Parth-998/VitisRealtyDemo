"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//*---------------------------------------------------------*//
//------------*{ Generated with CreateBlock - J.S. }*--------//
//*---------------------------------------------------------*//

var featuredProperties1RUseStyles = MaterialUI.makeStyles(function () {
  return MaterialUI.createStyles({
    componentsContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    defaultPadding: {
      padding: "15px"
    },
    loaderContainer: {
      height: "600px",
      width: "100%"
    },
    loadingText: {
      fontSize: "30px",
      fontWeight: "500",
      fontFamily: "Roboto",
      marginTop: "15px"
    },
    solidBackgroundContainer: {
      width: "100%",
      height: "100%"
    },
    solidStyles: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    firstTileContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "15px"
    },
    firstTileInnerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "55px 40px",
      height: "100%",
      width: "100%"
    },
    buttonStyles: {
      minHeight: "45px",
      width: "fit-content",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none"
    },
    buttonText: {
      margin: "0px",
      padding: "0px 40px"
    },
    tileButtonStyles: {
      position: "absolute",
      right: "30px",
      top: "295px",
      minHeight: "45px",
      width: "fit-content",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none"
    },
    tileTextOnImageButtonStyles: {
      position: "absolute",
      right: "15px",
      bottom: "15px",
      minHeight: "45px",
      width: "fit-content",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none"
    },
    tileButtonText: {
      margin: "0px",
      padding: "0px 20px",
      color: "#fff",
      fontWeight: "500"
    },
    firstTileButtonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    headerStyles: {
      marginBottom: "50px"
    },
    descriptionStyles: {
      marginBottom: "20px"
    },
    descriptionStyles2: {
      marginBottom: "40px"
    },
    tileContainer: {
      width: "100%",
      height: "100%",
      padding: "15px",
      overflow: "hidden",
      position: "relative"
    },
    tilePhotoContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#000",
      overflow: "hidden",
      width: "100%",
      height: "305px"
    },
    tilePhotoTextOnImageContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#000",
      overflow: "hidden",
      width: "100%",
      height: "450px"
    },
    textOnImageSingleColumnHeightAdjust: {
      height: "715px"
    },
    tilePhotoStyles: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      objectFit: "cover"
    },
    textOffImageSingleColumnHeightAdjust: {
      height: "555px"
    },
    tilePhotoStylesNoAnimation: {
      height: "100%",
      width: "100%",
      objectFit: "cover"
    },
    tilePhotoStylesZoomAnimation: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      transform: "scale(1.0)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.2)",
        transition: "all 0.3s ease-in-out"
      }
    },
    priceStyles: {
      fontFamily: "Roboto",
      fontSize: "32px",
      fontWeight: "600",
      margin: "0px",
      paddingTop: "30px"
    },
    addressStyles: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontWeight: "500",
      margin: "0px",
      paddingTop: "10px"
    },
    bedBathSqftStyles: {
      fontFamily: "Roboto",
      fontSize: "15px",
      fontWeight: "500",
      margin: "0px",
      paddingTop: "10px",
      fontStyle: "italic"
    },
    listedWithStyles: {
      fontFamily: "Roboto",
      fontSize: "13px",
      fontWeight: "400",
      margin: "0px",
      paddingTop: "10px",
      fontStyle: "italic"
    },
    textOnImage: {
      color: "#fff"
    },
    textBelowImage: {
      color: "#000"
    },
    imageIsLinkStyles: {
      cursor: "pointer"
    },
    textOnImageInfo: {
      position: "absolute",
      bottom: "0px",
      left: "0px",
      padding: "15px",
      width: "100%",
      background: "linear-gradient(0deg, rgba(0,0,0,0.8), transparent)"
    },
    extraPadding: {
      paddingTop: "61px !important"
    },
    fullscreenStyles: {
      maxWidth: "1800px"
    },
    paginateButtonsContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "40px 0px"
    },
    paginatePosition: {
      fontFamily: "Roboto",
      fontSize: "19px",
      fontWeight: "600",
      color: "#000000"
    },
    paginateNumOfPages: {
      fontFamily: "Roboto",
      fontSize: "19px",
      fontWeight: "500",
      color: "#000000",
      marginLeft: "5px"
    },
    paginateLeftArrow: {
      cursor: "pointer",
      marginRight: "35px",
      transition: "opacity 0.3s",
      "&:hover": {
        opacity: "0.5",
        transition: "opacity 0.3s"
      }
    },
    paginateRightArrow: {
      cursor: "pointer",
      marginLeft: "35px",
      transition: "opacity 0.3s",
      "&:hover": {
        opacity: "0.5",
        transition: "opacity 0.3s"
      }
    },
    listedWith: {
      fontWeight: "500"
    },
    mlsLogoStyles: {
      height: "15px",
      marginBottom: "2px",
      marginLeft: "2px"
    },
    textOffImageButtonPosition: {
      top: "unset",
      bottom: "146px"
    },
    "@media (max-width: 967px)": {
      textOnImageSingleColumnHeightAdjust: {
        height: "450px"
      },
      textOffImageSingleColumnHeightAdjust: {
        height: "305px"
      },
      textOffImageButtonPosition: {
        bottom: "unset",
        top: "295px"
      }
    }
  });
});
var featuredProperties1RGenerateClassName = MaterialUI.createGenerateClassName({
  seed: "FP1R"
});
var FeaturedProperties1RContext = function FeaturedProperties1RContext(_ref) {
  var element = _ref.element;
  var _MaterialUI = MaterialUI,
    StylesProvider = _MaterialUI.StylesProvider;
  return /*#__PURE__*/React.createElement(StylesProvider, {
    generateClassName: featuredProperties1RGenerateClassName
  }, /*#__PURE__*/React.createElement(FeaturedProperties1R, {
    element: element
  }));
};

/**
 * Root Component for block, gets settings and listens for when settings change so it can render.
 */
var FeaturedProperties1R = function FeaturedProperties1R(_ref2) {
  var element = _ref2.element;
  var _React = React,
    useState = _React.useState,
    Fragment = _React.Fragment;
  var classes = featuredProperties1RUseStyles();
  var _useState = useState(JSON.parse(document.getElementById(element).dataset.settings)),
    _useState2 = _slicedToArray(_useState, 2),
    settings = _useState2[0],
    setSettings = _useState2[1];
  var updateSettings = function updateSettings() {
    setSettings(JSON.parse(document.getElementById(element).dataset.settings));
  };
  var solid = settings.solid,
    siteColors = settings.siteColors,
    rows = settings.rows,
    columns = settings.columns,
    firstPanel = settings.firstPanel,
    buttons = settings.buttons,
    fullscreen = settings.fullscreen,
    textOnImage = settings.textOnImage,
    onHoverZoom = settings.onHoverZoom,
    beds = settings.beds,
    baths = settings.baths,
    squareFt = settings.squareFt,
    mlsData = settings.mlsData,
    firstTile = settings.firstTile,
    header = settings.header,
    description = settings.description,
    description2 = settings.description2,
    buttonBackground = settings.buttonBackground,
    buttonText = settings.buttonText,
    paginationControls = settings.paginationControls;
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.componentsContainer, " components-container-FP-1R")
  }, solid !== undefined && solid.active ? /*#__PURE__*/React.createElement(FeaturedProperties1RSolidBackground, {
    solidSettings: solid,
    siteColors: siteColors,
    rows: rows,
    columns: columns,
    firstPanel: firstPanel,
    buttons: buttons,
    fullscreen: fullscreen,
    textOnImage: textOnImage,
    onHoverZoom: onHoverZoom,
    beds: beds,
    baths: baths,
    squareFt: squareFt,
    mlsData: mlsData,
    firstTile: firstTile,
    header: header,
    description: description,
    description2: description2,
    buttonBackground: buttonBackground,
    buttonText: buttonText,
    paginationControls: paginationControls
  }) : null), /*#__PURE__*/React.createElement("div", {
    id: "featuredproperties-1-settings-hook",
    onClick: function onClick() {
      return updateSettings();
    }
  }));
};
var FeaturedProperties1RContent = function FeaturedProperties1RContent(_ref3) {
  var siteColors = _ref3.siteColors,
    rows = _ref3.rows,
    columns = _ref3.columns,
    firstPanel = _ref3.firstPanel,
    buttons = _ref3.buttons,
    fullscreen = _ref3.fullscreen,
    textOnImage = _ref3.textOnImage,
    onHoverZoom = _ref3.onHoverZoom,
    beds = _ref3.beds,
    baths = _ref3.baths,
    squareFt = _ref3.squareFt,
    mlsData = _ref3.mlsData,
    firstTile = _ref3.firstTile,
    header = _ref3.header,
    description = _ref3.description,
    description2 = _ref3.description2,
    buttonBackground = _ref3.buttonBackground,
    buttonText = _ref3.buttonText,
    paginationControls = _ref3.paginationControls;
  var _React2 = React,
    useEffect = _React2.useEffect,
    useState = _React2.useState,
    Fragment = _React2.Fragment;
  var _MaterialUI2 = MaterialUI,
    Grid = _MaterialUI2.Grid,
    useMediaQuery = _MaterialUI2.useMediaQuery;
  var classes = featuredProperties1RUseStyles();
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    listings = _useState4[0],
    setListings = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    renderedListings = _useState6[0],
    setRenderedListings = _useState6[1];
  var _useState7 = useState(1),
    _useState8 = _slicedToArray(_useState7, 2),
    paginatePosition = _useState8[0],
    setPaginatePosition = _useState8[1];
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    pageSize = _useState10[0],
    setPageSize = _useState10[1];
  var _useState11 = useState(true),
    _useState12 = _slicedToArray(_useState11, 2),
    loader = _useState12[0],
    setLoader = _useState12[1];
  var matchesDesk = useMediaQuery("(max-width: 1200px)");
  var matchesTablet = useMediaQuery("(max-width: 900px)");
  var matchesMobile = useMediaQuery("(max-width: 600px)");
  var isMobile = matchesDesk && matchesTablet && matchesMobile;
  var page = firstPanel && !isMobile ? 1 : 0;
  var numberOfPages = Math.ceil(listings.length / (pageSize - page));
  var isInIframe = window.frameElement && window.frameElement.nodeName === "IFRAME";
  useEffect(function () {
    var getIdxIds = getInfoFor("idxIds");
    var getAgentIds = getInfoFor("agentIds");
    var getOfficeIds = getInfoFor("officeIds");
    var idxIds = getIdxIds.length ? getIdxIds.join("|") : "";
    var agentIds = getAgentIds.length ? getAgentIds.join(",") : "";
    var officeIds = getOfficeIds.length ? getOfficeIds.join(",") : "";
    var propertyTypes = mlsData.property_type.join("|") !== "" ? "&propertyType=".concat(encodeURIComponent(mlsData.property_type.join("|"))) : "";
    var priority = mlsData.user_priority === "agent" || mlsData.user_priority === "" ? "&q_prioritize=agents.0.id=".concat(agentIds, "|office.id=").concat(officeIds) : "&q_prioritize=office.id=".concat(officeIds, "|agents.0.id=").concat(agentIds);
    var price = mlsData.min_price !== "" && mlsData.min_price !== 0 || mlsData.max_price !== "" && mlsData.max_price !== 0 ? mlsData.min_price > 0 && mlsData.max_price === 0 ? "&price=".concat(mlsData.min_price, ":") : mlsData.min_price === 0 && mlsData.max_price > 0 ? "&price=:".concat(mlsData.max_price) : "&price=".concat(mlsData.min_price, ":").concat(mlsData.max_price) : "";
    var city = mlsData.city.length ? "&multi_search=".concat(encodeURIComponent(mlsData.city.length > 1 ? mlsData.city.join("|") : mlsData.city[0])) : "";
    var multiCat = mlsData.multi_cat.length ? "&multi_cat=".concat(encodeURIComponent(mlsData.multi_cat.length > 1 ? mlsData.multi_cat.join("|") : mlsData.multi_cat[0])) : "";
    var wantsSold = mlsData.status.indexOf("4") !== -1;
    var includeAll = mlsData.agent_office_listings_only === 1 || wantsSold && getAgentIds.length || wantsSold && getOfficeIds.length ? "&q_include_all=0" : "&q_include_all=fallback";
    var beds = mlsData.beds ? "&bedrooms=".concat(mlsData.beds, ":") : "";
    var baths = mlsData.baths ? "&totalBaths=".concat(mlsData.baths, ":") : "";
    var garage = mlsData.garage ? "&garageCap=".concat(mlsData.garage, ":") : "";
    var sqft = mlsData.sqft ? "&sqFeet=".concat(mlsData.sqft, ":") : "";
    var lot = mlsData.lot ? "&acreage=".concat(mlsData.lot, ":") : "";
    var year = mlsData.year ? "&year=".concat(mlsData.year, ":") : "";
    var newListings = mlsData.new_listings === 1 ? "&new_listings=true" : "";
    var status = mlsData.status.length ? "&status=".concat(mlsData.status.join("|")) : "&status=1|3";
    var requestUrl = "/pages/search.php/?mlsId=".concat(idxIds).concat(propertyTypes).concat(price, "&q_sort=price-").concat(priority).concat(city).concat(multiCat).concat(includeAll).concat(beds).concat(baths).concat(garage).concat(sqft).concat(lot).concat(year).concat(newListings).concat(status, "&q_include_total_count=false&q_photos_available=true");
    axios({
      method: "GET",
      url: isInIframe ? "/pages/listings_placeholder.json" : requestUrl
    }).then(function (data) {
      var newData = data.data.data;
      console.log(newData);
      if (isInIframe) {
        setLoader(false);
        setListings(newData);
      } else {
        //Get MLS info with MLS IDS to get logos and enrich each listing object.
        axios({
          method: "GET",
          url: "/pages/search.php/metadata/mlses?mlsIds=".concat(idxIds.replace(/\|/g, ","))
        }).then(function (data) {
          var mlses = data.data.mlses;
          mlses.map(function (mls) {
            mlsData.extraMlsInfo.push({
              states: mls.states,
              logo: mls.logoUrl,
              mlsId: mls.mlsId
            });
          });
          var filterOutListingsWithoutDisplayPermissions = newData.filter(function (_, index) {
            //Have to do this because the listings are returned as named objects ex: ([0: {}, 1: {}, 2: {}]) and not ([{}, {}, {}])
            var listing = newData[index];
            if (listing.permissions !== undefined && listing.permissions.displayListing) {
              mlsData.extraMlsInfo.map(function (info) {
                if (info.mlsId === listing.mlsId) {
                  listing.mlsLogo = info.logo;
                }
              });
              return listing;
            }
          });
          setLoader(false);
          setListings(filterOutListingsWithoutDisplayPermissions);
        })["catch"](function (err) {
          console.log("Failed To Get MLS Logos!", err);
        });
      }
    })["catch"](function (err) {
      console.log("Failed To Get Listings!", err);
    });
  }, []);
  useEffect(function () {
    //I need to show x amount of panels equal to rows * columns.
    var rowsInt = rows;
    var columnsInt = getColumnSize(columns);

    /**
     * Set which index to be included in the page.
     * @param {Array} array
     * @param {Number} pageSize
     * @param {Number} pageNumber
     * @returns {Array} With the indexs to show on the page.
     */
    var paginate = function paginate(array, pageSize, pageNumber) {
      var firstPanelPage = firstPanel && !isMobile ? pageSize - 1 : pageSize;
      var pageMin = (pageNumber - 1) * firstPanelPage;
      var pageMax = pageMin + (firstPanel && !isMobile ? pageSize - 1 : pageSize - 0);
      console.log((pageNumber - 1) * pageSize, (pageNumber - 1) * pageSize + (firstPanel && !isMobile ? pageSize - 1 : pageSize - 0));
      return array.slice(pageMin, pageMax);
    };
    var pageSize = isMobile ? 1 : columnsInt * rowsInt;
    var listingsPage = paginate(listings, pageSize, paginatePosition);
    setPageSize(pageSize);
    setRenderedListings(listingsPage);
  }, [rows, columns, listings, matchesDesk, matchesTablet, matchesMobile, paginatePosition, isMobile, firstPanel]);
  useEffect(function () {
    setPaginatePosition(1);
  }, [rows, columns, isMobile]);

  /**
   * Decides weather or not to use IDX coming back from site object or what a user inputs directly.
   * @param {String} whichInfo The type of ids we need returned.
   * @returns {Array}
   */
  var getInfoFor = function getInfoFor(whichInfo) {
    var areSiteVariablesPresent = window.globalSiteVariables !== undefined;
    var siteVariables = areSiteVariablesPresent ? window.globalSiteVariables.siteMlses : [];
    var info = [];
    switch (whichInfo) {
      case "agentIds":
        {
          if (mlsData.mls_agent_ids.length) {
            info = mlsData.mls_agent_ids;
          } else {
            if (areSiteVariablesPresent && !isInIframe) {
              var agentIds = siteVariables.map(function (mls) {
                if (mls.agent_id !== undefined) return mls.agent_id;
              });
              info = agentIds;
            } else {
              info = mlsData.mls_agent_ids;
            }
          }
          break;
        }
      case "officeIds":
        {
          if (mlsData.mls_office_ids.length) {
            info = mlsData.mls_office_ids;
          } else {
            if (areSiteVariablesPresent && !isInIframe) {
              var officeIds = siteVariables.map(function (mls) {
                if (mls.office_id !== undefined) return mls.office_id;
              });
              info = officeIds;
            } else {
              info = mlsData.mls_office_ids;
            }
          }
          break;
        }
      case "idxIds":
        {
          var filterOutDescription = mlsData.mls_ids.map(function (mls) {
            return mls.id;
          });
          if (mlsData.mls_ids.length) {
            info = filterOutDescription;
          } else {
            if (areSiteVariablesPresent && !isInIframe) {
              var mlsIds = siteVariables.map(function (mls) {
                if (mls.mls_id !== undefined) return mls.mls_id;
              });
              info = mlsIds;
            } else {
              info = filterOutDescription;
            }
          }
          break;
        }
    }
    return info;
  };

  /**
   * Returns back the correct column number to paginate with.
   * @returns {Number}
   */
  var getColumnSize = function getColumnSize(count) {
    var countValue;
    var isBiggerDesk = !matchesDesk && !matchesTablet && !matchesMobile;
    var isDesk = matchesDesk && !matchesTablet && !matchesMobile;
    var isTablet = matchesDesk && matchesTablet && !matchesMobile;
    var isMobile = matchesDesk && matchesTablet && matchesMobile;
    if (isBiggerDesk) {
      count === 4 ? countValue = 4 : null;
      count === 3 ? countValue = 3 : null;
      count === 2 ? countValue = 2 : null;
      count === 1 ? countValue = 1 : null;
    } else if (isDesk) {
      count === 4 ? countValue = 3 : null;
      count === 3 ? countValue = 3 : null;
      count === 2 ? countValue = 2 : null;
      count === 1 ? countValue = 1 : null;
    } else if (isTablet) {
      count === 4 ? countValue = 2 : null;
      count === 3 ? countValue = 2 : null;
      count === 2 ? countValue = 2 : null;
      count === 1 ? countValue = 1 : null;
    } else if (isMobile) {
      count === 4 ? countValue = 1 : null;
      count === 3 ? countValue = 1 : null;
      count === 2 ? countValue = 1 : null;
      count === 1 ? countValue = 1 : null;
    }
    return countValue;
  };

  /**
   * Returns a number that each of the columns sizes need to return
   * @param {Number} size
   * @returns {Number}
   */
  var _getUIColumnSize = function getUIColumnSize(size) {
    var newSize;
    switch (size) {
      case "lg":
        {
          if (columns === 4) {
            newSize = 3;
          } else if (columns === 3) {
            newSize = 4;
          } else if (columns === 2) {
            newSize = 6;
          } else if (columns === 1) {
            newSize = 12;
          }
          break;
        }
      case "md":
        {
          if (columns === 4) {
            newSize = 4;
          } else if (columns === 3) {
            newSize = 4;
          } else if (columns === 2) {
            newSize = 6;
          } else if (columns === 1) {
            newSize = 12;
          }
          break;
        }
      case "sm":
        {
          if (columns === 4) {
            newSize = 6;
          } else if (columns === 3) {
            newSize = 6;
          } else if (columns === 2) {
            newSize = 6;
          } else if (columns === 1) {
            newSize = 12;
          }
          break;
        }
    }
    return newSize;
  };

  /**
   * Changes the page position of the paginated cards to the next page.
   * @returns {Number} to state.
   */
  var _nextPage = function nextPage() {
    numberOfPages !== 0 ? setPaginatePosition(paginatePosition === numberOfPages ? paginatePosition + 0 : paginatePosition + 1) : null;
  };

  /**
   * Changes the page position of the paginated cards to the previous page.
   * @returns {Number} to state.
   */
  var _prevPage = function prevPage() {
    numberOfPages !== 0 ? setPaginatePosition(paginatePosition === 1 ? paginatePosition - 0 : paginatePosition - 1) : null;
  };
  return /*#__PURE__*/React.createElement(Fragment, null, loader ? /*#__PURE__*/React.createElement(FeaturedProperties1RLoader, null) : /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: "".concat(classes.defaultPadding, " ").concat(!fullscreen ? classes.fullscreenStyles : "")
  }, firstPanel ? /*#__PURE__*/React.createElement(FeaturedProperties1RFirstPanel, {
    getUIColumnSize: function getUIColumnSize(s) {
      return _getUIColumnSize(s);
    },
    firstTile: firstTile,
    header: header,
    description: description,
    description2: description2,
    buttons: buttons,
    siteColors: siteColors,
    buttonBackground: buttonBackground,
    buttonText: buttonText
  }) : null, renderedListings.map(function (_, index) {
    console.log(renderedListings);
    //Have to do this because the listings are returned as named objects ex: ([0: {}, 1: {}, 2: {}]) and not ([{}, {}, {}])
    var listing = renderedListings[index];
    var blossorId = listing.blossorId !== undefined && listing.blossorId !== null ? listing.blossorId : "N/A";
    var image = listing.main_photo !== undefined && listing.main_photo !== null ? listing.main_photo : "";
    var price = listing.price_formatted !== undefined && listing.price_formatted !== null ? listing.price_formatted : "";
    var street = listing.address !== undefined && listing.address !== null && listing.address.street !== undefined && listing.address.street !== null ? listing.address.street : "";
    var city = listing.address !== undefined && listing.address !== null && listing.address.city !== undefined && listing.address.city !== null ? listing.address.city : "";
    var township = listing.township !== undefined && listing.township !== null && listing.township !== "" ? listing.township + ", " : "";
    var state = listing.address !== undefined && listing.address !== null && listing.address.state !== undefined && listing.address.state !== null ? listing.address.state : "";
    var zip = listing.address !== undefined && listing.address !== null && listing.address.zip !== undefined && listing.address.zip !== null ? listing.address.zip : "";
    var bed = listing.bedrooms !== undefined && listing.bedrooms !== null ? listing.bedrooms : "";
    var bath = listing.totalBaths !== undefined && listing.totalBaths !== null ? listing.totalBaths : "";
    var sqft = listing.sqFeet !== undefined && listing.sqFeet !== null ? listing.sqFeet : "";
    var canDisplayAddress = listing.permissions !== undefined && listing.permissions !== null ? listing.permissions.displayAddress : true;
    var listingLink = "/homes-for-sale/".concat(state.toUpperCase(), "/").concat(Slugify(city.toLowerCase()), "/").concat(Slugify(zip.toLowerCase()), "/").concat(Slugify(street), "/bid-").concat(blossorId);
    var listedWith = listing.office !== undefined && listing.office !== null ? listing.office.name : "";
    var mlsLogo = listing.mlsLogo !== undefined && listing.mlsLogo !== null ? listing.mlsLogo : false;
    return /*#__PURE__*/React.createElement(Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 12,
      sm: _getUIColumnSize("sm"),
      md: _getUIColumnSize("md"),
      lg: _getUIColumnSize("lg")
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.tileContainer
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(textOnImage ? classes.tilePhotoTextOnImageContainer : classes.tilePhotoContainer, " ").concat(textOnImage && columns === 1 ? classes.textOnImageSingleColumnHeightAdjust : "", " ").concat(!textOnImage && columns === 1 ? classes.textOffImageSingleColumnHeightAdjust : "")
    }, /*#__PURE__*/React.createElement("a", {
      href: listingLink,
      className: "".concat(classes.tilePhotoStyles, " ").concat(classes.imageIsLinkStyles),
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, /*#__PURE__*/React.createElement("img", {
      src: image || "https://photos.brivity.com/images/14/photo/1/3/9/9/7/2/1/5/0.jpg?v=0&width=844&height=540&mode=scale&quality=80",
      className: onHoverZoom ? classes.tilePhotoStylesZoomAnimation : classes.tilePhotoStylesNoAnimation,
      contentModeIgnore: "true",
      detailsModeIgnore: "true",
      alt: "A beautiful property in ".concat(township, " ").concat(city || "N/A", ", ").concat(state || "N/A")
    })), textOnImage ? /*#__PURE__*/React.createElement("div", {
      className: classes.textOnImageInfo
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 9
    }, /*#__PURE__*/React.createElement("h1", {
      className: "".concat(classes.priceStyles, " ").concat(classes.textOnImage),
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, price || "N/A"), canDisplayAddress ? /*#__PURE__*/React.createElement("h1", {
      className: "".concat(classes.addressStyles, " ").concat(classes.textOnImage),
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, street || "N/A", ", ", township, " ", city || "N/A", ", ", state || "N/A", " ", zip || "N/A") : null, !beds && !baths && !squareFt ? null : /*#__PURE__*/React.createElement("h1", {
      className: "".concat(classes.bedBathSqftStyles, " ").concat(classes.textOnImage),
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, beds ? "".concat(bed, " bd ") : "", " ", baths ? "".concat(beds ? "|" : "", " ").concat(bath, " ba ") : "", " ", squareFt ? "".concat(beds || baths ? "|" : "", " ").concat(sqft, " sqft") : ""), /*#__PURE__*/React.createElement("h1", {
      className: "".concat(classes.listedWithStyles, " ").concat(classes.textOnImage),
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: classes.listedWith
    }, "Listed With"), " ", listedWith, " ", mlsLogo ? /*#__PURE__*/React.createElement("img", {
      src: mlsLogo,
      className: classes.mlsLogoStyles
    }) : "")), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 3
    }, buttons ? /*#__PURE__*/React.createElement("a", {
      href: listingLink,
      style: {
        background: buttonBackground.styles.backgroundColor,
        borderColor: buttonBackground.styles.borderColor,
        borderRadius: buttonBackground.styles.borderRadius,
        borderWidth: buttonBackground.styles.borderWidth,
        borderStyle: buttonBackground.styles.borderStyle
      },
      contentModeIgnore: "true",
      detailsModeIgnore: "true",
      className: "".concat(classes.tileTextOnImageButtonStyles, " ").concat(siteColors ? "btn-primary" : "", " button-background")
    }, /*#__PURE__*/React.createElement("p", {
      className: classes.tileButtonText,
      style: {
        color: buttonText.styles.color
      },
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, "View")) : null))) : null), textOnImage ? null : /*#__PURE__*/React.createElement(Fragment, null, buttons ? /*#__PURE__*/React.createElement("a", {
      href: listingLink,
      style: {
        background: buttonBackground.styles.backgroundColor,
        borderColor: buttonBackground.styles.borderColor,
        borderRadius: buttonBackground.styles.borderRadius,
        borderWidth: buttonBackground.styles.borderWidth,
        borderStyle: buttonBackground.styles.borderStyle
      },
      contentModeIgnore: "true",
      detailsModeIgnore: "true",
      className: "".concat(classes.tileButtonStyles, " ").concat(columns === 1 ? classes.textOffImageButtonPosition : "", " ").concat(siteColors ? "btn-primary" : "", " button-background")
    }, /*#__PURE__*/React.createElement("p", {
      className: classes.tileButtonText,
      style: {
        color: buttonText.styles.color
      },
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, "View")) : null, /*#__PURE__*/React.createElement("h1", {
      className: "".concat(classes.priceStyles, " ").concat(!canDisplayAddress ? classes.extraPadding : "", " ").concat(classes.textBelowImage),
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, price || "N/A"), canDisplayAddress ? /*#__PURE__*/React.createElement("h1", {
      className: "".concat(classes.addressStyles, " ").concat(classes.textBelowImage),
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, street || "N/A", ", ", township, " ", city || "N/A", ", ", state || "N/A", " ", zip || "N/A") : null, !beds && !baths && !squareFt ? null : /*#__PURE__*/React.createElement("h1", {
      className: "".concat(classes.bedBathSqftStyles, " ").concat(classes.textBelowImage),
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, beds ? "".concat(bed, " bd ") : "", " ", baths ? "".concat(beds ? "|" : "", " ").concat(bath, " ba ") : "", " ", squareFt ? "".concat(beds || baths ? "|" : "", " ").concat(sqft, " sqft") : ""), /*#__PURE__*/React.createElement("h1", {
      className: "".concat(classes.listedWithStyles, " ").concat(classes.textBelowImage),
      contentModeIgnore: "true",
      detailsModeIgnore: "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: classes.listedWith
    }, "Listed With"), " ", listedWith, " ", mlsLogo ? /*#__PURE__*/React.createElement("img", {
      src: mlsLogo,
      className: classes.mlsLogoStyles
    }) : null)))));
  }), paginationControls.active ? /*#__PURE__*/React.createElement(FeaturedProperties1RPaginationControls, {
    prevPage: function prevPage() {
      return _prevPage();
    },
    nextPage: function nextPage() {
      return _nextPage();
    },
    numberOfPages: numberOfPages,
    paginatePosition: paginatePosition,
    paginationControls: paginationControls
  }) : null));
};
var FeaturedProperties1RLoader = function FeaturedProperties1RLoader() {
  var classes = featuredProperties1RUseStyles();
  var _MaterialUI3 = MaterialUI,
    Grid = _MaterialUI3.Grid,
    CircularProgress = _MaterialUI3.CircularProgress;
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: "".concat(classes.defaultPadding, " ").concat(classes.loaderContainer, " loader-container-FP-1R"),
    justify: "center",
    alignItems: "center",
    direction: "column"
  }, /*#__PURE__*/React.createElement(CircularProgress, {
    size: 50,
    thickness: 4,
    color: "inherit"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "".concat("".concat(classes.loadingText, " prmry-color"), " loading-text-FP-1R")
  }, "Loading Listings"));
};
var FeaturedProperties1RFirstPanel = function FeaturedProperties1RFirstPanel(_ref4) {
  var getUIColumnSize = _ref4.getUIColumnSize,
    firstTile = _ref4.firstTile,
    header = _ref4.header,
    description = _ref4.description,
    description2 = _ref4.description2,
    buttons = _ref4.buttons,
    siteColors = _ref4.siteColors,
    buttonBackground = _ref4.buttonBackground,
    buttonText = _ref4.buttonText;
  var classes = featuredProperties1RUseStyles();
  var _MaterialUI4 = MaterialUI,
    Grid = _MaterialUI4.Grid,
    Typography = _MaterialUI4.Typography;
  return /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sm: getUIColumnSize("sm"),
    md: getUIColumnSize("md"),
    lg: getUIColumnSize("lg")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.firstTileContainer, " first-tile-container-FP-1R")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.firstTileInnerContainer, " dv0 first-tile-inner-container-FP-1R"),
    style: firstTile.styles,
    react: "true",
    parent: ".featuredproperties-1R",
    element: "firstTile"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h2",
    className: "".concat(classes.headerStyles, " header-text-FP-1R"),
    style: header.styles,
    react: "true",
    parent: ".featuredproperties-1R",
    element: "header"
  }, header.content), /*#__PURE__*/React.createElement(Typography, {
    variant: "h2",
    className: "".concat(classes.descriptionStyles, " description-text-FP-1R"),
    style: description.styles,
    react: "true",
    parent: ".featuredproperties-1R",
    element: "description"
  }, description.content), /*#__PURE__*/React.createElement(Typography, {
    variant: "h2",
    className: "".concat(classes.descriptionStyles2, " description-text-2-FP-1R"),
    style: description2.styles,
    react: "true",
    parent: ".featuredproperties-1R",
    element: "description2"
  }, description2.content), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.firstTileButtonContainer, " first-tile-button-container-FP-1R")
  }, buttons ? /*#__PURE__*/React.createElement("a", {
    href: buttonBackground.link,
    className: "".concat("".concat(classes.buttonStyles, " ").concat(siteColors ? "btn-primary" : "", " button-background"), " button-background-FP-1R"),
    style: buttonBackground.styles,
    react: "true",
    parent: ".featuredproperties-1R",
    element: "buttonBackground",
    contentModeIgnore: "true",
    target: buttonBackground.blank ? "_blank" : ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "".concat(classes.buttonText, " linktext button-text-FP-1R"),
    style: buttonText.styles,
    react: "true",
    parent: ".featuredproperties-1R",
    element: "buttonText"
  }, buttonText.content)) : null))));
};
var FeaturedProperties1RPaginationControls = function FeaturedProperties1RPaginationControls(_ref5) {
  var prevPage = _ref5.prevPage,
    nextPage = _ref5.nextPage,
    numberOfPages = _ref5.numberOfPages,
    paginatePosition = _ref5.paginatePosition,
    paginationControls = _ref5.paginationControls;
  var classes = featuredProperties1RUseStyles();
  var _MaterialUI5 = MaterialUI,
    Grid = _MaterialUI5.Grid;
  return /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.paginateButtonsContainer, " paginate-button-container-FP-1R")
  }, /*#__PURE__*/React.createElement("span", {
    onClick: prevPage,
    className: "".concat(classes.paginateLeftArrow, " paginate-left-arrow-FP-1R"),
    style: {
      color: paginationControls.color
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-chevron-left"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "".concat(classes.paginatePosition, " paginate-position-FP-1R"),
    style: {
      color: paginationControls.color
    }
  }, numberOfPages !== 0 ? paginatePosition : 0), /*#__PURE__*/React.createElement("span", {
    className: "".concat(classes.paginateNumOfPages, " paginate-num-of-pages-FP-1R"),
    style: {
      color: paginationControls.color
    }
  }, "/ ", numberOfPages), /*#__PURE__*/React.createElement("span", {
    onClick: nextPage,
    className: "".concat(classes.paginateRightArrow, " paginate-right-arrow-FP-1R"),
    style: {
      color: paginationControls.color
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-chevron-right"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))));
};

/**
 * Renders the Solid Color Background
 */
var FeaturedProperties1RSolidBackground = function FeaturedProperties1RSolidBackground(props) {
  var classes = featuredProperties1RUseStyles();
  var solidStyles = {
    background: props.solidSettings.color
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.solidBackgroundContainer, " solid-background-container-FP-1R")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.solidStyles, " solid-background-FP-1R"),
    style: solidStyles
  }, /*#__PURE__*/React.createElement(FeaturedProperties1RContent, {
    siteColors: props.siteColors,
    rows: props.rows,
    columns: props.columns,
    firstPanel: props.firstPanel,
    buttons: props.buttons,
    fullscreen: props.fullscreen,
    textOnImage: props.textOnImage,
    onHoverZoom: props.onHoverZoom,
    beds: props.beds,
    baths: props.baths,
    squareFt: props.squareFt,
    mlsData: props.mlsData,
    firstTile: props.firstTile,
    header: props.header,
    description: props.description,
    description2: props.description2,
    buttonBackground: props.buttonBackground,
    buttonText: props.buttonText,
    paginationControls: props.paginationControls
  })));
};
var Slugify = function Slugify(text) {
  // Don't allow an empty string
  if (text == null || text == "") {
    text = "-";
  }
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

//This renders the FeaturedProperties-1R comp and virtual DOM inside the FeaturedProperties-1R div element, in our HTML.
$(document).ready(function () {
  if ($(".featuredproperties-1R").length > 1) {
    $(".featuredproperties-1R").each(function (_, el) {
      var elementId = $(el).attr("id");
      $("#".concat(elementId, " .FeaturedProperties-1R")).removeAttr("id").attr("id", $("#".concat(elementId, " .FeaturedProperties-1R")).attr("class"));
      $(el).removeAttr("id").attr("id", $(el).attr("class"));
    });
    $(".featuredproperties-1R").each(function (index, el) {
      var elementId = $(el).attr("id");
      var elementRootId = $("#".concat(elementId, " .FeaturedProperties-1R")).attr("id");
      $(el).removeAttr("id").attr("id", "".concat(elementId).concat(index));
      $("#".concat(elementId).concat(index, " .FeaturedProperties-1R")).removeAttr("id").attr("id", "".concat(elementRootId).concat(index));
      ReactDOM.render( /*#__PURE__*/React.createElement(FeaturedProperties1RContext, {
        element: elementId + index
      }), document.getElementById("FeaturedProperties-1R" + index));
    });
  } else {
    $(".featuredproperties-1R").each(function (_, el) {
      var elementId = $(el).attr("id");
      $("#".concat(elementId, " .FeaturedProperties-1R")).removeAttr("id").attr("id", $("#".concat(elementId, " .FeaturedProperties-1R")).attr("class"));
      $(el).removeAttr("id").attr("id", $(el).attr("class"));
    });
    ReactDOM.render( /*#__PURE__*/React.createElement(FeaturedProperties1RContext, {
      element: "featuredproperties-1R"
    }), document.getElementById("FeaturedProperties-1R"));
  }
});
