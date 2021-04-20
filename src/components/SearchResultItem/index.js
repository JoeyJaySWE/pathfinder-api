import './searchResultItem.scss';

const SearchResultItem = (props) => 
{
    if(props.type === "armor"){

        return (
            <details>
            <summary>{props.itemName}</summary>
            <div className="scrollsBg">
              <strong>Class:</strong> {props.itemClass}<br/>
              <strong>Cost:</strong> {props.itemCost}<br/>
              <strong>AC:</strong> {props.itemAC}<br/>
              <strong>Max Dex Bonus:</strong> {props.itemMaxDexBonus}<br/>
              <strong>Check Penalty:</strong> {props.itemCheckPenalty}<br/>
              <strong>Spell Fail:</strong> {props.itemSpellFail}<br/>
              <strong>Max Speed:</strong> {props.itemMaxSpeed}<br/>
              <strong>Weight:</strong> {props.itemWeight}<br/>
            </div>
        </details>
      );
    }

    if(props.type === "weapons"){
        return (
        <details>
            <summary>{props.itemName}</summary>
            <div className="scrollsBg">
              <strong>Price:</strong> {props.itemPrice}<br/>
              <strong>Total Attack Bonus:</strong> {props.itemTotalAttackBonus}<br/>
              <strong>Damage:</strong> {props.itemDamage}<br/>
              <strong>Critical Hit:</strong> {props.itemCriticalHit}<br/>
              <strong>Range:</strong> {props.itemRange}<br/>
              <strong>Special Properties:</strong> {props.itemSpecialProperties}<br/>
              <strong>Amo:</strong> {props.itemAmo}<br/>
              <strong>Weight:</strong> {props.itemWeight}<br/>
              <strong>Size:</strong> {props.itemSize}<br/>
              <strong>Damage Type:</strong> {props.itemDamageType}<br/>
            </div>
        </details>
      );
    }

    if(props.type === "items"){
        return (
        <details>
            <summary>{props.itemName}</summary>
            <div className="scrollsBg">
              <strong>Cost:</strong> {props.itemCost}<br/>
              <strong>Weight:</strong> {props.itemWeight}<br/>
              <strong>Description:</strong><br/><p>{props.itemDescription}</p><br/>
            </div>
        </details>
      );
    }
};

export default SearchResultItem;