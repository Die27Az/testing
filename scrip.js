//funcion asincrona para llamar a una paginas
const getPhoto = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    const photo = await data.message;
    document.getElementById('photo').src = photo;
    console.log(data);
};