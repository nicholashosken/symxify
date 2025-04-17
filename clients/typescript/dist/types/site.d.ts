import { SiteCashOrderTypeList } from "./siteCashOrderTypeList";
import { VersionType } from "./versionType";
export interface Site {
    city: string;
    closeDate: string | null;
    contactPhone: string;
    extraAddress: string;
    faxPhone: string;
    locator: number | null;
    recordChangeDate: string | null;
    siteCashOrderTypeList: SiteCashOrderTypeList;
    siteContactName: string;
    siteId: string;
    siteName: string;
    siteNumber: number | null;
    siteSettleShareId: string;
    state: string;
    street: string;
    zipCode: string;
    version1: VersionType;
}
