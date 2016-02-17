$("#docs").ready(function() {
  createTableOfContents();
});

function createTableOfContents() {
  // Opening tags:
  var ToC = "<nav role='navigation'><h2>Contents:</h2><ul>";

  // Content:
  var el, id, title, link, entry;
  var count = 1;

  $("#docs h2").each(function() {
    el    = $(this);
    id    = el.attr('id', count);
    title = el.text();
    link  = "#" + el.attr('id');

    entry = "<li><a href='"
      + link + "'>"
      + title
      + "</a></li>";

    ToC += entry;
    count++;
  });

  // Closing tags:
  ToC += "</ul></nav>";

  $("#table-of-contents").prepend(ToC);
};

// Source: https://css-tricks.com/automatic-table-of-contents/