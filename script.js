const recipes = [
  {
    country: "Italy",
    items: [
      { title: "Spaghetti Carbonara", image: "download1.jpg", description: "Classic Roman pasta made with eggs, cheese, pancetta, and pepper." },
      { title: "Margherita Pizza", image: "download2.jpg", description: "Simple and fresh pizza with tomato, mozzarella, and basil." }
    ]
  },
  {
    country: "India",
    items: [
      { title: "Butter Chicken", image: "download3.jpg", description: "Creamy tomato-based curry with tender chicken." },
      { title: "Masala Dosa", image: "download4.jpg", description: "Crispy rice pancake stuffed with spicy potato masala." }
    ]
  },
  {
    country: "Japan",
    items: [
      { title: "Sushi", image: "download5.jpg", description: "Freshly rolled sushi with rice, fish, and seaweed." },
      { title: "Ramen", image: "download6.jpg", description: "Noodle soup with pork, egg, and flavorful broth." }
    ]
  },
  {
    country: "Mexico",
    items: [
      { title: "Tacos", image: "download7.jpg", description: "Soft tortillas filled with meat, vegetables, and salsa." },
      { title: "Guacamole", image: "download8.jpg", description: "Mashed avocados with lime, onion, and cilantro." }
    ]
  }
];

const container = document.getElementById("recipe-sections");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const closeBtn = document.getElementById("closeBtn");

recipes.forEach(section => {
  const sectionEl = document.createElement("div");
  sectionEl.className = "section";

  const heading = document.createElement("h2");
  heading.textContent = section.country;
  sectionEl.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "grid";

  section.items.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="card-content">
        <h3>${recipe.title}</h3>
        <p>${recipe.description.slice(0, 50)}...</p>
      </div>
    `;
    card.onclick = () => {
      modal.classList.remove("hidden");
      modalTitle.textContent = recipe.title;
      modalDesc.textContent = recipe.description;
    };
    grid.appendChild(card);
  });

  sectionEl.appendChild(grid);
  container.appendChild(sectionEl);
});

closeBtn.onclick = () => modal.classList.add("hidden");

window.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};
