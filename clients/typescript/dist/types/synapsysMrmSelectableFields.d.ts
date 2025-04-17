import { SynapsysMrmFields } from "./synapsysMrmFields";
import { VersionType } from "./versionType";
export interface SynapsysMrmSelectableFields {
    includeAllSynapsysMrmFields: boolean | null;
    synapsysMrmFields: SynapsysMrmFields;
    version1: VersionType;
}
