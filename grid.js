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

function sizeGrid(columns, square) {
	var grids = document.getElementsByClassName('grid');

	if (grids !== null) {

		for (var i = 0; i < grids.length; i++) {
			var grid = grids[i],
				items = grid.getElementsByClassName('item');

			if (items !== null) {

				var itemSize = Math.floor(grid.offsetWidth / columns) - 1;

				for (var j = 0; j < items.length; j++) {
					var item = items[j];

					item.style.width = itemSize + 'px';
					if (square) item.style.height = itemSize + 'px';
					else item.style.height = (0.7 * itemSize) + 'px';
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
		if (window.innerWidth >= 1200) {
			sizeGrid(4, true);
		} else if (window.innerWidth >= 768) {
			sizeGrid(3, true);
		} else {
			sizeGrid(2, false);
		}
	} else {
		sizeGrid(1, false);
	}
}

window.onload = function () {
	gridColumns();
}
window.onresize = function () {
	gridColumns();
}
