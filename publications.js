if (Meteor.isServer) {
    Meteor.publish("userData", function () {
        var defaultInclusionFields = {
                emails:1,
                profile:1,
                username:1,
                currentPieceId:1
        };
        if (this.userId) {
            return Meteor.users.find({_id: this.userId}, {fields: defaultInclusionFields});
        } else {
            this.ready();
        }
    });
}

