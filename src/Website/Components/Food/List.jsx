import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
export default function List({ calories , setCalories , check , setCheck , chipData, setChipData, meals }) {
  const { enqueueSnackbar } = useSnackbar();
  const nav = useNavigate()
  const newDta =
    meals ?
    meals[0].meal ?
    meals[0].meal.map((data) => {
      return (
        <div key={data.id} className="detail-card">
          <img
            className="detail-img"
            src={data?.media && data?.media[0]?.original_url}
            alt="none"
          />
          <div className="detail-desc">
            <div className="detail-name">
              <h4 onClick={()=>{nav('/mealDetails/'+data?.id)}}>{data?.title}</h4>
              <p className="detail-sub">{data?.description}</p>
              <p className="price">{data.calories + " calories"}</p>
            </div>
          </div>
          <button
            onClick={() => {
              setChipData((prevChipData) => [
                ...prevChipData,
                data
              ]);
              setCheck((prevCheck) => [
                ...prevCheck,
                data.id,
                 
              ]);
              setCalories((prevCa) => [
                ...prevCa,
                data.calories,
                 
              ]);
              enqueueSnackbar(`add ${data?.title} successfully!`, { variant: 'success'});
            }}
            className="add_to_order"
          >
            add to order
          </button>
        </div>
      );
    }):'' : '';
  return (
    <div className="main-detail">
      <h2 className="main-title-bottom">choose Order</h2>
      <div className="detail-wrapper">{newDta}</div>
    </div>
  );
}
