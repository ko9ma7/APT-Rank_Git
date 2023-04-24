# 네이버 검색 API 예제 - 블로그 검색
import os
import sys
import json
import urllib.request
client_id = "bK1kR34Gm1z0E39bibv1"
client_secret = "NiHhMup_9q"

path = os.path.dirname( os.path.abspath(__file__) )
temp_path = path.split('\\')

def generateNews(type, searchText):
    encText = urllib.parse.quote(searchText)

    if(type == "News"):
        url = "https://openapi.naver.com/v1/search/news.json?query=" + encText + "&start=1&display=30&sort=date" # JSON 결과
        #url = "https://openapi.naver.com/v1/search/news.json?query=" + encText + "&start=1&display=30&sort=sim" # JSON 결과
    if(type == "Blog"):
        #url = "https://openapi.naver.com/v1/search/blog.json?query=" + encText + "&start=1&display=30&sort=date" # JSON 결과
        url = "https://openapi.naver.com/v1/search/blog.json?query=" + encText + "&start=1&display=30&sort=sim" # JSON 결과
    
    # url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # XML 결과

    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()

    if(rescode==200):
        response_body = response.read()
        print(response_body.decode('utf-8'))
        json_obj = json.loads(response_body.decode('utf-8'))
        #print(json_obj)

        if(type == "News"):
            with open(path + '/news.json', 'w', encoding='utf-8') as f:
                json.dump(json_obj, f, ensure_ascii=False, indent=4)

        if(type == "Blog"):
            with open(path + '/blogs.json', 'w', encoding='utf-8') as f:
                json.dump(json_obj, f, ensure_ascii=False, indent=4)
    else:
        print("Error Code:" + rescode)
    

generateNews("News", "부동산, 시장")
generateNews("Blog", "부동산, 아파트, 아파트랭크")
