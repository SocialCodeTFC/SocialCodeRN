using MongoDB.Driver;
using SocialCode.Domain.User;

namespace SocialCode.Infrastructure.DbContext
{
    public interface IMongoDbContext
    {
        IMongoCollection<User> Users { get; }
    }
}