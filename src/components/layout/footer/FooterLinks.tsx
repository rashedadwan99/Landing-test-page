import { Link } from "./types/link.type";

type IProps = {
  title: string;
  links: Link[];
};
function FooterLinks({ title, links }: IProps) {
  return (
    <div className="footer-link-list">
      <h3 className="footer-title">{title}</h3>
      {links.map((link) => {
        return (
          <a className="footer-link" key={link.text}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <span>{link.text}</span>
          </a>
        );
      })}
    </div>
  );
}

export default FooterLinks;
