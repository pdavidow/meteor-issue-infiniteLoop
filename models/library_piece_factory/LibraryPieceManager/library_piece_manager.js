LibraryPieceManager = (function() {
    LibraryPieces = new Mongo.Collection('library_pieces', {
        transform: function (doc) {
            return LibraryPiece.fromJSONValue(doc);
        }
    });

    Meteor.methods({
        insertLibraryPieceAsJSON: function(object) {
            return LibraryPieces.insert(object);
        },
        removeLibraryPieceById: function(id) {
            check(id, String);
            return LibraryPieces.remove(id);
        },
        removeAllLibraryPieces: function() {
            return LibraryPieces.remove({});
        }
    });

    _findLibraryPieceBy_Id = function(id) {
        check(id, String);
        return LibraryPieces.findOne({"_id": id});
    };
    _cursorOnLibraryPieces = function() {
        return LibraryPieces.find({});
    };

    if (Meteor.isClient) {
        _insertLibraryPiece = function(libraryPiece) {
            check(libraryPiece, LibraryPiece);
            var object = libraryPiece.toJSONValue();
            Meteor.call('insertLibraryPieceAsJSON');
        };
        _removeLibraryPiece = function(libraryPiece) {
            check(libraryPiece, LibraryPiece);
            _removeLibraryPieceById(libraryPiece._id);
        };
        _removeLibraryPieceById = function(id) {
            check(id, String);
            Meteor.call('removeLibraryPieceById', id);
        };
        _removeAll = function() {
            Meteor.call('removeAllLibraryPieces');
        };
    }

    serverAPI = {
        findLibraryPieceBy_Id: _findLibraryPieceBy_Id,
        cursorOnLibraryPieces: _cursorOnLibraryPieces
    };
    if (Meteor.isServer) return serverAPI;

    if (Meteor.isClient) {
        clientAPI = _.extend(serverAPI, {
            insertLibraryPiece: _insertLibraryPiece,
            removeLibraryPiece: _removeLibraryPiece,
            removeLibraryPieceById: _removeLibraryPieceById,
            removeAll: _removeAll
        });
        return clientAPI;
    }
})();