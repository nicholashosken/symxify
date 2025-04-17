import { ExcpAddInfoFields } from "./excpAddInfoFields";
import { VersionType } from "./versionType";
export interface ExcpAddInfoSelectableFields {
    includeAllExcpAddInfoFields: boolean | null;
    excpAddInfoFields: ExcpAddInfoFields;
    version1: VersionType;
}
