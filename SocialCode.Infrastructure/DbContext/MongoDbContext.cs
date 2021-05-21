using MongoDB.Driver;
using SocialCode.Domain.Comment;
using SocialCode.Domain.Post;
using SocialCode.Domain.User;
using SocialCode.Infrastructure.Config;

namespace SocialCode.Infrastructure.DbContext
{
    public class MongoDbContext: IMongoDbContext
    {
        private readonly IMongoDatabase _db;

        public MongoDbContext(MongoDbConfig config)
        {
            var client = new MongoClient(config.GetConnectionString());
            _db = client.GetDatabase(config.Database);
        }
        
        public IMongoCollection<User> Users => _db.GetCollection<User>("Users");
        public IMongoCollection<Post> Posts => _db.GetCollection<Post>("Posts");
        public IMongoCollection<Comment> Comments => _db.GetCollection<Comment>("Comments");
    }
}