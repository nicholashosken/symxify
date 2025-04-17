import { VersionType } from "./versionType";

export interface MbrAddressFields {
    addrCreateDate: boolean | null;
    addrDisconnectDate: boolean | null;
    addrExpDate: boolean | null;
    addrFmLastDate: boolean | null;
    addrFmLastPurgeDate: boolean | null;
    addrRecordChangeDate: boolean | null;
    addressType: boolean | null;
    carrierRoute: boolean | null;
    city: boolean | null;
    country: boolean | null;
    countryCode: boolean | null;
    extraAddress: boolean | null;
    headquarters: boolean | null;
    mbrAddrFileType: boolean | null;
    mbrAddrNumber: boolean | null;
    state: boolean | null;
    street: boolean | null;
    zipCode: boolean | null;
    version1: VersionType;
}