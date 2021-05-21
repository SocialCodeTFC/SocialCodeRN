using SocialCode.API.Services.Requests.Users;
using SocialCode.API.Services.Requests.Users.Auth;
using SocialCode.API.Services.Requests.Users.Register;
using SocialCode.API.Services.Users;
using SocialCode.Domain.User;

namespace SocialCode.API.Services.Converters
{
    public static class UserConverter
    {
        public static UserResponse User_ToUserResponse(User user)
        {
            return new UserResponse
            {
                Id = user?.Id,
                Email = user?.Email,
                FirstName = user?.FirstName,
                LastName = user?.LastName,
                UserName = user?.Username
            };
        }

        public static User UserRequest_ToUser(UserRequest userRequest)
        {
            return new User()
            {
                Id = userRequest?.Id,
                Email = userRequest?.Email,
                Username = userRequest?.UserName,
                FirstName = userRequest?.FirstName,
                LastName = userRequest?.LastName,
                Password = userRequest?.Password
            };
        }

        public static AuthResponse User_ToAuthResponse(User user)
        {
            return new AuthResponse
            {
                Id = user?.Id,
                Token = user?.Token,
                Username = user?.Username
            };
        }
        

        public static User RegisterRequest_ToUser(RegisterRequest registerRequest)
        {
            return new User()
            {
                Username = registerRequest?.UserName,
                Password = registerRequest?.Password,
                Email = registerRequest?.Email,
                FirstName = registerRequest?.FirstName,
                LastName = registerRequest?.LastName,

            };
        }
    }
}