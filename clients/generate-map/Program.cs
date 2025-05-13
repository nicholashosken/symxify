using System.Text;
using System.Text.Json;

var map = File.ReadAllText("operation-map.json");
var operationMap = JsonSerializer.Deserialize<OperationMap[]>(map);
var completedMap = new List<OperationMap>();

var sb = new StringBuilder();
sb.AppendLine("namespace Memberwise.Symxify;");
sb.AppendLine(
    "using CollateralService;\nusing ContactEventMgmtService;\nusing CorpTransferService;\nusing CreditReportService;\nusing DealerService;\nusing EcaaService;\nusing ExceptionItemService;\nusing FileManagementService;\nusing FindByService;\nusing FinrepService;\nusing GeneralLedgerService;\nusing MbraddressService;\nusing MemberService;\nusing NonAccountNameService;\nusing ParameterService;\nusing ParticipantService;\nusing PowerOnService;\nusing ProjectionService;\nusing ReceivedItemService;\nusing RemittanceService;\nusing TransactionsService;\nusing UserService;\nusing WireService;\n");
sb.AppendLine(
    "public partial class SymxifyClient\n{\n    private readonly SymxifyClient _client;\n\n    public SymxifyClient(SymxifyClient client)\n    {\n        _client = client;\n    }");
foreach (var op in operationMap)
{
    if (completedMap.FindIndex(ope => ope.operationName == op.operationName) > 0)
    {
        continue;
    }

    completedMap.Add(op);

    var service = op.objectNamespace.Split("/")[4]; // exceptionitem
    var method = Type.GetType($"{service}Service.{op.operationName}", false, true); // e.g., GetExcpItemSelectFields
    var requestType =
        Type.GetType($"{service}Service.{op.requestTypeName}", false, true); // ExcpItemSelectFieldsRequest
    var responseType =
        Type.GetType($"{service}Service.{op.responseTypeName}", false, true); // ExcpItemSelectFieldsResponse

    var serviceFullName = method.Namespace.Split(".")[0];
    var requestName = requestType.FullName.Split(".")[1];
    var responseName = responseType.FullName.Split(".")[1];
    var methodName = method.FullName.Split(".")[1];

    sb.AppendLine($@"
public Task<Memberwise.Symxify.Models.Result<{serviceFullName}.{responseName}>> {methodName}({serviceFullName}.{requestName} payload) =>
    _client.RequestAsync<{serviceFullName}.{requestName},  Memberwise.Symxify.Models.Result<{serviceFullName}.{responseName}>>(""{op.operationName}"", payload, ""{service}"");
");
}

sb.AppendLine("}");

File.WriteAllText("SymxifyClient.cs", sb.ToString());


return 0;


public class OperationMap
{
    public string operationName { get; set; }
    public string requestTypeName { get; set; }
    public string responseTypeName { get; set; }
    public string objectNamespace { get; set; }
}