import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Home({meal}) {
  return (
    <section className="two-col-sec section">
      <div className="container">
        <div className="details_food_row align-items-center">
          <div className="col-lg-5" style={{ marginRight: "2rem" }}>
            <div className="sec-img mt-5">
              <img src={meal?.media && meal.media[0].original_url} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sec-text">
              <h2 className="xxl-title">{meal?.title}</h2>
              <p>
                {meal?.description}
              </p>
              <p>
                This is Lorem ipsum dolor sit amet consectetur adipisicing elit.
                At fugit laborum voluptas magnam sed ad illum? Minus officiis
                quod deserunt.
              </p>
            </div>
            <div className="sec_info">
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} />{meal?.calories} calories</span>
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} />{meal?.carbohydrates} carbohydrates</span>
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} /> {meal?.fats} fats</span>
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} />{meal?.proteins} proteins</span>
              <span><CheckCircleIcon style={{fontSize:'2.1rem' ,  marginRight:'.5rem'}} />{meal?.category?.title} category</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
