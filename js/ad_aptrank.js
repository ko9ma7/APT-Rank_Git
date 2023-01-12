String.prototype.phoneNoRep = function()
{
    const str   = this;
    return str.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");
}

function checkMobile(){
	var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
	if ( varUA.indexOf('android') > -1) {
		//안드로이드
		return "android";
	} else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
		//IOS
		return "ios";
	} else {
		//아이폰, 안드로이드 외
		return "other";
	}
}

var part_default = 
"<div class='partBox' onClick=\"window.open('https://naver.me/xGiHpeIf')\">"
    + "<div id='partText'>"
        + "<div id='partSub1'>아파트랭크 파트너쉽 (광고, 제휴)</div>"
        + "<div id='partTitle'>아파트랭크의 파트너가 되어 주세요!</div>"
        + "<div id='partInfo'>클릭하면 파트너쉽 신청 양식으로 연결됩니다.</div>"
    + "</div>"
    + "<div id='partImage'>"
    + "<img src='./ad/icon_apt_rank.png' height='55px'>"
    + "</div>"
+ "</div>"


var part_info =
"<div class='partBox' id='partSelect'>"
    + "<div id='partText'>"
            + "<div id='partSub1'></div>"
            + "<div id='partTitle'></div>"
            + "<div id='partInfo'></div>"
        + "</div>"
        + "<div id='partImage'>"
        + "</div>"
    + "</div>"

var part_pop =
"<div class='partBox' data-bs-toggle='modal' data-bs-target='#toggleModal1' id='partSelect' onClick='showPART()'>"
    + "<div id='partText'>"
            + "<div id='partSub1'></div>"
            + "<div id='partTitle'></div>"
            + "<div id='partInfo'></div>"
        + "</div>"
        + "<div id='partImage'>"
        + "</div>"
    + "</div>"

function callNumber(num){
    location.href = "tel:" + num
}

function sendMessage(device, num){    
    location.href = 'sms:' + num + (device == 'ios' ? '&' : '?') + 'body='+ encodeURIComponent("아파트랭크를 통해 연락 드립니다.");
}

function goMap(url){
    window.open(url)
}

function showPART(){
    console.log(partData)
    shop_name = partData.data[0]['상호']
    shop_address = "경기 용인시 기흥구 죽전로 57 엘림프라자 112호" // 데이터 추가
    shop_owner = partData.data[0]['대표']
    shop_icon = "icon_apt_rank.png" //데이터 추가
    shop_comment = "안녕하세요. 신촌공인중개사사무소입니다.<br> 정확한 시세분석과 신뢰있는 업무처리로 <br> 고객님의 안전한 부동산거래를 생명으로 삼고 <br> 책임 중개를 성실히 해 나가겠습니다."
    + "<br> 고객님의 이익을 최대한 실현하고 <br> 고객님의 조건과 취향에 맞는 아파트를 선택해 드리겠습니다. <br><br>"
    + "♥중개사무소 위치안내♥ <br> 경기도 용인시 기흥구 보정동 1208-4번지 엘림프라자 112호 <br> (보정동 꽃메사거리 베스킨라빈스 건물에 위치) <br><br>"
    + "지금 한통의 전화로 부동산에 관한 완벽한 정보를 얻으실 수 있습니다. <br> 여러분의 소중한 재산을 부동산 전문가에게 맡겨주세요. <br> 전화주시면 내 집을 구하는 마음으로 책임중개 하도록 하겠습니다." //데이터 추가
    shop_phone = "0" + partData.data[0]['전화']
    shop_phone_with_hyphen = shop_phone.phoneNoRep()
    shop_cell = "0" + partData.data[0]['휴대폰']
    shop_cell_with_hyphen = shop_cell.phoneNoRep()
    shop_home = partData.data[0]['홈페이지']
    shop_x = 37.3207458 //데이터 추가
    shop_y = 127.1151086 //데이터 추가
    shop_map_url = "https://naver.me/5RcF1oCG" //데이터 추가

    titleHtml = "";
    detailHtml = "";
    footerHtml = "";
	
    titleHtml += "<div class='popupTitle' style='font-size: 1.1em; font-weight: 600; padding-left: 5px;'>" + shop_name + "</div>"
    titleHtml += "<div id='part_title'>"        
        titleHtml += "<div id='part_title_sub'>"
            titleHtml += "<div style='font-size: 0.6em; padding-left: 5px; color:gray'>대표 " + shop_owner + "</div>"
            titleHtml += "<div style='font-size: 0.6em; padding-left: 5px; color:gray'>" + shop_address + "</div>"
            titleHtml += "<div style='font-size: 0.6em; padding-left: 5px; padding-top: 3px; font-weight: 600'>" + shop_cell_with_hyphen + " / " + shop_phone_with_hyphen + "</div>"
        titleHtml += "</div>"
        titleHtml +="<div style='text-align:center; align-self:center'><div class='image_wrap'><img src='./ad/" + shop_icon + "' height='55px'></div></div>"
    titleHtml += "</div>"    

    detailHtml += "<div class='notice'>" + shop_comment + "</div><hr>"
    detailHtml += "<div id='part_map_wrap' onClick='goMap(shop_map_url)'>"
        detailHtml += "<div id='part_map'></div>"
    detailHtml += "</div>"

    footerHtml += "<div class='modal-footer'>"    
    if ( navigator.platform ) {
        if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
            footerHtml += " <div id='partBtn1'><button type='button' class='goApt' onClick='callNumber(shop_cell)' style='font-size: 0.85em'><i class='fa-solid fa-phone'></i>" + ' ' + shop_cell_with_hyphen + "</button></div>"
            footerHtml += " <div id='partBtn2'><button type='button' class='goApt' onClick='sendMessage(checkMobile(), shop_cell)' style='font-size: 0.85em'><i class='fa-regular fa-envelope'></i> 문자 </button></div>"            
        } else {}
    }    
    footerHtml += " <div id='partBtn3'><button type='button' class='goApt' onClick='window.open(\"" + shop_home + "\")' style='font-size: 0.85em'><i class='fa-solid fa-house'></i> 매물보기</button></div>"
    footerHtml += "</div>"  

    $('#toggleModalLabel').html(titleHtml);
    $('#simulDetail').html(detailHtml);
    $('#toggle1footer').html(footerHtml);

    $('#partBtn3').css({"grid-column" : "span 2"})
    $('.modal-footer').css({"padding-top" : "3px"})

    if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
	 var w = $(window).width() - 40;	 
    }
    else{
	 var w = 480;	 
    }    
    var h = 200;
	
    var mapOptions = {
        center: new naver.maps.LatLng(shop_x, shop_y),
	    size: new naver.maps.Size(w, h),
        zoom: 16, //지도의 초기 줌 레벨
        zoomControl: false, //줌 컨트롤의 표시 여부
        draggable: false,
        pinchZoom: false,
        scrollWheel: false,
        keyboardShortcuts: false,
        disableDoubleTapZoom: true,
        disableDoubleClickZoom: true,
        disableTwoFingerTapZoom: true,	
    };

    var map = new naver.maps.Map('part_map', mapOptions);    
    
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(shop_x, shop_y),
        map: map
    });
}
