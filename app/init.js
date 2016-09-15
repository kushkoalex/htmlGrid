(function (global, ht) {
    global.onload = function () {
        global.cnCt.bindTemplates(ht.tmpls);
        var placeholder = global.document.getElementById("placeholder"),

            data = [
                {year: 2016, day: 21, month: "February", dow: "Monday"},
                {year: 1990, day: 1, month: "January", dow: "Friday"},
                {year: 2013, day: 5, month: "October", dow: "Saturday"},
                {year: 2016, day: 27, month: "September", dow: "Sunday"},
                {age: 30},
            ],
            columns = [
                {field: 'day', title: 'Day'},
                {field: 'dow', title: 'Day Of Week'},
                {field: 'month', title: 'Month'},
                {field: 'year', title: 'Year'},
                {
                    field: 'car', title: 'Car',
                    columns: [
                        {field: 'color', title: 'Color'},
                        {field: 'engine', title: 'Engine'}
                    ]
                },
                {field: 'country', title: 'Country'},
                {
                    field: 'owner', title: 'Owner',
                    columns: [
                        {field: 'firstName', title: 'First name'},
                        {field: 'lastName', title: 'Last name'},
                        {field: 'age', title: 'Age'}
                    ]
                }
            ];
        var options = {cssClass: 'tbl'};
        ht.htmlTable(placeholder, data, columns, options);
    };
})(this, HT);