var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var supportedFunctions = Object.getOwnPropertyNames(window["Intl"]);

var isSupported = function isSupported(functionName) {
  return supportedFunctions.indexOf(functionName) > -1;
};

var IntljsSupportPage = function (_React$Component) {
  _inherits(IntljsSupportPage, _React$Component);

  function IntljsSupportPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IntljsSupportPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IntljsSupportPage.__proto__ || Object.getPrototypeOf(IntljsSupportPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      intljs: {},
      nodejs: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IntljsSupportPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://raw.githubusercontent.com/ehom/nodejs-intl/main/intljs.json").then(function (response) {
        return response.json();
      }).then(function (data) {
        console.debug("nodejs:", data);

        intljsInfo = {};
        nodejsInfo = {};

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data["Intl.js"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var name = _step.value;

            intljsInfo[name] = { browser: false, nodejs: true };
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

        nodejsInfo["version"] = data["Node.js"].version;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = Object.keys(intljsInfo)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            intljsInfo[key].browser = isSupported(key);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        console.debug("updated: ", intljsInfo);

        _this2.setState({
          intljs: intljsInfo,
          nodejs: nodejsInfo
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var style = { backgroundColor: "AntiqueWhite" };

      return React.createElement(
        "div",
        { className: "mt-3" },
        React.createElement(
          "div",
          { className: "jumbotron pt-4 pb-2" },
          React.createElement(
            "h4",
            null,
            "This browser"
          ),
          React.createElement(
            "div",
            { className: "mb-1" },
            React.createElement(UILanguages, null),
            React.createElement(BrowserInfo, null)
          )
        ),
        React.createElement(
          "div",
          { className: "container", style: style },
          React.createElement(IntlJsSupport, { data: this.state.intljs })
        ),
        React.createElement("hr", null),
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(NodejsInfo, { version: this.state.nodejs.version })
        )
      );
    }
  }]);

  return IntljsSupportPage;
}(React.Component);

;

function FunctionLink(props) {
  var URL = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/" + props.name;
  var title = "Link to MDN doc on Intl." + props.name;
  return React.createElement(
    "a",
    { href: URL, target: "_blank", title: title },
    props.name
  );
}

function IntlJsSupport(_ref2) {
  var data = _ref2.data;

  var functionNames = Object.keys(data).sort();

  console.debug("functionNames:", functionNames);

  var tableRows = functionNames.map(function (key) {
    var CHECK_MARK = String.fromCharCode(0x2714);
    var browserSupport = data[key].browser ? CHECK_MARK : "";
    var nodejsSupport = data[key].nodejs ? CHECK_MARK : "";

    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        React.createElement(FunctionLink, { name: key })
      ),
      React.createElement(
        "td",
        { className: "text-center" },
        browserSupport
      ),
      React.createElement(
        "td",
        { className: "text-center" },
        nodejsSupport
      )
    );
  });

  return React.createElement(
    "table",
    { className: "table table-md table-hover" },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "th",
        null,
        "Intl Object"
      ),
      React.createElement(
        "th",
        { "class": "text-center" },
        "This browser"
      ),
      React.createElement(
        "th",
        { "class": "text-center" },
        "*Node.js"
      )
    ),
    React.createElement(
      "tbody",
      null,
      tableRows
    )
  );
}

function BrowserInfo() {
  var tokens = getTokens(navigator.userAgent);

  var pills = tokens.map(function (token) {
    return React.createElement(
      "span",
      { className: "badge badge-info mr-1" },
      token
    );
  });

  return React.createElement(
    React.Fragment,
    null,
    pills
  );
}

function NodejsInfo(_ref3) {
  var version = _ref3.version;

  return React.createElement(
    "p",
    null,
    React.createElement(
      "strong",
      null,
      "*"
    ),
    "Node.js version: ",
    version
  );
}

function getTokens(s) {
  var isLeftParen = function isLeftParen(c) {
    return c === '(';
  };
  var RIGHT_PAREN = ')';
  var tokens = [];
  var endIndex = s.length - 1;

  for (var position = 0; position < s.length; position++) {
    var curChar = s[position];
    if (curChar.match(/[a-z]/i)) {
      var startIndex = position;
      var index = s.indexOf(' ', startIndex);
      if (index === -1) {
        tokens.push(s.slice(startIndex));
        break;
      } else {
        tokens.push(s.slice(startIndex, index));
        position = index;
      }
    } else if (isLeftParen(curChar)) {
      var _startIndex = position;
      // Assumption: 
      // String is well-formed, implying there is always a right paren.
      var _index = s.indexOf(RIGHT_PAREN, _startIndex);
      tokens.push(s.slice(_startIndex, _index + 1));
      position = _index + 1;
    }
  }
  return tokens;
}

function UILanguages() {
  // const locales = Intl.getCanonicalLocales(navigator.languages);
  var locale = Intl.getCanonicalLocales(navigator.language);

  return React.createElement(
    "span",
    { className: "badge badge-pill badge-primary mr-2" },
    locale
  );
};