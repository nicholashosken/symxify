import { VersionType } from "./versionType";

export interface SiteFields {
    city: boolean | null;
    closeDate: boolean | null;
    contactPhone: boolean | null;
    extraAddress: boolean | null;
    faxPhone: boolean | null;
    locator: boolean | null;
    recordChangeDate: boolean | null;
    siteContactName: boolean | null;
    siteId: boolean | null;
    siteName: boolean | null;
    siteNumber: boolean | null;
    siteSettleShareId: boolean | null;
    state: boolean | null;
    street: boolean | null;
    zipCode: boolean | null;
    version1: VersionType;
}