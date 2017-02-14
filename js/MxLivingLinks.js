;( function(){

	$.defaultSett = {
		speedDelay: 600,

		/* excluded from the set of elements */
		excludeElements: [
			'.dropdown-toggle'
		],

		/* type animation */
		typeAnimate: 'defaultType', // Attenuation
		/*
		*	'destroyBlocks' - Destruction
		*	'drawBodyTopType' - Move up
		*	'drawBodyBottomType' - Move down
		*	'drawBodyLeftType' - Move left
		*	'drawBodyRightType' - Move right
		*	'randomType' - Random type
		*
		*/

		/* background color in the transition */
		endColor: '#333'
	};

	$.fn.MxLivingLinks = function( params ){

		var settings = $.extend( {}, $.defaultSett, params );
		LivingLinks( this, settings );

	};

	function LivingLinks( root, settings ){
		
		$( 'body' ).css( { 'opacity': '0' } );
		$( 'body' ).animate( { 'opacity': '1' },settings.speedDelay );

		$( 'a' ).each( function(){
			$( this ).attr( 'onclick', 'return false' );
		} );

		$.each( settings.excludeElements, function( index, value ){
			
			$( 'a' ).each( function(){
				if( $( this ).is( value ) ){
					$( this ).attr( 'data-mx-exclude', 'mxExclude' );
				}
			} );

		} );

		$( 'a' ).on( 'click', function(){

			var thisLink = $( this ).attr( 'data-mx-exclude' );

			if( thisLink !== 'mxExclude' ){

				var thisHref = $( this ).attr( 'href' ),
					speedDelay = settings.speedDelay,
					endColor = settings.endColor;
				
				switch( settings.typeAnimate ){

					case 'defaultType':
						defaultType( speedDelay, thisHref );
					break;

					case 'destroyBlocks':
						destroyBlocks( speedDelay, thisHref );
					break;

					case 'drawBodyTopType':
						drawBodyTopType( endColor, speedDelay, thisHref );
					break;

					case 'drawBodyBottomType':
						drawBodyBottomType( endColor, speedDelay, thisHref );
					break;

					case 'drawBodyLeftType':
						drawBodyLeftType( endColor, speedDelay, thisHref );
					break;

					case 'drawBodyRightType':
						drawBodyRightType( endColor, speedDelay, thisHref );
					break;

					case 'randomType':
						randomType( endColor, speedDelay, thisHref );
					break;

					default:
						defaultType( speedDelay, thisHref );
						//alert( 'Type undefined!' );

				}

			}
			
		} );

	}

} )( jQuery );

/******************* Function ***********************/
function defaultType( speedDelay, thisHref ){

	$( 'body' ).animate( { 'opacity': '0' },speedDelay );

	setTimeout( function(){
		window.location.href = thisHref;
	},speedDelay );

}

function destroyBlocks( speedDelay, thisHref ){
	
	$( 'div' ).each( function(){

		thisOffTop = $( this ).position().top;
		thisOffLeft = $( this ).position().left;
		
		$( this ).css( { 'top': thisOffTop + 'px', 'left': thisOffLeft + 'px' } );

	} );

	$( 'div' ).each( function(){
		
		$( this ).css( 'position', 'fixed' );
		$( this ).animate( { 'top': '-100', 'left': '-200px' },speedDelay );

	} );

	setTimeout( function(){
		window.location.href = thisHref;
	},speedDelay );

}

function drawBodyTopType( endColor, speedDelay, thisHref ){

	$( 'html' ).animate( { backgroundColor: endColor },speedDelay );
	var hBody = $( 'body' ).height();

	if( hBody <= 600 ){
		hBody = 600;
	}

	$( 'body' ).css( { 'position': 'absolute', 'width': '100%' } );
	$( 'body' ).animate( { 'top': '-' + hBody + 'px' },speedDelay );

	setTimeout( function(){
		window.location.href = thisHref;
	},speedDelay );

}

function drawBodyBottomType( endColor, speedDelay, thisHref ){

	$( 'html' ).css( { 'overflow': 'hidden' } );
	$( 'html' ).animate( { backgroundColor: endColor },speedDelay );

	var hBody = $( 'body' ).height();

	if( hBody <= 600 ){
		hBody = 600;
	}

	$( 'body' ).css( { 'position': 'absolute', 'width': '100%' } );
	$( 'body' ).animate( { 'top': hBody + hBody + 'px' },speedDelay );

	setTimeout( function(){
		window.location.href = thisHref;
	},speedDelay );

}

function drawBodyLeftType( endColor, speedDelay, thisHref ){

	$( 'html' ).css( { 'overflow': 'hidden' } );
	$( 'html' ).animate( { backgroundColor: endColor },speedDelay );

	var hBody = $( 'body' ).height();

	if( hBody <= 600 ){
		hBody = 600;
	}

	$( 'body' ).css( { 'position': 'absolute', 'width': '100%' } );
	$( 'body' ).animate( { 'right': hBody + hBody + 'px' },speedDelay );

	setTimeout( function(){
		window.location.href = thisHref;
	},speedDelay );

}

function drawBodyRightType( endColor, speedDelay, thisHref ){

	$( 'html' ).css( { 'overflow': 'hidden' } );
	$( 'html' ).animate( { backgroundColor: endColor },speedDelay );

	var hBody = $( 'body' ).height();

	if( hBody <= 600 ){
		hBody = 600;
	}

	$( 'body' ).css( { 'position': 'absolute', 'width': '100%' } );
	$( 'body' ).animate( { 'left': hBody + hBody + 'px' },speedDelay );

	setTimeout( function(){
		window.location.href = thisHref;
	},speedDelay );

}

function RandomNumber( from, to ){

	return Math.floor( ( Math.random() * ( to - from + 1 ) ) + from );

}

function randomType( endColor, speedDelay, thisHref ){

	switch( RandomNumber( 0, 5 ) ){
		case 0:
			defaultType( speedDelay, thisHref );
		break;

		case 1:
			destroyBlocks( speedDelay, thisHref );
		break;

		case 2:
			drawBodyTopType( endColor, speedDelay, thisHref );
		break;

		case 3:
			drawBodyBottomType( endColor, speedDelay, thisHref );
		break;

		case 4:
			drawBodyLeftType( endColor, speedDelay, thisHref );
		break;

		case 5:
			drawBodyRightType( endColor, speedDelay, thisHref );
		break;
	}

}