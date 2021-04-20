import Header from '../components/Header/index.js';
import Searchbar from '../components/Searchbar';
import React from "react";
import SearchResultItem from '../components/SearchResultItem';

const TestApi = () => {
  
  const [searchResult, setSearchResult] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [itemType, setItemType] = React.useState("");
  const [isClicked, setClicked] = React.useState(false);
  const [resultType, setResultType] = React.useState('');
  
  
  React.useEffect(() => {
    const rootUrl = `${process.env.REACT_APP_API_URL}test-api.php/?api_key=${process.env.REACT_APP_API_KEY}`;
    if (!searchQuery) {
      return;
    }
    
    if(isClicked){

      
      
      console.log(window.location);
      fetch(`${rootUrl}&type=${itemType}&query=${searchQuery}`, {
        referrerPolicy: 'origin-when-cross-origin'
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((json) => {

          setSearchResult(json);
          if('ac' in json[0]){
            setResultType('armor');
          }
          if('damge' in json[0]){
            setResultType('weapons');
          }
          if('desc' in json[0]){
            setResultType('items');
          }
        
        
      }).catch((error) => {
        console.log(error)
      });
      
    }

  }, [searchQuery, isClicked, itemType, resultType]);


  const handleChanged=(e)=>{
    setItemType(e.target.value);
  };

  const settingClicked=(e)=>{
    setClicked(true);
  }


  

      return (
        <>
          <Header type="big"
            title="Database Search" 
            subtitle="Type your query bellow and we'll provide the data."/>
          <Searchbar 
            handleChange={(e) => setSearchQuery(e.target.value)}
            searchName = 'search'
            searchPlaceholder = 'Search...'
            optionsChange = {handleChanged}
            btnColor = 'red_die'
            btnClicked = {settingClicked}
            btnTxt = 'Search'
            />
        
          {searchQuery !== null && searchResult.length === 0 &&
            <p>"No Matches found!"</p>   
          }

          {searchQuery !== null && 
          searchResult !== 0 &&
          resultType === 'armor' &&
          
            searchResult.map((item) => {
              return (
                <SearchResultItem
                  type='armor'
                  itemName={item.armor_name}
                  itemClass={item.class}
                  itemCost={item.cost}
                  itemAC={item.ac}
                  itemMaxDexBonus={item.dexBonus}
                  itemCheckPenalty={item.checkPenalty}
                  itemSpellFail={item.spellFail}
                  itemMaxSpeed={item.speed}
                  itemWeight={item.weight}
                />
              );
            })
           

          }

          {searchQuery !== null && 
          searchResult !== 0 &&
          resultType === 'weapons' &&
          
            searchResult.map((item) => {
           
              return (
                <SearchResultItem
                  type='weapons'
                  itemName={item.weapons_name}
                  itemPrice={item.Price}
                  itemTotalAttackBonus={item.totalAttackBonus}
                  itemDamage={item.damge}
                  itemCriticalHit={item.critical}
                  itemRange={item.range}
                  itemSpecialProperties={item.specialProperties}
                  itemAmo={item.amo}
                  itemWeight={item.weight}
                  itemSize={item.size}
                  itemDamageType={item.type}
                />
              );
            })
           

          }

          {searchQuery !== null && 
          searchResult !== 0 &&
          resultType === 'items' &&
          
            searchResult.map((item) => {
             
              return (
                <SearchResultItem
                  type='items'
                  itemName={item.items_name}
                  itemPrice={item.cost}
                  itemWeight={item.weight}
                  itemDescription={item.desc}

                />
              );
            })
           

          }

          
          
        </>
    );
   

  }
 



export default TestApi;