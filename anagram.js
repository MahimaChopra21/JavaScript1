
 function sort(a1) {


    var temp;
    for (var i = 0; i < a1.length; i++) {
        for (var j = i + 1; j < a1.length; j++) {
            /* for swaping the positions */
            if (a1[i] > a1[j]) {
                temp = a1[i];
                a1[i] = a1[j];
                a1[j] = temp;
            }
        }
    }

    return a1;
}

function anagram(param1, param2) {

    if (param1.length !== param2.length)
        return false;
    var param1 = param1.toLowerCase();
    var param2 = param2.toLowerCase();
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < param1.length; i++) {
        arr1[i] = param1[i];
        arr2[i] = param2[i];
    }

    var arr1 = sort(arr1);
    var arr2 = sort(arr2);
    for (var i = 0; i < arr1.length; i++)
        if (arr1[i] !== arr2[i])
            return false;
    return true;


}
anagram("tap","pat");

