
const searchInput = document.querySelector('input[type="text"]');
const people = document.querySelectorAll('.person');


searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();

   
    people.forEach(person => {
        const name = person.querySelector('h4').textContent.toLowerCase();

      
        if (name.includes(searchValue)) {
            person.style.display = 'flex'; 
        } else {
            person.style.display = 'none'; 
        }
    });
});
