var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortingPage = function (_React$Component) {
  _inherits(SortingPage, _React$Component);

  function SortingPage(props) {
    _classCallCheck(this, SortingPage);

    var _this = _possibleConstructorReturn(this, (SortingPage.__proto__ || Object.getPrototypeOf(SortingPage)).call(this, props));

    _this.state = {
      input: "",
      language: _this.props.languages[0],
      result: ""
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(SortingPage, [{
    key: "handleSubmit",
    value: function handleSubmit(text, language) {
      console.debug("App: handle Submit", text, language);

      var result = text.split("\n").sort(Intl.Collator(language).compare).join("\n");

      this.setState({
        input: text,
        language: language,
        result: result
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          { className: "jumbotron pt-4 pb-2" },
          React.createElement(Banner, { text: "Intl.Collator demo" })
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-sm-6" },
            React.createElement(
              "div",
              { className: "container border border-light round pt-3 pb-3" },
              React.createElement(
                "div",
                { className: "mb-2" },
                "Input:"
              ),
              React.createElement(InputForm, {
                languages: this.props.languages,
                onSubmit: this.handleSubmit
              })
            )
          ),
          React.createElement(
            "div",
            { className: "col-sm-6" },
            React.createElement(
              "div",
              { className: "container border border-light round pt-3 pb-3" },
              React.createElement(
                "div",
                { className: "mb-2" },
                "Output:"
              ),
              React.createElement(OutputForm, { text: this.state.result })
            )
          )
        )
      );
    }
  }]);

  return SortingPage;
}(React.Component);

SortingPage.defaultProps = {
  languages: {
    "en-US": "English",
    fr: "French",
    de: "German",
    "zh-CN": "Chinese",
    "ja-JP": "Japanese",
    "ko-KR": "Korean",
    "pl-PL": "Polish",
    es: "Spanish",
    "sv-SE": "Swedish",
    "tr-TR": "Turkish"
  }
};

var LanguageSelector = function (_React$Component2) {
  _inherits(LanguageSelector, _React$Component2);

  function LanguageSelector(props) {
    _classCallCheck(this, LanguageSelector);

    var _this2 = _possibleConstructorReturn(this, (LanguageSelector.__proto__ || Object.getPrototypeOf(LanguageSelector)).call(this, props));

    _this2.handleSelect = _this2.handleSelect.bind(_this2);
    return _this2;
  }

  _createClass(LanguageSelector, [{
    key: "handleSelect",
    value: function handleSelect(event) {
      console.debug("handle lang select:", event.target.value);
      this.props.onLangSelect(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var options = Object.keys(this.props.languages).map(function (key) {
        return React.createElement(
          "option",
          { value: key },
          " ",
          _this3.props.languages[key],
          " (",
          key,
          ")"
        );
      });

      return React.createElement(
        "select",
        { className: "form-control", onChange: this.handleSelect },
        options
      );
    }
  }]);

  return LanguageSelector;
}(React.Component);

var InputForm = function (_React$Component3) {
  _inherits(InputForm, _React$Component3);

  function InputForm(props) {
    _classCallCheck(this, InputForm);

    var _this4 = _possibleConstructorReturn(this, (InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call(this, props));

    _this4.state = {
      textInput: "",
      language: "en-US"
    };

    _this4.handleChange = _this4.handleChange.bind(_this4);
    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    _this4.handleLanguage = _this4.handleLanguage.bind(_this4);
    return _this4;
  }

  _createClass(InputForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      document.getElementById("InputForm-Submit").disabled = event.target.value <= 0;

      this.setState({
        textInput: event.target.value
      });
    }
  }, {
    key: "handleLanguage",
    value: function handleLanguage(language) {
      this.setState({
        language: language
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      this.props.onSubmit(this.state.textInput, this.state.language);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "div",
          { className: "mb-2" },
          React.createElement("textarea", {
            className: "form-control",
            placeholder: "Enter a text item on each line, \r\nspecify a language and then click the Sort button",
            value: this.state.textInput,
            onChange: this.handleChange,
            rows: "6"
          })
        ),
        React.createElement(
          "div",
          { className: "mb-2" },
          React.createElement(LanguageSelector, {
            languages: this.props.languages,
            onLangSelect: this.handleLanguage
          })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "button",
            { id: "InputForm-Submit", type: "submit", disabled: true },
            "Sort"
          )
        )
      );
    }
  }]);

  return InputForm;
}(React.Component);

var Banner = function Banner(_ref) {
  var text = _ref.text;
  return React.createElement(
    "h4",
    null,
    text
  );
};

var OutputForm = function OutputForm(_ref2) {
  var text = _ref2.text;
  return React.createElement("textarea", { value: text, className: "form-control", rows: "8", readOnly: true });
};