var contacts = [
  { id: 1, firstname: "Bill", lastname: "Gates", number: 12345 },
  { id: 2, firstname: "Eric", lastname: "Elliot", number: 12345 },
  { id: 3, firstname: "Fred", lastname: "Allen", number: 12345 },
];

function display(Mycontacts = contacts) {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  //   contacts.forEach(contact=>{
  //     // for (var key of contact) {
  //     //     console.log(key);
  //     //   }
  //       console.log(Object.getOwnPropertyNames(contact));
  //   });

  Mycontacts.forEach((contact) => {
    const tr = document.createElement("tr");

    const id = document.createElement("th");
    const firstname = document.createElement("th");
    const lastname = document.createElement("th");
    const number = document.createElement("th");
    const deleteBtn = document.createElement("button");

    id.innerHTML = contact.id;
    firstname.innerHTML = contact.firstname;
    lastname.innerHTML = contact.lastname;
    number.innerHTML = contact.number;

    deleteBtn.innerText = "delete";
    deleteBtn.setAttribute("data-id", contact.id);
    deleteBtn.addEventListener("click", () => deleteContact(contact.id));
    tr.appendChild(id);
    tr.appendChild(firstname);
    tr.appendChild(lastname);
    tr.appendChild(number);
    tr.appendChild(deleteBtn);
    tbody.appendChild(tr);
  });
}

function addContact() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const number = document.getElementById("number").value;
  const newContact = {
    id: contacts.length + 1,
    firstname: fname,
    lastname: lname,
    number: number,
  };
  //   contacts = [...contacts, newContact];
  contacts.push(newContact);
  display();

  document.getElementById("closeBtn").click();

  return false;
}

function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id != id);
  display();
}

function search() {
  const searchElement = document
    .getElementById("searchStr")
    .value.toLowerCase();

  results = contacts.filter(
    (contact) =>
      contact.firstname.toLowerCase().includes(searchElement) ||
      contact.lastname.toLowerCase().includes(searchElement)
  );
  display(results);
}

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}
