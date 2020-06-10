using IntranetWeb.BAL.Intranet;
using IntranetWeb.Models.Intranet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IntranetWeb.Controllers.Intranet
{
    public class INT_SettingController : Controller
    {
        // GET: INT_Setting
        INT_ArticleTxBal BalArticle = new INT_ArticleTxBal();
        INT_NoticeTxBal BalNotice = new INT_NoticeTxBal();
        public ActionResult Index()
        {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {

                //lstProjectCreation = BalProjectCreation.GetProjectCreationById(clientContext);
                //ViewBag.MilestoneData = BalMilestone.GetMilestoneByMilestoneId(clientContext, MilestoneId);
               // ViewBag.ArticleData = BalArticle.GetArticleData(clientContext);
               // ViewBag.EmpData = BalEmp.GetEmp(clientContext);
            }
            return View();
        }

        public JsonResult getArticleData()
        {
            List<INT_ArticleTxModel> articleData = new List<INT_ArticleTxModel>();
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {

                articleData = BalArticle.GetArticleData(clientContext);
                return Json(articleData, JsonRequestBehavior.AllowGet);
            }
            
        }
        public JsonResult getNoticeData()
        {
            List<INT_NoticeTxModel> noticeData = new List<INT_NoticeTxModel>();
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {

                noticeData = BalNotice.GetNoticeData(clientContext);
                return Json(noticeData, JsonRequestBehavior.AllowGet);
            }

        }
    }
}