import { Name } from "./name";
import { VersionType } from "./versionType";

export interface MemberInfo {
    ssn: string;
    name: Name;
    birthDate: string | null;
    version1: VersionType;
}