import { EftAddendaInfoFields } from "./eftAddendaInfoFields";
import { VersionType } from "./versionType";
export interface EftAddendaInfoSelectableFields {
    includeAllEftAddendaInfoFields: boolean | null;
    eftAddendaInfoFields: EftAddendaInfoFields;
    version1: VersionType;
}
