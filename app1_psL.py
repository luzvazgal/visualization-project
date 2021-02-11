
  
# Dependencies and Setup
import pandas as pd
import numpy as np
import pymongo


def number_list(list_i):
        var_def=list_i
        var_def=np.nan_to_num(var_def).tolist()
        
        for i in range(len(var_def)):
            element=var_def[i]
            try:
                new_element=float(element)
            except:
                if isinstance(element, int):
                    new_element=float(element)
                elif isinstance(element, str):
                    new_element=0
            
            var_def[i]
        
        var_def=[float(x) for x in var_def ]
        var_def=np.nan_to_num(var_def).tolist()
            
        return var_def


def data_OCEDE():
    # Files to Load
    file_australia = "data/australia.csv"
    file_austria="data/austria.csv"
    file_colombia="data/colombia.csv"
    file_CR="data/costa_rica.csv"
    file_croatia="data/croatia.csv"
    file_estonia="data/estonia.csv"
    file_finland="data/finland.csv"
    file_france="data/france.csv"
    file_germany="data/germany.csv"
    file_greece="data/greece.csv"
    file_hungary="data/hungary.csv"
    file_italy="data/italy.csv"
    file_latvia="data/latvia.csv"
    file_lithuania="data/lithuania.csv"
    file_malta="data/malta.csv"
    file_netherlands="data/netherlands.csv"
    file_newzealand="data/new_zealand.csv"
    file_norway="data/norway.csv"
    file_peru="data/peru.csv"
    file_poland="data/poland.csv"
    file_romania="data/romania.csv"
    file_russia="data/russia.csv"
    file_slovenia="data/slovenia.csv"
    file_spain="data/spain.csv"
    file_swiss="data/switzerland.csv"
    file_turkey="data/turkey.csv"
    file_usa="data/united_states.csv"

    

    country_names=["Australia","Austria","Colombia","Costa Rica","Croatia","Estonia","Finland","France","Germany","Greece","Hungary",
                "Italy","Latvia","Malta","Netherlands","New Zealand","Norway","Peru","Poland","Romania","Russia","Slovenia",
                "Spain","Switzerland","Turkey","United States"]

    # Read File and store into Pandas data frame
    australia = pd.read_csv(file_australia)
    austria = pd.read_csv(file_austria)
    colombia = pd.read_csv(file_colombia)
    CR = pd.read_csv(file_CR)
    croatia = pd.read_csv(file_croatia)
    estonia = pd.read_csv(file_estonia)
    finland = pd.read_csv(file_finland)
    france = pd.read_csv(file_france)
    germany = pd.read_csv(file_germany)
    greece = pd.read_csv(file_greece)
    hungary = pd.read_csv(file_hungary)
    italy = pd.read_csv(file_italy)
    latvia = pd.read_csv(file_latvia)
    malta = pd.read_csv(file_malta)
    netherlands = pd.read_csv(file_netherlands)
    newzealand = pd.read_csv(file_newzealand)
    norway = pd.read_csv(file_norway)
    peru = pd.read_csv(file_peru)
    poland = pd.read_csv(file_poland)
    romania = pd.read_csv(file_romania)
    russia = pd.read_csv(file_russia)
    slovenia = pd.read_csv(file_slovenia)
    spain = pd.read_csv(file_spain)
    switzerland = pd.read_csv(file_swiss)
    turkey = pd.read_csv(file_turkey)
    usa = pd.read_csv(file_usa)

    #funtion to transform numbers
    

    australia= australia.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    australia= australia.drop(columns=['Unnamed: 0'])
    australia= australia.set_index('Domestic, inbound and outbound tourism')

    austria= austria.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    austria= austria.drop(columns=['Unnamed: 0'])
    austria= austria.set_index('Domestic, inbound and outbound tourism')

    colombia= colombia.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    colombia= colombia.drop(columns=['Unnamed: 0'])
    colombia= colombia.set_index('Domestic, inbound and outbound tourism')

    CR= CR.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44])
    CR= CR.drop(columns=['Unnamed: 0'])
    CR= CR.set_index('Domestic, inbound and outbound tourism')

    croatia= croatia.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44,45])
    croatia= croatia.drop(columns=['Unnamed: 0'])
    croatia= croatia.set_index('Domestic, inbound and outbound tourism')

    estonia= estonia.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44,45])
    estonia= estonia.drop(columns=['Unnamed: 0'])
    estonia= estonia.set_index('Domestic, inbound and outbound tourism')

    finland= finland.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    finland= finland.drop(columns=['Unnamed: 0'])
    finland= finland.set_index('Domestic, inbound and outbound tourism')

    france= france.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    france= france.drop(columns=['Unnamed: 0'])
    france= france.set_index('Domestic, inbound and outbound tourism')

    germany= germany.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    germany= germany.drop(columns=['Unnamed: 0'])
    germany= germany.set_index('Domestic, inbound and outbound tourism')

    greece= greece.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    greece= greece.drop(columns=['Unnamed: 0'])
    greece= greece.set_index('Domestic, inbound and outbound tourism')

    hungary= hungary.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44])
    hungary= hungary.drop(columns=['Unnamed: 0'])
    hungary= hungary.set_index('Domestic, inbound and outbound tourism')

    italy= italy.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    italy= italy.drop(columns=['Unnamed: 0'])
    italy= italy.set_index('Domestic, inbound and outbound tourism')

    latvia= latvia.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42])
    latvia= latvia.drop(columns=['Unnamed: 0'])
    latvia= latvia.set_index('Domestic, inbound and outbound tourism')

    malta= malta.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44,45])
    malta= malta.drop(columns=['Unnamed: 0'])
    malta= malta.set_index('Domestic, inbound and outbound tourism')

    netherlands= netherlands.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    netherlands= netherlands.drop(columns=['Unnamed: 0'])
    netherlands= netherlands.set_index('Domestic, inbound and outbound tourism')

    newzealand= newzealand.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44,45])
    newzealand= newzealand.drop(columns=['Unnamed: 0'])
    newzealand= newzealand.set_index('Domestic, inbound and outbound tourism')

    norway= norway.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44,45])
    norway= norway.drop(columns=['Unnamed: 0'])
    norway= norway.set_index('Domestic, inbound and outbound tourism')

    peru= peru.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44,45])
    peru= peru.drop(columns=['Unnamed: 0'])
    peru= peru.set_index('Domestic, inbound and outbound tourism')

    poland= poland.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    poland= poland.drop(columns=['Unnamed: 0'])
    poland= poland.set_index('Domestic, inbound and outbound tourism')

    romania= romania.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44,45])
    romania= romania.drop(columns=['Unnamed: 0'])
    romania= romania.set_index('Domestic, inbound and outbound tourism')

    russia= russia.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44])
    russia= russia.drop(columns=['Unnamed: 0'])
    russia= russia.set_index('Domestic, inbound and outbound tourism')

    slovenia= slovenia.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44])
    slovenia= slovenia.drop(columns=['Unnamed: 0'])
    slovenia= slovenia.set_index('Domestic, inbound and outbound tourism')

    spain= spain.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43,44])
    spain= spain.drop(columns=['Unnamed: 0'])
    spain= spain.set_index('Domestic, inbound and outbound tourism')

    switzerland= switzerland.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,32,33,34,35,36,37,38,39,40,41,42,43,44])
    switzerland= switzerland.drop(columns=['Unnamed: 0'])
    switzerland= switzerland.set_index('Domestic, inbound and outbound tourism')

    turkey= turkey.drop([0,1,2,3,4,5,6,7,8,9,12,13,20,21,22,23,26,27,34,35,36,37,38,39,40,41,42,43,44,45])
    turkey= turkey.drop(columns=['Unnamed: 0'])
    turkey= turkey.set_index('Domestic, inbound and outbound tourism')

    usa= usa.drop([0,1,2,3,4,5,6,7,8,11,12,19,20,21,22,25,26,33,34,35,36,37,38,39,40,41,42,43])
    usa= usa.drop(columns=['Unnamed: 0'])
    usa= usa.set_index('Domestic, inbound and outbound tourism')

    countries=[australia,austria,colombia,CR,croatia,estonia,finland,france,germany,greece,hungary,italy,latvia,malta,
            netherlands,newzealand,norway,peru,poland,romania,russia,slovenia,spain,switzerland,turkey,usa]

    mylist=[]

    country_index=0
    for country in countries:
        
        years=list(country.columns)
        td_index=list(country.index).index('Top destinations')
        tm_index=list(country.index).index('Top markets')
        obt_index=list(country.index).index('Outbound tourism')
        

        tm_list=list(country.index)[tm_index+1:obt_index]
        td_list=list(country.index)[td_index+1:]

        top_destinations=dict([(i,[])for i in td_list])
        top_markets=dict([(str(i),[])for i in tm_list])
        
        inbound=list(country.loc["Total international arrivals"])
        outbound=list(country.loc["Total international departures"])
        
    
    

        for k, v in top_destinations.items():
            item_df=country.loc[k,:]
            if len(item_df.shape) > 1:
                temp=list(item_df.iloc[1])
            else: 
                temp=list(item_df)
            top_destinations[k]=number_list(temp)
    
        for k, v in top_markets.items():
            item_df=country.loc[k,:]
            if len(item_df.shape) > 1:
                temp=list(item_df.iloc[1])
            else: 
                temp=list(item_df)
            top_markets[k]=number_list(temp)

        finaldata={
            'name':country_names[country_index],
            'years':number_list(years),
            'inbound_tourism':number_list(inbound),
            'top_markets':top_markets,
            'outbound_tourism':number_list(outbound),
            'top_destinations':top_destinations    
        
        }
        country_index+=1

        mylist.append(finaldata)

        
    return mylist




def coordinates():
    #Adding CSV with coordinates
    file_coordinates="data/coordinates.csv"
    coords_df = pd.read_csv(file_coordinates, sep='\t')
    coords_dict=coords_df.to_dict(orient='records')


    return coords_dict


mylist=data_OCEDE()
coords_dict=coordinates()

conn = 'mongodb+srv://user1:1234@cluster0.oi7pu.mongodb.net/turismo?retryWrites=true&w=majority'
client = pymongo.MongoClient(conn)
db = client['tourismDB']
collectionTourism=db['tourismDB']
collectionCoordenates=db['coordenates']
<<<<<<< HEAD

#crear distintas colleciones con
=======

#crear distintas colleciones con

for item in mylist:
   collectionTourism.insert_one(item)
>>>>>>> c977c835e8cdc782c2042af13e01856b366969bd

#for item in mylist:
  # collectionTourism.insert_one(item)

collectionCoordenates.insert_many(coords_dict)