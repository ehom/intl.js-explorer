const Banner = ({ text }) => <h4>{text}</h4>;

const AboutThisApp = () => {
  const styling = { backgroundColor: "AntiqueWhite" };

  return (
    <div className="container mt-3">
      <div className="jumbotron pt-4 pb-2">
        <Banner text="About This App" />
      </div>
      <div className="container" style={styling}>
        <p>Run this app to check if the Intl.js functionality needed is available on web browsers your customers will be using.</p>
      </div>
    </div>
  );
};
