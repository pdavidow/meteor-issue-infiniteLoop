LibraryPieceSpec_Sample2 = Object.create(LibraryPieceFactorySpec);

Object.defineProperties(LibraryPieceSpec_Sample2, {
    "myName": {get: function () {
        return "Sample2";
    }},
    "composer": {get: function () {
        return "PJD";
    }},
    "measures": {get: function () {
        return [new Measure(),new Measure()];
    }}
});