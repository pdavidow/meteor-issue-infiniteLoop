Librarian = {
    get specSubtypes() {
        return ([
            LibraryPieceSpec_Sample1,
            LibraryPieceSpec_Sample2
        ]);
    },
    reset: function() {
        LibraryPieceManager.removeAll();
        this._repopulateDatabase();
    },
    _repopulateDatabase: function() {
        this.specSubtypes.forEach(function(each) {
            LibraryPieceManager.insertLibraryPiece(each.factoryPiece);
        });
    }
};