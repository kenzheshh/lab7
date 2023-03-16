
const h1 = document.querySelector("h1");
h1.innerHTML = "Lab7 Assignment";
h1.style.color = "blue";


const hr = document.createElement("hr");


const h2Task = document.createElement("h2");
h2Task.innerHTML = "Task";
h2Task.style.color = "red";

const h2Submission = document.createElement("h2");
h2Submission.innerHTML = "Submission";
h2Submission.style.color = "red";


const taskP = document.createElement("p");
taskP.innerHTML =
  'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';

const submissionP = document.createElement("p");
submissionP.innerHTML = "To submit your work, follow these instructions:";


const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerHTML =
    'find elements in the DOM (<b>5 points</b>);'
li1.classList.add("even");
li1.style.color = "green";

const li2 = document.createElement("li");
li2.innerHTML =
  "create/add/remove elements (<b>5 points</b>);";
li2.classList.add("odd");
li2.style.color = "purple";

const li3 = document.createElement("li");
li3.innerHTML =
  "change content of the elements (<b>5 points</b>);";
li3.classList.add("even");
li3.style.color = "green";

const li4 = document.createElement("li");
li4.innerHTML =
  "change styles of the elements (<b>5 points</b>);";
li4.classList.add("odd");
li4.style.color = "purple";

const li5 = document.createElement("li");
li5.innerHTML =
  "change attributes of the elements (<b>5 points</b>);";
li5.classList.add("even");
li5.style.color = "green";

const li6 = document.createElement("li");
li6.innerHTML =
  "change classes of the elements (<b>5 points</b>);";
li6.classList.add("odd");
li6.style.color = "purple";

ul.append(li1, li2, li3, li4, li5, li6,);


const emptyP = document.createElement("p");

const submissionHr = document.createElement("hr");
emptyP.appendChild(submissionHr)


const submissionUl = document.createElement("ul");


const submissionLi1 = document.createElement("li");
submissionLi1.innerHTML =
  "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";
submissionLi1.classList.add("even");
submissionLi1.style.color = "green";

const submissionLi2 = document.createElement("li");
submissionLi2.innerHTML =
  "Clone this repository to your local machine and work inside it.";
submissionLi2.classList.add("odd");
submissionLi2.style.color = "purple";

const submissionLi3 = document.createElement("li");
submissionLi3.innerHTML =
  'Create a new HTML file, called <b>index.html</b>, which has only one h1 tag with "Hello, World!" message (<b>1 point</b>)';
submissionLi3.classList.add("even");
submissionLi3.style.color = "green";

const submissionLi4 = document.createElement("li");
submissionLi4.innerHTML =
  'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)';
submissionLi4.classList.add("odd");
submissionLi4.style.color = "purple";

const submissionLi5 = document.createElement("li");
submissionLi5.innerHTML =
'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';
submissionLi5.classList.add("even");
submissionLi5.style.color = "green";

const submissionLi6 = document.createElement("li");
submissionLi6.innerHTML =
'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).';
submissionLi6.classList.add("odd");
submissionLi6.style.color = "purple";

const submissionLi7 = document.createElement("li");
submissionLi7.innerHTML =
'After you finish your work, submit it to the Github (<b>2 points</b>).'
submissionLi7.classList.add("even");
submissionLi7.style.color = "green";


const lastHr = document.createElement("hr");

submissionUl.append(submissionLi1, submissionLi2, submissionLi3, submissionLi4, submissionLi5, submissionLi6, submissionLi7);


document.body.append(h1, hr, h2Task, taskP, ul, emptyP, h2Submission, submissionP, submissionUl, lastHr);

