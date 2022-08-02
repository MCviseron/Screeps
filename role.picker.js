var rolePicker = {
    run:function(creep) {
        var targets = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
        if(targets && creep.store[RESOURCE_ENERGY] == 0) {
            if(creep.pickup(targets) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets);
            }
        }
        if(creep.store.getFreeCapacity() == 0) {
            var targetss = creep.room.find(FIND_STRUCTURES,{filter:(structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_STORAGE) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }});
            if (targetss.length > 0) {
                if(creep.transfer(targetss[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targetss[0]);
                }
            }
        }
    }
}
module.exports = rolePicker;