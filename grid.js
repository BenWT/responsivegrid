function fadeIn (el, multiplier) {
    el.style.opacity = 0;

    var last = +new Date();
	var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / multiplier;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else {
            el.style.opacity = 1;
        }
    }
    tick();
}

function fadeOut (el, multiplier) {
    el.style.opacity = 1;

    var last = +new Date();
	var tick = function() {
        el.style.opacity = +el.style.opacity - (new Date() - last) / multiplier;
        last = +new Date();

        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16));
        } else {
            el.style.opacity = 0;
        }
    }
    tick();
}

function isLandscape() {
	if (window.innerWidth >= window.innerHeight) {
		return true;
	} else {
		return false;
	}
}

function sizeGrid(columns) {
	var grids = document.getElementsByClassName('grid');

	if (grids !== null) {
		for (var i = 0; i < grids.length; i++) {
			var grid = grids[i],
				items = grid.getElementsByClassName('item');

			if (items !== null) {
				var itemSize = (grid.offsetWidth / columns) + 'px';

				for (var j = 0; j < items.length; j++) {
					var item = items[i];

					item.style.width = itemSize;
					item.style.height = itemSize;
				}
			}
		}
	}
}

function gridItemMouseOver(el) {
	fadeIn(el.getElementsByClassName('itemContent')[0], 200);
}

function gridItemMouseOut(el) {
	fadeOut(el.getElementsByClassName('itemContent')[0], 200);
}

var gridColumns = function() {
	if (isLandscape()) {
		sizeGrid(3);
	} else {
		sizeGrid(1);
	}
}

window.onload = function () {
	console.log('grid onload');
	gridColumns();
}
window.onresize = function () {
	console.log('grid onresize');
	gridColumns();
}
