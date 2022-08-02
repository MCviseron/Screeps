var roleCarryer = {
    run:function (creep) {
        if(creep.memory.carryer && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.carryer = false;
        }
        if(!creep.memory.carryer && creep.store.getFreeCapacity() == 0) {
            creep.memory.carryer = true;
        }
        if(!creep.memory.carryer) {
            var targets = creep.room.find(FIND_STRUCTURES,{filter:(structure) => {
                return (structure.structureType == STRUCTURE_CONTAINER);
                }});
            if(creep.withdraw(targets[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
        if(creep.memory.carryer) {
            var structures = creep.room.find(FIND_STRUCTURES,{filter:(structure) => {
                return (structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_STORAGE) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }});
            if(structures.length > 0) {
                if(creep.transfer(structures[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structures[0]);
                }
            }
        }
    }
}
module.exports = roleCarryer;