function includeHTML() {
    fetch("includes/header.html")
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        });

    fetch("includes/footer.html")
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        });
}

includeHTML();