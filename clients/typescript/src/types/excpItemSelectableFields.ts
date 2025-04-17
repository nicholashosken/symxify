import { ExcpItemFields } from "./excpItemFields";
import { ExcpAddInfoSelectableFields } from "./excpAddInfoSelectableFields";
import { ExcpAddendaSelectableFields } from "./excpAddendaSelectableFields";
import { VersionType } from "./versionType";

export interface ExcpItemSelectableFields {
    includeAllExcpItemFields: boolean | null;
    excpItemFields: ExcpItemFields;
    excpAddInfoSelectableFields: ExcpAddInfoSelectableFields;
    excpAddendaSelectableFields: ExcpAddendaSelectableFields;
    version1: VersionType;
}