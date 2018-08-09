
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AreaRow))]
    public class AreaController : Controller
    {
        [Route("Community/Area")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/Area/AreaIndex.cshtml");
        }
    }
}