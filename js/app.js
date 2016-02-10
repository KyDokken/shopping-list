// Function define
// Function to add the items
function addItem() {
    //alert("I've just activated the addItem() function");
    var itemValue = $('#addItemValue').val(); //Value of inputbox
    var dropDownValue = $('#list-name').val();
    console.log(dropDownValue);
    if (dropDownValue == null) {
        alert('Choose a menu!')
    }
    if (itemValue.length === 0) { //invalid input message
        alert('Add something please!'); //Message to user
    } else {
        var row = $('<li class="li-items"><button class="checkbox">✓</button>' + itemValue + '<button class="delete">x</button></li>');
        $('.' + dropDownValue + ' .ulwrap').append(row);
    }
}


//checkoff an item
function checkItem() {
    $(this).parent().toggleClass('checked');

    // alert("I've just activated the checkItem() function");
}

//remove an old item(specific)
function removeItem() {
    $(this).parent().remove();
    //alert("I've just activated the removeItem() function");
}
//general delete function
function deleteAll() {
    $('.ulwrap').empty();
    //alert("I've just activated the deleteAll() function");
}

//function usage

$(document).ready(function () {
        //#addItem activate addItem
        $('#addItem').on('click', function () {
            addItem();
        });
        //#delete-all activate deleteAll
        $('#delete-all').on('click', function () {
            deleteAll();
        });
    })
    //.delete activate removeItem
$(document).on('click', '.delete', removeItem);
//.checkbox activate checkItem
$(document).on('click', '.checkbox', checkItem);
