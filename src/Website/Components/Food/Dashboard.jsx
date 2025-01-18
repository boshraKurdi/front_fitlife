import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import Category from "./Category";
import List from "./List";
import CloseIcon from '@mui/icons-material/Close';
import { ActStore } from "../../../Redux/Target/TargetSlice";
export default function Dashboard({ meals , id , open }) {
  const dispatch = useDispatch()
  const [Categories, setCategories] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const { value } = useSelector((state) => state.mode);
  const { loading , message , type} = useSelector((state) => state.target)
  const [check , setCheck] = useState([]);
  const [calories , setCalories] = useState([]);
  const [chipData, setChipData] = useState([]);
  let newArMeat = Categories !== 0 ?
  meals && meals[0]?.meal?.filter(data => data.category_id == Categories) : meals[0].meal
console.log(newArMeat)


  
  const totalCalories = chipData.reduce((accumulator, current) => {
    // تحقق مما إذا كان id الحالي موجودًا في meals
    const existsInMeals = meals[0]?.meal?.some(obj => obj.id === current.id);
    
    // إذا كان موجودًا، أضف السعرات الحرارية إلى accumulator
    return existsInMeals ? accumulator + current.calories : accumulator;
}, 0);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.id !== chipToDelete.id)
    );
    setCheck((checks) =>
      checks.filter((check) => check !== chipToDelete.id)
    );
    setCalories((calories) =>
      calories.filter((calorie) => calorie !== chipToDelete.calories)
    );
    enqueueSnackbar(`remove item successfully!`, { variant: 'error'});
  };
  useEffect(() => {
    const matchedRecords = meals[0]?.allMeals && meals[0]?.allMeals[0]?.meal?.filter(item1 =>
      meals[0]?.targets && meals[0]?.targets?.some(item2 => item2.check === item1.id)
    );
    
    setChipData(matchedRecords);
    const ids = matchedRecords.map(item => item.id);
    setCheck(ids);
    const calories = matchedRecords.map(item => item.calories);
    setCalories(calories);
  }, [meals]); 
  const newData = chipData.length > 0 && chipData.map((data) => {

    return (
      <>
      { meals[0]?.meal?.some(obj => obj.id === data.id)  &&
      <div className={`highlight-card ${value}`}>
        <CloseIcon onClick={handleDelete(data)} className="icon_dashboard" />
        <img className="highlight-img" src={data.media[0].original_url} alt="none" />
        <div className="highlight-desc">
          <h4>{data.title}</h4>
          <p>{data.calories + " calories"}</p>
        </div>
      </div>
      }
      </>
    );
  });
  return (
    <>
      <div className="main-highlight">
        <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}} className="main-header">
          <h2 className="main-title">Recommendations</h2>
          <div className="avg" style={{display:'flex' , alignItems:'center'}}>
            <p>totle calories: {totalCalories}</p>
          <button onClick={()=>{
            dispatch(ActStore({calories:calories , id:id , check:check}))
            .unwrap()
            .then(()=>{
              enqueueSnackbar(`${message}`, { variant: `${type}`});
            })
            .catch(()=>{
              enqueueSnackbar(`${message}`, { variant: `${type}`});
            })
          }} className='save_food' disabled={loading === 'pending' ? true : false}>{loading === 'pending' ? 'loading...' : "Save"}</button>
          </div>
        </div>
        <div className="highlight-wrapper">{newData}</div>
      </div>
      <div className={`main-menus ${value}`}>
        <Category Categories={Categories} setCategories={setCategories} />
        <hr className="divider" />
        <List calories={calories} setCalories={setCalories} check={check} setCheck={setCheck} chipData={chipData} setChipData={setChipData} meals={newArMeat} />
      </div>
    </>
  );
}
