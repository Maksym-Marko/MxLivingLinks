MxLivingLinks - плагин на jQuery, делает простой переход по ссылке более ярким.

ОПИСАНИЕ:
Есть 7 режимов перехода по ссылке:
1.	defaultType – при переходе происходит плавное затухание страницы;
2.	destroyBlocks – эффект сломанной странице при клике на ссылку;
3.	drawBodyTopType – тело сайта уезжает вверх;
4.	drawBodyBottomType – тело сайта уезжает вниз; 
5.	drawBodyLeftType – тело сайта уезжает влево; 
6.	drawBodyRightType – тело сайта уезжает вправо;
7.	randomType – в случайном порядке плагин сам выбирает тип перехода.

ПОДКЛЮЧЕНИЕ:
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="js/MxLivingLinks.js?v=1"></script>

<script>
	$( document ).ready( function(){
		$( window ).MxLivingLinks();
	} );
</script>

НАСТРОЙКА:
<script>
	$( document ).ready( function(){
		$( window ).MxLivingLinks( {
			speedDelay: 1000, // скорость анимации
			excludeElements: [ // ссылки, которые плагин игнорирует
				'.disabled',
				'.dropdown-toggle'
			],
			typeAnimate: 'randomType', // тип перехода по ссылке
			endColor: '#ddd' // цвет затухающего фона при переходе по ссылке
		} );
	} );
</script>
