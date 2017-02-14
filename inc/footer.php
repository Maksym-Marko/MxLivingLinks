	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/MxLivingLinks.js?v=<?php echo time();?>"></script>

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

</body>
</html>