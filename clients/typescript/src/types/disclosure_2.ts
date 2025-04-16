import { DisclosureFedLine1_2 } from "./disclosureFedLine1_2";
import { DisclosureFedLine2_2 } from "./disclosureFedLine2_2";
import { DisclosureSecLine1_2 } from "./disclosureSecLine1_2";
import { DisclosureSecLine2_2 } from "./disclosureSecLine2_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Disclosure_2 {
    closedEndDisclosureFormatValue: number;
    closedEndDisclosureFormatValueSpecified: boolean;
    closedEndDisclosureFormat: number | null;
    disabilityDescription: string;
    fedLine1: DisclosureFedLine1_2[];
    fedLine1Specified: boolean;
    fedLine2: DisclosureFedLine2_2[];
    fedLine2Specified: boolean;
    jointDisabilityDescription: string;
    jointLifeDescription: string;
    secLine1: DisclosureSecLine1_2[];
    secLine1Specified: boolean;
    secLine2: DisclosureSecLine2_2[];
    secLine2Specified: boolean;
    singleLifeDescription: string;
    useExtraAddressValue: boolean;
    useExtraAddressValueSpecified: boolean;
    useExtraAddress: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}