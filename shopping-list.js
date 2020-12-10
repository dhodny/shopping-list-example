Calc = function(elmId, itemList) {
  this._itemList = itemList;

  this._tableBodyElm = document.getElementById(elmId.tableBodyElmId);
  this._calcButtonElm = document.getElementById(elmId.calcButtonElmId);

  this._buildDom();
  this._addEventListeners();
};

Calc.prototype._buildDom = function() {
  for (var i=0; i<this._itemList.length; i++) {
    this._addRow(this._tableBodyElm, this._itemList[i])
  }
};

Calc.prototype._addEventListeners = function() {
  this._calcButtonElm.addEventListener('click', this._calcButtonClickEventHandler.bind(this));
};

Calc.prototype._calcButtonClickEventHandler = function() {
  
};

Calc.prototype._addRow = function(parentElm, value) {
  var rowElm = this._addEmptyRow(parentElm);
  var colElms = this._addEmptyCols(rowElm, 4);

  var inputElms = [
    this._addInput(colElms[0], value.item, { type: 'text', size: 25, maxLength: 255 }),
    this._addInput(colElms[1], value.price, { type: 'number', size: 5, min: 0 }),
    this._addInput(colElms[2], value.hasOwnProperty('amount') ? value.amount : 0, { type: 'number', size: 10, min: 0 }),
    this._addInput(colElms[3], 0, { type: 'number', size: 10, min: 0, disabled: true }),
  ];

  inputElms[2].addEventListener('change', function(e) {
    var amountInputElm = e.target;
    var amount = amountInputElm.value;

    // console.log(amountInputElm.parentNode);

  }.bind(this));

  return inputElms;
};

Calc.prototype._addInput = function(parentElm, value, attr) {
  var inputElm = document.createElement('input');

  for (var prop in attr) {
    inputElm[prop] = attr[prop];
  }

  parentElm.appendChild(inputElm);
  inputElm.value = value;
  
  return inputElm;
};

Calc.prototype._addEmptyRow = function(parentElm) {
  var rowElm = document.createElement('tr');
  parentElm.appendChild(rowElm);
  return rowElm;
};

Calc.prototype._addEmptyCol = function(parentElm) {
  var colElm = document.createElement('td');
  parentElm.appendChild(colElm);
  return colElm;
};

Calc.prototype._addEmptyCols = function(parentElm, count) {
  var colElms = [];

  for (var i=0; i<count; i++) {
    colElms.push(this._addEmptyCol(parentElm));
  }

  return colElms;
};
