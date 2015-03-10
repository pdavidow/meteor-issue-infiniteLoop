LibraryPieces = new Mongo.Collection('library_pieces');

Meteor.methods({
    insertLibraryPiece: function(object) {
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
        Meteor.call('insertLibraryPiece', {name: "n1"});
        Meteor.call('insertLibraryPiece', {name: "n2"});
    }
});

