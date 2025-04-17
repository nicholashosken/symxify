import { MbrAddress } from "./mbrAddress";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MbrAddressSelectFieldsResponse {
    mbrAddress: MbrAddress;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
