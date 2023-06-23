const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'db96fcdcdd8a3535ed32dbb3f4b61813';

export const fetchWeather = async (city) => {

    try {        
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }
        const data = await response.json();
        return { success: true, data }
    }
    catch (err) {
        return { success: false, err }
    }

}