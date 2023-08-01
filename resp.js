toggleBtn = document.querySelector('.toggle_btn')
toggleBtnIcon = document.querySelector('.toggle_btn i')
dropDownMenu = document.querySelector('.dropdown_menu')


toggleBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
})