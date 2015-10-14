/* dynamisch json erstellen */
$.fn.serializeObject = function()
 {
    var jsonObj = {};
    var form = this.serializeArray();
    $.each(form, function() {
        if (jsonObj[this.name] !== undefined) {
            if (!jsonObj[this.name].push) {
                jsonObj[this.name] = [jsonObj[this.name]];
            }
            jsonObj[this.name].push(this.value || '');
        } else {
            jsonObj[this.name] = this.value || '';
        }
    });
        console.log(jsonObj);
        return jsonObj;

 }


/* funktion zum senden eines json über post*/
function sendFormular(){
        var horst = window.location.host;
    $.ajax({
                url: 'http://'+horst+'/metaeventsbackend/sendFormular',
                type: 'POST',
                data: 'jsonString='+JSON.stringify($('form').serializeObject()),
                success: function() { alert('Daten wurden an Sachbearbeiter übermittelt'); }
    });
}
