var content = "";

$('#card-caption').hide();

$(document).ready(function() {
  $(".button-collapse").sideNav();

  var uri = params.a;
  if (uri == undefined) {
    $('#main-body-text').append(
      '<center>' + 
        '<img class="tip-image" src="images/uiharu-not-found.png"><br />' + 
        '没有文章id，加载不了啊~' +
      '</center>');
    return;
  }

  $.ajax({
    url: 'articles/' + uri + '/brief.json', 
    type: 'get',
    dataType: "json", 
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      $('#main-body-text').append(
        '<center>' + 
          '<img class="tip-image" src="images/uiharu-file-lost.png"><br />' + 
          '哎呀，文章简介丢了…' +
        '</center>');
      $('.recent-post-progress').hide();
    },
    success: function(brief) {
      $('#cover-image').css('background-image', 'url(/articles/' + uri + '/' + brief.coverImage + ")");
      $('#card-title').html(brief.title);
      $('#footer-title').html(brief.title + "（发布于" + brief.creationTime + "）");
      $('#subtitle').html(brief.subtitle);
	  duoshuo(brief);
      document.title = brief.title + " | 初春·姫";

      $('#card-caption-progress').hide();
      $('#card-caption').show();

      content += '<p><strong>' + brief.summaryTitle + "</strong>  " + brief.summaryContent +'</p><hr />';

      $.get('articles/' + uri + '/index.html', function(data) {
        content += data;
        $('#main-body-text').append(content);
        $('#recent-post-progress').hide();
        //$('img').addClass('materialboxed');
        //$('img').materialbox();
      });
    }
    });
	
});

// 多说评论框
var duoshuoQuery = {short_name:"uiharuhime"};

function duoshuo(brief) {
  $('#duoshuo-remarks').append(
	'<div class="ds-thread" ' + 
	  'data-thread-key="' + params.a + '" ' + 
	  'data-title="' + brief.title + '" ' +
	  'data-url="' + location.href + '">' + 
	'</div>');
 (function() {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
  })();
}