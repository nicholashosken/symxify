namespace Memberwise.Symxify.Models;

public class SymxifyConfig
{
    /// <summary>
    /// The base URL of your Symxify deployment. E.g., https://localhost:8080/api/v1/symxchange
    /// </summary>

    public string SymxifyUrl { get; set; }

    /// <summary>
    /// Your Symxify private key. This is only used if your using Managed Symxify.
    /// If you're interested in using our managed solution, please contact us at https://memberwise.io/contact
    /// </summary>

    public string? SymxifyKey { get; set; }
}