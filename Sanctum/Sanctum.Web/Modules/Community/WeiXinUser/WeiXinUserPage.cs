
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.WeiXinUserRow))]
    public class WeiXinUserController : Controller
    {
        [Route("Community/WeiXinUser")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/WeiXinUser/WeiXinUserIndex.cshtml");
        }
    }
}