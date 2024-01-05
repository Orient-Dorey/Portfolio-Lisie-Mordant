var fldGrd = new FldGrd(document.querySelector('.fld-grd'), {
    /**
     * Maximum row height
     *
     * @type {Integer}
     */
    rowHeight: 250,

    /**
     * Give "orphans" — elements in the last row that do not form a complete row — a specific
     * height. By default, "orphans" will have the average height of the other rows
     *
     * @type   {Function}
     * @param  {Object}   rows
     * @param  {number}   rows.heightAvg Average row height
     * @param  {Array}    rows.heights
     * @return {number}
     */
    rowHeightOrphan: rows => Math.round(rows.heightAvg),

    /**
     * CSS Selector for fluid grid items. It's useful if you also have other elements in your
     * container that shouldn't be treated as grid items
     *
     * @type {string}
     */
    itemSelector: '*',

    /**
     * CSS Selector for objects inside grid items. `width` and `height` is applied to this element
     *
     * @type {string}
     */
    objSelector: 'img',

    /**
     * Specify data attribute names that are used to determine the dimensions for each item
     *
     * @type {string}
     */
    dataWidth: 'data-fld-width',
    dataHeight: 'data-fld-height',
});

// Manually update fluid grid
fldGrd.update();

// Destroy `fldGrd` instance
fldGrd.destroy();
