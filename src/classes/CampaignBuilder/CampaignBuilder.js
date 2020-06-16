import Step from "../Step/Step"
import Team from "../Team/Team"
import Campaign from "../Campaign/Campaign"

class CampaignBuilder {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    setTeams(team_instances) {
        const buildTeam = (team) => {
            const steps = team.steps.map(step => new Step(step.step_id, step.step_name, step.status))
            return new Team(team.team_id, team.team_name, steps)
        }
        this.teams = team_instances.map(team => buildTeam(team))
        return this
    }

    build() {
        if (!('teams' in this)) {
            throw new Error('teams is missing')
        }

        return new Campaign(this.id, this.name, this.teams)
    }
}

export default CampaignBuilder

