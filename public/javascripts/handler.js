var socket = io.connect('http://localhost');
socket.on('tick', function (data) {
	document.getElementById('content').innerHTML = data.aapl;
	//socket.emit('service', {'setFilter':'predicate'});
    });