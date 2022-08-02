var roleCreatcarrycreep = {
    run:function (creep) {
        var name = "Carryer_" + Game.time;
        Game.spawns.Spawn1.spawnCreep([CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],name,{memory:{role:"Carryer"}});
    }
}
module.exports = roleCreatcarrycreep;