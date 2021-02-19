
/*
Global Variables
*/

//set the number of student list in one page
let listPerPage = 9;



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
the list parameter to represent student data that will be passed as an argument when the function is called.
the page parameter to represent the page number that will be passed as an argument when the function is called.
*/



function showPage(page,list)  {

   // variables to store the start index and the end index of the list items to be displayed on the given page
   let startIndex = (page * listPerPage ) - listPerPage;
	let endIndex = page * listPerPage;
   
   // selecting the ul element and assigning it an empty string
   const studentListUl = document.querySelector('.student-list');
   studentListUl.innerHTML = '';

   for ( let i=0; i < list.length; i++  ){

      if (i>=startIndex && i<endIndex){

         const studentListItem = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>
         `;

         studentListUl.insertAdjacentHTML ('beforeend', studentListItem);

      }

   }

}





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){

   //calculate the number of pages required in total
   const numberOfPages = Math.ceil(list.length/listPerPage);

   //selecting the ul containg the pagination list
   const linkList = document.querySelector('.link-list');

   for(let i=1; i<=numberOfPages; i++){

      const button = `
      
         <li>
         <button type="button">${i}</button>
         </li>
      
      
      `;

      linkList.insertAdjacentHTML('beforeend', button);

      linkList.querySelector('button').className = 'active';

   }

   // setting and removing the active class in buttons

   linkList.addEventListener('click', (e) => {

      const target = e.target;

      if(target.tagName === 'BUTTON'){

         document.querySelector('.active').className = '';
         target.className = 'active';

         showPage(target.textContent,list);
      }

   })

}

// Call functions

showPage(1,data);
addPagination(data);