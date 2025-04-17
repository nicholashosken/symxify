import { TcProductFields } from "./tcProductFields";
import { VersionType } from "./versionType";

export interface TcProductSingleSelectableFields {
    includeAllTcProductFields: boolean | null;
    tcProductFields: TcProductFields;
    version1: VersionType;
}