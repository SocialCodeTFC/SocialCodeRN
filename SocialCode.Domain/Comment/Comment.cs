namespace SocialCode.Domain.Comment
{
    public class Comment
    {
        public User.User User;
        public Post.Post Post;
        public string Content;
        public string Timestamp;
    }
}