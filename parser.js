window.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	const textNodes = [];
	function recurse(element) {
		element.childNodes.forEach(node => {
			if (node.nodeName.match(/^H\d/)) {
				textNodes.push(node.textContent);
			} else {
				recurse(node);
			}
		});
	}

	recurse(body);
	console.log(textNodes);
});
