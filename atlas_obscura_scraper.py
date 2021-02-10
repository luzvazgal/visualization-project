#!/usr/bin/env python
# coding: utf-8

# In[1]:


#Import dependencies
from bs4 import BeautifulSoup as bs
import requests
from splinter import Browser
import pandas as pd
import json
import pymongo
from pymongo import MongoClient
from webdriver_manager.chrome import ChromeDriverManager


# In[2]:





# In[2]:


#Testing Scraping via web browser
executable_path = {"executable_path": ChromeDriverManager().install()}
browser = Browser("chrome", **executable_path, headless=False)


# 

# In[ ]:





# In[ ]:





# In[5]:


browser.visit(n_url)
html = browser.html
soup = bs(html, 'html.parser')


# In[6]:


print(soup.prettify())


# In[34]:


tag = soup.b
tag.name


# In[ ]:





# In[61]:





# In[62]:





# In[87]:


subtitle = soup.find_all('script')


# In[109]:


rele = subtitle[35].string.replace('\n','').strip()


# In[121]:


finallymf = json.loads(rele[27:-1])


# In[127]:


df = pd.DataFrame(finallymf['places'])


# In[128]:


df


# In[3]:


aus_url = 'https://www.atlasobscura.com/things-to-do/australia'
browser.visit(aus_url)
html = browser.html
soup = bs(html, 'html.parser')
aus_sub = soup.find_all('script')
aus_strip = aus_sub[35].string.replace('\n','').strip()
aus_dat = json.loads(aus_strip[27:-1])
ausdf = pd.DataFrame(aus_dat['places'])


# In[4]:


ausdf


# In[6]:


ausdf = ausdf.head(5)


# In[7]:


ausdf


# In[ ]:





# In[ ]:





# In[8]:


ausdf = ausdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)


# In[9]:


ausdf = ausdf[["country", "city", "title", "subtitle", "coordinates"]]


# In[10]:


ausdf


# In[12]:


aut_url = 'https://www.atlasobscura.com/things-to-do/austria'
browser.visit(aut_url)
html = browser.html
soup = bs(html, 'html.parser')
aut_sub = soup.find_all('script')
aut_strip = aut_sub[35].string.replace('\n','').strip()
aut_dat = json.loads(aut_strip[27:-1])
autdf = pd.DataFrame(aut_dat['places'])


# In[13]:


autdf = autdf.head(5)
autdf = autdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
autdf = autdf[["country", "city", "title", "subtitle", "coordinates"]]


# In[360]:





# In[14]:


autdf


# In[15]:


col_url = 'https://www.atlasobscura.com/things-to-do/colombia'
browser.visit(col_url)
html = browser.html
soup = bs(html, 'html.parser')
col_sub = soup.find_all('script')
col_strip = col_sub[35].string.replace('\n','').strip()
col_dat = json.loads(col_strip[27:-1])
coldf = pd.DataFrame(col_dat['places'])


# In[16]:


coldf = coldf.head(5)
coldf = coldf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
coldf = coldf[["country", "city", "title", "subtitle", "coordinates"]]


# In[17]:


coldf


# In[33]:


cri_url = 'https://www.atlasobscura.com/things-to-do/costa-rica'
browser.visit(cri_url)
html = browser.html
soup = bs(html, 'html.parser')
cri_sub = soup.find_all('script')
cri_strip = cri_sub[39].string.replace('\n','').strip()
cri_dat = json.loads(cri_strip[27:-1])
cridf = pd.DataFrame(cri_dat['places'])


# In[ ]:





# In[28]:





# In[30]:





# In[34]:


cridf = cridf.head(5)
cridf = cridf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
cridf = cridf[["country", "city", "title", "subtitle", "coordinates"]]


# In[35]:


cridf


# In[ ]:





# In[ ]:





# In[36]:


hrv_url = 'https://www.atlasobscura.com/things-to-do/croatia'
browser.visit(hrv_url)
html = browser.html
soup = bs(html, 'html.parser')
hrv_sub = soup.find_all('script')
hrv_strip = hrv_sub[35].string.replace('\n','').strip()
hrv_dat = json.loads(hrv_strip[27:-1])
hrvdf = pd.DataFrame(hrv_dat['places'])


# In[37]:


hrvdf = hrvdf.head(5)
hrvdf = hrvdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
hrvdf = hrvdf[["country", "city", "title", "subtitle", "coordinates"]]


# In[38]:


hrvdf


# In[39]:


est_url = 'https://www.atlasobscura.com/things-to-do/estonia'
browser.visit(est_url)
html = browser.html
soup = bs(html, 'html.parser')
est_sub = soup.find_all('script')
est_strip = est_sub[35].string.replace('\n','').strip()
est_dat = json.loads(est_strip[27:-1])
estdf = pd.DataFrame(est_dat['places'])


# In[40]:


estdf = estdf.head(5)


# In[41]:


estdf = estdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
estdf = estdf[["country", "city", "title", "subtitle", "coordinates"]]


# In[42]:


estdf


# In[43]:


fin_url = 'https://www.atlasobscura.com/things-to-do/finland'
browser.visit(fin_url)
html = browser.html
soup = bs(html, 'html.parser')
fin_sub = soup.find_all('script')
fin_strip = fin_sub[35].string.replace('\n','').strip()
fin_dat = json.loads(fin_strip[27:-1])
findf = pd.DataFrame(fin_dat['places'])


# In[44]:


findf = findf.head(5)


# In[45]:


findf = findf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
findf = findf[["country", "city", "title", "subtitle", "coordinates"]]
findf


# In[46]:


fra_url = 'https://www.atlasobscura.com/things-to-do/france'
browser.visit(fra_url)
html = browser.html
soup = bs(html, 'html.parser')
fra_sub = soup.find_all('script')
fra_strip = fra_sub[35].string.replace('\n','').strip()
fra_dat = json.loads(fra_strip[27:-1])
fradf = pd.DataFrame(fra_dat['places'])


# In[47]:


fradf = fradf.head(5)


# In[48]:


fradf = fradf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
fradf = fradf[["country", "city", "title", "subtitle", "coordinates"]]
fradf


# In[49]:


deu_url = 'https://www.atlasobscura.com/things-to-do/germany'
browser.visit(deu_url)
html = browser.html
soup = bs(html, 'html.parser')
deu_sub = soup.find_all('script')
deu_strip = deu_sub[35].string.replace('\n','').strip()
deu_dat = json.loads(deu_strip[27:-1])
deudf = pd.DataFrame(deu_dat['places'])


# In[50]:


deudf = deudf.head(5)


# In[51]:


deudf = deudf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
deudf = deudf[["country", "city", "title", "subtitle", "coordinates"]]
deudf


# In[52]:


grc_url = 'https://www.atlasobscura.com/things-to-do/greece'
browser.visit(grc_url)
html = browser.html
soup = bs(html, 'html.parser')
grc_sub = soup.find_all('script')
grc_strip = grc_sub[35].string.replace('\n','').strip()
grc_dat = json.loads(grc_strip[27:-1])
grcdf = pd.DataFrame(grc_dat['places'])


# In[53]:


grcdf = grcdf.head(5)


# In[54]:


grcdf = grcdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
grcdf = grcdf[["country", "city", "title", "subtitle", "coordinates"]]
grcdf


# In[55]:


hun_url = 'https://www.atlasobscura.com/things-to-do/hungary'
browser.visit(hun_url)
html = browser.html
soup = bs(html, 'html.parser')
hun_sub = soup.find_all('script')
hun_strip = hun_sub[35].string.replace('\n','').strip()
hun_dat = json.loads(hun_strip[27:-1])
hundf = pd.DataFrame(hun_dat['places'])


# In[56]:


hundf = hundf.head(5)


# In[57]:


hundf = hundf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
hundf = hundf[["country", "city", "title", "subtitle", "coordinates"]]
hundf


# In[58]:


ita_url = 'https://www.atlasobscura.com/things-to-do/italy'
browser.visit(ita_url)
html = browser.html
soup = bs(html, 'html.parser')
ita_sub = soup.find_all('script')
ita_strip = ita_sub[35].string.replace('\n','').strip()
ita_dat = json.loads(ita_strip[27:-1])
itadf = pd.DataFrame(ita_dat['places'])


# In[59]:


itadf = itadf.head(5)


# In[60]:


itadf = itadf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
itadf = itadf[["country", "city", "title", "subtitle", "coordinates"]]
itadf


# In[61]:


lva_url = 'https://www.atlasobscura.com/things-to-do/latvia'
browser.visit(lva_url)
html = browser.html
soup = bs(html, 'html.parser')
lva_sub = soup.find_all('script')
lva_strip = lva_sub[35].string.replace('\n','').strip()
lva_dat = json.loads(lva_strip[27:-1])
lvadf = pd.DataFrame(lva_dat['places'])


# In[62]:


lvadf = lvadf.head(5)


# In[63]:


lvadf = lvadf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
lvadf = lvadf[["country", "city", "title", "subtitle", "coordinates"]]
lvadf


# In[64]:


ltu_url = 'https://www.atlasobscura.com/things-to-do/lithuania'
browser.visit(ltu_url)
html = browser.html
soup = bs(html, 'html.parser')
ltu_sub = soup.find_all('script')
ltu_strip = ltu_sub[35].string.replace('\n','').strip()
ltu_dat = json.loads(ltu_strip[27:-1])
ltudf = pd.DataFrame(ltu_dat['places'])


# In[65]:


ltudf = ltudf.head(5)


# In[66]:


ltudf = ltudf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
ltudf = ltudf[["country", "city", "title", "subtitle", "coordinates"]]
ltudf


# In[67]:


mlt_url = 'https://www.atlasobscura.com/things-to-do/malta'
browser.visit(mlt_url)
html = browser.html
soup = bs(html, 'html.parser')
mlt_sub = soup.find_all('script')
mlt_strip = mlt_sub[39].string.replace('\n','').strip()
mlt_dat = json.loads(mlt_strip[27:-1])
mltdf = pd.DataFrame(mlt_dat['places'])


# In[68]:


mltdf = mltdf.head(5)


# In[69]:


mltdf = mltdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
mltdf = mltdf[["country", "city", "title", "subtitle", "coordinates"]]
mltdf


# In[70]:


nld_url = 'https://www.atlasobscura.com/things-to-do/netherlands'
browser.visit(nld_url)
html = browser.html
soup = bs(html, 'html.parser')
nld_sub = soup.find_all('script')
nld_strip = nld_sub[35].string.replace('\n','').strip()
nld_dat = json.loads(nld_strip[27:-1])
nlddf = pd.DataFrame(nld_dat['places'])


# In[71]:


nlddf = nlddf.head(5)


# In[72]:


nlddf = nlddf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
nlddf = nlddf[["country", "city", "title", "subtitle", "coordinates"]]
nlddf


# In[73]:


nzl_url = 'https://www.atlasobscura.com/things-to-do/new-zealand'
browser.visit(nzl_url)
html = browser.html
soup = bs(html, 'html.parser')
nzl_sub = soup.find_all('script')
nzl_strip = nzl_sub[35].string.replace('\n','').strip()
nzl_dat = json.loads(nzl_strip[27:-1])
nzldf = pd.DataFrame(nzl_dat['places'])


# In[74]:


nzldf = nzldf.head(5)


# In[75]:


nzldf = nzldf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
nzldf = nzldf[["country", "city", "title", "subtitle", "coordinates"]]
nzldf


# In[76]:


nor_url = 'https://www.atlasobscura.com/things-to-do/norway'
browser.visit(nor_url)
html = browser.html
soup = bs(html, 'html.parser')
nor_sub = soup.find_all('script')
nor_strip = nor_sub[35].string.replace('\n','').strip()
nor_dat = json.loads(nor_strip[27:-1])
nordf = pd.DataFrame(nor_dat['places'])


# In[77]:


nordf = nordf.head(5)


# In[78]:


nordf = nordf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
nordf = nordf[["country", "city", "title", "subtitle", "coordinates"]]
nordf


# In[79]:


per_url = 'https://www.atlasobscura.com/things-to-do/peru'
browser.visit(per_url)
html = browser.html
soup = bs(html, 'html.parser')
per_sub = soup.find_all('script')
per_strip = per_sub[35].string.replace('\n','').strip()
per_dat = json.loads(per_strip[27:-1])
perdf = pd.DataFrame(per_dat['places'])


# In[80]:


perdf = perdf.head(5)


# In[81]:


perdf = perdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
perdf = perdf[["country", "city", "title", "subtitle", "coordinates"]]
perdf


# In[82]:


pol_url = 'https://www.atlasobscura.com/things-to-do/poland'
browser.visit(pol_url)
html = browser.html
soup = bs(html, 'html.parser')
pol_sub = soup.find_all('script')
pol_strip = pol_sub[35].string.replace('\n','').strip()
pol_dat = json.loads(pol_strip[27:-1])
poldf = pd.DataFrame(pol_dat['places'])


# In[83]:


poldf = poldf.head(5)


# In[84]:


poldf = poldf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
poldf = poldf[["country", "city", "title", "subtitle", "coordinates"]]
poldf


# In[85]:


rou_url = 'https://www.atlasobscura.com/things-to-do/romania'
browser.visit(rou_url)
html = browser.html
soup = bs(html, 'html.parser')
rou_sub = soup.find_all('script')
rou_strip = rou_sub[35].string.replace('\n','').strip()
rou_dat = json.loads(rou_strip[27:-1])
roudf = pd.DataFrame(rou_dat['places'])


# In[86]:


roudf = roudf.head(5)


# In[87]:


roudf = roudf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
roudf = roudf[["country", "city", "title", "subtitle", "coordinates"]]
roudf


# In[88]:


rus_url = 'https://www.atlasobscura.com/things-to-do/russia'
browser.visit(rus_url)
html = browser.html
soup = bs(html, 'html.parser')
rus_sub = soup.find_all('script')
rus_strip = rus_sub[35].string.replace('\n','').strip()
rus_dat = json.loads(rus_strip[27:-1])
rusdf = pd.DataFrame(rus_dat['places'])


# In[89]:


rusdf = rusdf.head(5)


# In[90]:


rusdf = rusdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
rusdf = rusdf[["country", "city", "title", "subtitle", "coordinates"]]
rusdf


# In[91]:


svn_url = 'https://www.atlasobscura.com/things-to-do/slovenia'
browser.visit(svn_url)
html = browser.html
soup = bs(html, 'html.parser')
svn_sub = soup.find_all('script')
svn_strip = svn_sub[39].string.replace('\n','').strip()
svn_dat = json.loads(svn_strip[27:-1])
svndf = pd.DataFrame(svn_dat['places'])


# In[92]:


svndf = svndf.head(5)


# In[93]:


svndf = svndf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
svndf = svndf[["country", "city", "title", "subtitle", "coordinates"]]
svndf


# In[94]:


esp_url = 'https://www.atlasobscura.com/things-to-do/spain'
browser.visit(esp_url)
html = browser.html
soup = bs(html, 'html.parser')
esp_sub = soup.find_all('script')
esp_strip = esp_sub[35].string.replace('\n','').strip()
esp_dat = json.loads(esp_strip[27:-1])
espdf = pd.DataFrame(esp_dat['places'])


# In[95]:


espdf = espdf.head(5)


# In[96]:


espdf = espdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
espdf = espdf[["country", "city", "title", "subtitle", "coordinates"]]
espdf


# In[97]:


che_url = 'https://www.atlasobscura.com/things-to-do/switzerland'
browser.visit(che_url)
html = browser.html
soup = bs(html, 'html.parser')
che_sub = soup.find_all('script')
che_strip = che_sub[35].string.replace('\n','').strip()
che_dat = json.loads(che_strip[27:-1])
chedf = pd.DataFrame(che_dat['places'])


# In[98]:


chedf = chedf.head(5)


# In[99]:


chedf = chedf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
chedf = chedf[["country", "city", "title", "subtitle", "coordinates"]]
chedf


# In[100]:


tur_url = 'https://www.atlasobscura.com/things-to-do/turkey'
browser.visit(tur_url)
html = browser.html
soup = bs(html, 'html.parser')
tur_sub = soup.find_all('script')
tur_strip = tur_sub[35].string.replace('\n','').strip()
tur_dat = json.loads(tur_strip[27:-1])
turdf = pd.DataFrame(tur_dat['places'])


# In[101]:


turdf = turdf.head(5)


# In[102]:


turdf = turdf.drop(['id','location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
turdf = turdf[["country", "city", "title", "subtitle", "coordinates"]]
turdf


# In[103]:


usa_url = 'https://www.atlasobscura.com/things-to-do/new-york'
browser.visit(usa_url)
html = browser.html
soup = bs(html, 'html.parser')
usa_sub = soup.find_all('script')
usa_strip = usa_sub[35].string.replace('\n','').strip()
usa_dat = json.loads(usa_strip[27:-1])
usadf = pd.DataFrame(usa_dat['places'])


# In[104]:


usadf = usadf.head(5)


# In[105]:


usadf = usadf.drop(['location','url','thumbnail_url','hide_from_maps','outside_regional_bounds','google_maps_url'], axis =1)
usadf = usadf[["country", "city", "title", "subtitle", "coordinates"]]


# In[106]:


usadf


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[107]:


conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
db = client.testdb


# In[108]:


db = client['AtlasObscura']
collection = db['countries']


# In[109]:


aus_dict = ausdf.to_dict('records')
collection.insert_many(aus_dict)

aut_dict = autdf.to_dict('records')
collection.insert_many(aut_dict)

col_dict = coldf.to_dict('records')
collection.insert_many(col_dict)

cri_dict = cridf.to_dict('records')
collection.insert_many(cri_dict)

hrv_dict = hrvdf.to_dict('records')
collection.insert_many(hrv_dict)

est_dict = estdf.to_dict('records')
collection.insert_many(est_dict)

fra_dict = fradf.to_dict('records')
collection.insert_many(fra_dict)

deu_dict = deudf.to_dict('records')
collection.insert_many(deu_dict)

grc_dict = grcdf.to_dict('records')
collection.insert_many(grc_dict)

hun_dict = hundf.to_dict('records')
collection.insert_many(hun_dict)

hun_dict = hundf.to_dict('records')
collection.insert_many(hun_dict)

ita_dict = itadf.to_dict('records')
collection.insert_many(ita_dict)

lva_dict = lvadf.to_dict('records')
collection.insert_many(lva_dict)

ltu_dict = ltudf.to_dict('records')
collection.insert_many(ltu_dict)

mlt_dict = mltdf.to_dict('records')
collection.insert_many(mlt_dict)

nld_dict = nlddf.to_dict('records')
collection.insert_many(nld_dict)

nzl_dict = nzldf.to_dict('records')
collection.insert_many(nzl_dict)

nor_dict = nordf.to_dict('records')
collection.insert_many(nor_dict)

per_dict = perdf.to_dict('records')
collection.insert_many(per_dict)

pol_dict = poldf.to_dict('records')
collection.insert_many(pol_dict)

rou_dict = roudf.to_dict('records')
collection.insert_many(rou_dict)

rus_dict = rusdf.to_dict('records')
collection.insert_many(rus_dict)

svn_dict = svndf.to_dict('records')
collection.insert_many(svn_dict)

esp_dict = espdf.to_dict('records')
collection.insert_many(esp_dict)

che_dict = chedf.to_dict('records')
collection.insert_many(che_dict)

tur_dict = turdf.to_dict('records')
collection.insert_many(tur_dict)

usa_dict = usadf.to_dict('records')
collection.insert_many(usa_dict)



# In[110]:


browser.quit()


# In[111]:


get_ipython().system('jupyter nbconvert --to script atlas_obscura Scraper.ipynb')


# In[ ]:




