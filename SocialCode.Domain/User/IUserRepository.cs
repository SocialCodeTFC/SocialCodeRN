using System.Threading.Tasks;


namespace SocialCode.Domain.User
{
    public interface IUserRepository
    {
        Task<User> GetUserById(string id);
        Task<User> Register(User user);
        Task<User> Authenticate(string username, string password);
        Task<User> DeleteUser(string id);
        Task<User> ModifyUser(string id, User updatedUser);

    }
}