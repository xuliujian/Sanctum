
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.RecommendBookRow))]
    public class RecommendBookController : Controller
    {
        [Route("Community/RecommendBook")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/RecommendBook/RecommendBookIndex.cshtml");
        }
    }
}