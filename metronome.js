Metronome = function() {
    //this.reactiveDict = new ReactiveDict();
};

Metronome.prototype = {
    get isStarted() {
        var value = this.reactiveDict.get("isStarted");
        if (_.isNull(value) || _.isUndefined(value)) {
            this.reactiveDict.set("isStarted", false);
            return this.reactiveDict.get("isStarted");
        }
        return value;
    },
    get reactiveDict() {
        return this._reactiveDict = this._reactiveDict || new ReactiveDict();
    }
};

/*
Metronome.isStarted = function() {
    var value = this.reactiveDict.get("isStarted");
    if (_.isNull(value) || _.isUndefined(value)) {
        this.reactiveDict.set("isStarted", false);
        return this.reactiveDict.get("isStarted");
    }
    return value;
};
*/
