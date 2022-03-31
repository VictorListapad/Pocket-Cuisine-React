import GitImg from "../images/github-img.png";
import SrcImg from "../images/src-img.png";
function Footer() {
  return (
    <>
      <footer className="footer">
        <span id="copyright">
          &copy; Victor Listapad {new Date().getFullYear()}
        </span>
        <div className="src-icons">
          <span>Source code</span>
          <a
            href="https://github.com/VictorListapad/Pocket-Cuisine-React"
            target="_blank"
          >
            <img className="footer-icons" src={SrcImg} alt="source page" />
          </a>
          <span>Github page</span>
          <a href="https://github.com/VictorListapad" target="_blank">
            <img className="footer-icons" src={GitImg} alt="github page" />
          </a>
        </div>
      </footer>
    </>
  );
}

export { Footer };
