function Footer() {
    return <footer className="page-footer blue lighten-4">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/Sam130687/Shop">Repo</a>
      </div>
    </div>
  </footer>
}

export {Footer}