
<script>
  import { supabase } from '../../lib/supabase.js';

  let reserva = $state({
    nombre_cliente: '',
    telefono: '',
    correo: '',
    fecha_reserva: '',
    hora_reserva: '',
    cantidad_personas: 2,
    mensaje: ''
  });

  let mensaje = $state('');
  let enviando = $state(false);

  const hoy = new Date().toLocaleDateString('en-CA');

  async function enviarReserva(event) {
    event.preventDefault();
    if (enviando) return;

    enviando = true;
    mensaje = '';

    try {
      const { error } = await supabase.from('reservaciones').insert([{
        nombre_cliente: reserva.nombre_cliente,
        telefono: reserva.telefono,
        correo: reserva.correo,
        fecha_reserva: reserva.fecha_reserva,
        hora_reserva: reserva.hora_reserva,
        cantidad_personas: Number(reserva.cantidad_personas),
        mensaje: reserva.mensaje
      }]);

      if (error) throw error;

      mensaje = '¡Solicitud de reservación enviada correctamente!';

      reserva = {
        nombre_cliente: '',
        telefono: '',
        correo: '',
        fecha_reserva: '',
        hora_reserva: '',
        cantidad_personas: 2,
        mensaje: ''
      };
    } catch (error) {
      console.error(error);
      mensaje = 'No se pudo enviar la reservación. Inténtalo nuevamente.';
    } finally {
      enviando = false;
    }
  }
</script>

<svelte:head>
  <title>Reservaciones | Dulce Rincón</title>
</svelte:head>

<main>
  <nav class="navbar">
    <a href="/" class="logo">🍰 Dulce <b>Rincón</b></a>
    <div class="links">
      <a href="/">Inicio</a>
      <a href="/pedido">Pedidos</a>
    </div>
  </nav>

  <section class="content">
    <div class="intro">
      <span class="eyebrow">TE ESPERAMOS</span>
      <h1>Reserva tu <span>mesa.</span></h1>
      <p>Comparte un momento especial con tus amigos, familiares o personas favoritas.</p>
      <div class="decoration">☕</div>
      <a href="/" class="back">← Volver al inicio</a>
    </div>

    <form class="form-card" onsubmit={enviarReserva}>
      <h2>Formulario de reservación</h2>
      <p class="subtitle">Indícanos cuándo deseas visitarnos.</p>

      <label for="nombre">Nombre completo</label>
      <input id="nombre" bind:value={reserva.nombre_cliente} placeholder="Tu nombre" required />

      <label for="telefono">Número de teléfono</label>
      <input id="telefono" type="tel" bind:value={reserva.telefono} placeholder="809-000-0000" required />

      <label for="correo">Correo electrónico</label>
      <input id="correo" type="email" bind:value={reserva.correo} placeholder="correo@ejemplo.com" required />

      <div class="input-row">
        <div>
          <label for="fecha">Fecha</label>
          <input id="fecha" type="date" min={hoy} bind:value={reserva.fecha_reserva} required />
        </div>
        <div>
          <label for="hora">Hora</label>
          <input id="hora" type="time" bind:value={reserva.hora_reserva} required />
        </div>
      </div>

      <label for="personas">Cantidad de personas</label>
      <input id="personas" type="number" min="1" max="30" bind:value={reserva.cantidad_personas} required />

      <label for="mensaje">Mensaje adicional</label>
      <textarea id="mensaje" bind:value={reserva.mensaje} placeholder="¿Alguna solicitud especial?"></textarea>

      <button type="submit" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Solicitar reservación →'}
      </button>

      {#if mensaje}
        <p class="message" role="status">{mensaje}</p>
      {/if}
    </form>
  </section>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap');

  :global(*) { box-sizing: border-box; }
  :global(body) { margin: 0; background: #fffaf6; color: #392b2a; font-family: 'DM Sans', sans-serif; }
  a { text-decoration: none; color: inherit; }
  h1, h2 { font-family: 'Playfair Display', serif; }
  .navbar { display: flex; justify-content: space-between; align-items: center; padding: 20px max(25px, calc((100% - 1100px) / 2)); background: white; border-bottom: 1px solid #f2e6df; }
  .logo { font: 600 23px 'Playfair Display', serif; color: #5d3734; }
  .logo b { color: #c47d70; }
  .links { display: flex; gap: 25px; font-size: 13px; color: #806e68; }
  .content { max-width: 1050px; margin: auto; padding: 75px 25px; display: grid; grid-template-columns: 1fr 1fr; gap: 65px; align-items: center; }
  .eyebrow { color: #b77b6e; letter-spacing: 3px; font-size: 10px; font-weight: 800; }
  h1 { font-size: clamp(42px, 5vw, 58px); margin: 20px 0; }
  h1 span { color: #bd796c; }
  .intro p { color: #806e68; line-height: 1.9; font-size: 14px; }
  .decoration { font-size: 100px; margin: 30px 0; }
  .back { color: #a95f54; font-size: 13px; font-weight: 700; }
  .form-card { background: white; border: 1px solid #f0e2db; border-radius: 14px; padding: 32px; box-shadow: 0 15px 40px #704d3e0d; }
  .form-card h2 { font-size: 25px; margin: 0 0 7px; }
  .subtitle { color: #9b857c; font-size: 12px; margin-bottom: 25px; }
  label { display: block; font-size: 12px; font-weight: 700; margin: 15px 0 8px; }
  input, textarea { width: 100%; padding: 12px; border: 1px solid #e9dcd5; border-radius: 7px; background: #fffdfb; color: #493633; font: inherit; font-size: 13px; }
  input:focus, textarea:focus { outline: none; border-color: #bd796c; box-shadow: 0 0 0 3px #bd796c1c; }
  textarea { min-height: 85px; resize: vertical; }
  .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  button { width: 100%; padding: 15px; margin-top: 22px; border: 0; border-radius: 7px; background: #a95f54; color: white; font-weight: 700; cursor: pointer; }
  button:hover { background: #874a42; }
  button:disabled { opacity: .6; cursor: not-allowed; }
  .message { padding: 12px; background: #f7eee8; color: #875449; font-size: 12px; border-radius: 7px; }
  @media(max-width: 750px) { .content { grid-template-columns: 1fr; gap: 30px; padding: 45px 20px; } .intro { text-align: center; } .decoration { margin: 15px 0; } .form-card { padding: 25px 20px; } }
  @media(max-width: 480px) { .input-row { grid-template-columns: 1fr; gap: 0; } }
</style>
