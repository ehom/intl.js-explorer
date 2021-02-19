var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var FormattedDatesPage = function FormattedDatesPage() {
  var locales = ["en-US", "en-GB", "fr-FR", "fr-CA", "fr-CH", "it-IT", "de-DE", "da-DK", "zh-CN", "zh-HK", "zh-TW", "ja-JP", "ko-KR", "es-ES", "es-MX", "pt-BR", "pt-PT"];

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dateFormats = _React$useState2[0],
      setDateFormats = _React$useState2[1];

  var handleApply = function handleApply(formats) {
    setDateFormats(formats);
  };

  var displayControlStyle = { backgroundColor: "AntiqueWhite" };

  return React.createElement(
    "div",
    { className: "container mt-3" },
    React.createElement(
      "div",
      { className: "jumbotron pt-4 pb-2" },
      React.createElement(Banner, { text: "Formatted Dates" })
    ),
    React.createElement(
      "div",
      { className: "container mb-2" },
      React.createElement(
        "div",
        { className: "pt-2 pb-2", style: displayControlStyle },
        React.createElement(FormatDisplayControl, { onApply: handleApply })
      )
    ),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(DateExamples, { locales: locales, formats: dateFormats })
    )
  );
};

var TableHeader = function TableHeader(_ref) {
  var labels = _ref.labels;

  var header = labels.map(function (label) {
    return React.createElement(
      "th",
      { className: "text-right" },
      label
    );
  });
  return React.createElement(
    React.Fragment,
    null,
    header
  );
};

var DateExamples = function DateExamples(_ref2) {
  var locales = _ref2.locales,
      formats = _ref2.formats;

  var today = Date.now();

  var labels = ["locale"].concat(_toConsumableArray(formats));

  var Columns = function Columns(_ref3) {
    var locale = _ref3.locale,
        formats = _ref3.formats;

    var content = formats.map(function (format) {
      return React.createElement(
        "td",
        null,
        React.createElement(FormattedDate, {
          locale: locale,
          value: today,
          dateStyle: format
        })
      );
    });

    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "td",
        null,
        locale
      ),
      content
    );
  };

  var output = locales.map(function (locale) {
    return React.createElement(
      "tr",
      null,
      React.createElement(Columns, { locale: locale, formats: formats })
    );
  });

  var style = { backgroundColor: "AntiqueWhite" };

  return React.createElement(
    "table",
    { className: "table table-hover table-bordered table-responsive", style: style },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(TableHeader, { labels: labels })
      )
    ),
    React.createElement(
      "tbody",
      null,
      output
    )
  );
};

var FormatDisplayControl = function FormatDisplayControl(_ref4) {
  var onApply = _ref4.onApply;

  var _React$useState3 = React.useState({
    short: false,
    medium: false,
    long: false,
    full: false
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      formats = _React$useState4[0],
      setFormats = _React$useState4[1];

  var handleApply = function handleApply() {
    var results = Object.keys(formats).filter(function (key) {
      return formats[key];
    });
    onApply(results);
  };

  var onClickFormat = function onClickFormat(event) {
    formats[event.target.name] = !formats[event.target.name];
    setFormats(formats);
  };

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "h4",
      null,
      "Date Formats:"
    ),
    React.createElement(
      "div",
      { className: "form-check form-check-inline mb-2" },
      React.createElement(
        "label",
        { className: "form-check-label mr-2" },
        React.createElement("input", {
          type: "checkbox",
          className: "form-check-input",
          onClick: onClickFormat,
          name: "short"
        }),
        "short"
      )
    ),
    React.createElement(
      "div",
      { className: "form-check form-check-inline border mb-2" },
      React.createElement(
        "label",
        { className: "form-check-label mr-2" },
        React.createElement("input", {
          type: "checkbox",
          className: "form-check-input",
          onClick: onClickFormat,
          name: "medium"
        }),
        "medium"
      )
    ),
    React.createElement(
      "div",
      { className: "form-check form-check-inline border mb-2" },
      React.createElement(
        "label",
        { className: "form-check-label mr-2" },
        React.createElement("input", {
          type: "checkbox",
          className: "form-check-input",
          onClick: onClickFormat,
          name: "long"
        }),
        "long"
      )
    ),
    React.createElement(
      "div",
      { className: "form-check form-check-inline border mb-2" },
      React.createElement(
        "label",
        { className: "form-check-label" },
        React.createElement("input", {
          type: "checkbox",
          className: "form-check-input",
          onClick: onClickFormat,
          name: "full"
        }),
        "full"
      )
    ),
    React.createElement(
      "button",
      { type: "submit", onClick: handleApply },
      "Apply"
    )
  );
};