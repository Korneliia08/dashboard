var data = [
  {
    name: "Korneliia",
    company: "Microsoft",
    phone: "+(38) 12 323 123",
    email: "korneliaMushak@gmail.com",
    country: "Ukraina, Polska",
    active: true,
  },
  {
    name: "Korneliia",
    company: "Microsoft",
    phone: "+(38) 12 323 123",
    email: "korneliaMushak@gmail.com",
    country: "Ukraina, Polska",
    active: false,
  },
  {
    name: "Korneliia",
    company: "Microsoft",
    phone: "+(38) 12 323 123",
    email: "korneliaMushak@gmail.com",
    country: "Ukraina, Polska",
    active: false,
  },
  {
    name: "Korneliia",
    company: "Microsoft",
    phone: "+(38) 12 323 123",
    email: "korneliaMushak@gmail.com",
    country: "Ukraina, Polska",
    active: true,
  },
  {
    name: "Korneliia",
    company: "Microsoft",
    phone: "+(38) 12 323 123",
    email: "korneliaMushak@gmail.com",
    country: "Ukraina, Polska",
    active: true,
  },
];

const tablebody = document.querySelector("tbody");
data.forEach((person) => {
  const tr = document.createElement("tr");

  const name = document.createElement("td");
  name.innerText = person.name;
  tr.appendChild(name);

  const company = document.createElement("td");
  company.innerText = person.company;
  tr.appendChild(company);

  const phone = document.createElement("td");
  phone.innerText = person.phone;
  tr.appendChild(phone);

  const email = document.createElement("td");
  email.innerText = person.email;
  tr.appendChild(email);

  const country = document.createElement("td");
  country.innerText = person.country;
  tr.appendChild(country);

  const buttonTd = document.createElement("td");
  const button = document.createElement("button");
  button.className = "table table__button ";
  if (!person.active) {
    button.classList.add("table__button--red");
  }
  if (person.active) {
    button.classList.add("table__button--green");
  }
  button.innerText = person.active ? "active" : "inActive";
  buttonTd.appendChild(button);
  tr.appendChild(buttonTd);

  tablebody.appendChild(tr);
});

function HamburgerClick() {
  const mobileMenu = document.querySelector("#menuPanel");
  if (mobileMenu.classList.contains("wrapper__leftPanel__menu--open")) {
    mobileMenu.classList.remove("wrapper__leftPanel__menu--open");
    document
      .querySelector("#hamburgerButton")
      .classList.remove("wrapper__leftPanel__hamburger--open");
  } else {
    mobileMenu.classList.add("wrapper__leftPanel__menu--open");
    document
      .querySelector("#hamburgerButton")
      .classList.add("wrapper__leftPanel__hamburger--open");
  }
}

document
  .querySelector("#hamburgerButton")
  .addEventListener("click", HamburgerClick);
