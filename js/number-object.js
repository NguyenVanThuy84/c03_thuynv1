var orginnalNumber = 10.023456;
var msg = '<h2> orginal number </h2> <p>' + orginnalNumber + '</p>';
msg += '<h2> 3 decimal places </h2> <p>' + orginnalNumber.toFixed(3) +'</p>';
msg += '<h2> 3 digits <p>' + orginnalNumber.toPrecision(3) + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;