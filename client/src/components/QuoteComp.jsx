import "../stylesheets/QuoteComp.css";

const QuoteComp = () => {
  const quote =
    '"Music produces a kind of pleasure which human nature cannot do without."';
  const author = "-Confucius, The Book of Rites";
  return (
    <div className="quote-comp">
      <div className="sub-quote-comp">
        <text className="quote-text">{quote}</text>
        <br />
        <text className="quote-text-auth">{author}</text>
      </div>
    </div>
  );
};

export default QuoteComp;
