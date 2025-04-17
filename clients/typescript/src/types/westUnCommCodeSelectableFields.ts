import { WestUnCommCodeFields } from "./westUnCommCodeFields";
import { VersionType } from "./versionType";

export interface WestUnCommCodeSelectableFields {
    includeAllWestUnCommCodeFields: boolean | null;
    westUnCommCodeFields: WestUnCommCodeFields;
    version1: VersionType;
}