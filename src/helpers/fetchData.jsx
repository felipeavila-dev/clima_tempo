//API KEY aab6b817a648497fa66234819220604
//Exemplo de requisicao: http://api.weatherapi.com/v1/current.json?key=aab6b817a648497fa66234819220604&q=Sorocaba&aqi=no

export const fetchData = async (city) => {
  const apiKey = 'aab6b817a648497fa66234819220604';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  if(typeof city === 'string' && city !== '') {
    const req = await fetch(url);
    const response = await req.json();
    return response;
  }
}