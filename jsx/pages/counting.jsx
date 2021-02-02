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
  
  let [item, setItem] = React.useState(objects[0]);
  let [lang, setLang] = React.useState('en');
  
  function onLanguageChanged(event) {
    // console.debug("App handleChange:", event.target.value);
    setLang(event.target.value);
  }
  
  function onItemChanged(event) {
    // console.debug("App handleChange:", event.target.value);
    setItem(event.target.value);
  }
  
  return (
    <React.Fragment>
      <div className="jumbotron pt-4 pb-4">
        <h3>Counting in different languages</h3>
        <div className="container mb-3">
          <p>What do you want to count?</p>
          <ItemSelector items={["apples", "moose", "mice"]} onChange={onItemChanged} />
        </div>
        <div className="container">
          <p>In what language?</p>
          <ItemSelector items={["en", "pl", "ja"]} onChange={onLanguageChanged} />
        </div>
      </div>
      <div className="container">
        <Example language={lang} object={item} />
      </div>
    </React.Fragment>
  );
};

const Example = ({language, object}) => {
  let rules = new Intl.PluralRules(language);
  let array = [...Array(11).keys()];
  let l = array.map((item) => {
    return (
      <a href="#" className="list-group-item list-group-item-action">
        {strings[language][object][rules.select(item)].replace("{{count}}", item)}
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

