var roleCreatpickcreep = {
    run:function (creep) {
        var name = "Picker_" + Game.time;
        Game.spawns.Spawn1.spawnCreep([CARRY,CARRY,MOVE,MOVE,MOVE],name,{memory:{role:'Picker'}});
    }
}
module.exports = roleCreatpickcreep;