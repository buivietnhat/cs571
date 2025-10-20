function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
    const selected = document.querySelector('input[name="job"]:checked');

    if (selected) {
        // console.log("User picked:", selected.value);
        alert("Thank you for applying to be a " + selected.value)
    } else {
        // console.log("No option selected!");
        alert("You must select a job")
    }
}
