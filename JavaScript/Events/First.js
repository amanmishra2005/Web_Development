// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "I am fine.";
// }

// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "I am fine.";
//     element.style.backgroundColor = "pink";
// }

// element.onclick = function handleClick(){  // Overwrites 
//     element.textContent = "Hey Hii! I am fine.";
// }

// const element = document.getElementById("first");

// element.addEventListener("click",()=>{    // Best Method
//     element.textContent = "Hey Hii! I am fine.";
// })

// element.addEventListener("click",()=>{    // Best Method. No OverWrite
//     element.style.backgroundColor = "brown";
// })


// element.addEventListener("dblclick",()=>{    // Best Method
//     element.style.backgroundColor = "brown";
// })

// element.addEventListener("mouseenter",()=>{    // Best Method
//     element.textContent = "Hey Hii! I am fine.";
//     element.style.backgroundColor = "brown";
// })

// element.addEventListener("mouseleave",()=>{    // Best Method
//     element.textContent = "Hello Guys! How are you?";
//     element.style.backgroundColor = "black";
// })



// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am Clicked";
// })

// const parent = document.getElementById("parent");
// // console.log(parent.children);

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }


// const parent = document.getElementById("parent");

// parent.addEventListener('click',(e)=>{
//     // console.log(e.target);
//     e.target.textContent = "I am Clicked";
// })


function handleClick(e){
   e.target.textContent = "I am Clicked";
//    parent.removeEventListener('click',handleClick);   // Runs atleast 1 time.
}

parent.addEventListener('click',handleClick);

// parent.removeEventListener('click',handleClick);  // Runs 0 times



// // Capture Phase by Default off h.
// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log("GrandParent is clicked");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     console.log("Parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     console.log("child is clicked");
// })



// // Capture Phase on hogya.
// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log("GrandParent is clicked");
// },true)

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     console.log("Parent is clicked");
// },true)

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     console.log("child is clicked");
// },true)



// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log("GrandParent is clicked");
// },true)

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     console.log("Parent is clicked");
// },false)

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     console.log("child is clicked");
// },true)



// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     // console.log(e);
//     // console.dir(e);
//     console.log(e.target);  // Kon sa wala Trigger hua h ye batata h.
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     // console.log(e);
//     // console.dir(e);
// })

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     // console.log(e);
//     // console.dir(e);
//     // e.stopPropagation();
// })

// Agar Capture Phase on hai: Top se Down aaoge (Us time event trigger hoga).
// Agar Capture Phase off hai: Down to Top jaoge (Bubbling phase bolte hai, tab trigger hoga).