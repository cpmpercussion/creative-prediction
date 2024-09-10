//
// chalkboard-redux: chalkboard, but better.
//

const toolbarTempl = (defaultPen) => {
	let out = `
<style>
.toolbar {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	font-size: 20px;
    padding: 10px 0;
	background-color: rgba(255, 255, 255, 0.7);
	text-align: center;
	z-index: 1001; // reveal's .overlay has a z-index of 1000
}
</style>`;

	let pens = [defaultPen, 'red', 'green', 'erase'];

	let penForm = pens.map(name => {
		let selected = name === defaultPen ? "checked" : "";

		return `<label for="${name}-${toolbarCount}">${name}</label> \n` +
			`<input type="radio" name="pen-${toolbarCount}" id="${name}-${toolbarCount}" value="${name}" ${selected}>`;
	}).join('\n');

	out += `<div class="toolbar"` + penForm + `</div>`;

	toolbarCount += 1;

	return out;
};

let toolbarCount = 0;

window.ChalkboardRedux = function() {
	function getBoard(width, height, defaultPen) {
		const container = document.createElement('div');

		container.classList.add('overlay');
		container.style.background = 'none';
		container.style.pointerEvents = 'none';

		let toolbar = document.createElement('div');
		toolbar.style.visibility = 'hidden';
		toolbar.innerHTML = toolbarTempl(defaultPen);

		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;

		const graphics = canvas.getContext('2d');

		let draw = false;
		let on = false;
		let pos = {};
		let colour = defaultPen;

		canvas.addEventListener('mousedown', (event) => {
			draw = true;

			pos = {
				x: event.clientX,
				y: event.clientY,
			};
		});

		canvas.addEventListener('mouseup', () => {
			draw = false;
		});

		canvas.addEventListener('mousemove', () => {
			if (!draw) {
				return;
			}

			let next = {
				x: event.clientX,
				y: event.clientY,
			};

			if (colour == 'erase') {
				let eraserSize = 40;

				graphics.clearRect(
					next.x-eraserSize/2,
					next.y-eraserSize/2,
					eraserSize,
					eraserSize
				);
			} else {
				graphics.beginPath();
				graphics.lineWidth = 5;
				graphics.lineCap = 'round';
				graphics.strokeStyle = colour;

				graphics.moveTo(pos.x, pos.y);
				graphics.lineTo(next.x, next.y);

				graphics.stroke();
			}

			pos = next;
		});

		toolbar.addEventListener('change', (e) => {
			colour = e.target.value;
		});

		container.appendChild(canvas);
		container.appendChild(toolbar);

		function hide() {
			container.style.visibility = 'hidden';
		}

		function show() {
			container.style.visibility = 'visible';
		}

		return {
			container,
			graphics,
			toolbar,

			hide,
			show,

			isEditable: () => on,

			setEditable: (to) => {
				on = to;

				if (to) {
					container.style.pointerEvents = 'auto';
					toolbar.style.visibility = 'visible';
				} else {
					container.style.pointerEvents = 'none';
					toolbar.style.visibility = 'hidden';
				}
			},

			clear: () => {
				graphics.clearRect(0, 0, width, height);
			}
		};
	}

	return {
		id: 'ChalkboardRedux',
		init: (deck) => {
			let revealElement = deck.getRevealElement();

			let { width, height } = deck.getComputedSlideSize();

			let notes = getBoard(width, height, 'black');
			revealElement.appendChild(notes.container);

			let chalkboard = getBoard(width, height, 'white');
		    chalkboard.container.style.background = '#262626';
			chalkboard.hide();

			revealElement.appendChild(chalkboard.container);

			deck.addKeyBinding(66, () => {
				if (chalkboard.isEditable()) {
					return;
				}

				notes.setEditable(!notes.isEditable());
			});

			// toggle chalkboard on pressing 'c'
			deck.addKeyBinding(67, () => {
				let to = !chalkboard.isEditable();

				if (to) {
					chalkboard.show();
					chalkboard.setEditable(true);
				} else {
					chalkboard.hide();

					chalkboard.setEditable(false);
				}
			});

			// clear image
			deck.addKeyBinding(8, () => {
				if (chalkboard.isEditable()) {
					chalkboard.clear();

					return;
				}

				notes.clear();
			});
		},
	};
};
