
<script>
  const productos = [
    { nombre: 'Pastel de chocolate', precio: 'RD$ 850', emoji: '🍫' },
    { nombre: 'Cheesecake', precio: 'RD$ 750', emoji: '🍰' },
    { nombre: 'Cupcakes', precio: 'RD$ 350', emoji: '🧁' },
    { nombre: 'Donas glaseadas', precio: 'RD$ 250', emoji: '🍩' },
    { nombre: 'Galletas artesanales', precio: 'RD$ 200', emoji: '🍪' },
    { nombre: 'Tres leches', precio: 'RD$ 600', emoji: '🥛' }
  ];
</script>

<svelte:head>
  <title>Dulce Rincón | Cafetería y Repostería</title>
  <meta name="description" content="Pasteles, postres y momentos especiales en Dulce Rincón." />
</svelte:head>

<header>
  <nav class="navbar">
    <a href="/" class="logo">🍰 Dulce <b>Rincón</b></a>

    <div class="nav-links">
      <a href="/">Inicio</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#productos">Productos</a>
      <a href="/pedido">Pedidos</a>
      <a href="/reservacion">Reservaciones</a>
    </div>

    <a href="/pedido" class="nav-button">Ordenar ahora</a>
  </nav>
</header>

<main>
  <section class="hero">
    <div class="hero-content">
      <span class="eyebrow">HECHO CON AMOR Y DEDICACIÓN</span>
      <h1>Un pequeño rincón de <span>grandes sabores.</span></h1>
      <p>
        Disfruta deliciosos postres, pasteles y bebidas preparados
        especialmente para endulzar tus mejores momentos.
      </p>

      <div class="hero-buttons">
        <a href="#productos" class="primary-button">Ver productos →</a>
        <a href="#nosotros" class="secondary-button">Conócenos</a>
      </div>

      <div class="hero-note">♡ Cada detalle tiene un toque especial.</div>
    </div>

    <div class="hero-image">
      <div class="image-circle">🍰</div>
      <div class="floating-card">
        <span>✨</span>
        <div>
          <strong>Momentos dulces</strong>
          <small>Preparados para ti</small>
        </div>
      </div>
    </div>
  </section>

  <section class="features">
    <div><span>🍓</span><strong>Ingredientes frescos</strong><small>Calidad en cada preparación</small></div>
    <div><span>🎂</span><strong>Hecho artesanalmente</strong><small>Con amor y dedicación</small></div>
    <div><span>☕</span><strong>Ambiente acogedor</strong><small>Un lugar para compartir</small></div>
  </section>

  <section class="about section" id="nosotros">
    <div class="section-heading">
      <span class="eyebrow">NUESTRA HISTORIA</span>
      <h2>Más que una cafetería, <span>un lugar especial.</span></h2>
      <p>
        En Dulce Rincón creemos que los mejores momentos se disfrutan
        con algo delicioso. Trabajamos para ofrecerte productos frescos,
        un servicio agradable y una experiencia inolvidable.
      </p>
    </div>
  </section>

  <section class="products section" id="productos">
    <div class="section-heading">
      <span class="eyebrow">NUESTRO MENÚ</span>
      <h2>Pequeños placeres, <span>grandes sonrisas.</span></h2>
      <p>Descubre algunas de nuestras opciones favoritas.</p>
    </div>

    <div class="product-grid">
      {#each productos as producto, i}
        <article class="product-card">
          <div class="product-emoji">{producto.emoji}</div>
          <span class="product-number">0{i + 1}</span>
          <h3>{producto.nombre}</h3>
          <p>Una deliciosa opción preparada con ingredientes seleccionados.</p>
          <strong class="price">{producto.precio}</strong>
          <a href="/pedido?producto={encodeURIComponent(producto.nombre)}" class="product-link">
            Pedir este producto →
          </a>
        </article>
      {/each}
    </div>
  </section>

  <section class="call-to-action">
    <span class="eyebrow">ESTAMOS LISTOS PARA ATENDERTE</span>
    <h2>¿Qué se te antoja hoy?</h2>
    <p>Haz tu pedido o reserva una mesa para disfrutar de Dulce Rincón.</p>
    <div class="hero-buttons">
      <a href="/pedido" class="primary-button">Realizar pedido →</a>
      <a href="/reservacion" class="secondary-button">Reservar una mesa</a>
    </div>
  </section>

  <section class="closing">
    <span>♡</span>
    <h2>La felicidad también se sirve en un plato.</h2>
    <p>Gracias por visitar Dulce Rincón.</p>
    <a href="/">Volver al inicio ↑</a>
  </section>
</main>

<footer>
  <a href="/" class="footer-logo">🍰 Dulce Rincón</a>
  <p>© 2026 Dulce Rincón. Todos los derechos reservados.</p>
  <p>Hecho con ♡ para endulzar tus momentos.</p>
</footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap');

  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-behavior: smooth; }
  :global(body) {
    margin: 0;
    font-family: 'DM Sans', sans-serif;
    color: #392b2a;
    background: #fffaf6;
  }
  a { text-decoration: none; color: inherit; }
  h1, h2, h3 { font-family: 'Playfair Display', serif; }

  header {
    background: #fffaf6;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #f2e6df;
  }
  .navbar {
    max-width: 1200px;
    margin: auto;
    padding: 18px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .logo, .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 25px;
    font-weight: 600;
    color: #5d3734;
  }
  .logo b { color: #c47d70; }
  .nav-links { display: flex; gap: 22px; font-size: 13px; color: #6f5c57; }
  .nav-links a:hover { color: #c47d70; }
  .nav-button, .primary-button {
    background: #a95f54;
    color: white;
    padding: 13px 21px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 700;
  }

  .hero {
    max-width: 1200px;
    min-height: 560px;
    margin: auto;
    padding: 75px 45px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
  }
  .eyebrow {
    color: #b77b6e;
    letter-spacing: 3px;
    font-size: 10px;
    font-weight: 800;
  }
  .hero h1 {
    font-size: clamp(43px, 5vw, 65px);
    line-height: 1.12;
    margin: 22px 0;
    max-width: 570px;
  }
  .hero h1 span, .section-heading h2 span { color: #bd796c; }
  .hero-content > p, .section-heading > p {
    color: #806e68;
    font-size: 15px;
    line-height: 1.9;
    max-width: 490px;
  }
  .hero-buttons { display: flex; gap: 13px; margin-top: 30px; align-items: center; flex-wrap: wrap; }
  .secondary-button { border: 1px solid #d9b9ae; padding: 12px 20px; border-radius: 7px; font-size: 13px; }
  .hero-note { margin-top: 38px; color: #9c8179; font-size: 12px; }
  .hero-image { position: relative; display: grid; place-items: center; min-height: 360px; }
  .image-circle {
    width: min(340px, 80vw);
    height: min(340px, 80vw);
    border-radius: 50%;
    background: #f2ded3;
    display: grid;
    place-items: center;
    font-size: 150px;
    box-shadow: 0 20px 60px #8d55451c;
  }
  .floating-card {
    position: absolute;
    bottom: 30px;
    left: 0;
    background: white;
    padding: 15px 20px;
    border-radius: 12px;
    box-shadow: 0 10px 35px #65433a18;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .floating-card > span { font-size: 25px; }
  .floating-card strong, .floating-card small { display: block; }
  .floating-card strong { font-size: 12px; }
  .floating-card small { color: #9a8179; font-size: 10px; margin-top: 4px; }

  .features {
    background: #f5e9e2;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 65px;
    padding: 28px 20px;
  }
  .features div { display: grid; grid-template-columns: 40px auto; align-items: center; }
  .features div > span { grid-row: span 2; font-size: 25px; }
  .features strong { font-size: 12px; }
  .features small { color: #947c73; font-size: 10px; margin-top: 4px; }

  .section { padding: 90px 30px; }
  .section-heading { text-align: center; max-width: 650px; margin: 0 auto 45px; }
  .section-heading h2 { font-size: clamp(32px, 4vw, 45px); margin: 15px 0; }
  .section-heading > p { margin: auto; }
  .about { background: white; text-align: center; }
  .products { background: #fffaf6; }
  .product-grid {
    max-width: 1100px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .product-card {
    background: white;
    border: 1px solid #f1e5de;
    border-radius: 13px;
    padding: 28px;
    transition: transform .2s, box-shadow .2s;
  }
  .product-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px #6a45351a; }
  .product-emoji {
    background: #f8eae3;
    height: 130px;
    border-radius: 9px;
    display: grid;
    place-items: center;
    font-size: 65px;
    margin-bottom: 22px;
  }
  .product-number { color: #c28b7d; font-size: 10px; letter-spacing: 2px; }
  .product-card h3 { font-size: 21px; margin: 9px 0; }
  .product-card p { color: #927e76; font-size: 12px; line-height: 1.8; min-height: 43px; }
  .price { color: #a95f54; display: block; margin: 18px 0; font-size: 17px; }
  .product-link { color: #a95f54; font-size: 12px; font-weight: 700; }

  .call-to-action { text-align: center; padding: 75px 20px; background: white; }
  .call-to-action h2 { font-size: 38px; margin: 15px 0; }
  .call-to-action p { color: #806e68; font-size: 14px; }
  .call-to-action .hero-buttons { justify-content: center; }

  .closing { text-align: center; padding: 75px 20px; background: #f3e3da; }
  .closing > span { color: #b7796b; font-size: 30px; }
  .closing h2 { font-size: clamp(27px, 4vw, 40px); margin: 14px 0; }
  .closing p { color: #8e756d; font-size: 13px; }
  .closing a { display: inline-block; margin-top: 20px; color: #a95f54; font-size: 12px; font-weight: 700; }
  footer { background: #382927; color: #f8eae3; text-align: center; padding: 35px 20px; }
  .footer-logo { color: white; }
  footer p { color: #cbb5ab; font-size: 11px; margin: 12px 0 0; }

  @media(max-width: 800px) {
    .navbar { flex-wrap: wrap; padding: 15px 20px; }
    .nav-links { order: 3; width: 100%; overflow-x: auto; gap: 20px; padding: 8px 0; }
    .hero { grid-template-columns: 1fr; padding: 55px 25px; text-align: center; gap: 25px; }
    .hero-content > p { margin: auto; }
    .hero-buttons { justify-content: center; }
    .hero-note { margin-top: 25px; }
    .hero-image { min-height: 300px; }
    .image-circle { width: 260px; height: 260px; font-size: 115px; }
    .floating-card { left: 5%; bottom: 5px; }
    .features { gap: 25px; justify-content: flex-start; }
    .product-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media(max-width: 520px) {
    .nav-links { font-size: 11px; }
    .product-grid { grid-template-columns: 1fr; }
    .section { padding: 65px 20px; }
    .features { display: grid; gap: 20px; padding-left: 30px; }
  }
</style>
