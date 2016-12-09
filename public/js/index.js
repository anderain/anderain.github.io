$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible({
    accordion : false
  });

  // fetch recent posts
  $.get('articles/recent-post.json', function (result) {
    for (var i = 0; i < result.length; ++i) {
      var brief = result[i];
      var uri = result[i].uri;
      console.log(brief);
      addCard($('#recent-posts'),
              '/articles/' + uri + '/' + brief.coverImage,
              brief.title,
              brief.subtitle,
              brief.summaryTitle,
              brief.summaryContent,
              'article.html?a=' + uri);
    }
    $('.recent-post-progress').hide();
  }, 'json');

});

function addCard(col, image, outerTitle, outerContent, innerTitle, innerContent, link) {
	var html = 
    '<div class="col s12 m6 l4"><div class="card">' +
      '<div  class="card-image waves-effect waves-block waves-light">' +
        '<img class="activator" src="' + image + '">' +
        '<span class="card-title title-shadow">' + outerTitle + '</span>' +
      '</div>' +
      '<div class="card-content">' +
        '<p>' + outerContent + '</p>' +
      '</div>' +
      '<div class="card-reveal">' +
        '<span class="card-title grey-text text-darken-4">' + innerTitle + '<i class="mdi-navigation-close right"></i></span>' +
        '<p>' + innerContent + '</p>' +
      '</div>' +
      '<div class="card-action">' +
        '<a href="' + link + '">查看详情</a>' +
      '</div>' +
    '</div>' +
  '</div></div>';
	col.append(html);
}