import { VersionType } from "./versionType";
export interface MbrAddress_2 {
    addrCreateDate: string | null;
    addrDisconnectDate: string | null;
    addrExpDate: string | null;
    addrFmLastDate: string | null;
    addrFmLastPurgeDate: string | null;
    addrRecordChangeDate: string | null;
    addressType: number | null;
    carrierRoute: string;
    city: string;
    country: string;
    countryCode: string;
    extraAddress: string;
    headquarters: number | null;
    mbrAddrFileType: number | null;
    mbrAddrNumber: string;
    state: string;
    street: string;
    zipCode: string;
    version1: VersionType;
}
