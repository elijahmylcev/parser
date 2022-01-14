window.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	function recurse(element) {
		element.childNodes.forEach(node => {
			console.log(node);

			if (element.childNodes.length > 1) {
				recurse(node);
			}
		});
	}

	recurse(body);
});
