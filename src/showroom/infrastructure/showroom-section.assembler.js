import {ShowroomSection} from "@/showroom/domain/model/showroom-section.entity.js";
import "@/showroom/infrastructure/showroom-resources.js";

/**
 * assembler that converts showroom section resources into domain entities
 */
export class ShowroomSectionAssembler {
    static toEntityFromResource(resource) {
        return new ShowroomSection({...resource});
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        return response.data.map(resource => {
            try {
                return this.toEntityFromResource(resource);
            } catch (error) {
                console.error(error.message);
                return null;
            }
        }).filter(section => section !== null);
    }
}
