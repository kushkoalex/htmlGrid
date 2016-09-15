(function (ht) {
    var tmpls = ht.tmpls;

    tmpls.header = function (columns, colors) {
        var row,
            rows = [],
            hasSubColumns = columns.some(function (column) {
                return column.columns && column.columns.length;
            });

        if (hasSubColumns) {
            row = {e: 'tr', C: []},
                colorsCount = 0;
            columns.forEach(function (column) {
                if (column.columns && column.columns.length) {
                    row.C.push({
                        e: 'th', H: column.title, a: {
                            colspan: column.columns.length,
                            style: "background-color:" + colors[colorsCount]
                        }
                    });
                    console.log(colorsCount);
                    colorsCount++;

                } else {
                    row.C.push({e: 'th'});
                }
            });
            rows.push(row);

            colorsCount = 0;
            row = {e: 'tr', C: []};
            columns.forEach(function (column) {
                if (column.columns && column.columns.length) {
                    column.columns.forEach(function (col) {
                        row.C.push({e: 'th', H: col.title, a:{style: "background-color:" + colors[colorsCount]}});
                    })
                    console.log(colorsCount);
                    colorsCount++;
                } else {
                    row.C.push({e: 'th', H: column.title});
                }


            });
            rows.push(row);
        } else {
            row = {e: 'tr', C: []};
            columns.forEach(function (column) {
                row.C.push({e: 'th', H: column.title});
            });
            rows.push(row)
        }

        return rows;
    };

    tmpls.body = function (columns, data, colors) {
        var rows = [],
            colorsCount;

        data.forEach(function (dataItem) {
            colorsCount=0;
            var row = {e: 'tr', C: []};
            columns.forEach(function (column) {
                if (column.columns && column.columns.length) {
                    column.columns.forEach(function (col) {
                        if (dataItem[col.field]) {
                            row.C.push({e: 'td', H: dataItem[col.field],a:{style: "background-color:" + colors[colorsCount]}});
                        } else {
                            row.C.push({e: 'td', H: '',a:{style: "background-color:" + colors[colorsCount]}});
                        }
                    })
                    colorsCount++;
                } else {
                    if (dataItem[column.field]) {
                        row.C.push({e: 'td', H: dataItem[column.field]});
                    } else {
                        row.C.push({e: 'td', H: ''});
                    }
                }
            });
            rows.push(row);
        });

        return rows;
    };

    tmpls.table = function (data) {
        console.log(data);
        var headerRows = tmpls.header(data.columns, data.options.colors);
        var body = tmpls.body(data.columns, data.data, data.options.colors);
        var table = {e: 'table', C: []}

        headerRows.forEach(function (row) {
            table.C.push(row);
        });
        body.forEach(function (row) {
            table.C.push(row);
        });

        return table;
    };

}(HT));