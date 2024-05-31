const addtask = document.querySelector("#plus");
const list = document.querySelector(".list");
const input = document.querySelector(".place");

addtask.addEventListener("click", () => {
  const newtask = document.createElement("div");
  const task = input.value;

  newtask.innerHTML = `
    <span class="span1">${task}</span>
    <button class="done-btn">Done</button>
    <button class="delete-btn">Delete</button>
  `;
  newtask.style.cssText = `
    width: 300px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 10px;
  `;
  list.append(newtask);

  const deletebtn = newtask.querySelector(".delete-btn");
  deletebtn.style.cssText = `
    border: none;
    background-color: lavender;
    border-radius: 10px;
    width: 50px;
    text-align: center;
  `;
  deletebtn.addEventListener("click", () => {
    list.removeChild(newtask);
  });

  const donebtn = newtask.querySelector(".done-btn");
  donebtn.style.cssText = `
    border: none;
    background-color: lavender;
    border-radius: 10px;
    width: 50px;
    margin-right: 30px;
    text-align: center;
  `;
  donebtn.addEventListener("click", () => {
    const done = newtask.querySelector(".span1");
    done.style.cssText = "text-decoration: line-through;";
  });
});
