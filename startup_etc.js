Meteor.methods({
    updateCurrentPieceId: function(id) {
        var currentUserId = Meteor.userId();
        if (!currentUserId) return null;
        return Meteor.users.update(currentUserId, {$set: {'currentPieceId': id}});
    }
});



