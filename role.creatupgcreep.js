var roleCreatupgcreep = {
        run:function(creep) {
            var upgname = 'Upg_' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],upgname,{memory:{role:'Upgrader'}});
        }
}
module.exports = roleCreatupgcreep;