Session.set("isClick",false);

var currentPieceId = function() {
    return Session.get("currentPieceId");
};

Template.main.helpers({
    isClickStart: function() {
        return Session.get("isClick");
    }
});
Template.main.events({
    "click #start": function() {
        debugger;
        Session.set("isClick",true);
    }
});

Template.pieces.helpers({
    isDisabled: function() {
        var id = currentPieceId();
        debugger;
        return (new Metronome).isStarted;
    }
});






