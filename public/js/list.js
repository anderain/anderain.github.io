$('#load-progress').hide();

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.indicator').css('background-color','#2196f3');
  $('.tabel-label').click(function() {
  	onClickTab($(this).attr('data-tag'));
  });
  // check params
  if (params.tag == 'no-tag') {
    $('ul.tabs').tabs('select_tab', 'tab-area2');
  }
  else if (params.tag == 'game') {
  	$('ul.tabs').tabs('select_tab', 'tab-area3');
  }
  else if (params.tag == 'game-device') {
  	$('ul.tabs').tabs('select_tab', 'tab-area4');
  }
  else {
  	$('ul.tabs').tabs('select_tab', 'tab-area1');
  }
});

function onClickTab(tag) {
  $('#load-progress').show();
  $('#list-articles').hide();
  $('#list-articles').empty();
  $.get("/articles/list-" + tag + '.json', function(result) {
    var content = "";
    for (var i = 0; i < result.length; ++i) {
      content += createItemHtml(result[i]);
    }
    $('#load-progress').hide();
    $('#list-articles').append(content);
    $('#list-articles').show();
  }, 'json');
}

function createItemHtml(brief) {
  var html = 
  '<li class="collection-item avatar">' +
    '<span class="article-image" style="background-image: url(' + '/articles/' + brief.uri + '/' + brief.coverImage + ');">&nbsp;</span>' + 
    '<a class="title blue-text" href="' + 'article.html?a=' + brief.uri +  '">' + brief.title + '</a>' +
    '<p class="grey-text summary">' + brief.subtitle + '<br />发表于：' + dateSub(new Date(brief.creationTime)) + '</p>' +
    '<a href="#!" class="blue-text secondary-content"><i class="mdi-action-grade"></i></a>' +
  '</li>';
  return html;
}

function clip( str ){
  var sub_length = 40 ;
  var temp1 = str.replace(/[^\x00-\xff]/g,"**");
  var temp2 = temp1.substring(0,sub_length);
  var x_length = temp2.split("\*").length - 1 ;
  var hanzi_num = x_length /2 ;
  sub_length = sub_length - hanzi_num ;
  var res = str.substring(0,sub_length);
  if(sub_length < str.length ){
    var end = res + "…" ;
  }
  else  {
    var end = res ;
  }
  return end ;
}