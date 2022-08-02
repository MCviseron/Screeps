var roleWorker = {
    run:function(creep) {
        if(creep.memory.worker && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.worker = false;
        }
        if(!creep.memory.worker && creep.store.getFreeCapacity() == 0) {
            creep.memory.worker = true;
        }
        if(!creep.memory.worker) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        if(creep.memory.worker) {
            var structures = creep.room.find(FIND_STRUCTURES,{filter:(structure) => {
                return(structure.structureType == STRUCTURE_CONTAINER) && structure.store.getFreeCapacity(RESOURCE_ENERGY) >0;
                }});
            if(structures.length > 0) {
                if(creep.transfer(structures[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structures[0]);
                }
            }
        }
    }

}
module.exports = roleWorker;