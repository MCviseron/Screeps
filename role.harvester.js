var roleHarvester50 = {
    run:function(creep) {
        if(creep.store.getFreeCapacity()>0) {
                var sources1 = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources1[0])==ERR_NOT_IN_RANGE) {
                creep.moveTo(sources1[0]);
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES,{filter:(structure) => {
                return (structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_STORAGE) && structure.store.getFreeCapacity(RESOURCE_ENERGY) >0;
                    }
                });
                if (targets.length > 0) {
                    if(creep.transfer(targets[0],RESOURCE_ENERGY)==ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }
                else {//build
                    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
                        creep.memory.building = false;
                    }
                    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
                        creep.memory.building = true;
                    }
            
                    if(creep.memory.building) {
                        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                        if(targets.length) {
                            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                            }
                        }
                    }
                }
            }
    }
}
module.exports = roleHarvester50;