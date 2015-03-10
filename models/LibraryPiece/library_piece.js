var className = "LibraryPiece";

LibraryPiece = function(name) {
    this.name = name;
};

LibraryPiece.fromJSONValue = function(value) {
    return new LibraryPiece(value.name);
};

LibraryPiece.prototype = {
    typeName: function() {
        return className;
    },
    toJSONValue: function() {
        return {name: this.name};
    },
    get metronome() {
      return new Metronome();
    },
    asPieceForOwnerId: function(id) {
        check(id, String);
        return new Piece(this.name, id);
    },
    asPieceForCurrentUser: function() {
        var id = Meteor.userId();
        check(id, String);
        return this.asPieceForOwnerId(id);
    }
};