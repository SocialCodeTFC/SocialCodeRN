using System.Threading.Tasks;
using SocialCode.API.Services.Requests.Posts;


namespace SocialCode.API.Services.Posts
{
    public class PostService :IPostService
    {
        public Task<PostResponse> Insert(PostRequest insertRequest)
        {
            throw new System.NotImplementedException();
        }

        public Task<PostResponse> GetPostById(string id)
        {
            throw new System.NotImplementedException();
        }

        public Task<PostResponse> DeletePost(string id)
        {
            throw new System.NotImplementedException();
        }

        public Task<PostResponse> ModifyPost(string id, PostRequest postRequest)
        {
            throw new System.NotImplementedException();
        }
    }
}