using MongoDB.Driver;
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
    }
}