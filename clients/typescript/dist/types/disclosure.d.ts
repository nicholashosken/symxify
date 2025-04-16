import { DisclosureFedLine1 } from "./disclosureFedLine1";
import { DisclosureFedLine2 } from "./disclosureFedLine2";
import { DisclosureSecLine1 } from "./disclosureSecLine1";
import { DisclosureSecLine2 } from "./disclosureSecLine2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Disclosure {
    closedEndDisclosureFormatValue: number;
    closedEndDisclosureFormatValueSpecified: boolean;
    closedEndDisclosureFormat: number | null;
    disabilityDescription: string;
    fedLine1: DisclosureFedLine1[];
    fedLine1Specified: boolean;
    fedLine2: DisclosureFedLine2[];
    fedLine2Specified: boolean;
    jointDisabilityDescription: string;
    jointLifeDescription: string;
    secLine1: DisclosureSecLine1[];
    secLine1Specified: boolean;
    secLine2: DisclosureSecLine2[];
    secLine2Specified: boolean;
    singleLifeDescription: string;
    useExtraAddressValue: boolean;
    useExtraAddressValueSpecified: boolean;
    useExtraAddress: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
