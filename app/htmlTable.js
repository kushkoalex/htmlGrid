HT.htmlTable = function ($parent, data, columns, options) {
    var ht = this,
        global = ht.global,
        tp = global.cnCt.tp,
        build,
        colors = [
            '#FFCDD2',
            '#E1BEE7',
            '#C5CAE9',
            '#D1C4E9',
            '#EA80FC',
            '#B388FF',
            '#BBDEFB',
            '#8C9EFF',
            '#82B1FF',
            '#B2DFDB',
            '#B3E5FC',
            '#FFCCBC',
            '#B2EBF2',
            '#80D8FF',
            '#84FFFF',
            '#C8E6C9',
            '#DCEDC8',
            '#F0F4C3',
            '#FFF9C4',
            '#F8BBD0',
            '#FFECB3',
            '#FFE0B2',
            '#D7CCC8',
            '#CFD8DC'
        ];


    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    options = options || {};
    shuffle(colors);
    options.colors = colors;


    build = tp('table', {data: data, columns: columns, options: options}, $parent);
};