import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function List({ calories , setCalories , check , setCheck , chipData, setChipData, meals }) {
  const { enqueueSnackbar } = useSnackbar();
  const { language } = useSelector((state) => state.mode)
  const nav = useNavigate()
  const newDta =
    meals ?
    meals.map((data) => {
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
              
              language === 'ar' ? 
              enqueueSnackbar(`اضافة ${data?.title_ar} بنجاح!`, { variant: 'success'})
              :
              enqueueSnackbar(`add ${data?.title} successfully!`, { variant: 'success'});
            }}
            className="add_to_order"
          >
            {language === 'ar' ? "اضافة الى القائمة" : "add to order"}
          </button>
        </div>
      );
    }):'';
  return (
    <div className="main-detail">
      <h2 className="main-title-bottom">{language === 'ar' ? "اختر القائمة" : "choose Order"}</h2>
      <div className="detail-wrapper">{newDta}</div>
    </div>
  );
}
