export async function getCountry(name){
    console.log('name', name)
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    let [data]= await response.json();
  return data
    

  }