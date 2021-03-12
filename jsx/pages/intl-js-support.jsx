const supportedFunctions = Object.getOwnPropertyNames(window["Intl"]);

const isSupported = (functionName) => {
  return supportedFunctions.indexOf(functionName) > -1;
};

class IntljsSupportPage extends React.Component {
  state = {
    intljs: {},
    nodejs: {}
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/ehom/nodejs-intl/main/intljs.json")
    .then((response) => response.json())
    .then((data) => {
      console.debug("nodejs:", data);

      intljsInfo = {};
      nodejsInfo = {};

      for (const name of data["Intl.js"]) {
        intljsInfo[name] = { browser: false, nodejs: true };
      }

      nodejsInfo["version"] = data["Node.js"].version;
      for (const key of Object.keys(intljsInfo)) {
        intljsInfo[key].browser = isSupported(key);
      }

      console.debug("updated: ", intljsInfo);

      this.setState({
        intljs: intljsInfo,
        nodejs: nodejsInfo
      });
    });
  }

  render() {
    const style = { backgroundColor: "AntiqueWhite" };
    const fontSize = { fontSize: "14pt" };

    return (
      <div className="mt-3">
        <div className="jumbotron pt-4 pb-3">
          <h4>This browser</h4>
          <div style={fontSize}>
            <UILanguages />
            <BrowserInfo />
          </div>
        </div>

        <div className="container" style={style}>
          <IntlJsSupport data={this.state.intljs} />
        </div>
        <hr />
        <div className="container">
          <NodejsInfo version={this.state.nodejs.version} />
        </div>
      </div>
    );
  }
};

function FunctionLink(props) {
  const URL = `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/${props.name}`;
  const title = `Link to MDN doc on Intl.${props.name}`;
  return (
    <a href={URL} target="_blank" title={title}>
      {props.name}
    </a>
  );
}

function IntlJsSupport({ data }) {
  const functionNames = Object.keys(data).sort();

  console.debug("functionNames:", functionNames);

  const tableRows = functionNames.map((key) => {
    const CHECK_MARK = String.fromCharCode(0x2714);
    const browserSupport = data[key].browser ? CHECK_MARK : "";
    const nodejsSupport = data[key].nodejs ? CHECK_MARK : "";

    return (
      <tr>
        <td>
          <FunctionLink name={key} />
        </td>
        <td className="text-center">{browserSupport}</td>
        <td className="text-center">{nodejsSupport}</td>
      </tr>
    );
  });

  return (
    <table className="table table-sm table-hover">
      <thead>
        <th>Intl Object</th>
        <th class="text-center">This browser</th>
        <th class="text-center">*Node.js</th>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

function BrowserInfo() {
  let tokens = getTokens(navigator.userAgent);

  const pills = tokens.map(token => {
    return <span className="badge badge-secondary mr-1">{token}</span>;
  });
  
  return (
    <React.Fragment>{pills}</React.Fragment>
  );
}

function NodejsInfo({ version }) {
  return (
    <p>
      <strong>*</strong>
      Node.js version: {version}
    </p>
  );
}

function getTokens(s) {
  const isLeftParen = (c) => c === '(';
  const RIGHT_PAREN = ')';
  let tokens = [];
  let endIndex = s.length - 1;

  for (let position = 0; position < s.length; position++) {
    const curChar = s[position];
    if (curChar.match(/[a-z]/i)) {
      const startIndex = position;
      let index = s.indexOf(' ', startIndex);
      if (index === -1) {
        tokens.push(s.slice(startIndex));
        break;
      } else {
        tokens.push(s.slice(startIndex, index));
        position = index;
      }
    } else if (isLeftParen(curChar)) {
      const startIndex = position;
      // Assumption: 
      // String is well-formed, implying there is always a right paren.
      let index = s.indexOf(RIGHT_PAREN, startIndex);
      tokens.push(s.slice(startIndex, index + 1));
      position = index + 1;
    }
  }
  return tokens;
}

function UILanguages() {
  // const locales = Intl.getCanonicalLocales(navigator.languages);
  const locale = Intl.getCanonicalLocales(navigator.language);

  return <span className="badge badge-pill badge-primary mr-2">{locale}</span>;
};
