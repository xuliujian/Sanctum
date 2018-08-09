
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PrivateBookRow))]
    public class PrivateBookController : Controller
    {
        [Route("Community/PrivateBook")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/PrivateBook/PrivateBookIndex.cshtml");
        }
    }
}