var tbody = d3.select('tbody');
var input = d3.select('input');
var btn = d3.select('button');
var filterData;

showData(data);

function showData(data) {
    tbody.html('');
    
    data.forEach(obj => {
        var row = tbody.append('tr');
        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

btn.on('click', () => {
    var date = input.property('value');
    filterData = data.filter(obj => obj.datetime == date);
    showData(filterData);
});