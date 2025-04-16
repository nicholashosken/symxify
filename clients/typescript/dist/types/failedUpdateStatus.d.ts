import { PrimaryKeyField } from "./primaryKeyField";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface FailedUpdateStatus {
    record: string;
    errorCode: string;
    errorMessage: string;
    primaryKeyField: PrimaryKeyField[];
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
