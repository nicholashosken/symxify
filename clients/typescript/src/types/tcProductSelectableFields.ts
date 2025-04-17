import { TcProductFields } from "./tcProductFields";
import { VersionType } from "./versionType";

export interface TcProductSelectableFields {
    includeAllTcProductFields: boolean | null;
    tcProductFields: TcProductFields;
    version1: VersionType;
}