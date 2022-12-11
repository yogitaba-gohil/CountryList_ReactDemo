export async function getCountry(name){
    console.log('name', name)
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    return await data.json();

  }