PieceManager = (function() {

    Meteor.methods({
        insertPieceAsJSON: function(object) {
            check(object, Match.ObjectIncluding({name: String}));
            return Pieces.insert(object);
        },
        removePieceById: function(id) {
            check(id, String);
            return Pieces.remove(id);
        },
        removeAllPiecesForOwnerId: function(ownerId) {
            check(ownerId, String);
            return Pieces.remove({ownerId: ownerId});
        }
    });

    _findPieceBy_Id = function(id) {
        check(id, Match.OneOf(String, null));
        if (_.isNull(id)) return null;
        return Pieces.findOne({"_id": id});
    };
    _cursorOnAllPieces = function() {
        return Pieces.find({});
    };
    _cursorOnPiecesForOwnerId = function(id) {
        check(id, String);
        return Pieces.find({ownerId: id});
    };
    _cursorOnPiecesForCurrentUser = function() {
        var id = Meteor.userId();
        check(id, String);
        return _cursorOnPiecesForOwnerId(id);
    };

    if (Meteor.isClient) {
        _insertPiece = function(piece, callback) {
            check(piece, Piece);
            var object = piece.toJSONValue();
            Meteor.call('insertPieceAsJSON', object, callback);
        };
        _removePiece = function(piece) {
            check(piece, Piece);
            _removePieceById(piece._id);
        };
        _removePieceById = function(id) {
            check(id, String);
            Meteor.call('removePieceById', id);
        };
        _removeAllForOwnerId = function(ownerId) {
            Meteor.call('removeAllPiecesForOwnerId', ownerId);
        };
        _removeAllForCurrentUser = function() {
            var id = Meteor.userId();
            check(id, String);
            _removeAllForOwnerId(id);
        };
    }

    serverAPI = {
        findPieceBy_Id: _findPieceBy_Id,
        cursorOnAllPieces: _cursorOnAllPieces, // pub/sub nonwithstanding
        cursorOnPiecesForOwnerId: _cursorOnPiecesForOwnerId,
        cursorOnPiecesForCurrentUser: _cursorOnPiecesForCurrentUser
    };
    if (Meteor.isServer) return serverAPI;

    if (Meteor.isClient) {
        clientAPI = _.extend(serverAPI, {
            insertPiece: _insertPiece,
            removePiece: _removePiece,
            removePieceById: _removePieceById,
            removeAllForOwnerId: _removeAllForOwnerId,
            removeAllForCurrentUser: _removeAllForCurrentUser
        });
        return clientAPI;
    }
})();