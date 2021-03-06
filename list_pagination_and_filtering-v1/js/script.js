/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

//Retrive full list of Students
let studentList = document.getElementsByClassName('student-item cf');
//Determines initial page to display
let pageDisplay = 1;
//Number of buttons to add
let pageCounter = 1;
//First button
let a = 0;
//Determines overall nuber of pages required based on number of students in list
const requiredPages = Math.ceil(studentList.length / 10);
//Holds
const pageDiv = document.createElement("div");

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

//Displays the appropriate students in the list and hides the rest
const showPage = () => {
  console.log(pageDisplay);
  for (i=0; i < studentList.length; i++)
    if (
        i > 10 * pageDisplay) {
          studentList[i].style.display = 'none';
        } else {
          studentList[i].style.display = 'block';
        }
};

const appendPageLinks = () => {


  //Creates new div and new class "pagination"
  const page = document.body.querySelector('.page');
  pageDiv.className = "pagination";
  page.appendChild(pageDiv);
  let ulPagination = document.createElement('ul');
  pageDiv.append(ulPagination);

  //Loop adds UL, li, and a to the page
  for (let i = 0; i < requiredPages; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = pageCounter;
    ulPagination.appendChild(li);
    li.innerHTML = `<a href="#" class="">${pageCounter}</a>`;
    pageCounter ++;
  };
};

pageDiv.addEventListener('click', (e) => {
  console.log(pageCounter);
  let pageDisplay = e.target.textContent;
  showPage();
  });

showPage();
appendPageLinks();


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/


// const appendPageLinks = () => {}


// Remember to delete the comments that came with this file, and replace them with your own code comments.
