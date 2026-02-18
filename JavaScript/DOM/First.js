const newElement = document.createElement("h2");
newElement.textContent = "We are fine.";
newElement.id = "second";

// console.dir(newElement);

// console.log(newElement);

//  Selecting Element:-

const element = document.getElementById("first");
// element.before(newElement);
element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "What are you doing?";
newElement2.id = "third";
newElement2.setAttribute("hello","ji");

// newElement2.className = "doing";
// newElement2.className = "do";

newElement2.classList.add("doing");
newElement2.classList.add("do");
console.dir(newElement2);
// newElement2.classList.remove("do");
// console.dir(newElement2);

newElement2.style.backgroundColor = "aquamarine";
newElement2.style.fontSize = "30px";

element.before(newElement2);

console.log(newElement2.getAttribute("hello"));



// const list1 = document.createElement("li");
// list1.textContent = "Milk";
// const list2 = document.createElement("li");
// list2.textContent = "Curd";
// const list3 = document.createElement("li");
// list3.textContent = "Ghee";
// const list4 = document.createElement("li");
// list4.textContent = "Paneer";

// const unorderElement = document.getElementById("listing");
// // unorderElement.append(list1);
// // unorderElement.append(list2);
// unorderElement.append(list1,list2);
// unorderElement.prepend(list3);

// // list1.after(list4);

// unorderElement.children[1].after(list4);

// Method mentioned below is not good for UI as it disturbs UI everytime.

// const arr = ["Milk","Ghee","Curd","Paneer","Tofu","Tea"];

// const unorderElement = document.getElementById("listing");

// for(let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderElement.append(list);
// }

// Optimised Method:-

const arr = ["Milk","Ghee","Curd","Paneer","Tofu","Tea"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food
    fragment.append(list);
}
unorderElement.append(fragment);

// const s1 = document.getElementById("first");
// s1.remove();  // h1 removed


// Old Methods

const month = document.getElementById("ten");

// console.log(month.children);
const lister = document.createElement("li");
// lister.textContent = "<img src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000'>";

// lister.innerHTML = "<img src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000'>"

month.prepend(lister);
// month.insertAdjacentElement("afterend",lister)