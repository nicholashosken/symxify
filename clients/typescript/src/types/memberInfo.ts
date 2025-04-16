import { Name } from "./name";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface MemberInfo {
    ssn: string;
    name: Name;
    birthDateValue: string | null;
    birthDateValueSpecified: boolean;
    birthDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}