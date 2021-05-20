using System.Collections.Generic;


namespace SocialCode.Domain.Post
{
    public class Post
    {
        public string Title { get; set; }
        public IEnumerable<Tag.Tag> Tags;
        public string Description { get; set; }
        public string Timestamp { get; set; }
        public string Code { get; set; }
        public bool IsFree { get; set; }
        public int Price { get; set; }
        public User.User Author { get; set; }
        public IEnumerable<Comment.Comment> Comments { get; set; }
    }
}