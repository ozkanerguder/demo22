





function a( ID )
{
	let Head = "<font onclick='javascript:hide(" + '"A"' + ")' class='font1' style='font-size:2.8em; color:#fff'>X</font><br><center><font class='font2'>"
	let Tail = "</font></center>"

	let A = document.getElementById('A')
	A.style.visibility = 'visible'
	if ( ID == '1' )
		A.innerHTML = Head + 'MWE<sup>$</sup> transaction history' + Tail
	else if ( ID == '2' )
		A.innerHTML = Head + 'MWE<sup>+</sup> transaction history' + Tail
	else if ( ID == '3' ) {
		Ret = document.getElementById('return').innerHTML
		A.innerHTML = Head + 'buy MWE<sup>$</sup> ' + Ret + Tail
	}
	else if ( ID == '4' )
		A.innerHTML = Head + 'buy MWE<sup>$</sup> w/ coins<br><br>&nbsp;&nbsp;<img width="30%" src="visuals/wallet.jpg"><br><font class="font4">my wallet</font>' + Tail
	else if ( ID == '5' )
		A.innerHTML = Head + 'reclaim MWE<sup>$</sup>' + Tail
	else if ( ID == '6' )
		A.innerHTML = Head + 'resell assets' + Tail

}
