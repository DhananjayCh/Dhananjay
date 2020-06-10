
	
    // AmazeUI Datetimepicker
    function bindDatePickerStart(){
        $('#dateTimePickerStart').datetimepicker({
            minView: 2,
            format: 'dd-mm-yyyy',
            autoclose: true
        });
    }

    function bindDatePickerEnd(){  

        $('#dateTimePickerEnd').datetimepicker({
            minView: 2,
            format: 'dd-mm-yyyy',
            autoclose: true
        });
    }

    $(function() {
        $("body").delegate("#dateTimePickerEnd, #dateTimePickerStart", "focusin", function(){
            $(this).datetimepicker({
                minView: 2,
                format: 'dd-mm-yyyy',
                autoclose: true
            });
        });
    });

    $(function() {
        'use strict'
        
        // AmazeUI Datetimepicker
        $('#datetimepicker').datetimepicker({
            minView: 2,
            format: 'dd-mm-yyyy',
            autoclose: true
        });
        
    });


