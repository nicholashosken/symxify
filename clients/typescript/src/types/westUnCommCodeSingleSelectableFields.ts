import { WestUnCommCodeFields } from "./westUnCommCodeFields";
import { VersionType } from "./versionType";

export interface WestUnCommCodeSingleSelectableFields {
    includeAllWestUnCommCodeFields: boolean | null;
    westUnCommCodeFields: WestUnCommCodeFields;
    version1: VersionType;
}