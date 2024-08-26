document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/characters')//Estoy llamando al archivo json donde tengo a los personajes
        .then(response => response.json())
        .then(data => {
            populateTable(data);//Estoy haciendo la funcion para mostrar los datos en el html
        })
        .catch(error => 
            console.error('No se pudieron encontrar los datos:', error
            ));
});

function populateTable(characters) {
    const table = document.querySelector('#tablacharacters tbody');

    characters.forEach(character => {//Es un array para recorrer a los personajes y crear una fila
        const fila = document.createElement('tr');//para que se pongan en los tr de la clase table

        fila.innerHTML = `<td>${character.id}</td><td>${character.nombre}</td><td>${character.casa}</td>`;

        table.appendChild(fila);
    });
}
