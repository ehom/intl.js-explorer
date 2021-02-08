var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var FormattedDate = function FormattedDate(_ref) {
  var locale = _ref.locale,
      dateStyle = _ref.dateStyle,
      value = _ref.value;

  var _locale$split = locale.split("-"),
      _locale$split2 = _slicedToArray(_locale$split, 2),
      language = _locale$split2[0],
      country = _locale$split2[1];

  var zones = moment.tz.zonesForCountry(country);
  // console.debug("zones:", zones);

  var timezoneOffset = new Date(value).getTimezoneOffset() / 60;
  var timezone = undefined;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = zones[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var zone = _step.value;

      var offset = moment.tz.zone(zone).utcOffset(value) / 60;
      console.debug("offset:", offset);
      console.debug("timezoneOffset:", timezoneOffset);
      if (offset === timezoneOffset) {
        timezone = zone;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (timezone === undefined) {
    timezone = zones[0];
  }

  var formatted = new Intl.DateTimeFormat(locale, {
    dateStyle: dateStyle,
    timeStyle: dateStyle,
    timeZone: timezone
  }).format(value);

  return React.createElement(
    React.Fragment,
    null,
    formatted
  );
};

var FormattedNumber = function FormattedNumber(_ref2) {
  var locale = _ref2.locale,
      value = _ref2.value,
      style = _ref2.style,
      unit = _ref2.unit,
      unitDisplay = _ref2.unitDisplay,
      currency = _ref2.currency,
      currencyDisplay = _ref2.currencyDisplay,
      notation = _ref2.notation;

  var options = {
    style: style,
    unit: unit,
    unitDisplay: unitDisplay,
    currency: currency,
    currencyDisplay: currencyDisplay
  };
  var formatted = new Intl.NumberFormat(locale, options).format(value);

  return React.createElement(
    React.Fragment,
    null,
    formatted
  );
};

FormattedNumber.defaultProps = {
  currency: "USD",
  currencyDisplay: "symbol",
  notation: "standard",
  unitDisplay: "long"
};