using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using SocialCode.API.Services.Converters;
using SocialCode.API.Services.Requests.Users;
using SocialCode.API.Services.Requests.Users.Auth;
using SocialCode.API.Services.Requests.Users.Register;
using SocialCode.Domain.User;

namespace SocialCode.API.Services.Users
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly string _key;
        private readonly IConfiguration _config;
        
        public UserService(IUserRepository userRepository, IConfiguration config)
        {
            _userRepository = userRepository;
            _config = config;
            _key = _config.GetSection("KwtKey").ToString();
        }
        
        public async Task<UserResponse> GetUserById(string id)
        {
            
            var user = await _userRepository.GetUserById(id);
           
           return UserConverter.User_ToUserResponse(user);
        }
        public async Task<AuthResponse> Register(RegisterRequest register)
        {
            var userToInsert = UserConverter.RegisterRequest_ToUser(register);
            
            var insertedUser = await _userRepository.Register(userToInsert);

            var insertedAuthenticatedUser = AuthHelper.Authenticate(insertedUser, _key);

            return insertedAuthenticatedUser;
        }
        public async Task<AuthResponse> Authenticate(AuthRequest authRequest)
        {
           var user = await _userRepository.Authenticate(authRequest.Username, authRequest.Password);
           
           if (user is null) return null;
           
           var authResponse = AuthHelper.Authenticate(user, _key);

           return authResponse ?? null;
        }
        public async Task<UserResponse> DeleteUser(string id)
        {
            var user = await _userRepository.GetUserById(id);
            
            if (user is null) return null;

            var deletedUser = await _userRepository.DeleteUser(id);

            return UserConverter.User_ToUserResponse(deletedUser);
        }
        public async Task<UserResponse> ModifyUser(string id, UserRequest updatedUserRequest)
        {
            var updatedUser = UserConverter.UserRequest_ToUser(updatedUserRequest);
            var updateResult = await _userRepository.ModifyUser(id, updatedUser);
            return UserConverter.User_ToUserResponse(updateResult);
        }
        
    }
}