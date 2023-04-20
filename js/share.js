var shareTitle = ""
var shareText = ""
var shareURL = ""
var kakaoShareText = []
var kakaoKey = "a8a036bfb275fc87317e07f76dccecb2"

function share(shareTitle, shareText, shareURL){
  if (navigator.share) {
    navigator.share({
      title: shareTitle,
      text: shareText,
      url: shareURL
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    // fallback
    shareDialog.classList.add('is-open');
  }
}

function kakaoShare(shareTitle, shareText, shareURL) {
  Kakao.Link.sendDefault({
    objectType: 'text',
    text: shareText,
    link: {
      mobileWebUrl: shareURL,
      webUrl: shareURL,
    },
    buttons: [
      {
        title: '자세히 보기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
      {
        title: '앱으로 이동',
        link: {
          androidExecutionParams: 'https://play.google.com/store/apps/details?id=com.aptrank.app'          
        },
      },
    ]
  });
}

function kakaoShareButton(shareTitle, shareText, shareURL) {
  Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'text',
    text: shareTitle + shareText,
    link: {
      mobileWebUrl: shareURL,
      webUrl: shareURL,
    },
    buttons: [
      {
        title: '자세히 보기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
      {
        title: '앱으로 이동',
        link: {
          androidExecutionParams: 'https://play.google.com/store/apps/details?id=com.aptrank.app'          
        },
      },
    ]
  });
}

function CopyToClipboard(copied_text, msg_pop){
  var txt = copied_text
  var t = document.createElement("textarea");
  t.value = txt;
  document.body.appendChild(t);  
  t.select();
  t.focus();
  document.execCommand('copy');
  document.body.removeChild(t);

  toastr.options = {
    closeButton: false,
    progressBar: false,
    showMethod: 'fadeIn',
    closeMethod: 'fadeOut',
    positionClass: "toast-bottom-center",
    timeOut: 1000
  };
  output = msg_pop
  toastr.success(output);
}

function CopyToClipboard2(copied_text, msg_pop){
  var txt = copied_text

  window.navigator.clipboard.writeText(txt).then(() => {
    toastr.options = {
      closeButton: false,
      progressBar: false,
      showMethod: 'fadeIn',
      closeMethod: 'fadeOut',
      positionClass: "toast-bottom-center",
      timeOut: 1000
    };
    output = msg_pop
    toastr.success(output);
  })
}

function openOuterLink(url){  
  if(checkMobile() == "ios"){
    window.location.href = url
  }
  else{
    window.open(url)
  }  
}

function openExternalLink(url){  
  window.location.href = url  
  /*
  if ( navigator.platform ) {
      if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        location.href = aURL
      } else {
        window.open(aURL)
      }
  }
  */   
}
function openAptrank(){
  aURL = "https://www.aptrank.kr" + "?reg=" + selectedRegion +"&sub=" + selectedSubRegion
  location.href = aURL
  /*
  if ( navigator.platform ) {
      if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        location.href = aURL
      } else {
        window.open(aURL)
      }
  }
  */   
}

function openAptrankTHEME(){
  aURL = "https://www.aptrank.kr/theme" + "?reg=" + selectedRegion +"&sub=" + selectedSubRegion
  location.href = aURL
  /*
  if ( navigator.platform ) {
      if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        location.href = aURL
      } else {
        window.open(aURL)
      }
  }
  */   
}

function openOprank(){
  aURL = "https://www.aptrank.kr/op" + "?reg=" + selectedRegion +"&sub=" + selectedSubRegion
  location.href = aURL
  /*
  if ( navigator.platform ) {
      if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        location.href = aURL
      } else {
        window.open(aURL)
      }
  }
  */ 
}
function openAptrankBIZ2(){
  aURL = "https://www.aptrank.kr/biz"
  if(checkMobile() == "ios"){
    window.location.href = aURL
  }
  else{
    window.open(aURL)
  }
  /*
  if ( navigator.platform ) {
      if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        location.href = aURL
      } else {
        window.open(aURL)
      }
  }
  */
}

function openAptrankBIZ(){
  aURL = "https://www.aptrank.kr/biz" + "?reg=" + selectedRegion +"&sub=" + selectedSubRegion
  if(checkMobile() == "ios"){
    window.location.href = aURL
  }
  else{
    window.open(aURL)
  }
  /*
  if ( navigator.platform ) {
      if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        location.href = aURL
      } else {
        window.open(aURL)
      }
  }
  */
}
function openAptrankNEWS(){
  aURL = "https://www.aptrank.kr/newsinfo"
  location.href = aURL
  /*
  if ( navigator.platform ) {
      if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        location.href = aURL
      } else {
        window.open(aURL)
      }
  }
  */
}
function openAptrankPRICE(){
  aURL = "https://www.aptrank.kr/price"
  location.href = aURL
  /*
  if ( navigator.platform ) {
      if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        location.href = aURL
      } else {
        window.open(aURL)
      }
  }
  */
}