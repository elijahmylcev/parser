window.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	const textNodes = [];
	function recurse(element) {
		element.childNodes.forEach(node => {
			if (node.nodeName.match(/^H\d/)) {
				const obj = {
					header: node.nodeName,
					content: node.textContent,
				};
				textNodes.push(obj);
			} else {
				recurse(node);
			}
		});
	}

	recurse(body);

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(textNodes),
	})
		.then(response => response.json())
		.then(json => console.log(json));
});
