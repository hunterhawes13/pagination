/**
 * Pagination is common on news sites, e-commerce, and blogs. Write a function that
 * prints out the pagination text.
 */

function paginationText(pageNumber, pageSize, totalProducts) {

	 var firstNumber = (pageSize * (pageNumber - 1));
     var display = totalProducts - firstNumber;
     var first = firstNumber + 1;
     var second = firstNumber + display;
     if ((pageNumber == 1) && (pageSize < totalProducts)) {second = pageSize;}
     var str = "Showing " + first + " to " + second + " of " + totalProducts + " Products.";
      console.log(str);
     return str;

}


console.assert(paginationText(1, 10, 30) === 'Showing 1 to 10 of 30 Products.')
console.assert(paginationText(3, 10, 26) === 'Showing 21 to 26 of 26 Products.')
console.assert(paginationText(1, 10,  8) === 'Showing 1 to 8 of 8 Products.')
