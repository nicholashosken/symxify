import { StatusType } from "./statusType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DenominationType {
    unitValue: number;
    unitValueSpecified: boolean;
    unit: number | null;
    countValue: number;
    countValueSpecified: boolean;
    count: number | null;
    statusValue: StatusType;
    statusValueSpecified: boolean;
    status: StatusType | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
