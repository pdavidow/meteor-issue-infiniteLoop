Session.set("isClick",false);

var something = function() {
    return Session.get("something");
};

Template.main.helpers({
    isClickStart: function() {
        return Session.get("isClick");
    }
});
Template.main.events({
    "click #start": function() {
        Session.set("isClick",true);
    }
});

Template.pieces.helpers({
    isDisabled: function() {
        something();
        debugger;
        return (new Metronome).isStarted;
    }
});






