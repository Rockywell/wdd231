const coursesBlock = document.querySelector("#courses");

const courseFiltersElement = document.createElement("div");
courseFiltersElement.className = "filters";

const totalCreditsElement = document.createElement("span");

const coursesList = document.createElement("ul");
coursesList.className = "courses-list";

const courseDetails = document.querySelector("#course-details");

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

let courseFilters = {
    "All": () => true,
    "WDD": course => course.subject == "WDD",
    "CSE": course => course.subject == "CSE"
};


Object.keys(courseFilters).forEach(courseName => {

    const button = document.createElement("button");
    button.textContent = `${courseName} Courses`;

    // button.dataset.value = courseFilters[courseName];
    // coursesBlock.dataset.source = value;

    let filteredCourses = courses.filter(courseFilters[courseName]);

    button.addEventListener("click", () => {
        createCourseCards(filteredCourses);
    });

    courseFiltersElement.appendChild(button)
});

coursesBlock.append(courseFiltersElement, totalCreditsElement, coursesList);

coursesList.addEventListener("click", (e) => {
    const courseItem = e.target.closest("li");

    if (courseItem) {
        let selectedCourse = courses.filter(({ number }) => number == +courseItem.textContent.match(/\d+$/)[0])[0];
        displayCourseDetails(selectedCourse);
    }
})

function displayCourseDetails(course) {

    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    <br>
    <p>${course.description}</p>
    `;
    courseDetails.showModal();

    let closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

function createCourseCards(courses) {
    let totalCredits = courses.reduce((sum, { credits }) => sum + credits, 0);

    totalCreditsElement.innerHTML = `The total credits for courses listed below is <strong>${totalCredits}</strong>`;

    coursesList.innerHTML = courses.map(course => `
        <li class="${course.completed ? "completed" : ""}">${course.subject} ${course.number}</li>
    `).join('');
}

createCourseCards(courses)