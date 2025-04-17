import { AdministrativeCredentials } from "./administrativeCredentials";
import { UserNumberCredentials } from "./userNumberCredentials";
import { TokenCredentials } from "./tokenCredentials";

export interface AdminCredentialsChoice {
    administrativeCredentials: AdministrativeCredentials;
    userNumberCredentials: UserNumberCredentials;
    tokenCredentials: TokenCredentials;
    processorUser: number | null;
}