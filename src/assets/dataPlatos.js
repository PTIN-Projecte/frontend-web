// src/assets/dataPlatos.js

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

  // ─── ENTRANTES (14) ───────────────────────────────────────────────────────

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

  // ─── PRINCIPALES (22) ────────────────────────────────────────────────────

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

  // ─── POSTRES (10) ────────────────────────────────────────────────────────

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

  // ─── BEBIDAS (7) ─────────────────────────────────────────────────────────

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

  // ─── VINOS (9) ───────────────────────────────────────────────────────────

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

  // ─── PLATOS NUEVOS AÑADIDOS ──────────────────────────────────────────────

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
  {
    id: "n5", nombre: "Tarta de Limón Merengada",
    descripcion: "Masa sablée crujiente, crema suave de limón y merengue italiano tostado.",
    categoria: "Postres", ingredientes: ["Huevo", "Lácteos"], alergenos: ["Gluten", "Lácteos", "Huevos"],
    etiqueta: { tipo: "nuevo", texto: "Nuevo" },
    imagen: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&h=500&fit=crop"
  },
  {
    id: "n6", nombre: "Zumo Detox Verde",
    descripcion: "Manzana verde, apio, espinacas, jengibre y un toque de limón.",
    categoria: "Bebidas", ingredientes: ["Verduras"], alergenos: ["Apio"],
    etiqueta: { tipo: "nuevo", texto: "Nuevo" },
    imagen: "https://images.unsplash.com/photo-1615478503562-b2d5e4b7b203?w=500&h=500&fit=crop"
  }
];