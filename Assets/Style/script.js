// Lets
let tempInK = 0;
let humidity = 0;
let windSpeed = 0;
let uvIndex = 0;
let cityLat = 0;
let cityLon = 0;
let cityName = '';
let countryCode = '';
let iconName = '';
let iconURL = 'https://openweathermap.org/img/wn/';
let weatherIcon = '';
let weatherInfoRequestPrefix = 'https://api.openweathermap.org/data/2.5/';
let fiveDayRequestPrefix =
	'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
let uviQuery = 'uvi?';
let API_KEY = '2c5bfcf6504fdbc571e64d23b3bba150';
const apiKey = '&appid=' + API_KEY;
let searchHistory = {};