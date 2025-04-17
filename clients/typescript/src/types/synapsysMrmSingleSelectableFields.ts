import { SynapsysMrmFields } from "./synapsysMrmFields";
import { VersionType } from "./versionType";

export interface SynapsysMrmSingleSelectableFields {
    includeAllSynapsysMrmFields: boolean | null;
    synapsysMrmFields: SynapsysMrmFields;
    version1: VersionType;
}