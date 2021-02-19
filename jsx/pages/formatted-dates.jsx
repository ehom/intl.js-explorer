const FormattedDatesPage = () => {
  const locales = [
    "en-US",
    "en-GB",
    "fr-FR",
    "fr-CA",
    "fr-CH",
    "it-IT",
    "de-DE",
    "da-DK",
    "zh-CN",
    "zh-HK",
    "zh-TW",
    "ja-JP",
    "ko-KR",
    "es-ES",
    "es-MX",
    "pt-BR",
    "pt-PT"
  ];

  const [dateFormats, setDateFormats] = React.useState([]);

  const handleApply = (formats) => {
    setDateFormats(formats);
  };

  const displayControlStyle = {backgroundColor: "AntiqueWhite"};

  return (
    <div className="container mt-3">
      <div className="jumbotron pt-4 pb-2">
        <Banner text="Formatted Dates" />
      </div>

      <div className="container mb-2">
        <div className="pt-2 pb-2" style={displayControlStyle}>
          <FormatDisplayControl onApply={handleApply} />
        </div>
      </div>

      <div className="container">
        <DateExamples locales={locales} formats={dateFormats} />
      </div>
    </div>
  );
};

const TableHeader = ({labels}) => {
  const header = labels.map((label) => {
    return <th className="text-right">{label}</th>;
  });
  return <React.Fragment>{header}</React.Fragment>;
};

const DateExamples = ({ locales, formats }) => {
  const today = Date.now();

  const labels = ["locale", ...formats];

  const Columns = ({ locale, formats }) => {
    const content = formats.map((format) => {
      return (
        <td>
          <FormattedDate
            locale={locale}
            value={today}
            dateStyle={format}
          />
        </td>
      );
    });

    return (
      <React.Fragment>
        <td>{locale}</td>
        {content}
      </React.Fragment>
    );
  };

  const output = locales.map((locale) => {
    return (
      <tr>
        <Columns locale={locale} formats={formats} />
      </tr>
    );
  });

  const style = { backgroundColor: "AntiqueWhite" };

  return (
    <table className="table table-hover table-bordered table-responsive" style={style}>
      <thead>
        <tr><TableHeader labels={labels} /></tr>
      </thead>
      <tbody>{output}</tbody>
    </table>
  );
};

const FormatDisplayControl = ({ onApply }) => {
  const [formats, setFormats] = React.useState({
    short: false,
    medium: false,
    long: false,
    full: false
  });

  const handleApply = () => {
    const results = Object.keys(formats).filter(key => formats[key]);
    onApply(results);
  };

  const onClickFormat = (event) => {
    formats[event.target.name] = !formats[event.target.name];
    setFormats(formats);
  };

  return (
    <div className="container">
      <h4>Date Formats:</h4>

      <div className="form-check form-check-inline mb-2">
        <label className="form-check-label mr-2">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={onClickFormat}
            name="short"
          />
          short
        </label>
      </div>

      <div className="form-check form-check-inline border mb-2">
        <label className="form-check-label mr-2">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={onClickFormat}
            name="medium"
          />
          medium
        </label>
      </div>

      <div className="form-check form-check-inline border mb-2">
        <label className="form-check-label mr-2">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={onClickFormat}
            name="long"
          />
          long
        </label>
      </div>

      <div className="form-check form-check-inline border mb-2">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={onClickFormat}
            name="full"
          />
          full
        </label>
      </div>
      <button type="submit" onClick={handleApply}>Apply</button>
    </div>
  );
};
