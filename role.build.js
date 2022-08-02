var roleBuilder = {
    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
			else {//upgrader
				if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
					creep.memory.upgrading = false;
				}
				if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
					creep.memory.upgrading = true;
				}

				if(creep.memory.upgrading) {
					if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
						creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
					}
				}
				else {
					// var sources = creep.room.find(FIND_SOURCES);
					// if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
					//     creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
					// }
					var structures = creep.room.find(FIND_STRUCTURES,{filter:(structure)=> {
							return (structure.structureType == STRUCTURE_STORAGE);
						}});
					if (creep.withdraw(structures[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(structures[0]);
					}
				}
				///upgrader

			}
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;