






	function b( ID )
	{
		let Head = "<font onclick='javascript:hide(" + '"B"' + ")' class='font1' style='font-size:2.8em; color:#fff'>X</font><br><center><font class='font2'>"
		let Tail = "</font></center>"

		let B = document.getElementById('B')
		B.style.visibility = 'visible'
		if ( ID == '0' )
			B.innerHTML = Head + 'my profile' + Tail
		else if ( ID == '1' )
			B.innerHTML = Head + 'my current travels' + Tail
		else if ( ID == '2' )
			B.innerHTML = Head + 'my current stays' + Tail
		else if ( ID == '3' )
			B.innerHTML = Head + 'my current activities' + Tail
		else if ( ID == '4' )
			B.innerHTML = Head + 'my calendar' + Tail
		else if ( ID == '5' )
			B.innerHTML = Head + 'call uber' + Tail
		else if ( ID == '6' )
			B.innerHTML = Head + 'contact car-rental agency' + Tail
		else if ( ID == '7' )
			B.innerHTML = Head + 'pay via NFC' + Tail		
		else if ( ID == '8' )
			B.innerHTML = Head + 'messages' + Tail
		else if ( ID == '9' )
			B.innerHTML = Head + 'public transportation' + Tail
		else if ( ID == '10' )
			B.innerHTML = Head + 'see moowe advertorials' + Tail
		else if ( ID == '11' )
			B.innerHTML = Head + 'join local clients chat' + Tail
	}
