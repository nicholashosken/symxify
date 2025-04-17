import { Disclosure } from "./disclosure";
import { VersionType } from "./versionType";
export interface DisclosureSelectFieldsResponse {
    disclosure: Disclosure;
    version1: VersionType;
    messageId: string;
}
