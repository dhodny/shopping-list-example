
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="shopping-list.css?v1">
	<title>Výuka test</title>
</head>

<body>

<table>
	<thead>
		<tr>
			<th>Zboží</th>
			<th>Cena / ks</th>
			<th>Množství</th>
			<th>Celková cena</th>
		</tr>
	</thead>
	<tbody id="tbody"></tbody>
	<tfoot>
		<tr>
			<td colspan="4">
				<span class="controls">
					<button>Přidat řádek (+)</button>
				</span>
			</td>
		</tr>
		<tr>
			<td colspan="3"><span class="summary">Cena celkem</span></td>
			<td><input type="number" disabled="disabled" size="10" value="0"> Kč</td>
		</tr>
	</tfoot>
</table>

<div class="controls">
	<button id="priceCalcButton">Spočítat</button>
	<button>Odeslat</button>
</div>

<script src="shopping-list.js"></script>
<script>
	// var itemList = [
	// 	{ item: 'Hrábě', price: 90, amount: 1 },
	// 	{ item: 'Koště', price: 25, amount: 2 },
	// 	{ item: 'Rýč', price: 120 },
	// 	{ item: 'Krumpáč', price: 160 },
	// 	{ item: 'Lopata', price: 70 }
	// ];
	// var calc = new Calc({
	// 	tableBodyElmId: 'tbody',
	// 	calcButtonElmId: 'priceCalcButton'
	// }, itemList,);

</script>

<?php /*
<tr>
	<td><input type="text" size="25" maxlenght="255"></td>
	<td><input type="number" size="5" value="0"> Kč</td>
	<td><input type="number" size="10" value="0"> Kč</td>
	<td><input type="number" size="10" value="0" disabled="disabled"> Kč</td>
</tr>
*/ ?>

</body>
</html>
