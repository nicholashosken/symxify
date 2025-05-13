namespace generate_map;

public static class Helpers
{
    public static string ToPascalCase(string s)
    {
        if (string.IsNullOrEmpty(s))
            return null;

        var letter = s[0];
        var result = letter.ToString().ToUpper();
        for (var i = 1; i < s.Length; i++)
            result += s[i].ToString();

        return result;
    }
}