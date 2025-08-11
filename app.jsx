const { useEffect, useRef } = React;

function Header() {
  return (
    <header className="header container">
      <div className="brand">
        <div>
          <h1>Kamera Sigurie FULI</h1>
          <div style={{ color: '#9aa0a6', fontSize: 13 }}>
            Siguri për shtëpinë dhe biznesin
          </div>
        </div>
      </div>
      <nav className="nav">
        <a href="#services">Shërbimet</a>
        <a href="#gallery">Galeria</a>
        <a href="#contact">Kontakti</a>
        <a className="cta" href="#contact">Na kontakto</a>
      </nav>
    </header>
  );
}

function Hero() {
  const refHero = useRef();
  useEffect(() => {
    gsap.from(refHero.current, { duration: 1, y: 40, opacity: 0, ease: "power3.out" });
    gsap.from(".logo", { duration: 1, scale: 0.6, opacity: 0, delay: 0.2, ease: "back.out(1.7)" });
  }, []);
  return (
    <section className="hero container card" ref={refHero}>
      <div className="hero-left">
        <h2>
          Kamera & Sisteme Mbrojtjeje<br />
          Instalimi profesional në shtëpinë tuaj
        </h2>
        <p>
          Ofrojmë instalim të kamerave, konfigurim 24/7, akses nga telefoni dhe monitorim të besueshëm me pajisje me cilësi të lartë.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Merr ofertë falas
          </button>
          <button className="btn btn-ghost" onClick={() => alert('Na telefononi: 049 811 194')}>
            Na thirr
          </button>
        </div>
        <div style={{ marginTop: 12, color: '#9aa0a6', fontSize: 14 }}>
           Bllacë, Rr. Shaban Iballi, Suharekë • 049 811 194
        </div>
      </div>
      <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="assets/wlogo.png" alt="kamera" style={{ width: 220, height: 220, objectFit: 'contain' }} />
      </div>
    </section>
  );
}

function Services() {
  useEffect(() => {
    gsap.from(".feature", { duration: 0.8, y: 20, opacity: 0, stagger: 0.15, ease: "power2.out" });
  }, []);
  return (
    <section id="services" className="container">
      <h2 style={{ marginTop: 20 }}>Shërbimet tona</h2>
      <div className="features">
        <div className="feature card">
          <h3>Installim & Konfigurim</h3>
          <p>Instalim i shpejtë dhe konfigurim profesional i kamerave me sigurim të plotë.</p>
        </div>
        <div className="feature card">
          <h3>Monitorim 24/7</h3>
          <p>Shërbim monitorimi, alarmime dhe akses nga telefoni në çdo kohë.</p>
        </div>
        <div className="feature card">
          <h3>Garanci & Mbështetje</h3>
          <p>Garanci mbi pajisjet dhe mbështetje teknike të shpejtë.</p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  useEffect(() => {
    gsap.from(".gallery img", { duration: 0.8, scale: 0.95, opacity: 0, stagger: 0.12, ease: "power2.out" });
  }, []);
  return (
    <section id="gallery" className="container">
      <h2 style={{ marginTop: 20 }}>Galeria</h2>
      <div className="gallery">
        <img src="assets/photo1.png" alt="g1" />
        <img src="assets/photo2.png" alt="g2" />
        <img src="assets/photo3.png" alt="g3" />
      </div>
    </section>
  );
}

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs.sendForm(
      'service_6zw8b8a', // Service ID
      'template_5q5i96g', // Template ID
      form
    ).then(
      () => {
        alert('Mesazhi u dërgua me sukses!');
        form.reset();
      },
      (error) => {
        alert('Gabim gjatë dërgimit: ' + error.text);
      }
    );
  };

  return (
    <section id="contact" className="container contact">
      <div className="card form">
        <h2>Kontaktoni</h2>
        <form onSubmit={onSubmit}>
          <input name="name" placeholder="Emri juaj" required />
          <input name="phone" placeholder="Numri i telefonit" required />
          <textarea name="message" rows="5" placeholder="Mesazhi juaj" required />
          <button className="btn btn-primary" type="submit">Dërgo</button>
        </form>
      </div>
      <aside className="card">
        <h3>Na gjeni</h3>
        <p>Bllacë, Rr. Shaban Iballi, Suharekë</p>
        <p>049 811 194</p>
        <p>kamerasiguriefuli@gmail.com</p>
        <div style={{ marginTop: 12 }}>
          <strong>Orar:</strong><br />
          Hënë - Shën 09:00 - 18:00
        </div>
      </aside>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer container">
      © {new Date().getFullYear()} Kamera Sigurie FULI — Të drejtat e rezervuara.
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
