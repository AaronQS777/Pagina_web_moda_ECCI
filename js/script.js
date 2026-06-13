
  function showSection(id) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link[data-section]').forEach(a => a.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll(`[data-section="${id}"]`).forEach(a => a.classList.add('active'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-link[data-section]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showSection(link.dataset.section);
      
      const nav = document.getElementById('mainNav');
      if (nav.classList.contains('show')) {
        bootstrap.Collapse.getInstance(nav)?.hide();
      }
    });
  });

  
  document.addEventListener('click', e => {
    if (!e.target.classList.contains('lang-tab')) return;
    const btn = e.target;
    const parent = btn.closest('.accordion-body, .card, .modal-body');
    if (!parent) return;
    parent.querySelectorAll('.lang-tab').forEach(b => b.classList.remove('active'));
    parent.querySelectorAll('.lang-body').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.target);
    if (target) target.classList.add('active');
  });

  
  const colorPsychology = {
    red: {
      name: "Rojo", color: "var(--red)",
      es: "El rojo transmite energía, pasión, urgencia y fuerza. En la moda se asocia con audacia y poder; en interfaces se usa para alertas, errores o llamadas a la acción urgentes.",
      en: "Red conveys energy, passion, urgency and strength. In fashion it's linked to boldness and power; in interfaces it's used for alerts, errors or urgent calls to action.",
      tags: ["Energía", "Pasión", "Urgencia", "Acción"],
      ui: "Botones de alerta, notificaciones de error, ofertas por tiempo limitado."
    },
    orange: {
      name: "Naranja", color: "var(--orange)",
      es: "El naranja combina la energía del rojo con la alegría del amarillo. Representa entusiasmo, creatividad y calidez, ideal para destacar elementos amigables y dinámicos.",
      en: "Orange combines red's energy with yellow's cheerfulness. It represents enthusiasm, creativity and warmth, ideal for highlighting friendly, dynamic elements.",
      tags: ["Entusiasmo", "Creatividad", "Calidez", "Dinamismo"],
      ui: "Botones secundarios, badges promocionales, elementos creativos o lúdicos."
    },
    yellow: {
      name: "Amarillo", color: "var(--yellow)",
      es: "El amarillo evoca optimismo, claridad mental y atención. Es el color más visible para el ojo humano, por lo que se utiliza para advertencias y para captar la atención rápidamente.",
      en: "Yellow evokes optimism, mental clarity and attention. It's the most visible color to the human eye, so it's used for warnings and to quickly catch attention.",
      tags: ["Optimismo", "Atención", "Claridad", "Advertencia"],
      ui: "Íconos de advertencia, resaltados, elementos que requieren atención inmediata."
    },
    green: {
      name: "Verde", color: "var(--green)",
      es: "El verde simboliza naturaleza, equilibrio, crecimiento y sostenibilidad. En software se asocia con éxito, confirmaciones y procesos completados correctamente.",
      en: "Green symbolizes nature, balance, growth and sustainability. In software it's associated with success, confirmations and successfully completed processes.",
      tags: ["Naturaleza", "Equilibrio", "Crecimiento", "Éxito"],
      ui: "Mensajes de éxito, indicadores de estado activo, elementos relacionados con sostenibilidad."
    },
    teal: {
      name: "Teal / Verde Azulado", color: "var(--teal)",
      es: "El teal mezcla la calma del azul con la frescura del verde. Comunica innovación, claridad y modernidad, muy usado en productos digitales y tecnológicos.",
      en: "Teal blends blue's calm with green's freshness. It communicates innovation, clarity and modernity, widely used in digital and tech products.",
      tags: ["Innovación", "Frescura", "Modernidad", "Claridad"],
      ui: "Acentos de marca tecnológica, enlaces interactivos, elementos informativos."
    },
    blue: {
      name: "Azul", color: "var(--blue)",
      es: "El azul transmite confianza, seguridad, calma y profesionalismo. Es el color más utilizado en interfaces corporativas y aplicaciones financieras o de salud.",
      en: "Blue conveys trust, security, calm and professionalism. It's the most used color in corporate interfaces and financial or healthcare applications.",
      tags: ["Confianza", "Seguridad", "Calma", "Profesionalismo"],
      ui: "Enlaces, botones primarios, encabezados corporativos, áreas informativas."
    },
    violet: {
      name: "Violeta / Púrpura", color: "var(--violet)",
      es: "El violeta combina la estabilidad del azul con la energía del rojo. Representa creatividad, lujo, espiritualidad e innovación, frecuente en marcas premium y tecnológicas.",
      en: "Violet combines blue's stability with red's energy. It represents creativity, luxury, spirituality and innovation, common in premium and tech brands.",
      tags: ["Creatividad", "Lujo", "Innovación", "Misterio"],
      ui: "Acentos de marca, elementos premium, secciones creativas o destacadas."
    },
    pink: {
      name: "Rosa", color: "var(--pink)",
      es: "El rosa se asocia con calidez, amabilidad, romanticismo y cercanía. En diseño digital aporta un tono juguetón y accesible, muy presente en moda y marcas dirigidas a públicos jóvenes.",
      en: "Pink is associated with warmth, kindness, romance and approachability. In digital design it adds a playful, friendly tone, common in fashion and youth-oriented brands.",
      tags: ["Calidez", "Cercanía", "Romanticismo", "Juventud"],
      ui: "Elementos lúdicos, acentos de marca femenina/joven, llamados de atención suaves."
    }
  };

  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const key = dot.dataset.color;
      const info = colorPsychology[key];
      if (!info) return;

      document.getElementById('cpSwatch').style.background = info.color;
      document.getElementById('cpTitle').textContent = info.name;
      document.getElementById('cpTextEs').textContent = info.es;
      document.getElementById('cpTextEn').textContent = info.en;
      document.getElementById('cpUiUse').textContent = info.ui;

      const tagsHtml = info.tags.map(t =>
        `<span class="badge" style="background:${info.color}1A; color:${info.color};">${t}</span>`
      ).join('');
      document.getElementById('cpTags').innerHTML = tagsHtml;

      const closeBtn = document.getElementById('cpCloseBtn');
      closeBtn.style.background = info.color;

      
      const modalBody = document.querySelector('#colorPsychModal .modal-body');
      modalBody.querySelectorAll('.lang-tab').forEach(b => b.classList.remove('active'));
      modalBody.querySelectorAll('.lang-body').forEach(b => b.classList.remove('active'));
      modalBody.querySelector('[data-target="cp-es"]').classList.add('active');
      document.getElementById('cp-es').classList.add('active');

      const modal = new bootstrap.Modal(document.getElementById('colorPsychModal'));
      modal.show();
    });
  });

  
  document.addEventListener('click', e => {
    if (!e.target.classList.contains('zoomable')) return;
    document.getElementById('lightboxImg').src = e.target.src;
    document.getElementById('lightboxImg').alt = e.target.alt;
    new bootstrap.Modal(document.getElementById('imgLightbox')).show();
  });

  
  const glossaryData = [
    { en: "Color Theory",         es: "Teoría del Color",      def: "Estudio de cómo los colores interactúan entre sí y generan percepciones visuales." },
    { en: "Pantone",              es: "Pantone",               def: "Sistema estandarizado de identificación y reproducción precisa del color." },
    { en: "Semiology",            es: "Semiología",            def: "Ciencia que estudia los signos, símbolos y su significado en la comunicación." },
    { en: "Color Palette",        es: "Paleta de Colores",     def: "Conjunto de colores seleccionados para crear una identidad visual coherente." },
    { en: "Colorimetry",          es: "Colorimetría",          def: "Ciencia que mide y cuantifica la percepción del color en el ojo humano." },
    { en: "Complementary Colors", es: "Colores Complementarios", def: "Colores opuestos en la rueda cromática que generan alto contraste visual." },
    { en: "Color Contrast",       es: "Contraste de Color",    def: "Diferencia de luminosidad entre colores; clave para accesibilidad web (WCAG)." },
    { en: "Design System",        es: "Sistema de Diseño",     def: "Conjunto de componentes y reglas visuales reutilizables para construir interfaces." },
    { en: "UI Design",            es: "Diseño de Interfaz",    def: "Diseño visual de las pantallas, botones y elementos con los que interactúa el usuario." },
    { en: "UX Design",            es: "Diseño de Experiencia", def: "Proceso de crear productos digitales centrados en la necesidad del usuario." },
    { en: "Visual Identity",      es: "Identidad Visual",      def: "Conjunto de elementos gráficos que representan y distinguen a una marca o producto." },
    { en: "Hue",                  es: "Matiz",                 def: "Atributo del color que lo diferencia de otros: rojo, verde, azul, etc." },
    { en: "Saturation",           es: "Saturación",            def: "Intensidad o pureza de un color; mayor saturación, color más vivo." },
    { en: "Accessibility",        es: "Accesibilidad",         def: "Diseño inclusivo que permite el uso de productos digitales por personas con diversas capacidades." },
    { en: "Color Token",          es: "Token de Color",        def: "Variable nombrada que almacena un valor de color en un sistema de diseño escalable." },
  ];

  function renderGlossary(q = '') {
    const f = glossaryData.filter(t =>
      t.en.toLowerCase().includes(q.toLowerCase()) ||
      t.es.toLowerCase().includes(q.toLowerCase()) ||
      t.def.toLowerCase().includes(q.toLowerCase())
    );
    document.getElementById('glossBody').innerHTML = f.map(t => `
      <tr>
        <td><span class="term-en">${t.en}</span></td>
        <td><span class="term-es">${t.es}</span></td>
        <td class="text-muted" style="font-size:.85rem;">${t.def}</td>
      </tr>`).join('');
    document.getElementById('glossCount').textContent =
      `Mostrando ${f.length} de ${glossaryData.length} términos`;
  }

  document.getElementById('glossSearch').addEventListener('input', e => renderGlossary(e.target.value));
  renderGlossary();