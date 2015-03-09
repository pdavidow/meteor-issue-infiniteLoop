LibraryPieceSpec_Sample1 = Object.create(LibraryPieceFactorySpec);

Object.defineProperties(LibraryPieceSpec_Sample1, {
    "myName": {get: function () {
        return "Sample1";
    }},
    "composer": {get: function () {
        return "PJD";
    }},
    "measures": {get: function () {
        return [new Measure()];
    }}
});

