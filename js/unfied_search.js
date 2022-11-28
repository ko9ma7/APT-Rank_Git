function showUnifiedSearchBar(){  
  showUnifiedAptSearchBar()
}
function showUnifiedAptSearchBar(){
  //$("#searchCard").slideDown();    
  $("#unifiedSearchCard").animate({
    opacity: 1.0,
    top: '0'
  }, 400, 'easeOutQuad'
  );
  $("#closeUnifiedSearch_floating").animate({
    opacity: 1.0,
    right: '5'
  }, 700, 'easeOutQuad'
  );

  $('#inputUnifiedSearch').focus();
}
function closeUnifiedSearch(){
  $("#unifiedSearchCard").animate({
    opacity: 0.0,
    top: '-150px'
  }, 400, 'easeInQuad'
  );
  $("#closeUnifiedSearch_floating").animate({
    opacity: 0.0,
    right: '-200px'
  }, 400, 'easeInQuad'
  );
  $('#inputUnifiedSearch').val("")

  if(selectedRegion == 'Korea'){
    if(selectedSubRegion == "Living_Top300" || selectedSubRegion == "Trans_Top300"  || selectedSubRegion == "Infra_Top300" || selectedSubRegion == "Edu_Top300" || selectedSubRegion == "Balanced_Top300"){
      updateTopTable(selectedMonth, selectedSubRegion)
    }
    else{
      updateRegion()
    }
  }
  else{
    aptSearch()
  }   
}
  
var unifiedInput = ""
function unifiedAptSearch(){
  $('#dataList').html("");
  unifiedInput = $('#inputUnifiedSearch').val()
  if(unifiedInput.length >= 2){
    for(var i = 0 ; i < searchingData.data.length ; i++){
      var aptName = searchingData.data[i]["아파트명"]
      var searchName = searchingData.data[i]["아파트명"] + " " + searchingData.data[i]["법정동주소"]

      if(searchName.indexOf(unifiedInput) >= 0){
        var aptName = searchingData.data[i]["아파트명"]
        var aptAddress = searchingData.data[i]["법정동주소"]
        var code = searchingData.data[i]["검색코드"]
        var sido = searchingData.data[i]["sido"]
        var gungu = searchingData.data[i]["gungu"]

        var addon_html = "<div class='searchedListBox' data-bs-toggle='modal' data-bs-target='#exampleModal' id='myModal' onClick='searchingUpdate(\"" + code + "\",\"" + sido + "\",\"" + gungu + "\")'>";
        addon_html += "<div class='searched_apt_name'>" + aptName + "</div>"
        addon_html += "<div class='searched_apt_info'>" + aptAddress + "</div>";
        addon_html += "</div>"

        $('#dataList').append(addon_html);
      }
    }

    $(".searched_apt_name:contains('" + unifiedInput + "')").each(function(){
      var regex = new RegExp(unifiedInput, 'gi')
      $(this).html( $(this).text().replace(regex, "<span class='colorTxt'>"+unifiedInput+"</span>") );
    })
    $(".searched_apt_info:contains('" + unifiedInput + "')").each(function(){
      var regex2 = new RegExp(unifiedInput, 'gi')
      $(this).html( $(this).text().replace(regex2, "<span class='colorTxt'>"+unifiedInput+"</span>") );
    })

    $('#dataList').append("<div style='height: 2em'></div>");
    //$('html').scrollTop(0)
  }
  else{      
    var addon_html = "<div style='font-size: 0.9em; font-weight: 600; text-align:center; padding-top: 30px'>빠른 검색 속도를 위해 <br> 두 글자 이상부터 검색할 수 있도록 해 두었어요!</div>"
    $('#dataList').append(addon_html);
  }
}

var searched_code = ""
var title_loading_html = "<div class='popupTitle'><h1 style='font-size: 1em; font-weight: 600'>데이터를 불러오고 있어요!</h></div>";
var detail_loading_html = "<div></div>";
var footer_loading_html = "<div></div>"
function searchingUpdate(code, sido, gungu){  

  $('#exampleModalLabel').html(title_loading_html);
  $('#aptDetail').html(detail_loading_html);
  $('#footer').html(footer_loading_html);

  searched_code = code
  closeUnifiedSearch()
  selectedRegion = sido
  selectedSubRegion = gungu
  $("#sido").val(sido).prop("selected", true);
  optionChange(selectedSubRegion)
  sortSelection = "sortDefault"
  updateRegion()
}