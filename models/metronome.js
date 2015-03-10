Metronome = function() {
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