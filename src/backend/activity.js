class Activity {
    constructor (name, start, end, duration, notes) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.notes = notes;
    }
    recalcDuration() {
        this.duration = this.end - this.start;
    }
    recalcEnd() {
        this.end = this.start + this.duration;
    }
    editNotes(newNotes) {
        this.notes = newNotes;
    }
    editName(newName) {
        this.name = newName;
    }
    editStart(newStart) {
        this.start = newStart;
        this.end = this.start + this.duration;
    }
}

class Schedule {
    constructor () {
        this.activityList = [];
    }

    searchByName(name) {
        return this.activityList.filter((x) => x == name);
    }

}