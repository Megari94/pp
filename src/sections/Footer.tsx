import { siteConfig } from '../data/siteConfig'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__bottom">
        <p>© {year} Diseno y desarrollo: {siteConfig.name}.</p>
      </div>
    </footer>
  )
}
