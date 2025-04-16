import { PrivGroup } from "./privGroup";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PrivGroupPagedListSelectFieldsResponse {
    privGroup: PrivGroup[];
    privGroupSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
