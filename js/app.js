// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
	// Select category buttons
	const btnBeginner = document.getElementById("btn-beginner");
	const btnIntermediate = document.getElementById("btn-intermediate");
	const btnAdvanced = document.getElementById("btn-advanced");

	// Add click event listeners for each category button
	btnBeginner.addEventListener("click", () => {
		// For now, we just log a message. Later, you'll redirect to a workout progress page.
		console.log("Boot Camp - Level 1 selected");
		// You can use window.location.href to navigate to another page when ready.
		// e.g., window.location.href = "workout_progress.html?level=beginner";
	});

	btnIntermediate.addEventListener("click", () => {
		console.log("Boot Camp - Level 2 selected");
	});

	btnAdvanced.addEventListener("click", () => {
		console.log("Boot Camp - Level 3 selected");
	});

	// Calendar tracker example: Highlight the current day
	const days = document.querySelectorAll(".day");
	const today = new Date().getDay(); // 0 (Sun) to 6 (Sat)
	// Adjust if your week starts on Mon: you might convert Sunday from 0 to 6, and shift others.
	// For simplicity, assuming Sunday is 0.
	if (days[today]) {
		days[today].style.backgroundColor = "#004d00"; // Darker green to highlight
		days[today].style.color = "#fff";
	}
});
