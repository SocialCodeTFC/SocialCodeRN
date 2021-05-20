namespace SocialCode.Infrastructure.Config
{
    public class ServerConfig
    {
        public MongoDbConfig MongoDb { get; set; } = new MongoDbConfig();
    }
}