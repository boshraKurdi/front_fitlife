import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loading } from "../Website/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
// route dashboard
import MainDashboard from "../Dashboard/components/main/MainDashboard";
import Dashboard from "../Dashboard/pages/dashboard";
import UserIndex from "../Dashboard/data/UserIndex";
import Bar from "../Dashboard/pages/bar";
import PlanForm from "../Dashboard/pages/form/PlanForm";
import Line from "../Dashboard/pages/line";
import Pie from "../Dashboard/pages/pie";
import FAQ from "../Dashboard/pages/faq";
import Geography from "../Dashboard/pages/geography";
import Calendar from "../Dashboard/pages/calendar/calendar";
import GoalIndex from "../Dashboard/data/GoalIndex";
import E404 from "../Website/Components/E404/E404";
import PlanIndex from "../Dashboard/data/PlanIndex";
import ExerciseIndex from "../Dashboard/data/ExerciseIndex";
import GoalForm from "../Dashboard/pages/form/GoalForm";
import DetailsPlan from "../Dashboard/pages/details/DetailsPlan";
import DetailsGoal from "../Dashboard/pages/details/DetailsGoal";
import GymIndex from "../Dashboard/data/GymIndex";
import GymForm from "../Dashboard/pages/form/GymForm";
import Exercise from "../Dashboard/data/Exercise";
import Plan from "../Dashboard/data/Plan";
import GoalUpdate from "../Dashboard/pages/update/GoalUpdate";
import PlanUpdate from "../Dashboard/pages/update/PlanUpdate";
import DetailsGym from "../Dashboard/pages/details/DetailsGym";
import GymUpdate from "../Dashboard/pages/update/GymUpdate";
import DetailsExercise from "../Dashboard/pages/details/DetailsExercise";
import ExerciseForm from "../Dashboard/pages/form/ExerciseForm";
import ExerciseUpdate from "../Dashboard/pages/update/ExerciseUpdate";
import Meal from "../Dashboard/data/Meal";
import MealUpdate from "../Dashboard/pages/update/MealUpdate";
import MealForm from "../Dashboard/pages/form/MealForm";
import DetailsMeal from "../Dashboard/pages/details/DetailsMeal";
import ServiceForm from "../Dashboard/pages/form/ServiceForm";
import ServiceUpdate from "../Dashboard/pages/update/ServiceUpdate";
import ServiceIndex from "../Dashboard/data/ServiceIndex";
import DetailsService from "../Dashboard/pages/details/DetailsService";
// route website
// import RequierBack from "../Website/index";
const regex = /^[0-9]+$/;
const Main = lazy(() => import("../Website/Pages/Main/Main")),
  Home = lazy(() => import("../Website/Pages/Home/Home")),
  Auth = lazy(() => import("../Website/Pages/Auth/Auth")),
  RequierAuth = lazy(() => import("../Auth/RequierAuth")),
  DashBoard = lazy(() => import("../Website/Pages/DashBaord/DashBaord")),
  GoogleCallBack = lazy(() =>
    import("../Website/Pages/Auth/GoogleCallBack/GoogleCallBack")
  ),
  Information = lazy(() => import("../Website/Pages/Information/Information")) ,
  GoalDetails = lazy(() => import("../Website/Pages/GoalDetails/GoalDetails")) ,
  GymDetails = lazy(()=> import('../Website/Pages/GymDetails/GymDetails')),
  Services = lazy(()=> import('../Website/Pages/Services/Services')),
  Payment = lazy(()=> import('../Website/Pages/Payment/Payment')),
  Gym = lazy(()=> import('../Website/Pages/Gym/Gym')),
  PlanDetails = lazy(()=> import('../Website/Pages/PlanDetails/PlanDetails')),
  Food = lazy(()=> import('../Website/Pages/Food/Food')),
  ProfileCoach = lazy(()=> import('../Website/Pages/ProfileCoach/ProfileCoach')),
  DetailsFood = lazy(()=> import("../Website/Pages/DetailsFood/DetailsFood")),
  ExerciseDetails= lazy(()=> import("../Website/Pages/ExerciseDetails/ExerciseDetails")),
  ProfileUser = lazy(()=> import("../Website/Pages/ProfileUser/ProfileUser")),
   DashboardPlan = lazy(()=> import("../Website/Pages/DashboardPlan/DashboardPlan")),
   EditProfile = lazy(()=> import("../Website/Pages/EditProfile/EditProfile")),
   Sleep = lazy(()=> import("../Website/Pages/Sleep/Sleep")),
  Chat = lazy(()=> import('../Website/Pages/Chat/Chat'));
const router = createBrowserRouter([
  {
    path: "google/callback",
    element: <GoogleCallBack />,
  },
  {
  path: '/dashboard' ,
        element:  <MainDashboard /> ,
        children:[
          {
            index:true ,
            element : <Dashboard />
          },
          {
            path: 'user' ,
            element: <UserIndex />
          },
          {
            path: 'meal' ,
            element: <Meal />
          },
          {
            path: 'goal' ,
            element: <GoalIndex />,
          },
          {
            path: 'gym' ,
            element: <GymIndex />,
          },
          {
            path: 'exercise' ,
            element: <Exercise />,
          },
          {
            path: 'plan' ,
            element: <Plan />,
          },
          {
            path: 'service' ,
            element: <ServiceIndex />,
          },
          {
            path: 'goal/plan/:id',
            element: <PlanIndex />
          },
          {
            path: 'goal/update/:id',
            element: <GoalUpdate />
          },
          {
            path: 'meal/update/:id',
            element: <MealUpdate />
          },
          {
            path: 'goal/plan/:id/exercises/:id',
            element: <ExerciseIndex />
          },
          {
            path: 'plan/update/:id',
            element: <PlanUpdate />
          },
          {
            path: 'exercise/update/:id',
            element: <ExerciseUpdate />
          },
          {
            path: 'service/update/:id',
            element: <ServiceUpdate />
          },
          {
            path: 'gym/update/:id',
            element: <GymUpdate />
          },
          
          {
            path: 'PlanForm' ,
            element: <PlanForm />
          },
          {
            path: 'MealForm' ,
            element: <MealForm />
          },
          {
            path: 'ServiceForm' ,
            element: <ServiceForm />
          },
          {
            path: 'GoalForm' ,
            element: <GoalForm />
          },
          {
            path: 'ExerciseForm' ,
            element: <ExerciseForm />
          },
          {
            path: 'GymForm' ,
            element: <GymForm />
          },
          {
            path: 'plan/DetailsPlan/:id' ,
            element: <DetailsPlan />
          },
          {
            path: 'service/DetailsService/:id' ,
            element: <DetailsService />
          },
          {
            path: 'meal/DetailsMeal/:id' ,
            element: <DetailsMeal />
          },
          {
            path: 'exercise/DetailsExercise/:id' ,
            element: <DetailsExercise />
          },
          {
            path: 'gym/DetailsGym/:id' ,
            element: <DetailsGym />
          },
          {
            path: 'goal/DetailsGoal/:id' ,
            element: <DetailsGoal />
          },
          {
            path: 'bar' ,
            element: <Bar />
          },
          {
            path: 'pie' ,
            element: <Pie />
          },
          {
            path: 'line' ,
            element: <Line />
          },
          {
            path: 'faq' ,
            element: <FAQ />
          },
          {
            path: 'calendar' ,
            element: <Calendar />
          },
          {
            path: 'geography' ,
            element: <Geography />
          },
        ]
  },
  {
    path: "/",
    element:  <Suspense fallback={<Loading />}><Main /></Suspense>,
    errorElement: <E404 />,
    children: [
      {
        index: true,
        element:  <Suspense fallback={<Loading />}><Home /></Suspense>,
      },
      // {
      //   element:  <Suspense fallback={<Loading />}><RequierBack /></Suspense>,
      //   children: [
          {
            index: true,
            path: "login",
            element:  <Suspense fallback={<Loading />}><Auth /></Suspense>,
          },
      //   ],
      // },
      {
          path: 'goalDetails/:id',
          element: <Suspense fallback={<Loading />}><GoalDetails /></Suspense>,
          loader : ({params}) =>{
            if (!regex.test(params.id)) {
              throw new Response("bad request" , {
                statusText: "goal not found" ,
                status: 400
              })
            }
            return true;
          }
      },
      {
        path: 'services/chat/:id',
        element:  <Suspense fallback={<Loading />}><Chat /></Suspense>,
        loader : ({params}) =>{
          if (!regex.test(params.id)) {
            throw new Response("bad request" , {
              statusText: "chat not found" ,
              status: 400
            })
          }
          return true;
        }
      },
      {
        path: 'exerciseDetails/:id/:plan_id',
        element: <Suspense fallback={<Loading />}><ExerciseDetails /></Suspense>,
        loader : ({params}) =>{
          if (!regex.test(params.id)) {
            throw new Response("bad request" , {
              statusText: "exercise not found" ,
              status: 400
            })
          }
          return true;
        }
    },
    {
      path: 'myProfile',
      element: <Suspense fallback={<Loading />}><ProfileUser /></Suspense>,
  },
  {
    path: 'sleep',
    element: <Suspense fallback={<Loading />}><Sleep /></Suspense>,
},
  {
    path: 'myProfile/edit',
    element: <Suspense fallback={<Loading />}><EditProfile /></Suspense>,
},
      {
        path: 'mealDetails/:id',
        element: <Suspense fallback={<Loading />}><DetailsFood /></Suspense>,
        loader : ({params}) =>{
          if (!regex.test(params.id)) {
            throw new Response("bad request" , {
              statusText: "meal not found" ,
              status: 400
            })
          }
          return true;
        }

    },
      {
        path: '/services/profileCoach/:id',
        element:  <Suspense fallback={<Loading />}><ProfileCoach /></Suspense>,
        loader : ({params}) =>{
          if (!regex.test(params.id)) {
            throw new Response("bad request" , {
              statusText: "coach not found" ,
              status: 400
            })
          }
          return true;
        }
      },
      {
        path: 'food/:id',
        element: <Suspense fallback={<Loading />}><Food /></Suspense>,
        loader : ({params}) =>{
          if (!regex.test(params.id)) {
            throw new Response("bad request" , {
              statusText: "food not found" ,
              status: 400
            })
          }
          return true;
        }
    },
      {
        element:  <Suspense fallback={<Loading />}><RequierAuth /></Suspense>,
        children: [
          {
            path: "user",
            element:  <Suspense fallback={<Loading />}><DashBoard /></Suspense>,
           
          },
          {
            path: "gym",
            element:  <Suspense fallback={<Loading />}><Gym /></Suspense>,
           
          },
          {
            path: 'services',
            element:  <Suspense fallback={<Loading />}><Services /></Suspense>,
          },
          {
            path: 'services/payment',
            element:  <Suspense fallback={<Loading />}><Payment /></Suspense>,
          },
          {
            path: 'gymDetails/:id' ,
            element: <Suspense fallback={<Loading />}><GymDetails /></Suspense>,
            loader : ({params}) =>{
              if (!regex.test(params.id)) {
                throw new Response("bad request" , {
                  statusText: "gym not found" ,
                  status: 400
                })
              }
              return true;
            }
          },
          {
            path: 'planDetails/:id' ,
            element: <Suspense fallback={<Loading />}><PlanDetails /></Suspense>,
            loader : ({params}) =>{
              if (!regex.test(params.id)) {
                throw new Response("bad request" , {
                  statusText: "plan not found" ,
                  status: 400
                })
              }
              return true;
            }
          },
          {
            path: 'planDetails/:id/dashboard/:week' ,
            element: <Suspense fallback={<Loading />}><DashboardPlan /></Suspense>,
            loader : ({params}) =>{
              if (!regex.test(params.id)) {
                throw new Response("bad request" , {
                  statusText: "plan not found" ,
                  status: 400
                })
              }
              return true;
            }
          },
          {
            path: "information",
            element:  <Suspense fallback={<Loading />}><Information /></Suspense>,
          },
        ],
      },
    ],
  },
]);
export default function AppRouter() {
  const { value } = useSelector((state) => state.mode);
  const darkTheme = createTheme({
    palette: {
      mode: value,
      ...(value === "light"
        ? {
            background: {
              paper: "#e1e1e1",
              default: "#e1e1e1",
            },
            primary: {
              bg: "#e1e1e1",
              main: "#fff",
              light: "hsl(210, 26%, 11%)",
              contrastText: "#000",
              title: "#000",
              secondy: "hsl(210, 26%, 11%, 0.5)",
              thred: "hsl(294.74deg 16.89% 62.04%)"
            },
          }
        : {
            background: {
              paper: "hsl(210, 26%, 11%)",
              default: "hsl(210, 26%, 11%)",
            },
            primary: {
              bg:"hsl(210, 26%, 11%)",
              main: "hsl(210, 26%, 11%)",
              light: "hsl(210, 26%, 11%)",
              contrastText: "hsl(214, 15%, 62%)",
              title: "#fff",
              secondy: "hsl(0, 0%, 100%, 0.1)",
              thred: "hsl(294.74deg 16.89% 62.04%)"
            },
          }),
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
