var roleTower = {
    run:function(tower) {
        if(tower) {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES,{
                filter:(structure)=>structure.hits<structure.hitsMax
            });
            if(closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                Game.notify('Your Building is attacked. your tower is attack enemy! (sreeps.com Server)' + Game.time);
                tower.attack(closestHostile);
            }
        }
    }
}
module.exports = roleTower;