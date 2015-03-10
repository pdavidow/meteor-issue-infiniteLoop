Meteor.startup(function () {
    if (Meteor.isClient) {
        Meteor.call('removeAllLibraryPieces');
        Meteor.call('insertLibraryPieceAsJSON', (new LibraryPiece('n1').toJSONValue()));
        Meteor.call('insertLibraryPieceAsJSON', (new LibraryPiece('n2').toJSONValue()));
    }
});

