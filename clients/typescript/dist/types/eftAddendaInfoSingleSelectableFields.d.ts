import { EftAddendaInfoFields } from "./eftAddendaInfoFields";
import { VersionType } from "./versionType";
export interface EftAddendaInfoSingleSelectableFields {
    includeAllEftAddendaInfoFields: boolean | null;
    eftAddendaInfoFields: EftAddendaInfoFields;
    version1: VersionType;
}
