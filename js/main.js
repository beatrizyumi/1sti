$(document).ready(function(){
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

	$('.search-result').css({'display':'none'});

	$('.close-result').on('click', function(){
		$('.search-result').css({'display':'none'});
	});

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
	
})