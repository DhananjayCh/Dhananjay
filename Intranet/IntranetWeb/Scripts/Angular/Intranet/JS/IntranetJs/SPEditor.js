(function ($) {
    $.fn.SPEditable = function () {
        return this.each(function () {
            $(this).addClass("ms-rte-layoutszone-inner-editable ms-rtestate-write").attr("role", "textbox").attr("aria-haspopup", "true").attr("contentEditable", "true").attr("aria-autocomplete", "both").attr("aria-autocomplete", "both").attr("aria-multiline", "true");
        });
    };
    $.fn.SPNonEditable = function () {
        return this.each(function () {
            $(this).removeClass("ms-rte-layoutszone-inner-editable ms-rtestate-write").removeAttr("role aria-haspopup contentEditable aria-autocomplete aria-multiline");
        });
    };
})(jQuery); 