const FormattedDatesPage = () => {
  const locales = [
    "en-US",
    "en-GB",
    "fr-FR",
    "fr-CA",
    "fr-CH",
    "it-IT",
    "de-DE",
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

  return (
    <div className="container mt-3">
      <div className="jumbotron pt-4 pb-2">
        <h4>Formatted Dates</h4>
      </div>
      <div className="container">
        <DateExamples locales={locales} />
      </div>
    </div>
  );
};

const DateExamples = ({ locales }) => {
  const today = Date.now();
  const formats = ["short", "medium", "full"];
  const labels = ["locale", ...formats];

  const header = labels.map((label) => {
    return <th>{label}</th>;
  });

  const Columns = ({ locale, formats }) => {
    const content = formats.map((format) => {
      return (
        <td>
          <FormattedDate
            locale={locale}
            value={today}
            formatType={format}
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
        <tr>{header}</tr>
      </thead>
      <tbody>{output}</tbody>
    </table>
  );
};
