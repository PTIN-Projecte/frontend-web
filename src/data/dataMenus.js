export const ingredientesLista = [
  "Carne",
  "Pescado",
  "Marisco",
  "Verduras",
  "Legumbres",
  "Caza",
  "Arroz",
  "Pasta",
  "Huevo",
  "Lácteos",
  "Trufa",
  "Caviar"
];

export const alergenosLista = [
  "Gluten",
  "Crustáceos",
  "Huevos",
  "Pescado",
  "Cacahuetes",
  "Soja",
  "Lácteos",
  "Frutos de cáscara",
  "Apio",
  "Mostaza",
  "Granos de sésamo",
  "Dióxido de azufre y sulfitos",
  "Altramuces", "Moluscos"
];

export const menusDb = [
    {
    id: 1,
    nombre: "Menú Degustación",
    imagen: "https://restauranteimperialvillena.com/wp-content/uploads/2025/04/que-es-menu-degustacion-post-con-ejemplos.jpeg",
    ingredientes: ["Pescado", "Marisco", "Trufa", "Caviar", "Lácteos"],
    alergenos: ["Gluten", "Lácteos", "Huevos", "Pescado", "Moluscos", "Crustáceos"],
    etiqueta: { tipo: "nuevo" }
  },
  {
    id: 2,
    nombre: "Menú Vegetariano",
    imagen: "  https://horecazaragoza.com/wp-content/uploads/2025/04/crea-tu-menu-vegetariano-1.jpg",
    ingredientes: ["Verduras", "Legumbres", "Huevo", "Lácteos", "Arroz"],
    alergenos: ["Gluten", "Lácteos", "Huevos", "Mostaza"]
  },
  {
    id: 3,
    nombre: "Menú Calçotada",
    imagen: "https://calblay.com/wp-content/uploads/2025/01/calcotada_menu.jpg.webp", 
    ingredientes: ["Verduras", "Carne", "Legumbres"],
    alergenos: ["Gluten", "Frutos de cáscara", "Mostaza", "Dióxido de azufre y sulfitos"]
  },
  {
    id: 4,
    nombre: "Menú Infantil",
    imagen: "https://www.dandelionsalud.com/wp-content/uploads/2017/06/menu-infantil-blog.png",
    ingredientes: ["Pasta", "Carne", "Lácteos", "Verduras"],
    alergenos: ["Gluten", "Lácteos", "Huevos"]
  },
  {
    id: 5,
    nombre: "Menú Mar y Montaña",
    imagen: "https://losmontesdegalicia.es/wp-content/uploads/2023/06/Menu-Select.jpg",
    ingredientes: ["Carne", "Marisco", "Verduras", "Legumbres", "Lácteos"],
    alergenos: ["Gluten", "Lácteos", "Crustáceos", "Moluscos", "Apio"]
  },
  
];