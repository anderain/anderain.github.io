$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible({
    accordion : false
  });

  // fetch recent posts
  $.get('articles/recent-post.json', function (result) {
    for (var i = 0; i < result.length; ++i) {
      addCard($('#recent-posts'), result[i]);
    }
    $('.recent-post-progress').hide();
  }, 'json');

});

function addCard(col, brief) {
  var time = dateSub(new Date(brief.creationTime));
	var html = 
    '<div class="col s12 m6 l4"><div class="card">' +
      '<div  class="card-image waves-effect waves-block waves-light">' +
        '<img class="activator" src="' + '/articles/' + brief.uri + '/' + brief.coverImage + '">' +
        '<span class="card-title title-shadow">' + brief.title + '</span>' +
      '</div>' +
      '<div class="card-content">' +
        '<p>' + brief.subtitle + '</p>' +
      '</div>' +
      '<div class="card-reveal">' +
        '<span class="card-title grey-text text-darken-4">' + brief.summaryTitle + '<i class="mdi-navigation-close right"></i></span>' +
        '<p>' + brief.summaryContent + '</p>' +
      '</div>' +
      '<div class="card-action">' +
        '<a href="' + 'article.html?a=' + brief.uri + '">查看详情</a>' +
        '<small class="right small grey-text">' + time + '</small>' +
      '</div>' +
    '</div>' +
  '</div></div>';
	col.append(html);
}
