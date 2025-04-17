import { MbrAddress } from "./mbrAddress";
import { VersionType } from "./versionType";

export interface MbrAddressSelectFieldsFilterChildrenResponse {
    mbrAddress: MbrAddress;
    version1: VersionType;
    messageId: string;
}