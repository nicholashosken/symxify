import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Site_2 {
    city: string;
    closeDateValue: string | null;
    closeDateValueSpecified: boolean;
    closeDate: string | null;
    contactPhone: string;
    extraAddress: string;
    faxPhone: string;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    recordChangeDateValue: string | null;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    siteContactName: string;
    siteId: string;
    siteName: string;
    siteNumberValue: number;
    siteNumberValueSpecified: boolean;
    siteNumber: number | null;
    siteSettleShareId: string;
    state: string;
    street: string;
    zipCode: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}