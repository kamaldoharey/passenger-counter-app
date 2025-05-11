function btn_add() {
	const div1 = document.getElementById('text-result');
	var current_value = div1.innerText;
	const current_value_in_num = Number(current_value);
	// text
	div1.textContent = current_value_in_num + 1;
}
function btn_save() {
	const div1 = document.getElementById('text-result');
	var current_value = div1.innerText;
	const saved_value = document.getElementById('text-result').innerText;
	const saved_value_span = document.getElementById('saved_value');
	saved_value_span.textContent = current_value;
	div1.textContent = '0';
}
