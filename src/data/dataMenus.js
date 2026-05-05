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
  {
    id: 6,
    nombre: "Menú Arrocero",
    imagen: "https://enlacocinamagazine.b-cdn.net/wp-content/uploads/2021/08/Tipos-de-arroz-para-el-menu-de-tu-restaurante.jpg",
    ingredientes: ["Arroz", "Marisco", "Verduras", "Pescado"],
    alergenos: ["Pescado", "Crustáceos", "Moluscos"],
    etiqueta: { tipo: "evento" }
  },
  {
    id: 7,
    nombre: "Menú Italiano Clásico",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiRgjsGRM7JZ_Pl8lxhJD5Jh8P0WdBipEKQ&s",
    ingredientes: ["Pasta", "Huevo", "Lácteos", "Carne"],
    alergenos: ["Gluten", "Huevos", "Lácteos"]
  },
  {
    id: 8,
    nombre: "Menú Gourmet Trufado",
    imagen: "https://s2.ppllstatics.com/ideal/gourmet/multimedia/202002/10/media/cortadas/MENU-kuCD-U100106585701IBD-1248x770@Ideal.jpg",
    ingredientes: ["Trufa", "Carne", "Huevo", "Lácteos"],
    alergenos: ["Lácteos", "Huevos"],
    etiqueta: { tipo: "nuevo" }
  },
  {
    id: 9,
    nombre: "Menú de Caza Mayor",
    imagen: "https://cocinandocaza.es/wp-content/uploads/2022/11/receta-de-solomillo-de-corzo-al-cafe-cocinando-caza-898x1024.jpg",
    ingredientes: ["Caza", "Verduras", "Trufa"],
    alergenos: ["Apio", "Dióxido de azufre y sulfitos"]
  },
  {
    id: 10,
    nombre: "Menú Marinero",
    imagen: "https://quilla.es/wp-content/uploads/2025/08/arroz-marinero.webp",
    ingredientes: ["Pescado", "Marisco", "Moluscos"],
    alergenos: ["Pescado", "Crustáceos", "Moluscos", "Gluten"]
  },
  {
    id: 11,
    nombre: "Menú Proteina",
    imagen: "https://content21.sabervivirtv.com/medio/2025/05/19/menu-con-proteinas_0db81f26_250519152803_990x660.webp",
    ingredientes: ["Carne", "Verduras", "Huevo"],
    alergenos: ["Huevos"]
  },
  {
    id: 12,
    nombre: "Menú Oriental",
    imagen: "https://pandasfood.es/wp-content/uploads/2024/09/menu-oriental.jpeg",
    ingredientes: ["Arroz", "Pescado", "Verduras"],
    alergenos: ["Soja", "Pescado", "Granos de sésamo"]
  },
  {
    id: 13,
    nombre: "Menú Ibérico",
    imagen: "https://s1.abcstatics.com/abc/sevilla/media/gurmesevilla/2021/05/Guiso-seg%C3%BAn-temporada-casta%C3%B1etas-ib%C3%A9ricas-Men%C3%BA-degustaci%C3%B3n-100-ib%C3%A9rico-2021-960x540.jpg",
    ingredientes: ["Carne", "Lácteos", "Verduras"],
    alergenos: ["Lácteos"]
  },
  {
    id: 14,
    nombre: "Menú Vegano",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF24PUZIY0EyoxQEiROSeaTLx1z8JKeRBEQA&s",
    ingredientes: ["Legumbres", "Verduras", "Arroz"],
    alergenos: ["Apio", "Frutos de cáscara"]
  },
  {
    id: 15,
    nombre: "Menú Burguer Premium",
    imagen: "https://www.salomon-foodworld.com/media/pages/inspiration/rezepte/premium-giant-homestyle-burger-menu/ff8777998c-1758123635/e3_homestyle_burger_giant_bun_guacamoledip_72dpi_rezept_1-1200x1500-crop.jpg",
    ingredientes: ["Carne", "Lácteos", "Huevo", "Verduras"],
    alergenos: ["Gluten", "Lácteos", "Huevos", "Granos de sésamo"]
  },
  {
    id: 16,
    nombre: "Menú Mariscada Real",
    imagen: "https://www.barcelonasailboats.com/wp-content/uploads/2023/05/foto-mariscada.jpg",
    ingredientes: ["Marisco", "Caviar", "Moluscos"],
    alergenos: ["Crustáceos", "Moluscos", "Pescado"],
    etiqueta: { tipo: "nuevo" }
  },
  {
    id: 17,
    nombre: "Menú Tradicional de Cuchara",
    imagen: "https://content.clara.es/medio/2024/07/15/menu-semanal-platos-de-cuchara_ec74c76b_240715115339_800x532.webp",
    ingredientes: ["Legumbres", "Carne", "Verduras"],
    alergenos: ["Apio", "Dióxido de azufre y sulfitos"]
  },
  {
    id: 18,
    nombre: "Menú Brunch",
    imagen: "https://www.elsayfred.es/wp-content/uploads/2025/05/PORTADA-MENU-BRUNCH-1-scaled-e1746620364707.jpg",
    ingredientes: ["Huevo", "Lácteos", "Pan", "Verduras"],
    alergenos: ["Gluten", "Huevos", "Lácteos", "Granos de sésamo"]
  },
  {
    id: 19,
    nombre: "Menú Nórdico",
    imagen: "https://thumbs.dreamstime.com/b/men%C3%BA-de-hotel-sm%C3%B6rg%C3%A5sbord-n%C3%B3rdico-pan-centeno-y-arenque-en-un-plato-dise%C3%B1o-vista-superior-419340556.jpg",
    ingredientes: ["Pescado", "Lácteos", "Verduras"],
    alergenos: ["Pescado", "Lácteos", "Mostaza"]
  },
  {
    id: 20,
    nombre: "Menú Silvestre",
    imagen: "https://cdn.thefork.com/tf-lab/image/upload/restaurant/dd5cf1fd-54a3-4008-bcfc-d5ff930d9b35/efb304e8-bcd4-432f-ad46-68e9e7b45df1.jpg",
    ingredientes: ["Verduras", "Legumbres", "Trufa"],
    alergenos: ["Frutos de cáscara", "Apio"],
    etiqueta: { tipo: "evento" }
  },
  {
    id: 21,
    nombre: "Menú Selección Quesos",
    imagen: "https://lacocinadefrabisa.lavozdegalicia.es/wp-content/uploads/2023/01/tabla-de-quesos.jpg",
    ingredientes: ["Lácteos", "Frutos de cáscara"],
    alergenos: ["Lácteos", "Frutos de cáscara", "Gluten"]
  },
  {
    id: 22,
    nombre: "Menú Especial Pasta",
    imagen: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/9532f624eb720acad9d1031fe1f3ce19/Derivates/3fb4520ec4d83c85fbca46fdd12d0ff36d43ac21.jpg",
    ingredientes: ["Pasta", "Trufa", "Lácteos"],
    alergenos: ["Gluten", "Lácteos"]
  },
  {
    id: 23,
    nombre: "Menú Atlántico",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXvig8wyktfKFYG9ehwDJSMUYGkFyiygdrg&s",
    ingredientes: ["Pescado", "Verduras", "Legumbres"],
    alergenos: ["Pescado", "Moluscos"]
  },
  {
    id: 24,
    nombre: "Menú Oriental Especial",
    imagen: "https://www.chefplus.es/sites/default/files/styles/large/public/field/image/chef-plus-induction_atrevete-con-un-menu-oriental-520x520.jpg?itok=bExkLwwx",
    ingredientes: ["Pasta", "Carne", "Huevo", "Verduras"],
    alergenos: ["Gluten", "Huevos", "Soja", "Granos de sésamo"]
  },
  {
    id: 25,
    nombre: "Menú Degustación Premium",
    imagen: "https://sevilla.cosasdecome.es/wp-content/uploads/2024/06/menu-unuk-847x435.jpg",
    ingredientes: ["Caviar", "Trufa", "Marisco", "Carne"],
    alergenos: ["Pescado", "Crustáceos", "Moluscos", "Lácteos", "Gluten"],
    etiqueta: { tipo: "nuevo" }
  }
];