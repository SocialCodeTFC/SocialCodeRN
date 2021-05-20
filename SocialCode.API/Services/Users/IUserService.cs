using System.Threading.Tasks;
using SocialCode.API.Services.Requests.Users;
using SocialCode.API.Services.Requests.Users.Auth;
using SocialCode.API.Services.Requests.Users.Register;

namespace SocialCode.API.Services.Users
{
    public interface IUserService
    {
        Task<AuthResponse> Register(RegisterRequest registerRequest);
        Task<UserResponse> GetUserById(string id);
        Task<AuthResponse> Authenticate(AuthRequest authRequest);
        Task<UserResponse> DeleteUser(string id);
        Task<UserResponse> ModifyUser(string id, UserRequest updatedUserRequest);
    }
}