using Microsoft.AspNetCore.Authorization;

namespace jwt_AuthN.WebApi;

public class ApiRequirement : IAuthorizationRequirement
{
    public ApiRequirement()
    {
        
    }
}
