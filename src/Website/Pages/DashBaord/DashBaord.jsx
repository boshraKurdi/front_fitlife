import "./DashBaord.css";
import MyPlan from "../../Components/DashBaord/MyPlan/MyPlan";
import MyGoal from "../../Components/DashBaord/MyGoal/MyGoal";
export default function DashBaord() {
  console.log('dashbaord page')
  return (
      <main>
        <article>
          <MyGoal />
          <MyPlan />
          {/* <OrderGoal /> */}
        </article>
      </main>
  );
}
