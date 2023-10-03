let addInput = document.getElementById("addInput");
let searchInput = document.getElementById("searchInput");
let toDoList = document.getElementById("toDoList");
let searchList = document.getElementById("searchList");
let addBtn = document.getElementById("btn");
let addBtnText = addBtn.innerText;
const userArray = [];
let editId = null;

addBtn.onclick = () => {
  if (addInput.value !== "") {
    if (editId !== null) {
      userArray.splice(editId, 1, addInput.value);
      editId = null;
    } else {
      userArray.push(addInput.value);
    }

    // console.log(Userarray);
    addInput.value = "";
    displayInfo();
    addBtn.innerText = addBtnText;
  } else {
    alert("please Enter value");
  }
};

function displayInfo() {
  let st = "";
  userArray.forEach((user, i) => {
    st += `
        <li>
        <span>${user}</span>
        <span class="update"><i class="fas fa-edit" onclick='edituser("${user}","${i}",this)' ></i></span>
        <span class="delete"><i class="fa fa-trash" onclick="deleteuser(${i})" aria-hidden="true"></i></span>
    </li>
        `;
  });
  toDoList.innerHTML = st;
}

function edituser(name, id, e) {
  e.parentElement.parentElement.style.backgroundColor = "gray";
  editId = id;
  addInput.value = name;
  addBtn.innerText = "Save";
}

function deleteuser(id) {
  userArray.splice(id, 1);
  displayInfo();
}

function searchString() {
  const data = userArray.filter((currentUser) => {
    if (
      currentUser
        .toLowerCase()
        .indexOf(searchInput.value.trim().toLowerCase()) > -1
    ) {
      return true;
    } else {
      return false;
    }
  });

  searchList.innerHTML = "";
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    searchList.appendChild(listItem);
  });
  if (searchInput.value == "") {
    searchList.innerHTML = "";
  }
}

// Searching from List

// function searchString() {
//   const data = userArray.filter((currentUser) => {
//     if (currentUser.includes(searchInput.value)) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   searchList.innerHTML = "";
//   data.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = item;
//     searchList.appendChild(listItem);
//   });
//   if (searchInput.value == "") {
//     searchList.innerHTML = "";
//   }
// }
