var className = "Piece";

Piece = function (name, ownerId) {
    check(ownerId, String);
    this.name = name;
    this.ownerId = ownerId;
};

Piece.prototype = Object.create(LibraryPiece.prototype);
Piece.prototype.constructor = Piece;

Piece.fromJSONValue = function(value) {
    return new Piece(value.name, value.ownerId);
};

_.extend(Piece.prototype, {
    typeName: function() {
        return className;
    },
    toJSONValue: function() {
        return {name: this.name, ownerId: this.ownerId};
    }
});