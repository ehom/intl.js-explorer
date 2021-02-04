var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// TODO: Use i18next

var strings = {
  en: {
    "apples": {
      other: "{{count}} apples",
      one: "{{count}} apple"
    },
    "moose": {
      other: "{{count}} moose",
      one: "{{count}} moose"
    },
    "mice": {
      other: "{{count}} blind mice",
      one: "{{count}} blind mouse"
    }
  },
  pl: {
    "apples": {
      many: "{{count}} jabłek",
      one: "{{count}} jabłko",
      few: "{{count}} jabłka"
    },
    "moose": {
      many: "{{count}} łosi",
      one: "{{count}} łoś",
      few: "{{count}} łosie"
    },
    "mice": {
      many: "{{count}} blind mice",
      one: "{{count}} blind mouse",
      few: "{{count}} blind mice"
    }
  },
  ja: {
    "apples": {
      other: "リンゴの{{count}}個"
    },
    "moose": {
      other: "{{count}} moose"
    },
    "mice": {
      other: "{{count}} blind mice"
    }
  }
};

var CountingPage = function CountingPage() {
  var objects = ["apples", "moose", "mice"];

  var _React$useState = React.useState(objects[0]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      item = _React$useState2[0],
      setItem = _React$useState2[1];

  var _React$useState3 = React.useState('en'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      lang = _React$useState4[0],
      setLang = _React$useState4[1];

  function onLanguageChanged(event) {
    // console.debug("App handleChange:", event.target.value);
    setLang(event.target.value);
  }

  function onItemChanged(event) {
    // console.debug("App handleChange:", event.target.value);
    setItem(event.target.value);
  }

  var style = { backgroundColor: "AntiqueWhite" };
  return React.createElement(
    "div",
    { className: "mt-3" },
    React.createElement(
      "div",
      { className: "jumbotron pt-4 pb-4" },
      React.createElement(
        "h4",
        null,
        "Counting in different languages"
      ),
      React.createElement(
        "div",
        { className: "container mb-3" },
        React.createElement(
          "p",
          null,
          "What do you want to count?"
        ),
        React.createElement(ItemSelector, { items: ["apples", "moose", "mice"], onChange: onItemChanged })
      ),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "p",
          null,
          "In what language?"
        ),
        React.createElement(ItemSelector, { items: ["en", "pl", "ja"], onChange: onLanguageChanged })
      )
    ),
    React.createElement(
      "div",
      { className: "container", style: style },
      React.createElement(Example, { language: lang, object: item })
    )
  );
};

var Example = function Example(_ref) {
  var language = _ref.language,
      object = _ref.object;

  var rules = new Intl.PluralRules(language);
  var array = [].concat(_toConsumableArray(Array(11).keys()));
  var l = array.map(function (item) {
    var string = strings[language][object][rules.select(item)].replace("{{count}}", item);

    return React.createElement(
      "a",
      { href: "#", className: "list-group-item list-group-item-action" },
      string
    );
  });

  return React.createElement(
    "ul",
    { className: "list-group" },
    l
  );
};

Example.defaultProps = {
  language: 'en'
};

var ItemSelector = function ItemSelector(_ref2) {
  var items = _ref2.items,
      onChange = _ref2.onChange;

  var options = items.map(function (item) {
    return React.createElement(
      "option",
      { value: item },
      item
    );
  });

  return React.createElement(
    "select",
    { className: "form-control", onChange: onChange },
    options
  );
};