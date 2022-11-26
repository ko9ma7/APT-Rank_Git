from audioop import add
from types import NoneType
import requests
import datetime
from dateutil.relativedelta import *
import time
import os
import pandas as pd
import json
from urllib import parse
from fredapi import Fred

path = os.path.dirname( os.path.abspath(__file__) )
temp_path = path.split('\\')

key = "b19cc349623b497fae5151dd4a3739fe"

#기준시점 선정
now = datetime.datetime.now()
date_7days_ago = now - datetime.timedelta(days=7)
date_3years_ago = now - relativedelta(years=3)

date_1Q_ago = now - relativedelta(months=3)
date_2Q_ago = now - relativedelta(months=6)
date_3Q_ago = now - relativedelta(months=9)
date_4Q_ago = now - relativedelta(months=12)

buying_power_quaters = [date_2Q_ago, date_3Q_ago, date_4Q_ago]

date_6m_ago = now - relativedelta(months=6)
date_7m_ago = now - relativedelta(months=7)
date_8m_ago = now - relativedelta(months=8)

PIR_Month = [date_6m_ago, date_7m_ago, date_8m_ago]

str_now_ym = now.strftime("%Y%m")
str_now_y = now.strftime("%Y")
str_now_m = now.strftime("%m")

result_df = pd.DataFrame()

def save_buying_power():
    global result_df
    print("Start to get Buying Power")

    for i in range(len(buying_power_quaters)):
        str_year = buying_power_quaters[i].strftime("%Y")
        if buying_power_quaters[i].month >= 1 and buying_power_quaters[i].month <= 3:
            str_quater = '01'
        if buying_power_quaters[i].month >= 4 and buying_power_quaters[i].month <= 6:
            str_quater = '02'
        if buying_power_quaters[i].month >= 7 and buying_power_quaters[i].month <= 9:
            str_quater = '03'
        if buying_power_quaters[i].month >= 10 and buying_power_quaters[i].month <= 12:
            str_quater = '04'

        str_date = str_year + str_quater

        url = 'https://www.hf.go.kr/research/openapi/SttsApiTblData.do?KEY=' + key + '&pIndex=1&pSize=50&STATBL_ID=T186503126543136&DTACYCLE_CD=QY&WRTTIME_IDTFR_ID=' + str_date + '&type=json'
        
        response = requests.get(url)
        #pars = xmltodict.parse(response.text)
        #jsonDump = json.dumps(pars)
        result = json.loads(response.text)
        data_list = result['SttsApiTblData'][1]['row']
        #for k in range(len(data_list)):
        #    print(data_list[k]['WRTTIME_IDTFR_ID'], data_list[k]['ITM_NM'], data_list[k]['DTA_VAL'])

        df = pd.DataFrame(data_list)
        if i == 0:
            df.drop(['STATBL_ID', 'DTACYCLE_CD', 'WRTTIME_IDTFR_ID', 'ITM_DATANO', 'CLS_DATANO', 'CLS_NM', 'UI_NM'], axis=1, inplace=True)
            result_df = df
            result_df.columns = ['Location', "BP_" + str_date + "Q"]
        else:
            df.drop(['STATBL_ID', 'ITM_NM', 'DTACYCLE_CD', 'WRTTIME_IDTFR_ID', 'ITM_DATANO', 'CLS_DATANO', 'CLS_NM', 'UI_NM'], axis=1, inplace=True)
            df.columns = ["BP_" + str_date + "Q"]
            result_df = pd.concat((result_df, df), axis=1)
            
    for j in range(len(result_df)):
        result_df.loc[j, 'Location'] = location_name_change(result_df.iloc[j]['Location'])

    #print(result_df)
    print("Buying Power saved at " + str(now))
    result_df.to_json(path + "/BP.json", force_ascii=False, indent=4)
    result_df.to_csv(path + "/BP.csv", encoding="CP949")

def save_PIR():
    global result_df
    print("Start to get PIR")

    for i in range(len(PIR_Month)):
        str_date = PIR_Month[i].strftime("%Y%m")
        url = 'https://www.hf.go.kr/research/openapi/SttsApiTblData.do?KEY=' + key + '&pIndex=1&pSize=50&STATBL_ID=T188183126881844&DTACYCLE_CD=MM&WRTTIME_IDTFR_ID=' + str_date + '&type=json'        
        
        response = requests.get(url)
        #pars = xmltodict.parse(response.text)
        #jsonDump = json.dumps(pars)
        result = json.loads(response.text)
        data_list = result['SttsApiTblData'][1]['row']
        #for k in range(len(data_list)):
        #    print(data_list[k]['WRTTIME_IDTFR_ID'], data_list[k]['ITM_NM'], data_list[k]['DTA_VAL'])

        df = pd.DataFrame(data_list)
        if i == 0:
            df.drop(['STATBL_ID','DTACYCLE_CD', 'WRTTIME_IDTFR_ID', 'ITM_DATANO', 'CLS_DATANO', 'UI_NM'], axis=1, inplace=True)            
            result_df = df
            result_df.columns = ['PIR/LIR', 'Location', str_date]
        else:
            df.drop(['STATBL_ID', 'ITM_NM', 'DTACYCLE_CD', 'WRTTIME_IDTFR_ID', 'ITM_DATANO', 'CLS_DATANO', 'CLS_NM', 'UI_NM'], axis=1, inplace=True)
            df.columns = [str_date]
            result_df = pd.concat((result_df, df), axis=1, join='inner')
            
    result_df = result_df[result_df['PIR/LIR']=='PIR']
    result_df = result_df.reset_index(level=None, drop=True)    

    for j in range(len(result_df)):
        result_df.loc[j, 'Location'] = location_name_change(result_df.iloc[j]['Location'])
    
    print("PIR saved at " + str(now))
    result_df.to_json(path + "/PIR.json", force_ascii=False, indent=4)
    result_df.to_csv(path + "/PIR.csv", encoding="CP949")

def location_name_change(loc):
    if loc == '전국':
        return "전국"
    if loc == '부산' or loc == '대구' or loc == '인천'  or loc == '광주'  or loc == '대전'  or loc == '울산'  or loc == '세종'  or loc == '서울' :
        return loc+'시'
    if loc == '경기' or loc == '강원' or loc == '제주':
        return loc + '도'
    if loc == '충북':
        return "충청북도"
    if loc == '충남':
        return "충청남도"
    if loc == '경북':
        return "경상북도"
    if loc == '경남':
        return "경상남도"
    if loc == '전북':
        return "전라북도"
    if loc == '전남':
        return "전라남도"

save_buying_power()
save_PIR()

#save_BOK_interest_info()
#save_FED_interest_info()

