using System;
using System.Threading.Tasks;
using MongoDB.Driver;
using SocialCode.Domain.User;
using SocialCode.Infrastructure.DbContext;


namespace SocialCode.Infrastructure.Repositories
{
    public class UserRepository :IUserRepository
    {
        private readonly IMongoDbContext _context;
        
        public UserRepository(IMongoDbContext context)
        {
            _context = context;
        }
        
        public async Task<User> Register(User user)
        {
            await _context.Users.InsertOneAsync(user);
            return user;
        }
        
        public async Task<User> GetUserById(string id)
        {
            var user = await _context.Users.FindAsync(e => e.Id == id);
            return await user.FirstOrDefaultAsync();
        }
        
        public async Task<User> Authenticate(string username, string password)
        {
            var result = await _context.Users.FindAsync(x => x.Username == username && x.Password == password);
            var user = await result.FirstOrDefaultAsync();
            return user ?? null;
        }

        public async Task<User> DeleteUser(string id)
        {
            var toDeleteUser = await _context.Users.FindAsync(x => x.Id == id);
            
            if (toDeleteUser is null) return null;
            
            var deleteResult = await _context.Users.DeleteOneAsync(x => x.Id == id);
            
            if(deleteResult.DeletedCount <= 0) return null;

            return await toDeleteUser.FirstOrDefaultAsync();
        }

        public async Task<User> ModifyUser(string id, User updatedUser)
        {
             await _context.Users.ReplaceOneAsync(x => x.Id == id, updatedUser, new ReplaceOptions{IsUpsert = false});
            return updatedUser;
        }
    }
}