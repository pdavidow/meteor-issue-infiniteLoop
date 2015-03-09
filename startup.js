Meteor.startup(function () {
    if (Meteor.isClient) {
        Librarian.reset();
    }
});

