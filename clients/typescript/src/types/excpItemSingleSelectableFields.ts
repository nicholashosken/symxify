import { ExcpItemFields } from "./excpItemFields";
import { VersionType } from "./versionType";

export interface ExcpItemSingleSelectableFields {
    includeAllExcpItemFields: boolean | null;
    excpItemFields: ExcpItemFields;
    version1: VersionType;
}