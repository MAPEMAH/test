jQuery('input').on('paste', function (e) {
    e.preventDefault();

    var text = e.originalEvent.clipboardData.getData('text/plain');
    var input = e.currentTarget;
    var inputs = $('input');
    var tRows = $('tbody>tr');
    // console.log(inputs);
    var smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var nextLetters = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var letters = ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // var inputs = document.querySelector('input[name]');
    // var table = jQuery('tbody').children();


    // for (i=0;i<numbers.length; i++) {
    //     // var thName = numbers[i];
    //     // var trName = letters[i];
    //     // jQuery('#thead_row').append(`<th>${trName}</th>`);
    //     // jQuery('#first_row').append('<td><input type="text"></td>');
    //     // jQuery('tbody').append(`<tr><th>${thName}</th><td><input type="text"></td></tr>`);
    //
    //     // console.log(thName);
    //     // console.log(trName);
    // }


    // var tableRow = table.children();
    // console.log(tableRow);

    // console.log(letters);
    // console.log(numbers);
    // ruleName = /[А-ЩЬЮЯЇІЄҐ][а-щьюяїієґ]+\s[А-ЩЬЮЯЇІЄҐ][а-щьюяїієґ]+?\s[А-ЩЬЮЯЇІЄҐ][а-щьюяїієґ]+/g;
    // ruleMiddle = /;(.*?);/g;
    // ruleYear = /[0-9]+/g;


    const arr = text.split('\n').map(x => x.split(';'));




    console.log(arr);


    //inser 3 and another column
    var nextNumbers = [];
    for (i = 3; i <= 26; i++) {
        nextNumbers.push(i);
    }
    var numbers = [];
    for (i = 1; i <= 26; i++) {
        numbers.push(i);
    }


    var rowNum = $(input).parentElement;
    console.log(rowNum);





    // for (k = 0; k < array.length; k++) {
    //     if (tRows.length < foundString.length) {
    //         var newInput = `<td><input type="text" name="${nextLetters[k]}${numbers[0]}" value=""/></td>`;
    //         $('#first_row').append(newInput);
    //         var newTh = `<th>${letters[k]}</th>`
    //         $('thead>tr').append(newTh);
    //
    //
    //         //
    //         //     var newRow = `<tr>
    //         // <th> ${nextNumbers[k]} </th>
    //         // <td><input type="text" name= "${smallLetters[k]}${numbers[k]}" value=""/></td></tr>`;
    //         //
    //         //     $('tbody').append(newRow);
    //
    //     }
    //
    //
    //     //
    //     // nextNumber = numbers[k];
    //     // nextLetter = letters[k];
    //     //
    //     // var test = `<th>${letters[k]}</th>`;
    //     // var testInput = `<td><input type="text" name= "${nextLetters[k]}${numbers[0]}" value=""/></td>`;
    //
    //     // $('table>thead>tr').append(test);
    //     // $('tbody>tr').append(testInput);
    //
    //
    //
    // }


});


var currentColumn;

jQuery('thead th').on('contextmenu', function (e) {
    e.preventDefault();

    currentColumn = e.currentTarget;

    var menu = jQuery('#column-menu');

    menu.addClass('d-block');

    menu.css({
        left: e.clientX,
        top: e.clientY
    });
});

jQuery('#column-menu [data-action]').on('click', function (e) {
    e.preventDefault();

    var action = e.currentTarget.getAttribute('data-action');

    switch (action) {
        case 'add-left':

            break;

        case 'add-right':

            break;

        case 'remove':

            break;
    }

    jQuery('#column-menu').removeClass('d-block');
});
