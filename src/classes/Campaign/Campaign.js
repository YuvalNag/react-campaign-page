class Campaign {
    constructor(id, name, teams) {
        this.id = id;
        this.name = name || "Classified";
        this.teams = teams || []
    }
}
export default Campaign