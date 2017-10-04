var resposta;
$(document).ready(function(){
	// Declaracao de variaveis //

	var input = '';
	var url = '';
	var cidade = '';
	var estado = '';
	var pais = '';
	var temperaturaAtual = '';
	var condicaoDoTempo = '';
	var temperaturaMinima = '';
	var temperaturaMaxima = '';
	var velocidadeVento = '';
	var sensacao = '';
	var umidade = '';
	var unidadeDoTempo = '';
	var unidadeDoVento = '';

	

	// Fim de Declaracao de variaveis //

	// Inclusao de dados das capitais //

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.rio-branco>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			resposta = response;
			response.query.results.channel.item.condition.text = response.query.results.channel.item.condition.text.replace(' ', '');
			console.log(response.query.results.channel.location.city);
			$('.rio-branco>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.rio-branco>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.macapa>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.macapa>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.macapa>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.salvador>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.salvador>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.salvador>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.brasilia>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.brasilia>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.brasilia>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.goiania>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.goiania>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.goiania>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.cuiaba>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.cuiaba>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.cuiaba>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.belo-horizonte>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.belo-horizonte>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.belo-horizonte>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.joao-pessoa>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.joao-pessoa>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.joao-pessoa>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.recife>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.recife>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.recife>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.rio-de-janeiro>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.rio-de-janeiro>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.rio-de-janeiro>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.porto-alegre>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.porto-alegre>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.porto-alegre>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.boa-vista>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.boa-vista>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.boa-vista>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.sao-paulo>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.sao-paulo>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.sao-paulo>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.palmas>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.palmas>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.palmas>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.maceio>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.maceio>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.maceio>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.manaus>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.manaus>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.manaus>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.fortaleza>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.fortaleza>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.fortaleza>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.vitoria>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.vitoria>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.vitoria>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.sao-luis>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.sao-luis>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.sao-luis>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.campo-grande>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.campo-grande>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.campo-grande>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.belem>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.belem>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.belem>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.curitiba>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.curitiba>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.curitiba>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.teresina>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.teresina>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.teresina>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.natal>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.natal>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.natal>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.porto-velho>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.porto-velho>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.porto-velho>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.florianopolis>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.florianopolis>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.florianopolis>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	$.ajax({
			method: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+$('.aracaju>.capital').text()+'") and u="c" &format=json',
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			$('.aracaju>.min').text(response.query.results.channel.item.forecast[0].low+'°'+response.query.results.channel.units.temperature);
			$('.aracaju>.max').text(response.query.results.channel.item.forecast[0].high+'°'+response.query.results.channel.units.temperature);
		}
		});

	// Fim da Inclusao de dados das capitais //

	// Caixa de pesquisa //
	
	$('.search-result').css({'display':'none'});

	$('.close-result').on('click', function(){
		$('.search-result').css({'display':'none'});
	});

	// Fim da Caixa de Pesquisa //

	/*// i18next - traducao //

			i18next.init({
		  		lng: 'en',
		 		debug: true,
		  		resources: {
			    	en: {
			      		translation: {
			        		"PartlyCloud": "Partly Cloud",
			        		"Showers": "Showers",
			        		"PartlyCloudy": "Partly Cloudy",
		  					"AMShowers": "AM Showers",
						  	"PMShowers": "PM Showers",
						  	"PMThunderstorms": "PM Thunderstorms",
						  	"ScatteredThunderstorms": "Scattered Thunderstorms",
						  	"LightRainwithThunder": "Light Rain with Thunder",
						  	"Thunderstorms": "Thunderstorms",
						  	"HeavyRain": "Heavy Rain",
						  	"MostlySunny": "Mostly Sunny",
						  	"LightRain": "Light Rain",
						  	"Fog": "Fog",
						  	"Fair": "Fair",
						  	"Sunny": "Sunny",
						  	"AMRain": "AM Rain",
						  	"PMRain": "PM Rain",
						  	"MostlyCloudy": "Mostly Cloudy",
						  	"IsolatedThunderstorms": "Isolated Thunderstorms",
						  	"Thundershowers": "Thundershowers",
						  	"HeavyThunderstorms": "Heavy Thunderstorms",
						  	"Clear": "Clear",
						  	"Rain": "Rain",
						  	"Cloudy": "Cloudy",
			      		},
			    	},
			    	pt: {
			      		translation: {
			        		"Partly Cloud": "Parcialmente Nublado",
			        		"Showers": "Chuvas",
			        		"Partly Cloudy": "Parcialmente Nublado",
		  					"AM Showers": "Chuvas Matutinas",
						  	"PM Showers": "Chuvas Vespertinas",
						  	"PM Thunderstorms": "Tempestades Vespertinas",
						  	"Scattered Thunderstorms": "Tempestades Espalhadas",
						  	"Light Rain with Thunder": "Chuva leve com trovões",
						  	"Thunderstorms": "Tempestades com Trovões",
						  	"Heavy Rain": "Heavy Rain",
						  	"Mostly Sunny": "Majoritariamente Ensolarado",
						  	"Light Rain": "Chuva Leve",
						  	"Fog": "Neblina",
						  	"Fair": "Ameno",
						  	"Sunny": "Ensolarado",
						  	"AM Rain": "Chuvas Matutinas",
						  	"PM Rain": "Chuvas Vespertinas",
						  	"Mostly Cloudy": "Majoritariamente Nublado",
						  	"Isolated Thunderstorms": "Tempestades Isoladas",
						  	"Thundershowers": "Tempestades",
						  	"Heavy Thunderstorms": "Tempestades Intensas",
						  	"Clear": "Limpo",
						  	"Rain": "Chuva",
						  	"Cloudy": "Nublado",
			      		}
			    	},
		  		}
			}, function(err, t) {
		  	// initialized and ready to go!
		  	updateContent();
			});*/

	// Fim de i18n //

	// Pesquisa

	$('.search-form button').on('click', function(event){
		event.preventDefault();
		input = $('.search-form input').val();
		url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+input+'") and u="c" &format=json';
		$.ajax({
			method: 'GET',
			url: url,
			success: function(response) {
			console.log(response);
			console.log(response.query.results.channel.location.city);
			cidade = response.query.results.channel.location.city;
			estado = response.query.results.channel.location.region;
			pais = response.query.results.channel.location.country;
			temperaturaAtual = response.query.results.channel.item.condition.temp;
			condicaoDoTempo = response.query.results.channel.item.condition.text;
			// sensacao = response.query.results.channel.
			velocidadeVento = response.query.results.channel.wind.speed;
			umidade = response.query.results.channel.atmosphere.humidity;
			temperaturaMinima = response.query.results.channel.item.forecast[0].low;
			temperaturaMaxima = response.query.results.channel.item.forecast[0].high;
			unidadeDoTempo = response.query.results.channel.units.temperature;
			unidadeDoVento = response.query.results.channel.units.speed;
			console.log(cidade+estado+pais+temperaturaAtual+condicaoDoTempo+umidade);
			$('.header-content').text(cidade+', '+estado+' - '+pais);
			$('.result-temperature').text(temperaturaAtual+'°'+unidadeDoTempo+' '+condicaoDoTempo);
			$('.value-min').text(temperaturaMinima+'°'+unidadeDoTempo);
			$('.value-max').text(temperaturaMaxima+'°'+unidadeDoTempo);
			$('.value-wind').text(velocidadeVento+unidadeDoVento);
			$('.value-humidity').text(umidade+'%');
			$('.search-result').fadeIn();


		}
		});
		
	});

	// Fim da Pesquisa //

	
	
})