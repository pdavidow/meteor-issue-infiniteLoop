Session.set("isClick",false);

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
        Session.get("whatever");
        debugger;
        return (new Uhoh).isStarted();
    }
});






