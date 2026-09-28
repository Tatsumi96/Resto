import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>RÉSTO</div>
        <div className={styles.navLinks}>
          <a href="#accueil" className={styles.navLink}>Accueil</a>
          <a href="#apropos" className={styles.navLink}>À Propos</a>
          <a href="#menu" className={styles.navLink}>Menu</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
        <button className={styles.reserveBtn}>Réserver</button>
      </nav>

      <section id="accueil" className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop"
            alt="Table élégante de restaurant"
            fill
            className={styles.heroImage}
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContent} animate-fade-in`}>
          <h1 className={styles.heroTitle}>L'Art de la Table</h1>
          <p className={`${styles.heroSubtitle} delay-1 animate-fade-in`}>
            Une expérience gastronomique inoubliable au cœur de la ville
          </p>
          <a href="#menu" className={`${styles.heroBtn} delay-2 animate-fade-in`}>
            Découvrir le Menu
          </a>
        </div>
      </section>

      <section id="apropos" className={`${styles.about} section-padding`}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop"
              alt="Chef préparant un plat"
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.aboutContent}>
            <span className={styles.aboutSubtitle}>Notre Philosophie</span>
            <h2 className={styles.aboutTitle}>L'Élégance dans chaque assiette</h2>
            <p className={styles.aboutText}>
              Chez Résto, nous croyons que la gastronomie est un art qui sollicite tous les sens. Notre chef étoilé sélectionne rigoureusement les meilleurs produits locaux et de saison pour créer des mets d'exception.
            </p>
            <p className={styles.aboutText}>
              Laissez-vous transporter par une symphonie de saveurs dans un cadre où le luxe se marie à la convivialité.
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className={`${styles.menu} section-padding`}>
        <div className={styles.menuHeader}>
          <span className={styles.menuSubtitle}>Sélection du Chef</span>
          <h2 className={styles.menuTitle}>Notre Menu Signature</h2>
        </div>
        <div className={styles.menuGrid}>
          <div className={styles.menuCard}>
            <div className={styles.menuCardImageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
                alt="Filet de Bœuf"
                fill
                className={styles.menuCardImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className={styles.menuCardContent}>
              <h3 className={styles.menuCardTitle}>Filet de Bœuf Rossini</h3>
              <p className={styles.menuCardDesc}>Foie gras poêlé, truffe noire et sauce Périgueux</p>
              <div className={styles.menuCardPrice}>48€</div>
            </div>
          </div>
          <div className={styles.menuCard}>
            <div className={styles.menuCardImageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop"
                alt="Noix de Saint-Jacques"
                fill
                className={styles.menuCardImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className={styles.menuCardContent}>
              <h3 className={styles.menuCardTitle}>Saint-Jacques Rôties</h3>
              <p className={styles.menuCardDesc}>Purée de panais à la vanille et émulsion au champagne</p>
              <div className={styles.menuCardPrice}>36€</div>
            </div>
          </div>
          <div className={styles.menuCard}>
            <div className={styles.menuCardImageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop"
                alt="Dessert Chocolat"
                fill
                className={styles.menuCardImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className={styles.menuCardContent}>
              <h3 className={styles.menuCardTitle}>Sphère Chocolat Or</h3>
              <p className={styles.menuCardDesc}>Mousse grand cru, cœur coulant framboise et feuille d'or</p>
              <div className={styles.menuCardPrice}>18€</div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h4>RÉSTO</h4>
            <p>123 Avenue des Champs-Élysées</p>
            <p>75008 Paris, France</p>
          </div>
          <div className={styles.footerColumn}>
            <h4>Horaires</h4>
            <p>Lun - Sam : 19h00 - 23h30</p>
            <p>Dimanche : Fermé</p>
          </div>
          <div className={styles.footerColumn}>
            <h4>Contact</h4>
            <p>+33 1 23 45 67 89</p>
            <p>contact@resto-paris.fr</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          &copy; {new Date().getFullYear()} Résto. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}
