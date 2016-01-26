var gcal = {

  initiate: function(id, key, selector) {
    $.ajax({
        url: "https://www.googleapis.com/calendar/v3/calendars/" + id + "/events?key=" + key,
        type: "get",
        dataType: "json",
        success: function(data) {
          var html = gcal.buildCalendar(data);
          if (!!selector) {
            $(selector).append(html);
          }
          else return html;
        }
    });
  },

  buildCalendar: function(data) {
    var html = "<h2 class='gcal-title'>" + data.summary + "</h2>";

    if (data.items.length > 0) {
      html+= "<ul class='gcal-list'>";
      for (var i = 0; i < data.items.length; i++) {
        html+= "<li>" + data.items[i].summary + "</li>";
      }
      html+= "</ul>";
    }

    return html;
  }

};
