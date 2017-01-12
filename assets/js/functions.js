var br = {
    on: function (t, e, fn) {
        if (e.addEventListener) {
            e.addEventListener(t, fn, false);
        } else if (e.attachEvent) {
            e.attachEvent('on' + t, fn);
        } else {
            e['on' + t] = fn;
        }
    },

    show: function (e, cl) {
        var btn = document.getElementById(e),
            bd = document.body || document.getElementsByTagName('body')[0];

        br.on('click', btn, function () {
            if (bd.className !== cl) {
                bd.className = cl;
            } else {
                bd.className = '';
            }
        });
    }
};

br.show('search-toggle', 'search-show');
br.show('menu-toggle', 'menu-show');