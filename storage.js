// module 42-7(Explore local storage & session storage with json)

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {//this line use for not adding the empty input. here both are truty
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}