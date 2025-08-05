// Class schedule data
const schedule = [
    { day: 'Monday', time: '6:00 PM', className: 'Beginner Class' },
    { day: 'Tuesday', time: '7:00 PM', className: 'Advanced Training' },
    { day: 'Wednesday', time: '6:30 PM', className: 'Aquatic Fitness' },
    { day: 'Thursday', time: '7:00 PM', className: 'Competition Prep' },
    { day: 'Saturday', time: '10:00 AM', className: 'Family Swim' },
];

// Populate schedule table using template literals
const scheduleTable = document.getElementById('schedule-table');
schedule.forEach(({ day, time, className }) => {
    const row = `<tr><td>${day}</td><td>${time}</td><td>${className}</td></tr>`;
    scheduleTable.insertAdjacentHTML('beforeend', row);
});

// Form submission with DOM manipulation and localStorage
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const submission = {
        name,
        email,
        message,
        date: new Date().toISOString(),
    };

    // Save to localStorage
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(submission);
    localStorage.setItem('submissions', JSON.stringify(submissions));

    alert(`Thanks for your message, ${name}! We will get back to you soon.`);
    form.reset();
});
  