import { DisclosureFedLine1_2 } from "./disclosureFedLine1_2";
import { DisclosureFedLine2_2 } from "./disclosureFedLine2_2";
import { DisclosureSecLine1_2 } from "./disclosureSecLine1_2";
import { DisclosureSecLine2_2 } from "./disclosureSecLine2_2";
import { VersionType } from "./versionType";

export interface Disclosure_2 {
    closedEndDisclosureFormat: number | null;
    disabilityDescription: string;
    fedLine1: DisclosureFedLine1_2[];
    fedLine2: DisclosureFedLine2_2[];
    jointDisabilityDescription: string;
    jointLifeDescription: string;
    secLine1: DisclosureSecLine1_2[];
    secLine2: DisclosureSecLine2_2[];
    singleLifeDescription: string;
    useExtraAddress: boolean | null;
    version1: VersionType;
}