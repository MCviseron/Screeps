var roleCreatebuicreep = {
    run:function(creep){
        var buiname = 'Bui_' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE],buiname,{memory:{role:'Builder'}});
    }
}
module.exports = roleCreatebuicreep;