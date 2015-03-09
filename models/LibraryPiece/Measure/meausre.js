var className = "Measure";

Measure = function() {
};

Measure.fromJSONValue = function(value) {
    var measure = new Measure();
    return measure;
};

Measure.prototype = {
    typeName: function() {
        return className;
    },
    toJSONValue: function() {
        return {
        };
    },
    get piece() {
        return this._piece;
    },
    set piece(piece) {
        check(piece, LibraryPiece);
        this._piece = piece;
    }
};