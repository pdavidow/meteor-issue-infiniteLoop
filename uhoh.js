Uhoh = function() {
    this.reactiveDict = new ReactiveDict();
};

Uhoh.prototype = {
    isStarted: function() {
        var value = this.reactiveDict.get("isStarted");
        if (_.isNull(value) || _.isUndefined(value)) {
            this.reactiveDict.set("isStarted", false);
            return this.reactiveDict.get("isStarted");
        }
        return value;
    }
};