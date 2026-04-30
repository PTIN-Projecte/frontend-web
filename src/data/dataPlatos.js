// src/data/dataPlatos.js

export const categorias = ["Todos", "Entrantes", "Principales", "Postres", "Bebidas", "Vinos"];

export const ingredientesLista = [
  "Carne", "Pescado", "Marisco", "Verduras", "Legumbres",
  "Caza", "Arroz", "Pasta", "Huevo", "Lácteos", "Trufa", "Caviar"
];

export const alergenosLista = [
  "Gluten", "Crustáceos", "Huevos", "Pescado", "Cacahuetes",
  "Soja", "Lácteos", "Frutos de cáscara", "Apio", "Mostaza",
  "Granos de sésamo", "Dióxido de azufre y sulfitos", "Altramuces", "Moluscos"
];

export const platosDb = [

  // ─── ENTRANTES (16 originales + 18 nuevos = 34) ──────────────────────────

  {
    id: "e1", nombre: "Ostras Fine de Claire",
    descripcion: "Ostras con aire de lima, pepino y perlas de yuzu.",
    categoria: "Entrantes", ingredientes: ["Marisco"], alergenos: ["Moluscos"],
    etiqueta: { tipo: "nuevo", texto: "Fresco" },
    imagen: "https://images.unsplash.com/photo-1606731219412-3b1f7de7d4c9?w=500&h=500&fit=crop"
  },
  {
    id: "e2", nombre: "Carpaccio de Wagyu",
    descripcion: "Láminas de buey Wagyu, lascas de parmesano de 36 meses y aceite de trufa blanca.",
    categoria: "Entrantes", ingredientes: ["Carne", "Trufa", "Lácteos"], alergenos: ["Lácteos"],
    etiqueta: { tipo: "evento", texto: "Exclusivo" },
    imagen: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=500&h=500&fit=crop"
  },
  {
    id: "e3", nombre: "Vieiras con Crema de Coliflor",
    descripcion: "Vieiras selladas, emulsión de coliflor tostada y crujiente de jamón ibérico.",
    categoria: "Entrantes", ingredientes: ["Marisco", "Verduras"], alergenos: ["Moluscos", "Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=500&fit=crop"
  },
  {
    id: "e4", nombre: "Steak Tartar de Autor",
    descripcion: "Solomillo de angus cortado a cuchillo, yema de huevo de corral y tostadas de brioche.",
    categoria: "Entrantes", ingredientes: ["Carne", "Huevo"], alergenos: ["Huevos", "Gluten", "Mostaza"],
    etiqueta: { tipo: "menu", texto: "Clásico" },
    imagen: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=500&fit=crop"
  },
  {
    id: "e5", nombre: "Foie Gras Poêlé",
    descripcion: "Foie fresco a la plancha, reducción de higos y pan de especias.",
    categoria: "Entrantes", ingredientes: ["Carne"], alergenos: ["Gluten"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=500&h=500&fit=crop"
  },
  {
    id: "e6", nombre: "Tartar de Atún Bluefin",
    descripcion: "Atún rojo premium, aguacate, rábano picante y caviar cítrico.",
    categoria: "Entrantes", ingredientes: ["Pescado"], alergenos: ["Pescado", "Soja", "Granos de sésamo"],
    etiqueta: { tipo: "nuevo", texto: "Top" },
    imagen: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=500&h=500&fit=crop"
  },
  {
    id: "e7", nombre: "Huevo a Baja Temperatura",
    descripcion: "Huevo a 63º sobre cama de parmentier trufada y setas de temporada.",
    categoria: "Entrantes", ingredientes: ["Huevo", "Trufa", "Verduras"], alergenos: ["Huevos", "Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&h=500&fit=crop"
  },
  {
    id: "e8", nombre: "Gazpacho de Bogavante",
    descripcion: "Gazpacho suave con tropezones de bogavante azul y aceite de albahaca.",
    categoria: "Entrantes", ingredientes: ["Marisco", "Verduras"], alergenos: ["Crustáceos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop"
  },
  {
    id: "e9", nombre: "Burrata D.O.P. Puglia",
    descripcion: "Burrata cremosa, tomates confitados, piñones tostados y esencia de pesto.",
    categoria: "Entrantes", ingredientes: ["Lácteos", "Verduras"], alergenos: ["Lácteos", "Frutos de cáscara"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop"
  },
  {
    id: "e10", nombre: "Tataki de Salmón Label Rouge",
    descripcion: "Salmón ligeramente sellado, sésamo negro y emulsión de algas.",
    categoria: "Entrantes", ingredientes: ["Pescado"], alergenos: ["Pescado", "Granos de sésamo"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=500&h=500&fit=crop"
  },
  {
    id: "e11", nombre: "Croquetas de Carabinero",
    descripcion: "Croquetas melosas de carabinero con velo de su propio coral.",
    categoria: "Entrantes", ingredientes: ["Marisco", "Lácteos"], alergenos: ["Gluten", "Lácteos", "Crustáceos"],
    etiqueta: { tipo: "menu", texto: "Fetiche" },
    imagen: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=500&fit=crop"
  },
  {
    id: "e12", nombre: "Caviar Beluga (30g)",
    descripcion: "Servido sobre hielo con blinis artesanales y crema agria.",
    categoria: "Entrantes", ingredientes: ["Caviar"], alergenos: ["Pescado", "Gluten", "Lácteos"],
    etiqueta: { tipo: "evento", texto: "Gourmet" },
    imagen: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&h=500&fit=crop"
  },
  {
    id: "e13", nombre: "Ensalada de Trufa y Rúcula",
    descripcion: "Rúcula salvaje, láminas de trufa negra, parmesano curado y vinagreta de Módena.",
    categoria: "Entrantes", ingredientes: ["Verduras", "Trufa", "Lácteos"], alergenos: ["Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop"
  },
  {
    id: "e14", nombre: "Gamba Roja de Palamós",
    descripcion: "Gamba roja a la plancha, su propia cabeza en bisque y sal Maldon.",
    categoria: "Entrantes", ingredientes: ["Marisco"], alergenos: ["Crustáceos"],
    etiqueta: { tipo: "nuevo", texto: "Mar" },
    imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&h=500&fit=crop"
  },
  {
    id: "n1", nombre: "Tiradito de Corvina",
    descripcion: "Láminas finas de corvina salvaje con leche de tigre de ají amarillo y maíz chulpe.",
    categoria: "Entrantes", ingredientes: ["Pescado", "Verduras"], alergenos: ["Pescado"],
    etiqueta: { tipo: "nuevo", texto: "Nuevo" },
    imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=500&fit=crop"
  },
  {
    id: "n2", nombre: "Ensalada de Quinoa y Mango",
    descripcion: "Quinoa real, dados de mango fresco, aguacate, tomate cherry y vinagreta de lima.",
    categoria: "Entrantes", ingredientes: ["Verduras", "Legumbres"], alergenos: [],
    etiqueta: { tipo: "nuevo", texto: "Nuevo" },
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop"
  },
  // ─── ENTRANTES NUEVOS ────────────────────────────────────────────────────
  {
    id: "e15", nombre: "Cecina de León con Rúcula",
    descripcion: "Finas láminas de cecina curada, rúcula salvaje, parmesano y aceite de oliva virgen extra.",
    categoria: "Entrantes", ingredientes: ["Carne", "Verduras", "Lácteos"], alergenos: ["Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1627308595229-7830a5c18106?w=500&h=500&fit=crop"
  },
  {
    id: "e16", nombre: "Pulpo a la Brasa",
    descripcion: "Pulpo gallego braseado con crema de patata ahumada, paprika de La Vera y aceite de pimentón.",
    categoria: "Entrantes", ingredientes: ["Marisco", "Verduras"], alergenos: ["Moluscos"],
    etiqueta: { tipo: "menu", texto: "Fetiche" },
    imagen: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&h=500&fit=crop"
  },
  {
    id: "e17", nombre: "Gazpacho Clásico Andaluz",
    descripcion: "Tomate maduro, pimiento, pepino, ajo y pan viejo. Servido bien frío con guarnición.",
    categoria: "Entrantes", ingredientes: ["Verduras"], alergenos: ["Gluten"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=500&h=500&fit=crop"
  },
  {
    id: "e18", nombre: "Sopa de Cebolla Gratinada",
    descripcion: "Cebolla caramelizada, caldo de buey, croûtons y queso gruyère gratinado.",
    categoria: "Entrantes", ingredientes: ["Verduras", "Lácteos"], alergenos: ["Gluten", "Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop"
  },
  {
    id: "e19", nombre: "Brandada de Bacalao Gratinada",
    descripcion: "Brandada cremosa de bacalao Skrei, gratinada con ali-oli y pimientos del piquillo.",
    categoria: "Entrantes", ingredientes: ["Pescado", "Lácteos", "Huevo"], alergenos: ["Pescado", "Huevos", "Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop"
  },
  {
    id: "e20", nombre: "Jamón Ibérico de Bellota 5J",
    descripcion: "Cortado a cuchillo en sala, acompañado de pan con tomate y aceite de Siurana.",
    categoria: "Entrantes", ingredientes: ["Carne"], alergenos: [],
    etiqueta: { tipo: "evento", texto: "Premium" },
    imagen: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?w=500&h=500&fit=crop"
  },
  {
    id: "e21", nombre: "Ceviche de Lubina",
    descripcion: "Lubina salvaje marinada en cítricos, cebolla morada, cilantro y ají limo.",
    categoria: "Entrantes", ingredientes: ["Pescado", "Verduras"], alergenos: ["Pescado"],
    etiqueta: { tipo: "nuevo", texto: "Fresco" },
    imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=500&h=500&fit=crop"
  },
  {
    id: "e22", nombre: "Terrina de Foie y Anguila Ahumada",
    descripcion: "Terrina prensada de foie mi-cuit y anguila ahumada, gelée de manzana verde y brioche.",
    categoria: "Entrantes", ingredientes: ["Pescado", "Carne"], alergenos: ["Gluten", "Pescado"],
    etiqueta: { tipo: "evento", texto: "Chef" },
    imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=500&fit=crop"
  },
  {
    id: "e23", nombre: "Tosta de Anchoa del Cantábrico",
    descripcion: "Pan de masa madre tostado, mantequilla de Normandía y anchoas del Cantábrico en aceite.",
    categoria: "Entrantes", ingredientes: ["Pescado", "Lácteos"], alergenos: ["Gluten", "Pescado", "Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop"
  },
  {
    id: "e24", nombre: "Salmorejo Cordobés con Jamón",
    descripcion: "Crema fría de tomate y pan, guarnición de jamón ibérico picado y huevo duro.",
    categoria: "Entrantes", ingredientes: ["Verduras", "Carne", "Huevo"], alergenos: ["Gluten", "Huevos"],
    etiqueta: { tipo: "menu", texto: "Clásico" },
    imagen: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=500&fit=crop"
  },
  {
    id: "e25", nombre: "Crudo de Carabinero",
    descripcion: "Carabinero crudo aliñado con aceite de oliva, sal de escamas y limón confitado.",
    categoria: "Entrantes", ingredientes: ["Marisco"], alergenos: ["Crustáceos"],
    etiqueta: { tipo: "nuevo", texto: "Mar" },
    imagen: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=500&h=500&fit=crop"
  },
  {
    id: "e26", nombre: "Blinis con Salmón y Huevas",
    descripcion: "Blinis de trigo sarraceno, crema fresca, salmón ahumado y huevas de trucha.",
    categoria: "Entrantes", ingredientes: ["Pescado", "Lácteos", "Huevo"], alergenos: ["Gluten", "Pescado", "Lácteos", "Huevos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=500&fit=crop"
  },
  {
    id: "e27", nombre: "Espárragos Blancos de Navarra",
    descripcion: "Espárragos gruesos cocidos al momento, mayonesa de trufa y crujiente de alcaparra.",
    categoria: "Entrantes", ingredientes: ["Verduras", "Huevo", "Trufa"], alergenos: ["Huevos", "Mostaza"],
    etiqueta: { tipo: "nuevo", texto: "Temporada" },
    imagen: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&h=500&fit=crop"
  },
  {
    id: "e28", nombre: "Gyoza de Pato y Foie",
    descripcion: "Empanadillas japonesas rellenas de pato confitado y foie, salsa ponzu de cítricos.",
    categoria: "Entrantes", ingredientes: ["Carne"], alergenos: ["Gluten", "Soja", "Huevos"],
    etiqueta: { tipo: "nuevo", texto: "Fusión" },
    imagen: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&h=500&fit=crop"
  },
  {
    id: "e29", nombre: "Niguiri de Gamba Roja",
    descripcion: "Arroz de sushi avinagrado con gamba roja de Denia ligeramente flambeada.",
    categoria: "Entrantes", ingredientes: ["Arroz", "Marisco"], alergenos: ["Crustáceos", "Granos de sésamo", "Soja"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=500&h=500&fit=crop"
  },
  {
    id: "e30", nombre: "Pâté de Campaña",
    descripcion: "Pâté rústico de cerdo y pollo, pistachos, cornichons y pan de campo tostado.",
    categoria: "Entrantes", ingredientes: ["Carne"], alergenos: ["Gluten", "Frutos de cáscara"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=500&h=500&fit=crop"
  },
  {
    id: "e31", nombre: "Sopa de Miso con Tofu y Wakame",
    descripcion: "Caldo dashi, pasta de miso blanco, tofu sedoso y algas wakame.",
    categoria: "Entrantes", ingredientes: ["Verduras", "Legumbres"], alergenos: ["Soja"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop"
  },
  {
    id: "e32", nombre: "Alcachofas con Jamón y Foie",
    descripcion: "Corazones de alcachofa salteados con jamón ibérico y lascas de foie.",
    categoria: "Entrantes", ingredientes: ["Verduras", "Carne"], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1511357840105-748c28dc0c9e?w=500&h=500&fit=crop"
  },

  // ─── PRINCIPALES (22 originales + 4 nuevos + 22 nuevos = 48) ────────────

  {
    id: "m1", nombre: "Solomillo Rossini",
    descripcion: "Solomillo de ternera, foie gras, trufa negra y salsa Madeira.",
    categoria: "Principales", ingredientes: ["Carne", "Trufa"], alergenos: ["Gluten", "Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "menu", texto: "Estrella" },
    imagen: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&h=500&fit=crop"
  },
  {
    id: "m2", nombre: "Lubina en Sal de Hierbas",
    descripcion: "Lubina salvaje horneada en costra de sal marina y hierbas aromáticas.",
    categoria: "Principales", ingredientes: ["Pescado"], alergenos: ["Pescado"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=500&fit=crop"
  },
  {
    id: "m3", nombre: "Paletilla de Cordero Lechal",
    descripcion: "Cocinado 24 horas a baja temperatura con patatas fondant.",
    categoria: "Principales", ingredientes: ["Carne"], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1544025162-d76preaa6fae?w=500&h=500&fit=crop"
  },
  {
    id: "m4", nombre: "Risotto de Langosta",
    descripcion: "Arroz Acquerello, cola de langosta nacional y azafrán puro.",
    categoria: "Principales", ingredientes: ["Arroz", "Marisco"], alergenos: ["Crustáceos", "Lácteos"],
    etiqueta: { tipo: "nuevo", texto: "Recomendado" },
    imagen: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=500&fit=crop"
  },
  {
    id: "m5", nombre: "Bacalao al Pil-Pil",
    descripcion: "Lomo de bacalao premium con su pil-pil ligado y crujiente de ajos negros.",
    categoria: "Principales", ingredientes: ["Pescado"], alergenos: ["Pescado"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop"
  },
  {
    id: "m6", nombre: "Pichón de Bresse",
    descripcion: "Pechuga asada, muslo confitado y puré de castañas.",
    categoria: "Principales", ingredientes: ["Carne", "Caza"], alergenos: ["Frutos de cáscara"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1598514982901-21d6e14fc696?w=500&h=500&fit=crop"
  },
  {
    id: "m7", nombre: "Lomo de Ciervo",
    descripcion: "Ciervo de caza mayor, reducción de frutos rojos y aire de enebro.",
    categoria: "Principales", ingredientes: ["Carne", "Caza"], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=500&fit=crop"
  },
  {
    id: "m8", nombre: "Rodaballo Salvaje a la Brasa",
    descripcion: "A la brasa con emulsión de bilbaína y verduras de nuestra huerta.",
    categoria: "Principales", ingredientes: ["Pescado", "Verduras"], alergenos: ["Pescado"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=500&fit=crop"
  },
  {
    id: "m9", nombre: "Bogavante Thermidor",
    descripcion: "Bogavante gratinado con bechamel de mostaza, brandy y queso gruyère.",
    categoria: "Principales", ingredientes: ["Marisco", "Lácteos"], alergenos: ["Crustáceos", "Lácteos", "Mostaza"],
    etiqueta: { tipo: "evento", texto: "Gala" },
    imagen: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&h=500&fit=crop"
  },
  {
    id: "m10", nombre: "Ravioli de Rabo de Toro",
    descripcion: "Pasta fresca rellena de rabo estofado con espuma de foie.",
    categoria: "Principales", ingredientes: ["Pasta", "Carne"], alergenos: ["Gluten", "Huevos", "Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=500&h=500&fit=crop"
  },
  {
    id: "m11", nombre: "Turbante de Lenguado",
    descripcion: "Relleno de mousse de gambas con salsa holandesa.",
    categoria: "Principales", ingredientes: ["Pescado", "Marisco"], alergenos: ["Pescado", "Crustáceos", "Huevos", "Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=500&fit=crop"
  },
  {
    id: "m12", nombre: "Entrecot Black Angus 45 Días",
    descripcion: "Madurado 45 días, pimientos del cristal y patatas triple cocción.",
    categoria: "Principales", ingredientes: ["Carne"], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=500&h=500&fit=crop"
  },
  {
    id: "m13", nombre: "Arroz de Carabinero y Almejas",
    descripcion: "Arroz seco en llanda con intenso sabor a mar.",
    categoria: "Principales", ingredientes: ["Arroz", "Marisco"], alergenos: ["Crustáceos", "Moluscos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=500&fit=crop"
  },
  {
    id: "m14", nombre: "Cochinillo Segoviano",
    descripcion: "Piel crujiente, carne deshecha, chutney de manzana y pera.",
    categoria: "Principales", ingredientes: ["Carne"], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop"
  },
  {
    id: "m15", nombre: "Salmonete de Roca",
    descripcion: "Desespinado, con sus escamas crujientes y jugo de sus espinas.",
    categoria: "Principales", ingredientes: ["Pescado"], alergenos: ["Pescado"],
    etiqueta: { tipo: "nuevo", texto: "Técnica" },
    imagen: "https://images.unsplash.com/photo-1621871908119-295c8ce14ada?w=500&h=500&fit=crop"
  },
  {
    id: "m16", nombre: "Carrillera de Ternera al Oporto",
    descripcion: "Guisada a fuego lento, puré de boniato y chips de yuca.",
    categoria: "Principales", ingredientes: ["Carne"], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1544025162-d76preaa6fae?w=500&h=500&fit=crop"
  },
  {
    id: "m17", nombre: "Gnocchi de Trufa Blanca",
    descripcion: "Gnocchi artesanales, crema de pecorino y trufa blanca d'Alba.",
    categoria: "Principales", ingredientes: ["Pasta", "Trufa", "Lácteos"], alergenos: ["Gluten", "Lácteos"],
    etiqueta: { tipo: "nuevo", texto: "Temporada" },
    imagen: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=500&h=500&fit=crop"
  },
  {
    id: "m18", nombre: "Pato de Pekín Cal Blay",
    descripcion: "Magret de pato lacado con miel de flores y cinco especias chinas.",
    categoria: "Principales", ingredientes: ["Carne"], alergenos: ["Soja"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?w=500&h=500&fit=crop"
  },
  {
    id: "m19", nombre: "Chateaubriand (2 pax)",
    descripcion: "Centro de solomillo flambeado a la vista del cliente.",
    categoria: "Principales", ingredientes: ["Carne"], alergenos: ["Lácteos"],
    etiqueta: { tipo: "evento", texto: "Show" },
    imagen: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=500&fit=crop"
  },
  {
    id: "m20", nombre: "Codorniz Rellena",
    descripcion: "Rellena de frutos secos y foie, con salsa perigord.",
    categoria: "Principales", ingredientes: ["Carne", "Caza"], alergenos: ["Frutos de cáscara"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1574894709920-11b28be1e10a?w=500&h=500&fit=crop"
  },
  {
    id: "m21", nombre: "Merluza en Salsa Verde",
    descripcion: "Merluza de pincho, almejas, guisantes y salsa verde de perejil.",
    categoria: "Principales", ingredientes: ["Pescado", "Marisco"], alergenos: ["Pescado", "Moluscos"],
    etiqueta: { tipo: "menu", texto: "Clásico" },
    imagen: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=500&fit=crop"
  },
  {
    id: "m22", nombre: "Pappardelle al Ragù de Jabalí",
    descripcion: "Pasta artesana ancha con ragù de jabalí de caza, vino tinto y especias.",
    categoria: "Principales", ingredientes: ["Pasta", "Caza"], alergenos: ["Gluten", "Huevos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=500&fit=crop"
  },
  {
    id: "n3", nombre: "Canelones de Rustido con Bechamel Trufada",
    descripcion: "Receta tradicional catalana, carne asada envuelta en pasta fresca con suave bechamel de trufa.",
    categoria: "Principales", ingredientes: ["Carne", "Pasta", "Lácteos", "Trufa"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: { tipo: "nuevo", texto: "Nuevo" },
    imagen: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?w=500&h=500&fit=crop"
  },
  {
    id: "n4", nombre: "Pluma Ibérica de Bellota",
    descripcion: "Corte jugoso de cerdo ibérico a la brasa con puré de manzana asada y chalotas glaseadas.",
    categoria: "Principales", ingredientes: ["Carne", "Verduras"], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "evento", texto: "En otro evento" },
    imagen: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop"
  },
  // ─── PRINCIPALES NUEVOS ──────────────────────────────────────────────────
  {
    id: "m23", nombre: "Paella Valenciana Tradicional",
    descripcion: "Arroz D.O. Valencia, pollo, conejo, judía verde y garrofó, con socarrat perfecto.",
    categoria: "Principales", ingredientes: ["Arroz", "Carne", "Verduras"], alergenos: [],
    etiqueta: { tipo: "menu", texto: "Icono" },
    imagen: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=500&fit=crop"
  },
  {
    id: "m24", nombre: "Fideuà de Mariscos",
    descripcion: "Fideos finos con caldo de galera, cigalas, almejas y sepia, ali-oli aparte.",
    categoria: "Principales", ingredientes: ["Pasta", "Marisco"], alergenos: ["Gluten", "Crustáceos", "Moluscos", "Huevos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=500&fit=crop"
  },
  {
    id: "m25", nombre: "Wellington de Ternera",
    descripcion: "Solomillo envuelto en duxelles de setas y hojaldre dorado, salsa de vino tinto.",
    categoria: "Principales", ingredientes: ["Carne", "Verduras"], alergenos: ["Gluten", "Lácteos"],
    etiqueta: { tipo: "evento", texto: "Showstopper" },
    imagen: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&h=500&fit=crop"
  },
  {
    id: "m26", nombre: "Rape al Azafrán con Gambas",
    descripcion: "Cola de rape en salsa de azafrán y brandy con gambas al ajillo.",
    categoria: "Principales", ingredientes: ["Pescado", "Marisco"], alergenos: ["Pescado", "Crustáceos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=500&fit=crop"
  },
  {
    id: "m27", nombre: "Costillar de Cerdo Ibérico Lacado",
    descripcion: "Costillar confitado 8 horas, lacado con miel de acacia y glaseado de soja.",
    categoria: "Principales", ingredientes: ["Carne"], alergenos: ["Soja"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1544025162-d76preaa6fae?w=500&h=500&fit=crop"
  },
  {
    id: "m28", nombre: "Lentejas Beluga al Caviar",
    descripcion: "Lentejas beluga, crème fraîche, caviar de esturión y cebollino.",
    categoria: "Principales", ingredientes: ["Legumbres", "Caviar", "Lácteos"], alergenos: ["Lácteos", "Pescado"],
    etiqueta: { tipo: "nuevo", texto: "Alta Cocina" },
    imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop"
  },
  {
    id: "m29", nombre: "Carrillada de Ibérico con Garbanzos",
    descripcion: "Guiso tradicional de carrillada ibérica con garbanzos de Fuentesaúco y comino.",
    categoria: "Principales", ingredientes: ["Carne", "Legumbres"], alergenos: [],
    etiqueta: { tipo: "menu", texto: "Confort" },
    imagen: "https://images.unsplash.com/photo-1574894709920-11b28be1e10a?w=500&h=500&fit=crop"
  },
  {
    id: "m30", nombre: "Dorada a la Sal",
    descripcion: "Dorada fresca incrustada en sal marina gorda y hierbas, horneada a alta temperatura.",
    categoria: "Principales", ingredientes: ["Pescado"], alergenos: ["Pescado"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=500&fit=crop"
  },
  {
    id: "m31", nombre: "Txangurro al Gratén",
    descripcion: "Centollo del Cantábrico, relleno de su propia carne con tomate y brandy, gratinado.",
    categoria: "Principales", ingredientes: ["Marisco", "Verduras"], alergenos: ["Crustáceos"],
    etiqueta: { tipo: "evento", texto: "Mar" },
    imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&h=500&fit=crop"
  },
  {
    id: "m32", nombre: "Tagliatelle al Nero di Seppia",
    descripcion: "Pasta negra fresca con ragù de sepia, gambitas y bisque de marisco.",
    categoria: "Principales", ingredientes: ["Pasta", "Marisco"], alergenos: ["Gluten", "Huevos", "Moluscos", "Crustáceos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=500&fit=crop"
  },
  {
    id: "m33", nombre: "Magret de Pato con Cerezas",
    descripcion: "Magret a la plancha, salsa de cerezas de Jerte y puré de apionabo.",
    categoria: "Principales", ingredientes: ["Carne", "Verduras"], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?w=500&h=500&fit=crop"
  },
  {
    id: "m34", nombre: "Risotto de Setas Silvestres",
    descripcion: "Arroz Carnaroli, boletus, rebozuelos y aceite de seta de temporada.",
    categoria: "Principales", ingredientes: ["Arroz", "Verduras", "Lácteos"], alergenos: ["Lácteos"],
    etiqueta: { tipo: "nuevo", texto: "Bosque" },
    imagen: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=500&fit=crop"
  },
  {
    id: "m35", nombre: "Confit de Pato con Lentejas",
    descripcion: "Muslo de pato confitado clásico, lentejas verdes de Puy y mostaza antigua.",
    categoria: "Principales", ingredientes: ["Carne", "Legumbres"], alergenos: ["Mostaza"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1598514982901-21d6e14fc696?w=500&h=500&fit=crop"
  },
  {
    id: "m36", nombre: "Besugo a la Espalda",
    descripcion: "Besugo abierto, ajos, guindilla y aceite muy caliente al momento del servicio.",
    categoria: "Principales", ingredientes: ["Pescado"], alergenos: ["Pescado"],
    etiqueta: { tipo: "menu", texto: "Clásico" },
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop"
  },
  {
    id: "m37", nombre: "Wok de Verduras con Tofu Ahumado",
    descripcion: "Pak choi, shiitake, edamame, brotes de soja y tofu ahumado en salsa de ostras.",
    categoria: "Principales", ingredientes: ["Verduras", "Legumbres"], alergenos: ["Soja"],
    etiqueta: { tipo: "nuevo", texto: "Veggie" },
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop"
  },
  {
    id: "m38", nombre: "Jarrete de Ternera al Vino Tinto",
    descripcion: "Ossobuco estilo milanés, gremolata de limón y risotto alla milanese.",
    categoria: "Principales", ingredientes: ["Carne", "Arroz", "Lácteos"], alergenos: ["Lácteos", "Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=500&fit=crop"
  },
  {
    id: "m39", nombre: "Mero con Muselina de Patata",
    descripcion: "Lomo de mero salvaje, muselina de patata trufada y jugo de hierbas marinas.",
    categoria: "Principales", ingredientes: ["Pescado", "Verduras", "Trufa", "Lácteos"], alergenos: ["Pescado", "Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=500&fit=crop"
  },
  {
    id: "m40", nombre: "Pollo de Corral al Estilo Grand-Mère",
    descripcion: "Pollo entero horneado lentamente, champiñones, lardons y patatas rústicas.",
    categoria: "Principales", ingredientes: ["Carne", "Verduras"], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1598514982901-21d6e14fc696?w=500&h=500&fit=crop"
  },
  {
    id: "m41", nombre: "Arroz Meloso de Bogavante",
    descripcion: "Arroz cremoso al punto, bogavante azul gallego y toque de azafrán de La Mancha.",
    categoria: "Principales", ingredientes: ["Arroz", "Marisco"], alergenos: ["Crustáceos"],
    etiqueta: { tipo: "evento", texto: "Lujo" },
    imagen: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=500&fit=crop"
  },
  {
    id: "m42", nombre: "Venado con Salsa de Frambuesa",
    descripcion: "Silla de venado, salsa de frambuesa y enebro, espárragos verdes salteados.",
    categoria: "Principales", ingredientes: ["Carne", "Caza", "Verduras"], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=500&fit=crop"
  },
  {
    id: "m43", nombre: "Lasaña de Verduras Asadas",
    descripcion: "Láminas de pasta fresca, berenjena, zucchini, pimientos asados y béchamel de parmesano.",
    categoria: "Principales", ingredientes: ["Pasta", "Verduras", "Lácteos"], alergenos: ["Gluten", "Huevos", "Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1574894709920-11b28be1e10a?w=500&h=500&fit=crop"
  },
  {
    id: "m44", nombre: "Costilla de Wagyu 72h",
    descripcion: "Costilla de buey Wagyu cocinada 72 horas a 72°C, glaseada y finalizada a la brasa.",
    categoria: "Principales", ingredientes: ["Carne"], alergenos: [],
    etiqueta: { tipo: "evento", texto: "Exclusivo" },
    imagen: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&h=500&fit=crop"
  },

  // ─── POSTRES (11 originales + 1 nuevo + 12 nuevos = 24) ──────────────────

  {
    id: "d1", nombre: "Esfera de Oro y Chocolate",
    descripcion: "Chocolate 70% cacao, oro comestible y núcleo de praliné.",
    categoria: "Postres", ingredientes: ["Lácteos"], alergenos: ["Lácteos", "Soja", "Frutos de cáscara"],
    etiqueta: { tipo: "evento", texto: "Elegante" },
    imagen: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&h=500&fit=crop"
  },
  {
    id: "d2", nombre: "Soufflé de Grand Marnier",
    descripcion: "Clásico soufflé horneado al momento con licor de naranja.",
    categoria: "Postres", ingredientes: ["Huevo", "Lácteos"], alergenos: ["Huevos", "Lácteos", "Gluten"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=500&h=500&fit=crop"
  },
  {
    id: "d3", nombre: "Milhojas de Vainilla Tahití",
    descripcion: "Hojaldre invertido crujiente y crema ligera de vainilla de Tahití.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=500&h=500&fit=crop"
  },
  {
    id: "d4", nombre: "Texturas de Limón",
    descripcion: "Sorbete, mousse, gelée y merengue seco de limones de Sicilia.",
    categoria: "Postres", ingredientes: ["Huevo"], alergenos: ["Huevos"],
    etiqueta: { tipo: "nuevo", texto: "Cítrico" },
    imagen: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&h=500&fit=crop"
  },
  {
    id: "d5", nombre: "Tarta Tatin Revisitada",
    descripcion: "Manzanas caramelizadas, helado de mantequilla salada y crumble de almendra.",
    categoria: "Postres", ingredientes: ["Verduras", "Lácteos"], alergenos: ["Gluten", "Lácteos", "Frutos de cáscara"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&h=500&fit=crop"
  },
  {
    id: "d6", nombre: "Coulant de Pistacho",
    descripcion: "Bizcocho fluido de pistacho iraní con helado de frambuesa.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos", "Frutos de cáscara"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=500&fit=crop"
  },
  {
    id: "d7", nombre: "Torrija Caramelizada",
    descripcion: "Pan brioche empapado en leche de coco, caramelizado con helado de canela.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=500&fit=crop"
  },
  {
    id: "d8", nombre: "Tabla de Quesos Artesanos",
    descripcion: "Selección de 5 quesos europeos con mermeladas caseras y frutos secos.",
    categoria: "Postres", ingredientes: ["Lácteos"], alergenos: ["Lácteos", "Frutos de cáscara"],
    etiqueta: { tipo: "menu", texto: "Tradición" },
    imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&h=500&fit=crop"
  },
  {
    id: "d9", nombre: "Crème Brûlée de Vainilla",
    descripcion: "Crema catalana con costra de azúcar quemado y coulis de frutos rojos.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Lácteos", "Huevos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&h=500&fit=crop"
  },
  {
    id: "d10", nombre: "Tarta de Queso La Viña",
    descripcion: "Tarta de queso horneada al estilo de San Sebastián, quemada y cremosa.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Lácteos", "Huevos", "Gluten"],
    etiqueta: { tipo: "nuevo", texto: "Viral" },
    imagen: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=500&h=500&fit=crop"
  },
  {
    id: "n5", nombre: "Tarta de Limón Merengada",
    descripcion: "Masa sablée crujiente, crema suave de limón y merengue italiano tostado.",
    categoria: "Postres", ingredientes: ["Huevo", "Lácteos"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: { tipo: "nuevo", texto: "Nuevo" },
    imagen: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&h=500&fit=crop"
  },
  // ─── POSTRES NUEVOS ──────────────────────────────────────────────────────
  {
    id: "d11", nombre: "Profiteroles con Chocolate Caliente",
    descripcion: "Choux rellenos de crema Chantilly, cubiertos de chocolate negro fundido.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=500&h=500&fit=crop"
  },
  {
    id: "d12", nombre: "Bavaroise de Fresas del Bosque",
    descripcion: "Crema bávara sedosa, fresas del bosque maceradas y gelatina de Sauternes.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Lácteos", "Huevos", "Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=500&h=500&fit=crop"
  },
  {
    id: "d13", nombre: "Café Irlandés Flameado",
    descripcion: "Café de especialidad, whisky Jameson, nata montada artesanal y caramelo salado.",
    categoria: "Postres", ingredientes: ["Lácteos"], alergenos: ["Lácteos"],
    etiqueta: { tipo: "evento", texto: "Show" },
    imagen: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&h=500&fit=crop"
  },
  {
    id: "d14", nombre: "Paris-Brest de Praliné",
    descripcion: "Corona de choux, crema ligera de avellana y praliné, almendras laminadas.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos", "Frutos de cáscara"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&h=500&fit=crop"
  },
  {
    id: "d15", nombre: "Tiramisú Clásico",
    descripcion: "Bizcochos de Savoiardi, mascarpone, espresso y cacao amargo, receta original.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: { tipo: "menu", texto: "Clásico" },
    imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=500&fit=crop"
  },
  {
    id: "d16", nombre: "Helado Artesano de Albahaca",
    descripcion: "Helado de albahaca fresca con coulis de fresa y vinagre balsámico añejo.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Lácteos", "Huevos"],
    etiqueta: { tipo: "nuevo", texto: "Singular" },
    imagen: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&h=500&fit=crop"
  },
  {
    id: "d17", nombre: "Brownie de Chocolate con Nueces",
    descripcion: "Brownie denso y húmedo con nueces, helado de vainilla y salsa de caramelo.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos", "Frutos de cáscara"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=500&fit=crop"
  },
  {
    id: "d18", nombre: "Tarta Sacher Vienesa",
    descripcion: "Bizcocho de chocolate, mermelada de albaricoque y cobertura de chocolate negro.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&h=500&fit=crop"
  },
  {
    id: "d19", nombre: "Panna Cotta de Maracuyá",
    descripcion: "Panna cotta sedosa, coulis tropical de maracuyá y fruta de la pasión fresca.",
    categoria: "Postres", ingredientes: ["Lácteos"], alergenos: ["Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&h=500&fit=crop"
  },
  {
    id: "d20", nombre: "Tronco de Navidad",
    descripcion: "Bizcocho enrollado, crema de mantequilla de café, decoración de merengue.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: { tipo: "evento", texto: "Temporada" },
    imagen: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&h=500&fit=crop"
  },
  {
    id: "d21", nombre: "Fresas con Nata y Balsámico",
    descripcion: "Fresas de temporada maceradas, nata montada a mano y reducción de módena añeja.",
    categoria: "Postres", ingredientes: ["Lácteos"], alergenos: ["Lácteos"],
    etiqueta: { tipo: "nuevo", texto: "Temporada" },
    imagen: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=500&h=500&fit=crop"
  },
  {
    id: "d22", nombre: "Coulant de Chocolate Negro 80%",
    descripcion: "Interior fundido de Valrhona, helado de vainilla bourbon y sal de Guérande.",
    categoria: "Postres", ingredientes: ["Lácteos", "Huevo"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: { tipo: "menu", texto: "Estrella" },
    imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=500&fit=crop"
  },

  // ─── BEBIDAS (8 originales + 1 nuevo + 12 nuevas = 21) ───────────────────

  {
    id: "b1", nombre: "Agua Voss (800ml)",
    descripcion: "Agua artesiana de Noruega, embotellada en su origen.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=500&fit=crop"
  },
  {
    id: "b2", nombre: "Cóctel Signature: Gold Martini",
    descripcion: "Gin premium, vermut seco y lámina de oro de 24k.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: { tipo: "nuevo", texto: "VIP" },
    imagen: "https://images.unsplash.com/photo-1563223771-375783ee91ad?w=500&h=500&fit=crop"
  },
  {
    id: "b3", nombre: "Té Matcha Ceremonial",
    descripcion: "Preparado al estilo tradicional japonés con batidor chasen.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&h=500&fit=crop"
  },
  {
    id: "b4", nombre: "Negroni Ahumado",
    descripcion: "Campari, vermouth rosso, gin y humo de madera de cerezo.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: { tipo: "menu", texto: "Bar" },
    imagen: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&h=500&fit=crop"
  },
  {
    id: "b5", nombre: "Kombucha de Jengibre y Limón",
    descripcion: "Fermentación artesanal propia, refrescante y probiótica.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: { tipo: "nuevo", texto: "Salud" },
    imagen: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop"
  },
  {
    id: "b6", nombre: "Espresso Blend Ethiopia",
    descripcion: "Café de origen único, tostado artesanalmente, notas de fruta roja.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&h=500&fit=crop"
  },
  {
    id: "b7", nombre: "Zumo de Naranja de Valencia",
    descripcion: "Exprimido al momento con naranjas de temporada del Levante español.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=500&h=500&fit=crop"
  },
  {
    id: "n6", nombre: "Zumo Detox Verde",
    descripcion: "Manzana verde, apio, espinacas, jengibre y un toque de limón.",
    categoria: "Bebidas", ingredientes: ["Verduras"], alergenos: ["Apio"],
    etiqueta: { tipo: "nuevo", texto: "Nuevo" },
    imagen: "https://images.unsplash.com/photo-1615478503562-b2d5e4b7b203?w=500&h=500&fit=crop"
  },
  // ─── BEBIDAS NUEVAS ──────────────────────────────────────────────────────
  {
    id: "b8", nombre: "Spritz Aperol Signature",
    descripcion: "Aperol, Prosecco Valdobbiadene, soda y naranja, versión elegante del clásico.",
    categoria: "Bebidas", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1563223771-375783ee91ad?w=500&h=500&fit=crop"
  },
  {
    id: "b9", nombre: "Margarita de Yuzu",
    descripcion: "Tequila añejo, licor de naranja, yuzu japonés y sal de chamoy en el borde.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: { tipo: "nuevo", texto: "Fusión" },
    imagen: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&h=500&fit=crop"
  },
  {
    id: "b10", nombre: "Old Fashioned con Bourbon",
    descripcion: "Bourbon premium, azúcar de caña, bitter de angostura y naranja.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=500&fit=crop"
  },
  {
    id: "b11", nombre: "Limonada de Lavanda",
    descripcion: "Limonada artesanal con sirope de lavanda de la Provenza y menta fresca.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: { tipo: "nuevo", texto: "Sin alcohol" },
    imagen: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=500&h=500&fit=crop"
  },
  {
    id: "b12", nombre: "Mocktail Tropical Sunrise",
    descripcion: "Maracuyá, piña, jengibre, agua de coco y espuma de lima, sin alcohol.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: { tipo: "nuevo", texto: "0% alcohol" },
    imagen: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop"
  },
  {
    id: "b13", nombre: "Té Blanco Pai Mu Tan",
    descripcion: "Infusión delicada de brotes de té blanco chino, servido en tetería japonesa.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&h=500&fit=crop"
  },
  {
    id: "b14", nombre: "Bloody Mary de Tomate Heirloom",
    descripcion: "Vodka premium, zumo de tomate heirloom, salsa Worcestershire y apio.",
    categoria: "Bebidas", ingredientes: [], alergenos: ["Apio"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1563223771-375783ee91ad?w=500&h=500&fit=crop"
  },
  {
    id: "b15", nombre: "Agua de Coco Natural",
    descripcion: "Coco fresco abierto en sala, servido con pajita bambú.",
    categoria: "Bebidas", ingredientes: [], alergenos: [],
    etiqueta: { tipo: "nuevo", texto: "Natural" },
    imagen: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=500&fit=crop"
  },
  {
    id: "b16", nombre: "Cerveza Artesana IPA del Mar",
    descripcion: "Cerveza artesana local con lúpulo cítrico y notas marinas, producción limitada.",
    categoria: "Bebidas", ingredientes: [], alergenos: ["Gluten"],
    etiqueta: { tipo: "nuevo", texto: "Local" },
    imagen: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&h=500&fit=crop"
  },
  {
    id: "b17", nombre: "Cava Brut Nature Reserva",
    descripcion: "Cava D.O. Penedès, sin azúcar añadido, burbuja fina y larga persistencia.",
    categoria: "Bebidas", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "menu", texto: "Brindis" },
    imagen: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=500&fit=crop"
  },
  {
    id: "b18", nombre: "Whisky Sour de Manzana",
    descripcion: "Whisky escocés, zumo de manzana verde, limón, miel y espuma de clara de huevo.",
    categoria: "Bebidas", ingredientes: [], alergenos: ["Huevos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&h=500&fit=crop"
  },
  {
    id: "b19", nombre: "Chocolate a la Taza Artesano",
    descripcion: "Chocolate de origen único disuelto en leche entera, espuma de cardamomo.",
    categoria: "Bebidas", ingredientes: [], alergenos: ["Lácteos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop"
  },

  // ─── VINOS (9 originales + 12 nuevos = 21) ───────────────────────────────

  {
    id: "v1", nombre: "Vega Sicilia Único 2012",
    descripcion: "D.O. Ribera del Duero. La leyenda de los vinos españoles.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "evento", texto: "Joyas" },
    imagen: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=500&fit=crop"
  },
  {
    id: "v2", nombre: "Dom Pérignon Vintage 2015",
    descripcion: "Champagne francés de prestigio. Elegancia y burbuja fina.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=500&fit=crop"
  },
  {
    id: "v3", nombre: "Petrus 2015",
    descripcion: "Bordeaux, Pomerol. Uno de los tintos más cotizados del mundo.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "evento", texto: "Icono" },
    imagen: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&h=500&fit=crop"
  },
  {
    id: "v4", nombre: "Chardonnay Puligny-Montrachet",
    descripcion: "Borgoña, blanco complejo con notas minerales y mantequilla.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
  },
  {
    id: "v5", nombre: "Pingus 2018",
    descripcion: "D.O. Ribera del Duero. Vino de culto de producción limitadísima.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500&h=500&fit=crop"
  },
  {
    id: "v6", nombre: "Sassicaia 2019",
    descripcion: "Bolgheri, Italia. El Supertoscano por excelencia.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=500&h=500&fit=crop"
  },
  {
    id: "v7", nombre: "Krug Grande Cuvée",
    descripcion: "Champagne de prestigio, mezcla de más de 120 vinos diferentes.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1543257580-7269da773bf5?w=500&h=500&fit=crop"
  },
  {
    id: "v8", nombre: "Álvaro Palacios L'Ermita 2020",
    descripcion: "Priorat, Garnacha centenaria. Expresión máxima del terroir catalán.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "nuevo", texto: "Local" },
    imagen: "https://images.unsplash.com/photo-1528823872057-9c018575b83f?w=500&h=500&fit=crop"
  },
  {
    id: "v9", nombre: "Château d'Yquem 2016",
    descripcion: "Sauternes. El mejor vino dulce del mundo, notas de azafrán y miel.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "evento", texto: "Postres" },
    imagen: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?w=500&h=500&fit=crop"
  },
  // ─── VINOS NUEVOS ────────────────────────────────────────────────────────
  {
    id: "v10", nombre: "Ribera del Duero Pesquera Reserva 2017",
    descripcion: "Alejandro Fernández. Tempranillo de Valladolid, tanino elegante y larga crianza.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=500&fit=crop"
  },
  {
    id: "v11", nombre: "Albariño Pazo de Señorans Selección 2019",
    descripcion: "D.O. Rías Baixas. El mejor albariño gallego, mineral y de larga crianza.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "nuevo", texto: "Blanco" },
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
  },
  {
    id: "v12", nombre: "Barolo Brunate 2018 — Ceretto",
    descripcion: "Piamonte, Italia. El rey de los vinos italianos, Nebbiolo de Langa.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&h=500&fit=crop"
  },
  {
    id: "v13", nombre: "Opus One 2019",
    descripcion: "Napa Valley, California. La gran alianza Mondavi-Rothschild.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "evento", texto: "Nuevo Mundo" },
    imagen: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=500&h=500&fit=crop"
  },
  {
    id: "v14", nombre: "Clos Mogador 2020 — René Barbier",
    descripcion: "Priorat DOQ. Garnacha y Cariñena sobre suelos de pizarra llicorella.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1528823872057-9c018575b83f?w=500&h=500&fit=crop"
  },
  {
    id: "v15", nombre: "Riesling Trockenbeerenauslese — Mosel",
    descripcion: "Vino dulce alemán de cosecha tardía, acidez vibrante y miel de abeja.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?w=500&h=500&fit=crop"
  },
  {
    id: "v16", nombre: "Grüner Veltliner Smaragd — Wachau",
    descripcion: "Blanco austriaco de gran potencia, notas de pimienta blanca y melocotón.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "nuevo", texto: "Austria" },
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
  },
  {
    id: "v17", nombre: "Rioja Gran Reserva Marqués de Murrieta",
    descripcion: "Castillo Ygay. El tinto más emblemático de La Rioja, crianza en roble americano.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "menu", texto: "Rioja" },
    imagen: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500&h=500&fit=crop"
  },
  {
    id: "v18", nombre: "Amarone della Valpolicella DOCG 2015",
    descripcion: "Véneto, Italia. Uvas pasificadas, taninos poderosos y cuerpo excepcional.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: null,
    imagen: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=500&fit=crop"
  },
  {
    id: "v19", nombre: "Rueda Verdejo José Pariente Fermentado en Barrica",
    descripcion: "D.O. Rueda. Verdejo de gran complejidad, criado en barrica con lías finas.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "nuevo", texto: "Nacional" },
    imagen: "https://images.unsplash.com/photo-1543257580-7269da773bf5?w=500&h=500&fit=crop"
  },
  {
    id: "v20", nombre: "Palo Cortado VORS — Bodegas Hidalgo",
    descripcion: "Jerez, 30 años de vejez. El estilo más raro y complejo del Jerez.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "evento", texto: "Raro" },
    imagen: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?w=500&h=500&fit=crop"
  },
  {
    id: "v21", nombre: "Champagne Blanc de Blancs — Jacques Selosse",
    descripcion: "Chardonnay puro de Côte des Blancs. El champagne más buscado de los sommeliers.",
    categoria: "Vinos", ingredientes: [], alergenos: ["Dióxido de azufre y sulfitos"],
    etiqueta: { tipo: "evento", texto: "Colección" },
    imagen: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=500&fit=crop"
  },
];