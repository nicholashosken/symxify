import { McwNumData } from "./mcwNumData";
import { McwMoneyData } from "./mcwMoneyData";
import { McwChrData } from "./mcwChrData";
import { McwRateData } from "./mcwRateData";
import { McwDateData } from "./mcwDateData";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface McwDataParameters {
    mcwNumData: McwNumData[];
    mcwNumDataSpecified: boolean;
    mcwMoneyData: McwMoneyData[];
    mcwMoneyDataSpecified: boolean;
    mcwChrData: McwChrData[];
    mcwChrDataSpecified: boolean;
    mcwRateData: McwRateData[];
    mcwRateDataSpecified: boolean;
    mcwDateData: McwDateData[];
    mcwDateDataSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
