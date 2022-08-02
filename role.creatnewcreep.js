var roleCreatnewcreep = {
    run:function(creep) {
        var harname = 'Har_' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE],harname,{memory:{role:'Harvester'}});
    }
}
module.exports = roleCreatnewcreep;