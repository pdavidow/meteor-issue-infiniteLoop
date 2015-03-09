var className = "LibraryPiece";

LibraryPiece = function (name, composer, catalogReference) {
    catalogReference = catalogReference || "";

    this.name = name;
    this.composer = composer;
    this.catalogReference = catalogReference;
};

LibraryPiece.fromJSONValue = function(value) {
        var libraryPiece = this.instanciateFromJSONValue(value);
        libraryPiece.reifyFromJSONValue(value);
        return libraryPiece;
};
LibraryPiece.instanciateFromJSONValue = function(value) {
        return new this(
            value.name,
            value.composer,
            value.catalogReference
        );
};

LibraryPiece.prototype = {
    typeName: function() {
        return className;
    },
    toJSONValue: function() {
        return {
            name: this.name,
            composer: this.composer,
            catalogReference: this.catalogReference,
            measures: this.measures.map(function(each) {
                return each.toJSONValue();
            })
        };
    },
    reifyFromJSONValue: function(value) {
        var measures = value.measures.map(function (each) {
            return Measure.fromJSONValue(each);
        });
        this.addMeasures(measures);
    },
    get measures() {
        return this._measures = this._measures || [];
    },
    addMeasure: function(measure) {
        check(measure, Measure);
        measure.piece = this;
        this.measures.push(measure);
    },
    addMeasures: function(measures) {
        var that = this;
        measures.forEach(function(each) {
            that.addMeasure(each); // ES6 fat arrow
        });
    },
    get metronome() {
      return new Metronome();
    },
    asPieceForOwnerId: function(id) {
        check(id, String);
        return new Piece(this.name, this.composer, this.catalogReference, id);
    },
    asPieceForCurrentUser: function() {
        var id = Meteor.userId();
        check(id, String);
        return this.asPieceForOwnerId(id);
    }
};