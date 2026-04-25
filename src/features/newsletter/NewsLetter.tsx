function NewsLetter() {
  return (
    <div className="footer-newsletter">
      <h3 className="footer-title ">stay updated</h3>
      <div className="flex flex-col gap-4">
        <p className="footer-p">
          Subscribe to our newsletter for the latest AI insights and company
          news.
        </p>
        <div className="flex gap-2 items-center flex-wrap">
          <input type="text" placeholder="Email" className="footer-input" />
          <button className="footer-newsletter-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
