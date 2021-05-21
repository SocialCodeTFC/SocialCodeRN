using System.Threading.Tasks;
using SocialCode.API.Services.Requests.Posts;

namespace SocialCode.API.Services.Posts
{
    public interface IPostService
    {
        Task<PostResponse> Insert(PostRequest insertRequest);
        Task<PostResponse> GetPostById(string id);
        Task<PostResponse> DeletePost(string id);
        Task<PostResponse> ModifyPost(string id, PostRequest updatedPost);
    }
}