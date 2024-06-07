import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <a target="_blank" href="https://www.imdb.com/conditions">
            <li className="menuItem">Terms Of Use</li>
          </a>
          <a target="_blank" href="https://www.imdb.com/privacy">
            <li className="menuItem">Privacy-Policy</li>
          </a>

          <a target="_blank" href="https://m.imdb.com/news/top/">
            <li className="menuItem">Blog</li>
          </a>
          <a
            target="_blank"
            href="https://help.imdb.com/article/imdb/track-movies-tv/watchlist-faq/G9PA556494DM8YBA?ref_=helpart_nav_3#"
          >
            <li className="menuItem">FAQ</li>
          </a>
        </ul>
        <div className="infoText">
          Welcome to <b>Moviepedia</b>, your ultimate movie encyclopedia!
          Discover millions of movies with detailed information on cast, crew,
          plot, release dates, and reviews. Whether you're a casual viewer or a
          cinephile, Moviepedia is your go-to source for everything cinema.
          Explore and enjoy the world of movies like never before!.
        </div>
        <div className="socialIcons">
          <a
            target="_blank"
            href="https://www.facebook.com/mrityunjaymkg/?_rdr"
          >
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a target="_blank" href="https://www.instagram.com/mjgupta0/">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mjgupta91/">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mjgupta91/">
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
          <a target="_blank" href="https://github.com/Mj9135">
            <span className="icon">
              <FaGithub />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
