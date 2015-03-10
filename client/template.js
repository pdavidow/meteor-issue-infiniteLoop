var currentPieceId = function() {
    return Session.get("currentPieceId");
};

Template.pieces.helpers({
    isDisabled: function() {
        var id = currentPieceId();
        debugger;
        return (new Metronome).isStarted;
    }
});






