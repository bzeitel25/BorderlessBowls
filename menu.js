// This file holds all your text and image paths.
// To change, add, or remove an item, you only ever edit this file!
const menuItems = [
  {
    name: "Feijoada",
    region: "BRAZIL | MEAT",
    description: "Deeply comforting, slow-simmered black bean and pork stew.",
    image: "feijoada.jpg" // Place your photo file named feijoada.jpg inside the BB Website folder
  },
  {
    name: "Stroganoff",
    region: "GERMANY | MEAT",
    description: "Mushroom and tender beef or chicken in a creamy sauce.",
    image: "stroganoff.jpg"
  },
  {
    name: "Ramen",
    region: "JAPAN | MEAT",
    description: "Rich, slow-simmered pork broth over fresh noodles and garnishes.",
    image: "ramen.jpg"
  },
  {
    name: "Jambalaya",
    region: "CAJUN | MEAT",
    description: "Spicy rice dish packed with tender chicken and smoked sausage.",
    image: "jambalaya.jpg"
  },
  {
    name: "Tuscan Pasta",
    region: "ITALY | MEAT",
    description: "Creamy garlic and sundried tomato sauce tossed with chicken.",
    image: "tuscan_pasta.jpg"
  },
  {
    name: "Beef Stew",
    region: "IRELAND | MEAT",
    description: "Tender beef simmered with root vegetables in a rich stout broth.",
    image: "beef_stew.jpg"
  },
  {
    name: "Pozole Rojo",
    region: "MEXICO | MEAT",
    description: "Flavorful pork and hominy stew garnished with fresh radish.",
    image: "pozole_rojo.jpg"
  },
  {
    name: "Borscht",
    region: "POLAND | MEAT/VEG",
    description: "Vibrant, earthy, and slightly tart beet soup flavored with dill.",
    image: "borscht.jpg"
  },
  {
    name: "French Onion",
    region: "FRANCE | VEG",
    description: "Rich beef broth topped with a thick, melted gruyere crust.",
    image: "french_onion.jpg"
  },
  {
    name: "Chickpea Curry",
    region: "INDIA | VEGAN",
    description: "Aromatic, deeply spiced coconut curry with tender chickpeas.",
    image: "chickpea_curry.jpg"
  }
];

function renderMenu() {
  const container = document.getElementById('menu-container');
  if (!container) return;

  container.innerHTML = menuItems.map(item => `
    <div class="menu-card">
      <img src="${item.image}" alt="${item.name}" class="menu-img" onerror="this.style.display='none'">
      <h3>${item.name}</h3>
      <h4>${item.region}</h4>
      <p>${item.description}</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderMenu);
