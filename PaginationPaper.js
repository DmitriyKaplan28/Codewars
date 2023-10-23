function PaginationHelper(collection, itemsPerPage) {
    this.page = [];
    for (n = 0; n < Math.ceil(collection.length / itemsPerPage); n++) {
        this.page[n] = collection.slice(n * itemsPerPage, (n + 1) * itemsPerPage);
    }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    if (this.page.length == 0) {
        return 0;
    } else {
        return this.page[0].length * (this.page.length - 1) + this.page[this.page.length - 1].length;
    }
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return this.page.length;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.page.length) {
        return - 1;
    } else {
        return this.page[pageIndex].length;
    }
}