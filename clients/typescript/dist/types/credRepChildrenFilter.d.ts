import { CredRepItemFilter } from "./credRepItemFilter";
import { VersionType } from "./versionType";
export interface CredRepChildrenFilter {
    credRepItemFilter: CredRepItemFilter;
    version1: VersionType;
}
