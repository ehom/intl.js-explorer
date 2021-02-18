// TODO: Use i18next

const strings = {
  en: {
    "apples": {
      other: "{{count}} apples",
      one: "{{count}} apple"
    },
    "moose": {
      other: "{{count}} moose",
      one: "{{count}} moose",
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

const CountingPage = () => {
  const objects = ["apples", "moose", "mice"];
  const languages = ["en", "pl", "ja"];

  let [defaultObject] = objects;
  let [defaultLanguage] = languages;
  let [item, setItem] = React.useState(defaultObject);
  let [lang, setLang] = React.useState(defaultLanguage);
  
  function onLanguageChanged(event) {
    // console.debug("App handleChange:", event.target.value);
    setLang(event.target.value);
  }
  
  function onItemChanged(event) {
    // console.debug("App handleChange:", event.target.value);
    setItem(event.target.value);
  }

  const style = { backgroundColor: "AntiqueWhite" };

  return (
    <div className="mt-3">
      <div className="jumbotron pt-4 pb-4">
        <h4>Counting in different languages</h4>
        <div className="container mb-2">
          <div>What do you want to count?</div>
          <div>
            <ItemSelector items={objects} onChange={onItemChanged} />
          </div>
        </div>
        <div className="container mb-2">
          <div>In what language?</div>
          <ItemSelector items={languages} onChange={onLanguageChanged} />
        </div>
      </div>
      <div className="container" style={style}>
        <Example language={lang} object={item} />
      </div>
    </div>
  );
};

const Example = ({language, object}) => {
  let rules = new Intl.PluralRules(language);
  let array = [...Array(11).keys()];
  let l = array.map((item) => {
    const string = strings[language][object][rules.select(item)].replace("{{count}}", item);

    return (
      <a href="#" className="list-group-item list-group-item-action">
        {string}
      </a>
    );
  });
  
  return (
    <ul className="list-group">{l}</ul>
  );
};

Example.defaultProps = {
  language: 'en'
};

const ItemSelector = ({items, onChange}) => {
  const options = items.map(item => <option value={item}>{item}</option>);
  
  return <select className="form-control" onChange={onChange}>{options}</select>;
};

