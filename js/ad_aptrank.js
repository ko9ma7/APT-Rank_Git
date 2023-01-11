String.prototype.phoneNoRep = function()
{
    const str   = this;
    return str.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");
}

var ad_default = 
"<div class='adBox' onClick=\"window.open('https://naver.me/xGiHpeIf')\">"
    + "<div id='adText'>"
        + "<div id='adSub1'>아파트랭크 파트너쉽 (광고, 제휴)</div>"
        + "<div id='adTitle'>아파트랭크의 파트너가 되어 주세요!</div>"
        + "<div id='adInfo'>클릭하면 파트너쉽 신청 양식으로 연결됩니다.</div>"
    + "</div>"
    + "<div id='adImage'>"
    + "<img src='./ad/icon_apt_rank.png' height='55px'>"
    + "</div>"
+ "</div>"


var ad_info =
"<div class='adBox' id='adSelect'>"
    + "<div id='adText'>"
            + "<div id='adSub1'></div>"
            + "<div id='adTitle'></div>"
            + "<div id='adInfo'></div>"
        + "</div>"
        + "<div id='adImage'>"
        + "</div>"
    + "</div>"

var ad_pop =
"<div class='adBox' data-bs-toggle='modal' data-bs-target='#toggleModal1' id='adSelect' onClick='showAD()'>"
    + "<div id='adText'>"
            + "<div id='adSub1'></div>"
            + "<div id='adTitle'></div>"
            + "<div id='adInfo'></div>"
        + "</div>"
        + "<div id='adImage'>"
        + "</div>"
    + "</div>"

function showAD(){
    console.log(adData)
    shop_name = adData.data[0]['상호']
    shop_address = "경기 용인시 기흥구 죽전로 57 엘림프라자 112호" // 데이터 추가
    shop_owner = adData.data[0]['대표']
    shop_icon = "icon_apt_rank.png" //데이터 추가
    shop_comment = "안녕하세요. 신촌공인중개사사무소입니다.<br> 정확한 시세분석과 신뢰있는 업무처리로 <br> 고객님의 안전한 부동산거래를 생명으로 삼고 <br> 책임 중개를 성실히 해 나가겠습니다."
    + "<br> 고객님의 이익을 최대한 실현하고 <br> 고객님의 조건과 취향에 맞는 아파트를 선택해 드리겠습니다. <br><br>"
    + "♥중개사무소 위치안내♥ <br> 경기도 용인시 기흥구 보정동 1208-4번지 엘림프라자 112호 <br> (보정동 꽃메사거리 베스킨라빈스 건물에 위치) <br><br>"
    + "지금 한통의 전화로 부동산에 관한 완벽한 정보를 얻으실 수 있습니다. <br> 여러분의 소중한 재산을 부동산 전문가에게 맡겨주세요. <br> 전화주시면 내 집을 구하는 마음으로 책임중개 하도록 하겠습니다." //데이터 추가
    shop_phone = "0" + adData.data[0]['전화']
    shop_phone_with_hyphen = shop_phone.phoneNoRep()
    shop_cell = "0" + adData.data[0]['휴대폰']
    shop_cell_with_hyphen = shop_cell.phoneNoRep()
    shop_x = 37.320811
    shop_y = 127.115336

    titleHtml = "";
    detailHtml = "";
    footerHtml = "";

    titleHtml += "<div id='ad_title'>"
        titleHtml +="<div style='text-align:center; align-self:center'><div class='image_wrap'><img src='./ad/" + shop_icon + "' height='60px'></div></div>"
        titleHtml += "<div id='ad_title_sub'>"
            titleHtml += "<div class='popupTitle'><h1 style='font-size: 1em; font-weight: 600'>" + shop_name + "</h></div>"
            titleHtml += "<div style='font-size: 0.7em'>대표: " + shop_owner + "</div>"
            titleHtml += "<div style='font-size: 0.7em'>주소: " + shop_address + "</div>"
            titleHtml += "<div style='font-size: 0.7em'>전화: " + shop_cell_with_hyphen + " / " + shop_phone_with_hyphen + "</div>"
        titleHtml += "</div>"
    titleHtml += "</div>"

    var mapOptions = {
        center: new naver.maps.LatLng(shop_x, shop_y),
        zoom: 16, //지도의 초기 줌 레벨
        zoomControl: false, //줌 컨트롤의 표시 여부
        draggable: false,
        pinchZoom: false,
        scrollWheel: false,
        keyboardShortcuts: false,
        disableDoubleTapZoom: true,
        disableDoubleClickZoom: true,
        disableTwoFingerTapZoom: true
    };
    
    var map = new naver.maps.Map('ad_map', mapOptions);
    
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(shop_x, shop_y),
        map: map
    });

    detailHtml += "<div style='font-size: 0.85em'>" + shop_comment + "</div>"
    detailHtml += "<div id='ad_map'></div>"

    $('#toggleModalLabel').html(titleHtml);
    $('#simulDetail').html(detailHtml);
    $('#toggle1footer').html(footerHtml);
}