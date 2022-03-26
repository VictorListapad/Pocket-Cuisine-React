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
          <img className="footer-icons" src={SrcImg} alt="source page" />
          <span>Github page</span>
          <img className="footer-icons" src={GitImg} alt="github page" />
        </div>
      </footer>
    </>
  );
}

export { Footer };
