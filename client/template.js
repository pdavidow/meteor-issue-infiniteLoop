var currentPiece = function() {
    var id = Session.get("currentPieceId");
    if (!id) return null;
    return PieceManager.findPieceBy_Id(id);
};

Template.libraryPieces.helpers({
    cursorOnLibraryPieces: function() {
        return LibraryPieces.find({});
    }
});
Template.libraryPieces.events({
    "click #import": function() {
        var callback;
        var id = $('#libraryPieceList').val();
        var libraryPiece = LibraryPieces.findOne({"_id": id})
        if (!libraryPiece) return;
        var piece = libraryPiece.asPieceForCurrentUser();
        callback = function (error, result) {
            if (result) UserPieceManager.updateCurrentPieceId(result);
        };
        PieceManager.insertPiece(piece, callback);
    }
});

Template.pieces.helpers({
    isPieceListDisabled: function() {
        var piece = currentPiece();
        debugger;
        if (piece) return piece.metronome.isStarted;
        return false;
    },
    cursorOnPiecesForCurrentUser: function() {
        return PieceManager.cursorOnPiecesForCurrentUser();
    }
});






