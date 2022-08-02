var roleCreatworkcreep = {
    run:function (creep) {
        var name = "Worker_" + Game.time;
        Game.spawns.Spawn1.spawnCreep([WORK,WORK,WORK,MOVE,CARRY,CARRY,MOVE],name,{memory:{role:'Worker'}});
    }
}
module.exports = roleCreatworkcreep;