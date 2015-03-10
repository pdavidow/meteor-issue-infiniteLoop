LibraryPieces = new Mongo.Collection('library_pieces', {
    transform: function (doc) {
        return LibraryPiece.fromJSONValue(doc);
    }
});

Meteor.methods({
    insertLibraryPieceAsJSON: function(object) {
        return LibraryPieces.insert(object);
    },
    removeAllLibraryPieces: function() {
        return LibraryPieces.remove({});
    },
    updateCurrentPieceId: function(id) {
        var currentUserId = Meteor.userId();
        if (!currentUserId) return null;
        return Meteor.users.update(currentUserId, {$set: {'currentPieceId': id}});
    }
});

Meteor.startup(function () {
    if (Meteor.isClient) {
        Meteor.call('removeAllLibraryPieces');
        Meteor.call('insertLibraryPieceAsJSON', (new LibraryPiece('n1').toJSONValue()));
        Meteor.call('insertLibraryPieceAsJSON', (new LibraryPiece('n2').toJSONValue()));
    }
});

