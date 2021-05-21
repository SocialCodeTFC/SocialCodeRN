using MongoDB.Driver;
using SocialCode.Domain.Comment;
using SocialCode.Domain.Post;
using SocialCode.Domain.User;

namespace SocialCode.Infrastructure.DbContext
{
    public interface IMongoDbContext
    {
        IMongoCollection<User> Users { get; }
        IMongoCollection<Post> Posts { get; }
        IMongoCollection<Comment> Comments{ get; }
    }
}