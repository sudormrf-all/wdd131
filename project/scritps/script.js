"use strict";

(() => {
    const clubInfo = {
        name: "FitCity Swimming Club",
        membershipTypes: new Set(["basic", "premium", "family"])
    };

    // Load members array from localStorage or empty array
    let members = JSON.parse(localStorage.getItem("members") || "[]");

    // Email validation regex
    const isValidEmail = email => /^\S+@\S+\.\S+$/.test(email);

    // Save members to localStorage
    const saveMembers = () => localStorage.setItem("members", JSON.stringify(members));

    // Update member count display (with ARIA live support)
    const updateMemberCount = () => {
        const countContainer = document.getElementById("member-count");
        if (countContainer) {
            countContainer.textContent = `Current Members Registered: ${members.length}`;
        }
    };

    // Clear message area
    const clearMessage = (messageElement) => {
        messageElement.textContent = "";
        messageElement.classList.remove("error", "success");
    };

    // Form submission handler
    function handleFormSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const messageElement = form.querySelector("#form-message");
        clearMessage(messageElement);

        const fullName = form.fullName.value.trim();
        const email = form.email.value.trim();
        const age = Number(form.age.value);
        const membershipType = form.membershipType.value;

        // Validation with detailed conditional branching
        if (fullName.length < 2) {
            messageElement.textContent = "Please enter your full name (at least 2 characters).";
            messageElement.classList.add("error");
            form.fullName.focus();
            return;
        }

        if (!isValidEmail(email)) {
            messageElement.textContent = "Please enter a valid email address.";
            messageElement.classList.add("error");
            form.email.focus();
            return;
        }

        if (Number.isNaN(age) || age < 5 || age > 100) {
            messageElement.textContent = "Please enter a valid age between 5 and 100.";
            messageElement.classList.add("error");
            form.age.focus();
            return;
        }

        if (!clubInfo.membershipTypes.has(membershipType)) {
            messageElement.textContent = "Please select a valid membership type.";
            messageElement.classList.add("error");
            form.membershipType.focus();
            return;
        }

        // Collect selected programs
        const programs = [...form.querySelectorAll('input[name="programs"]:checked')]
            .map(checkbox => checkbox.value);

        // Create member object using template literals
        const newMember = {
            id: Date.now(),
            fullName,
            email,
            age,
            membershipType,
            programs,
            registeredOn: new Date().toISOString()
        };

        members.push(newMember);
        saveMembers();

        messageElement.textContent = `Thank you, ${newMember.fullName}! Your ${newMember.membershipType} membership registration was successful.`;
        messageElement.classList.add("success");

        form.reset();
        setTimeout(updateMemberCount, 0);
    }

    // Initialize - add event listener and update member count
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("registration-form");
        if (form) {
            form.addEventListener("submit", handleFormSubmit);
        }
        updateMemberCount();
    });
})();
