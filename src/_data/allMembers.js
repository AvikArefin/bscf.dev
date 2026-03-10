const team = require('./team.json');

module.exports = () => {
    if (team && team.founder && team.coreTeam) {
        return [team.founder, ...team.coreTeam];
    }
    return [];
};