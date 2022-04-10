import {fetchData}from './fetchData';
  
export const getData = async (city) => {
  const response = await fetchData(city);
  if(response.error) return 'Cidade não encontrada.';
  return{
    name: response.location.name, 
    region: response.location.region, 
    country: response.location.country,
    localtime: response.location.localtime, 
    condition: { icon: response.current.condition.icon, text: response.current.condition.text }, 
    temperature: response.current.temp_c, 
    feelslike: response.current.feelslike_c,
  };
};

export const formatData = (data) => {
  const [date, hour] = data.split(' ');
  const [year, month, day] = date.split('-');
  return  `${hour}h | ${day}/${month}/${year}`;
}
  // const [data, setData] = useState({
  //   name: '', //location.name
  //   region: '', //location.region
  //   country: '', //location.country
  //   localtime: '', //location.localtime
  //   condition: { icon: '', text: '' }, //current.condition
  //   temperature: 0, //current.temp_c
  //   feelslike: 0, //current.feelslike_c
  // });

  // const handleData = async (city) => {
  //   const response = await fetchData(city);
  //   setData({
  //     name: response.location.name, 
  //     region: response.location.region, 
  //     country: response.location.country,
  //     localtime: response.location.localtime, 
  //     condition: { icon: response.current.condition.icon, text: response.current.condition.text }, 
  //     temperature: response.current.temp_c, 
  //     feelslike: response.current.feelslike_c,
  //   });
  // };