function isChecked() {
    const checkboxMenu = document.getElementById('checkbox-menu');
    const containerNav = document.getElementById('container-nav');

    if(checkboxMenu.checked) {
        containerNav.style.display = "block";
    } else {
        containerNav.style.display = "none";
    }

}