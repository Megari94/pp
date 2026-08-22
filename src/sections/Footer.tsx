import { siteConfig } from '../data/siteConfig'
import { navItems } from '../data/nav'
import { GithubMark } from '../components/icons/GithubMark'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{siteConfig.name}</p>
          <p className="footer__holsbi gradient-text">{siteConfig.brand}</p>
          <p className="footer__tagline">{siteConfig.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Navegacion del pie de pagina">
          {navItems.map((item) => (
            <a key={item.id} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github"
        >
          <GithubMark size={18} />
          GitHub
        </a>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {siteConfig.name}. Diseno y desarrollo: {siteConfig.name} — {siteConfig.brand}.
        </p>
      </div>
    </footer>
  )
}
