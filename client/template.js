var currentPieceId = function() {
    return Session.get("currentPieceId");
};

Template.libraryPieces.helpers({
    cursorOnLibraryPieces: function() {
        return LibraryPieces.find({});
    }
});

Template.pieces.helpers({
    isDisabled: function() {
        var id = currentPieceId();
        debugger;
        return (new Metronome).isStarted;
    }
});






