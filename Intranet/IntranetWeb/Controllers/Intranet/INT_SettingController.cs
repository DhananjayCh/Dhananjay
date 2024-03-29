﻿using IntranetWeb.BAL.EmployeeManagement;
using IntranetWeb.BAL.Intranet;
using IntranetWeb.DAL;
using IntranetWeb.Models.EmployeeManagement;
using IntranetWeb.Models.Intranet;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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
        INT_AwardTypeMasterBal BalAwardType = new INT_AwardTypeMasterBal();
        INT_PhotoGalleryTxBal BalPhotoGallery = new INT_PhotoGalleryTxBal();
        INT_PhotoGalleryChildTxBal BalPhotoGalleryChild = new INT_PhotoGalleryChildTxBal();
        INT_CommanFu BalCommon = new INT_CommanFu();
        Emp_BasicInfoBal BalEmp_BasicInfo = new Emp_BasicInfoBal();
        INT_SettingBal BalSetting = new INT_SettingBal();
        INT_QuickLinkBal BalQuickLink = new INT_QuickLinkBal();
        INT_HolidayListBal BalHolidayList = new INT_HolidayListBal();
        INT_PagesTxBal BalPages = new INT_PagesTxBal();
        INT_NavigationMenuBal BalNavigationMenu = new INT_NavigationMenuBal();

        [SharePointContextFilter]
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

        [SharePointContextFilter]
        public JsonResult getArticleData(List<INT_ArticleTxModel> article)
        {

            try {
                
                List<INT_ArticleTxModel> articleData = new List<INT_ArticleTxModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    int counter = 0;
                    string filterD = "";
                    if (article != null)
                    {
                        foreach (var item in article)
                        {
                            counter++;
                            if (article.Count == counter)
                            {
                                filterD += "(ID eq '" + item.ID + "')";
                            }
                            else
                            {
                                filterD += "(ID eq '" + item.ID + "') or ";
                            }
                        }
                    }
                    else
                    {
                        filterD = null;
                    }
                    articleData = BalArticle.GetArticleData(clientContext, filterD);

                    return Json(articleData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SaveArticleData(INT_ArticleTxModel article)
        {
           
            try
            {
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Article_Title': '" + article.Article_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Description': '" + article.Description.Replace("'", "&apos;") + "'";
                    itemdata += " ,'Pinned_Article': '" + article.Pinned_Article + "'";
                    itemdata += " ,'Active': '" + article.Active + "'";


                    returnID = BalArticle.SaveArticle(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateArticleData(INT_ArticleTxModel article)
        {
            try
            {
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Article_Title': '" + article.Article_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Description': '" + getDescriptionFormatted(article.Description) + "'";
                    itemdata += " ,'Pinned_Article': '" + article.Pinned_Article + "'";
                    itemdata += " ,'Active': '" + article.Active + "'";


                    returnID = BalArticle.UpdateArticle(clientContext, itemdata, Convert.ToString(article.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        public string getDescriptionFormatted(string d)
        {
            return d.Replace("'", "&apos;").Replace("“", "&ldquo;").Replace("”", "&rdquo;");
        }

        [SharePointContextFilter]
        public JsonResult getNoticeData(List<INT_NoticeTxModel> filterData)
        {
            try
            {
                List<INT_NoticeTxModel> noticeData = new List<INT_NoticeTxModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    int counter = 0;
                    string filterD = "";
                    if (filterData != null)
                    {
                        foreach (var item in filterData)
                        {
                            counter++;
                            if (filterData.Count == counter)
                            {
                                filterD += "(ID eq '" + item.ID + "')";
                            }
                            else
                            {
                                filterD += "(ID eq '" + item.ID + "') or ";
                            }
                        }
                    }
                    else
                    {
                        filterD = null;
                    }
                    noticeData = BalNotice.GetNoticeData(clientContext, filterD);
                    
                    return Json(noticeData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SaveNoticeData(INT_NoticeTxModel noticeData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Notice_Title': '" + noticeData.Notice_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Description': '" + getDescriptionFormatted(noticeData.Description) + "'";
                    itemdata += " ,'Notice_Type': '" + noticeData.Notice_Type + "'";
                    if (noticeData.DocUrl != null && noticeData.DocUrl != "")
                    {
                        itemdata += " ,'DocUrl': '" + noticeData.DocUrl.Replace("'", @"\'") + "'";
                    }
                    itemdata += " ,'Pinned_Notice': '" + noticeData.Pinned_Notice + "'";
                    itemdata += " ,'Active': '" + noticeData.Active + "'";


                    returnID = BalNotice.SaveNotice(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateNoticeData(INT_NoticeTxModel noticeData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Notice_Title': '" + noticeData.Notice_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Description': '" + getDescriptionFormatted(noticeData.Description) + "'";
                    itemdata += " ,'Notice_Type': '" + noticeData.Notice_Type + "'";
                    if (noticeData.DocUrl != null && noticeData.DocUrl != "")
                    {
                        itemdata += " ,'DocUrl': '" + noticeData.DocUrl.Replace("'", @"\'") + "'";
                    }
                    itemdata += " ,'Pinned_Notice': '" + noticeData.Pinned_Notice + "'";
                    itemdata += " ,'Active': '" + noticeData.Active + "'";


                    returnID = BalNotice.UpdateNotice(clientContext, itemdata, Convert.ToString(noticeData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult getEventData(string callType)
        {
            try { 
                List<INT_EventTxModel> eventData = new List<INT_EventTxModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    if (callType == null || callType == "")
                    { 
                        eventData = BalEvent.GetEventData(clientContext, false);
                    }
                    else
                    {
                        eventData = BalEvent.GetEventData(clientContext, true);
                    }
                    return Json(eventData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SaveEventData(INT_EventTxModel eventData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Event_Name': '" + eventData.Event_Name.Replace("'", @"\'") + "'";
                    itemdata += " ,'Description': '" + getDescriptionFormatted(eventData.Description) + "'";
                    itemdata += " ,'Start_Date': '" + eventData.Start_Date + "'";
                    if (eventData.End_Date != null && eventData.End_Date != "")
                    {
                        itemdata += " ,'End_Date': '" + eventData.End_Date + "'";
                    }
                    itemdata += " ,'All_Day_Event': '" + eventData.All_Day_Event + "'";
                    itemdata += " ,'Pinned_Event': '" + eventData.Pinned_Event + "'";
                    itemdata += " ,'Active': '" + eventData.Active + "'";


                    returnID = BalEvent.SaveEvent(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateEventData(INT_EventTxModel eventData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Event_Name': '" + eventData.Event_Name.Replace("'", @"\'") + "'";
                    itemdata += " ,'Description': '" + getDescriptionFormatted(eventData.Description) + "'";
                    itemdata += " ,'Start_Date': '" + eventData.Start_Date + "'";
                    if (eventData.End_Date != null && eventData.End_Date != "")
                    {
                        itemdata += " ,'End_Date': '" + eventData.End_Date + "'";
                    }
                    itemdata += " ,'All_Day_Event': '" + eventData.All_Day_Event + "'";
                    itemdata += " ,'Pinned_Event': '" + eventData.Pinned_Event + "'";
                    itemdata += " ,'Active': '" + eventData.Active + "'";


                    returnID = BalEvent.UpdateEvent(clientContext, itemdata, Convert.ToString(eventData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult getSiderData()
        {
            try { 
                List<INT_SliderTxModel> sliderData = new List<INT_SliderTxModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {

                    sliderData = BalSlider.GetSliderData(clientContext);
                    return Json(sliderData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SaveSliderData(INT_SliderTxModel sliderData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Slider_Title': '" + sliderData.Slider_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Description': '" + getDescriptionFormatted(sliderData.Description) + "'";
                    itemdata += " ,'Slider_Subject': '" + sliderData.Slider_Subject.Replace("'", @"\'") + "'";
                    if (sliderData.Slider_Image_Url != null && sliderData.Slider_Image_Url != "")
                    {
                        itemdata += " ,'Slider_Image_Url': '" + sliderData.Slider_Image_Url.Replace("'", @"\'") + "'";
                    }
                    itemdata += " ,'Active': '" + sliderData.Active + "'";


                    returnID = BalSlider.SaveSlider(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateSliderData(INT_SliderTxModel sliderData)
        {
            try {
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Slider_Title': '" + sliderData.Slider_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Description': '" + getDescriptionFormatted(sliderData.Description) + "'";
                    itemdata += " ,'Slider_Subject': '" + sliderData.Slider_Subject.Replace("'", @"\'") + "'";
                    if (sliderData.Slider_Image_Url != null && sliderData.Slider_Image_Url != "")
                    {
                        itemdata += " ,'Slider_Image_Url': '" + sliderData.Slider_Image_Url.Replace("'", @"\'") + "'";
                    }
                    itemdata += " ,'Active': '" + sliderData.Active + "'";


                    returnID = BalSlider.UpdateSlider(clientContext, itemdata, Convert.ToString(sliderData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult getAwardsData(string callType)
        {
            try {
                List<INT_AwardTxModel> awardData = new List<INT_AwardTxModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {

                
                    if (callType == null || callType == "")
                    {
                        awardData = BalAward.GetAwardData(clientContext,false);
                    }
                    else
                    {
                        awardData = BalAward.GetAwardData(clientContext,true);
                    }
                    return Json(awardData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SaveAwards(INT_AwardTxModel Award)
        {
            try {
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Award_type': '" + Award.Award_type.Replace("'", @"\'") + "'";
                    itemdata += " ,'Emp_Code': '" + Award.Emp_Code.Replace("'", @"\'") + "'";
                    itemdata += " ,'Emp_IdId': '" + Convert.ToInt16(Award.Emp_IdId) + "'";
                    itemdata += " ,'Reason': '" + getDescriptionFormatted(Award.Reason) + "'";
                    itemdata += " ,'Pinned_Awards': '" + Award.Pinned_Awards + "'";
                    itemdata += " ,'Active': '" + Award.Active + "'";

                    returnID = BalAward.SaveAwards(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateAwards(INT_AwardTxModel Award)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Award_type': '" + Award.Award_type.Replace("'", @"\'") + "'";
                    itemdata += " ,'Emp_Code': '" + Award.Emp_Code.Replace("'", @"\'") + "'";
                    itemdata += " ,'Emp_IdId': '" + Convert.ToInt16(Award.Emp_IdId) + "'";
                    itemdata += " ,'Reason': '" + getDescriptionFormatted(Award.Reason) + "'";
                    itemdata += " ,'Pinned_Awards': '" + Award.Pinned_Awards + "'";
                    itemdata += " ,'Active': '" + Award.Active + "'";

                    returnID = BalAward.UpdateAwards(clientContext, itemdata, Convert.ToString(Award.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult getAwardsTypeData()
        {
            try { 
                List<INT_AwardTypeMasterModel> awardTypeData = new List<INT_AwardTypeMasterModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {

                    awardTypeData = BalAwardType.GetAwardTypeData(clientContext);
                    return Json(awardTypeData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SaveAwardTypes(INT_AwardTypeMasterModel AwardType)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Award_type': '" + AwardType.Award_type.Replace("'", @"\'") + "'";
                    itemdata += " ,'Active': '" + AwardType.Active + "'";

                    returnID = BalAwardType.SaveAwardType(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateAwardTypes(INT_AwardTypeMasterModel AwardType)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Award_type': '" + AwardType.Award_type.Replace("'", @"\'") + "'";
                    itemdata += " ,'Active': '" + AwardType.Active + "'";

                    returnID = BalAwardType.UpdateAwardType(clientContext, itemdata, Convert.ToString(AwardType.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult getSetting(string setting)
        {
            try { 
                List<INT_SettingModel> settingData = new List<INT_SettingModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {

                    settingData = BalSetting.GetSettingData(clientContext, setting);
                    return Json(settingData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult updateBirthdaySet(INT_SettingModel birthData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Before_Event': '" + birthData.Before_Event + "'";
                    itemdata += " ,'After_Event': '" + birthData.After_Event + "'";
                    itemdata += " ,'Show_Card_Title': '" + birthData.Show_Card_Title + "'";
                    if (birthData.Show_Card_Title)
                    {
                        itemdata += " ,'Card_Title': '" + birthData.Card_Title.Replace("'", @"\'") + "'";
                    }
                    itemdata += " ,'Background_Color': '" + birthData.Background_Color + "'";
                    itemdata += " ,'Font_Color': '" + birthData.Font_Color + "'";

                    returnID = BalSetting.UpdateSetting(clientContext, itemdata, Convert.ToString(birthData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult updateAnniversarySet(INT_SettingModel anniversaryData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Before_Event': '" + anniversaryData.Before_Event + "'";
                    itemdata += " ,'After_Event': '" + anniversaryData.After_Event + "'";
                    itemdata += " ,'Show_Card_Title': '" + anniversaryData.Show_Card_Title + "'";
                    if (anniversaryData.Show_Card_Title)
                    {
                        itemdata += " ,'Card_Title': '" + anniversaryData.Card_Title.Replace("'", @"\'") + "'";
                    }
                    itemdata += " ,'Background_Color': '" + anniversaryData.Background_Color + "'";
                    itemdata += " ,'Font_Color': '" + anniversaryData.Font_Color + "'";

                    returnID = BalSetting.UpdateSetting(clientContext, itemdata, Convert.ToString(anniversaryData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult updateCardSet(List<INT_SettingModel> cardData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    foreach (INT_SettingModel item in cardData)
                    {
                        string itemdata = " 'Squence': '" + item.Squence + "'";
                        itemdata += " ,'Active': '" + item.Active + "'";
                        returnID = BalSetting.UpdateSetting(clientContext, itemdata, Convert.ToString(item.ID));
                    }

                    //returnID = BalSetting.UpdateSetting(clientContext, itemdata, Convert.ToString(birthData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult updateAwardSet(INT_SettingModel awardData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Background_Color': '" + awardData.Background_Color + "'";
                    itemdata += " ,'Font_Color': '" + awardData.Font_Color + "'";

                    returnID = BalSetting.UpdateSetting(clientContext, itemdata, Convert.ToString(awardData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult updateArticleSet(INT_SettingModel awardData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Show_Multiple': '" + awardData.Show_Multiple + "'";

                    returnID = BalSetting.UpdateSetting(clientContext, itemdata, Convert.ToString(awardData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult updateNoticeSet(INT_SettingModel awardData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Show_Multiple': '" + awardData.Show_Multiple + "'";

                    returnID = BalSetting.UpdateSetting(clientContext, itemdata, Convert.ToString(awardData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult getQuicklink(List<INT_QuickLinkModel> recivceData)
        {
            try { 
                List<INT_QuickLinkModel> QuickLinkData = new List<INT_QuickLinkModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    int counter = 0;
                    string filterD = "";
                    if(recivceData != null)
                    { 
                        foreach (var item in recivceData)
                        {
                            counter++;
                            if (recivceData.Count == counter)
                            {
                                filterD += "(ID eq '" + item.ID + "')";
                            }
                            else
                            {
                                filterD += "(ID eq '" + item.ID + "') or ";
                            }
                        }
                    }else
                    {
                        filterD = null;
                    }
                    QuickLinkData = BalQuickLink.GetQuickLinkData(clientContext, filterD);
                    return Json(QuickLinkData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }


        }

        [SharePointContextFilter]
        public JsonResult SaveQuicklink(INT_QuickLinkModel QuickLinkData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Quick_Link_Title': '" + QuickLinkData.Quick_Link_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Quick_Link_Url': '" + QuickLinkData.Quick_Link_Url.Replace("'", @"\'") + "'";
                    itemdata += " ,'Pinned_Homepage': '" + QuickLinkData.Pinned_Homepage + "'";
                    itemdata += " ,'Is_Internal': '" + QuickLinkData.Is_Internal + "'";
                    itemdata += " ,'Next_Tab': '" + QuickLinkData.Next_Tab + "'";
                    itemdata += " ,'Active': '" + QuickLinkData.Active + "'";

                    returnID = BalQuickLink.SaveQuickLink(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateQuicklink(INT_QuickLinkModel QuickLinkData)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Quick_Link_Title': '" + QuickLinkData.Quick_Link_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Quick_Link_Url': '" + QuickLinkData.Quick_Link_Url.Replace("'", @"\'") + "'";
                    itemdata += " ,'Pinned_Homepage': '" + QuickLinkData.Pinned_Homepage + "'";
                    itemdata += " ,'Is_Internal': '" + QuickLinkData.Is_Internal + "'";
                    itemdata += " ,'Next_Tab': '" + QuickLinkData.Next_Tab + "'";
                    itemdata += " ,'Active': '" + QuickLinkData.Active + "'";


                    returnID = BalQuickLink.UpdateQuickLink(clientContext, itemdata, Convert.ToString(QuickLinkData.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult getHolidayListData(string callType)
        {
            try { 
                List<INT_HolidayListModel> holidayListData = new List<INT_HolidayListModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {


                    if (callType == null || callType == "")
                    {
                        holidayListData = BalHolidayList.GetHolidayListData(clientContext, false);
                    }
                    else
                    {
                        holidayListData = BalHolidayList.GetHolidayListData(clientContext, true);
                    }
                    return Json(holidayListData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SaveHolidayListData(INT_HolidayListModel HolidayList)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Holiday_Title': '" + HolidayList.Holiday_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Holiday_Date': '" + HolidayList.Holiday_Date + "'";
                    itemdata += " ,'Active': '" + HolidayList.Active + "'";

                    returnID = BalHolidayList.SaveHolidayList(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateHolidayListData(INT_HolidayListModel HolidayList)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Holiday_Title': '" + HolidayList.Holiday_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Holiday_Date': '" + HolidayList.Holiday_Date + "'";
                    itemdata += " ,'Active': '" + HolidayList.Active + "'";


                    returnID = BalHolidayList.UpdateHolidayList(clientContext, itemdata, Convert.ToString(HolidayList.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult getEmployee()
        {
            try { 
                List<Emp_BasicInfoModel> empData = new List<Emp_BasicInfoModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {

                    empData = BalEmp_BasicInfo.GetEmp(clientContext);
                    return Json(empData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult getNavigationMenuData()
        {
            try { 
                List<INT_NavigationMenuModel> menuData = new List<INT_NavigationMenuModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {

                    menuData = BalNavigationMenu.GetNavigationMenuData(clientContext);
                    return Json(menuData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SaveNavigationMenuData(INT_NavigationMenuModel menu)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'MenuName': '" + menu.MenuName.Replace("'", @"\'") + "'";
                    itemdata += " ,'URL': '" + menu.URL.Replace("'", @"\'") + "'";
                    itemdata += " ,'OrderNo': '" + menu.OrderNo + "'";
                    itemdata += " ,'External_Url': '" + menu.External_Url + "'";
                    itemdata += " ,'Next_Tab': '" + menu.Next_Tab + "'";
                    if (menu.ParentMenuIdId != 0)
                    {
                        itemdata += " ,'ParentMenuIdId': '" + menu.ParentMenuIdId + "'";
                    }
                    else
                    {
                        itemdata += " ,'ParentMenuIdId': null";
                    }
                    itemdata += " ,'Active': '" + menu.Active + "'";

                    returnID = BalNavigationMenu.SaveNavigationMenu(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateNavigationMenuData(INT_NavigationMenuModel menu)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'MenuName': '" + menu.MenuName.Replace("'", @"\'") + "'";
                    itemdata += " ,'URL': '" + menu.URL.Replace("'", @"\'") + "'";
                    itemdata += " ,'OrderNo': '" + menu.OrderNo + "'";
                    itemdata += " ,'External_Url': '" + menu.External_Url + "'";
                    itemdata += " ,'Next_Tab': '" + menu.Next_Tab + "'";
                    if (menu.ParentMenuIdId != 0)
                    {
                        itemdata += " ,'ParentMenuIdId': '" + menu.ParentMenuIdId + "'";
                    }
                    else
                    {
                        itemdata += " ,'ParentMenuIdId': null";
                    }
                    itemdata += " ,'Active': '" + menu.Active + "'";

                    returnID = BalNavigationMenu.UpdateNavigationMenu(clientContext, itemdata, Convert.ToString(menu.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult getPagesData(string pageName)
        {
            try { 
                List<INT_PagesTxModel> pagesData = new List<INT_PagesTxModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    if(pageName == null || pageName == "")
                    {
                        pagesData = BalPages.GetPagesData(clientContext,null);
                    }
                    else
                    {
                        pagesData = BalPages.GetPagesData(clientContext, pageName);
                    }
                
                    return Json(pagesData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SavePages(INT_PagesTxModel page)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Page_Name': '" + page.Page_Name.Replace("'", @"\'") + "'";
                    itemdata += " ,'Page_Title': '" + page.Page_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Page_Type': '" + page.Page_Type.Replace("'", @"\'") + "'";
                    itemdata += " ,'Page_Content': '" + getDescriptionFormatted(page.Page_Content) + "'";
                    itemdata += " ,'Widget_Configuration': '" + page.Widget_Configuration + "'";
                    itemdata += " ,'Active': '" + page.Active + "'";

                    returnID = BalPages.SavePages(clientContext, itemdata);
                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdatePages(INT_PagesTxModel page)
        {
            try
            {
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Page_Name': '" + page.Page_Name.Replace("'", @"\'") + "'";
                    itemdata += " ,'Page_Title': '" + page.Page_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Page_Type': '" + page.Page_Type.Replace("'", @"\'") + "'";
                    itemdata += " ,'Page_Content': '" + getDescriptionFormatted(page.Page_Content) + "'";
                    itemdata += " ,'Widget_Configuration': '" + page.Widget_Configuration + "'";
                    itemdata += " ,'Active': '" + page.Active + "'";

                    returnID = BalPages.UpdatePages(clientContext, itemdata, Convert.ToString(page.ID));
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }


        [SharePointContextFilter]
        public JsonResult SaveImages(System.Web.Mvc.FormCollection formCollection)
        {
            try { 
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

                            returnID = BalCommon.UploadImage(clientContext, postedFile, itemdata);

                        }

                    }
                }

                //if (Convert.ToInt32(returnID) > 0)
                obj.Add(returnID);

                return Json(returnID, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }



        [SharePointContextFilter]
        public JsonResult SaveDocument(System.Web.Mvc.FormCollection formCollection)
        {
            try { 
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

                            returnID = BalCommon.UploadDocument(clientContext, postedFile, itemdata);

                        }

                    }
                }

                //if (Convert.ToInt32(returnID) > 0)
                obj.Add(returnID);

                return Json(returnID, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }



        [SharePointContextFilter]
        public JsonResult getGalleryData()
        {
            try { 
                List<INT_PhotoGalleryTxModel> galleryData = new List<INT_PhotoGalleryTxModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {

                    galleryData = BalPhotoGallery.GetPhotoGalleryData(clientContext);
                    return Json(galleryData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult getGalleryDataByID(string Id)
        {
            try { 
                List<INT_PhotoGalleryChildTxModel> galleryData = new List<INT_PhotoGalleryChildTxModel>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {

                    galleryData = BalPhotoGalleryChild.GetPhotoGalleryChildDataByParentId(clientContext, Id);
                    return Json(galleryData, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }

        }

        [SharePointContextFilter]
        public JsonResult SaveGallery(System.Web.Mvc.FormCollection formCollection)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                List<INT_PhotoGalleryTxModel> _PhotoGallery = new List<INT_PhotoGalleryTxModel>();

                var name = formCollection["ParentData"];

                _PhotoGallery = JsonConvert.DeserializeObject<List<INT_PhotoGalleryTxModel>>(name);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Album_Title': '" + _PhotoGallery[0].Album_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Pinned_Album': '" + _PhotoGallery[0].Pinned_Album + "'";
                    itemdata += " ,'Active': '" + _PhotoGallery[0].Active + "'";

                    returnID = BalPhotoGallery.SavePhotoGallery(clientContext, itemdata);

                    if (Request.Files.Count > 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        for (int i = 0; i < files.Count; i++)
                        {
                            string fileUrl = "";
                            var postedFile = files[i];

                            fileUrl = BalCommon.UploadImage(clientContext, postedFile, null);
                            if(fileUrl != null && fileUrl != "")
                            {
                                string itemdataChild = " 'Parent_Id': '" + returnID + "'";
                                itemdataChild += " ,'Photo_Title': '" + Request.Files.AllKeys[i].Split('.')[0] + "'";
                                itemdataChild += " ,'Image_Url': '" + fileUrl.Replace("'", @"\'") + "'";
                                itemdataChild += " ,'Active': '" + _PhotoGallery[0].Active + "'";

                                BalPhotoGalleryChild.SavePhotoGalleryChild(clientContext, itemdataChild);
                            }
                        }

                    }


                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult UpdateGallery(System.Web.Mvc.FormCollection formCollection)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                List<INT_PhotoGalleryTxModel> _PhotoGallery = new List<INT_PhotoGalleryTxModel>();

                var name = formCollection["ParentData"];

                _PhotoGallery = JsonConvert.DeserializeObject<List<INT_PhotoGalleryTxModel>>(name);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    string itemdata = " 'Album_Title': '" + _PhotoGallery[0].Album_Title.Replace("'", @"\'") + "'";
                    itemdata += " ,'Pinned_Album': '" + _PhotoGallery[0].Pinned_Album + "'";
                    itemdata += " ,'Active': '" + _PhotoGallery[0].Active + "'";

                    returnID = Convert.ToString(_PhotoGallery[0].ID);
                    BalPhotoGallery.UpdatePhotoGallery(clientContext, itemdata, Convert.ToString(_PhotoGallery[0].ID));

                    if (Request.Files.Count > 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        for (int i = 0; i < files.Count; i++)
                        {
                            string fileUrl = "";
                            var postedFile = files[i];

                            fileUrl = BalCommon.UploadImage(clientContext, postedFile, null);
                            if (fileUrl != null && fileUrl != "")
                            {
                                string itemdataChild = " 'Parent_Id': '" + returnID + "'";
                                itemdataChild += " ,'Photo_Title': '" + Request.Files.AllKeys[i].Split('.')[0] + "'";
                                itemdataChild += " ,'Image_Url': '" + fileUrl.Replace("'", @"\'") + "'";
                                itemdataChild += " ,'Active': '" + _PhotoGallery[0].Active + "'";

                                BalPhotoGalleryChild.SavePhotoGalleryChild(clientContext, itemdataChild);
                            }
                        }

                    }


                    if (Convert.ToInt32(returnID) > 0)
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

        [SharePointContextFilter]
        public JsonResult DeleteGalleryImg(string Id)
        {
            try { 
                List<object> obj = new List<object>();
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    string returnID = "0";

                    returnID = BalPhotoGalleryChild.DeletePhotoGalleryChild(clientContext, Id);
                    if (returnID != "0")
                        obj.Add("OK");
                }

                return Json(obj, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<object> obj = new List<object>();
                obj.Add("error");
                return Json(obj, JsonRequestBehavior.AllowGet);
            }
        }

    }
}