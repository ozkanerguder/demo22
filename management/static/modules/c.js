




	function c( ID )
	{
		let Head = "<font onclick='javascript:hide(" + '"C"' + ")' class='font1' style='font-size:2.8em; color:#fff'>X</font><br><center><font class='font2'>"
		let Tail = "</font></center>"

		let C = document.getElementById('C')
		C.style.visibility = 'visible'
		if ( ID == '1' )
		{
			django()	// C.innerHTML = Head + 'flights / cars / cruises' + Tail
			C.style.visibility = 'hidden'
		}
		else if ( ID == '2' )
			C.innerHTML = Head + 'hotels / resorts / airbnb' + Tail
		else if ( ID == '3' )
			C.innerHTML = Head + 'events to enjoy' + Tail
	}

