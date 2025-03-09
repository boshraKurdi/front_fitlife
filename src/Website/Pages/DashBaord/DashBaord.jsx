import "./DashBaord.css";
import MyPlan from "../../Components/DashBaord/MyPlan/MyPlan";
import MyGoal from "../../Components/DashBaord/MyGoal/MyGoal";
export default function DashBaord() {
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
