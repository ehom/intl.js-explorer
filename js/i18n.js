var FormattedDate = function FormattedDate(_ref) {
  var locale = _ref.locale,
      dateStyle = _ref.dateStyle,
      value = _ref.value;

  var formatted = new Intl.DateTimeFormat(locale, {
    dateStyle: dateStyle
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