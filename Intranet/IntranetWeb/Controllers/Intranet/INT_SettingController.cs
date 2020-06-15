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
        INT_EventTxBal BalEvent = new INT_EventTxBal();
        INT_SliderTxBal BalSlider = new INT_SliderTxBal();
        INT_AwardTxBal BalAward = new INT_AwardTxBal();
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
        public JsonResult getEventData()
        {
            List<INT_EventTxModel> eventData = new List<INT_EventTxModel>();
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {

                eventData = BalEvent.GetEventData(clientContext);
                return Json(eventData, JsonRequestBehavior.AllowGet);
            }

        }
        public JsonResult getSiderData()
        {
            List<INT_SliderTxModel> sliderData = new List<INT_SliderTxModel>();
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {

                sliderData = BalSlider.GetSliderData(clientContext);
                return Json(sliderData, JsonRequestBehavior.AllowGet);
            }

        }
        public JsonResult getAwardsData()
        {
            List<INT_AwardTxModel> awardData = new List<INT_AwardTxModel>();
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {

                awardData = BalAward.GetAwardData(clientContext);
                return Json(awardData, JsonRequestBehavior.AllowGet);
            }

        }

        public JsonResult SaveArticleData(INT_ArticleTxModel article)
        {
            List<object> obj = new List<object>();
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                string returnID = "0";
                //Project.Members = Request["Members"].Split(',').Select(int.Parse).ToArray();
                //itemdata += " ,'MembersId': {'results': [1,3] }";
                string itemdata = " 'Article_Title': '" + article.Article_Title + "'";
                itemdata += " ,'Description': '" + article.Description + "'";
                itemdata += " ,'Pinned_Article': '" + article.Pinned_Article + "'";
                itemdata += " ,'Active': '" + article.Active + "'";

               
                returnID = BalArticle.SaveArticle(clientContext, itemdata);
                if (Convert.ToInt32(returnID) > 0)
                    obj.Add("OK");
            }

            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public JsonResult UpdateArticleData(INT_ArticleTxModel article)
        {
            List<object> obj = new List<object>();
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                string returnID = "0";
                //Project.Members = Request["Members"].Split(',').Select(int.Parse).ToArray();
                //itemdata += " ,'MembersId': {'results': [1,3] }";
                string itemdata = " 'Article_Title': '" + article.Article_Title + "'";
                itemdata += " ,'Description': '" + article.Description + "'";
                itemdata += " ,'Pinned_Article': '" + article.Pinned_Article + "'";
                itemdata += " ,'Active': '" + article.Active + "'";


                returnID = BalArticle.UpdateArticle(clientContext, itemdata, Convert.ToString(article.ID));
                if (returnID != "0")
                    obj.Add("OK");
            }

            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveInfo(System.Web.Mvc.FormCollection formCollection)
        {
            string returnID = "0";
            //int a = 0;
            List<object> obj = new List<object>();
            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {


                if (Request.Files.Count > 0)
                {
                    HttpFileCollectionBase files = Request.Files;
                    for (int i = 0; i < files.Count; i++)
                    {
                        var postedFile = files[i];
                        string itemdata = null;

                        returnID = BalArticle.UploadDocument(clientContext, postedFile, itemdata);

                    }

                }
            }

            //if (Convert.ToInt32(returnID) > 0)
                obj.Add(returnID);

            return Json(returnID, JsonRequestBehavior.AllowGet);
        }
    }
}