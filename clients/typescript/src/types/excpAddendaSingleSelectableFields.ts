import { ExcpAddendaFields } from "./excpAddendaFields";
import { VersionType } from "./versionType";

export interface ExcpAddendaSingleSelectableFields {
    includeAllExcpAddendaFields: boolean | null;
    excpAddendaFields: ExcpAddendaFields;
    version1: VersionType;
}