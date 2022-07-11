// $(document).ready(function()
// {
//     $.getJSON("scores.json", function(data){
//         var some_data = '';
//         $.each(data, function(key, value){
//             some_data += '<tr>';
//             some_data += '<td>' +value.name+ '</td>';
//             some_data += '<td>' +value.data+ '</td>';
//             some_data += '<td>' +value.NumberofTurns+ '</td>';
//             some_data += '<td>' +value.time+ '</td>';
//             some_data += '</tr>';
//         });
//         $('#myTable').append(some_data);
//     });
// });

//this code is for selector. it is written in Jquery.
//$ sign is to define Jquery. selector is to find Html element
var cardNum = '[{"NAMEVAR":"12","CODE":"1"},{"NAMEVAR":"14","CODE":"2"},{"NAMEVAR":"16","CODE":"2"}]';//in this line is variable, which is defined with Json data. 

var jsonData = $.parseJSON(cardNum);//here is variable, which is defined with Json variable

var $select = $('#card-Num');//in this veriable is written  selector id
$(jsonData).each(function (index, o) {//this function defines where to write Json data
    var $option = $("<option/>").attr("value", o.CODE).text(o.NAMEVAR);
    $select.append($option);//this line inserts Json content at the end of the selected elements
});//end of the jquery selection code



//this function is to put Json data with ajax in html table tag
$( document ).ready(function() {
    $.ajax({//ajax method
        url: 'scores.json',//source of json code
        type: 'get',//to get json file
        dataType: 'json',
        error: function(data){//if error will be defined, write nothing
        },
        success: function(data){//in case of successful run, code will write Json data in table with veriable tr, which is written down
            var tr = $('<tr>');// '' these quotes are saying that now you are writing html tags
            tr.append('<td>' + data.name + '<td>');//with data.name I brought first value of Json in html table
            tr.append('<td>' + data.date + '<td>');
            tr.append('<td>' + data.NumberofTurns + '<td>');
            tr.append('<td>' + data.time + '<td>');

            $('#myTable').append(tr);//append inserts Json content at the end of the selected elements
        }
    });
});




// function GetData() {
//     $.ajax({
//         url: 'scores.json',
//         method: 'GET',
//         dataType: 'json',
//         contentType: 'application/json; charset=utf-8',
//         success: function (result) {
//             //after successfully call bind data to Table
//             if (result && result.length > 0)
//             {
//                 jQuery.each(result, function (i, val) {
//                     var tablerow = "<tr>"
//                         + "<td>" + val.name + "</td>"
//                         + "<td>" + val.date + "</td>"
//                         + "<td>" + val.NumberofTurns + "</td>"
//                         + "<td>" + val.time + "</td>"
//                         + "</tr>";
//                     $("#myTable").append(tablerow);
//                 });
//             }
//         },
//         fail: function (jqXHR, textStatus) {
//             alert("Request failed: " + textStatus);
//         }
//     })
// }