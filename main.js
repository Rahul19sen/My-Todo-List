let tableBody = document.querySelector("table > tbody");
let title = document.getElementById("title");
let description = document.getElementById("desc");
let counter = 1;

document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(e);

  let titleVal = title.value;
  let descriptionVal = description.value;

  // reset values
  title.value = "";
  description.value = "";

  let row = document.createElement("tr");

  let tdNo = document.createElement("td");
  tdNo.innerText = String(++counter);

  let tdTitle = document.createElement("td");
  tdTitle.innerText = titleVal;

  let tdDescription = document.createElement("td");
  tdDescription.innerText = descriptionVal;

  let tdAction = document.createElement("td");

  // delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  deleteBtn.setAttribute("class", "bg-red-700 py-1 px-2 rounded-sm text-white");
  deleteBtn.addEventListener("click", function (e) {
    console.log(e);
    e.target.parentElement.parentElement.remove();
  });

  // edit Button
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.setAttribute(
    "class",
    "bg-yellow-700 py-1 px-2 rounded-sm text-white"
  );

  editBtn.addEventListener("click", function (e) {
    // These two lines has written for select the element
    let title1 =
      deleteBtn.parentElement.previousElementSibling.previousElementSibling;
    let desc1 = deleteBtn.parentElement.previousElementSibling;

    let editTitleVal = title1.innerText;
    let editDescriptionVal = desc1.innerText;

    title.value = editTitleVal;
    description.value = editDescriptionVal;

    title1.parentElement.remove();
  });

  // Done Button
  let doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.setAttribute("class", "bg-green-700 py-1 px-2 rounded-sm text-white");
  doneBtn.addEventListener("click", function (e) {
    doneBtn.parentElement.previousElementSibling.previousElementSibling.style.textDecoration =
      "line-through";
    doneBtn.parentElement.previousElementSibling.style.textDecoration =
      "line-through";
    // title.style.textDecoration = 'line-through';
    // desc.style.textDecoration = 'line-through';
  });

  // Adding element into Actions
  tdAction.appendChild(deleteBtn);
  tdAction.appendChild(editBtn);
  tdAction.appendChild(doneBtn);

  tdAction.setAttribute("class", "flex gap-2");

  row.appendChild(tdNo);
  row.appendChild(tdTitle);
  row.appendChild(tdDescription);
  row.appendChild(tdAction);

  tableBody.appendChild(row);
});

