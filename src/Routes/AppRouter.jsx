import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loading } from "../Website/index";
import LoadingPage from "../Dashboard/components/loadingPage/LoadingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
// route dashboard
const MainDashboard = lazy(() =>
    import("../Dashboard/components/main/MainDashboard")
  ),
  Dashboard = lazy(() => import("../Dashboard/pages/dashboard")),
  UserIndex = lazy(() => import("../Dashboard/data/UserIndex")),
  Bar = lazy(() => import("../Dashboard/pages/bar")),
  PlanForm = lazy(() => import("../Dashboard/pages/form/PlanForm")),
  Line = lazy(() => import("../Dashboard/pages/line")),
  Pie = lazy(() => import("../Dashboard/pages/pie")),
  FAQ = lazy(() => import("../Dashboard/pages/faq")),
  Geography = lazy(() => import("../Dashboard/pages/geography")),
  Calendar = lazy(() => import("../Dashboard/pages/calendar/calendar")),
  GoalIndex = lazy(() => import("../Dashboard/data/GoalIndex")),
  E404 = lazy(() => import("../Website/Components/E404/E404")),
  PlanIndex = lazy(() => import("../Dashboard/data/PlanIndex")),
  ExerciseIndex = lazy(() => import("../Dashboard/data/ExerciseIndex")),
  GoalForm = lazy(() => import("../Dashboard/pages/form/GoalForm")),
  DetailsPlan = lazy(() => import("../Dashboard/pages/details/DetailsPlan")),
  DetailsGoal = lazy(() => import("../Dashboard/pages/details/DetailsGoal")),
  GymIndex = lazy(() => import("../Dashboard/data/GymIndex")),
  GymForm = lazy(() => import("../Dashboard/pages/form/GymForm")),
  Exercise = lazy(() => import("../Dashboard/data/Exercise")),
  Plan = lazy(() => import("../Dashboard/data/Plan")),
  GoalUpdate = lazy(() => import("../Dashboard/pages/update/GoalUpdate")),
  PlanUpdate = lazy(() => import("../Dashboard/pages/update/PlanUpdate")),
  DetailsGym = lazy(() => import("../Dashboard/pages/details/DetailsGym")),
  GymUpdate = lazy(() => import("../Dashboard/pages/update/GymUpdate")),
  DetailsExercise = lazy(() =>
    import("../Dashboard/pages/details/DetailsExercise")
  ),
  ExerciseForm = lazy(() => import("../Dashboard/pages/form/ExerciseForm")),
  ExerciseUpdate = lazy(() =>
    import("../Dashboard/pages/update/ExerciseUpdate")
  ),
  Meal = lazy(() => import("../Dashboard/data/Meal")),
  MealUpdate = lazy(() => import("../Dashboard/pages/update/MealUpdate")),
  MealForm = lazy(() => import("../Dashboard/pages/form/MealForm")),
  DetailsMeal = lazy(() => import("../Dashboard/pages/details/DetailsMeal")),
  ServiceForm = lazy(() => import("../Dashboard/pages/form/ServiceForm")),
  ServiceUpdate = lazy(() => import("../Dashboard/pages/update/ServiceUpdate")),
  ServiceIndex = lazy(() => import("../Dashboard/data/ServiceIndex")),
  DetailsService = lazy(() =>
    import("../Dashboard/pages/details/DetailsService")
  ),
  RequestGoals = lazy(() => import("../Dashboard/data/RequestGoals")),
  DetailsUser = lazy(() => import("../Dashboard/pages/details/DetailsUser")),
  Category = lazy(() => import("../Dashboard/data/Category")),
  CategoryForm = lazy(() => import("../Dashboard/pages/form/CategoryForm")),
  CategoryUpdate = lazy(() =>
    import("../Dashboard/pages/update/CategoryUpdate")
  ),
  Login = lazy(() => import("../Dashboard/pages/login/Login")),
  RequierAuthPanel = lazy(() => import("../Auth/RequierAuthPanel")),
  DChat = lazy(() => import("../Dashboard/pages/chat/Chat")),
  RequestAdmin = lazy(() => import("../Dashboard/data/RequestAdmin")),
  RequestCoach = lazy(() => import("../Dashboard/data/RequestCoach"));

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
  Information = lazy(() => import("../Website/Pages/Information/Information")),
  GoalDetails = lazy(() => import("../Website/Pages/GoalDetails/GoalDetails")),
  GymDetails = lazy(() => import("../Website/Pages/GymDetails/GymDetails")),
  Services = lazy(() => import("../Website/Pages/Services/Services")),
  Payment = lazy(() => import("../Website/Pages/Payment/Payment")),
  Gym = lazy(() => import("../Website/Pages/Gym/Gym")),
  PlanDetails = lazy(() => import("../Website/Pages/PlanDetails/PlanDetails")),
  Food = lazy(() => import("../Website/Pages/Food/Food")),
  ProfileCoach = lazy(() =>
    import("../Website/Pages/ProfileCoach/ProfileCoach")
  ),
  DetailsFood = lazy(() => import("../Website/Pages/DetailsFood/DetailsFood")),
  ExerciseDetails = lazy(() =>
    import("../Website/Pages/ExerciseDetails/ExerciseDetails")
  ),
  ProfileUser = lazy(() => import("../Website/Pages/ProfileUser/ProfileUser")),
  DashboardPlan = lazy(() =>
    import("../Website/Pages/DashboardPlan/DashboardPlan")
  ),
  EditProfile = lazy(() => import("../Website/Pages/EditProfile/EditProfile")),
  Sleep = lazy(() => import("../Website/Pages/Sleep/Sleep")),
  Workout = lazy(() => import("../Website/Pages/Workout/Workout")),
  EditScheduling = lazy(() =>
    import("../Website/Pages/EditScheduling/EditScheduling")
  ),
  Target = lazy(() => import("../Website/Pages/Target/Target")),
  Chat = lazy(() => import("../Website/Pages/Chat/Chat")),
  SendRequestAdmin = lazy(() =>
    import("../Website/Pages/SendRequest/SendRequestAdmin")
  ),
  SendRequestCoach = lazy(() =>
    import("../Website/Pages/SendRequest/SendRequestCoach")
  );
const router = createBrowserRouter([
  {
    path: "google/callback",
    element: <GoogleCallBack />,
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <MainDashboard />
      </Suspense>
    ),
    children: [
      {
        path: "loginPanel",
        element: <Login />,
      },
      {
        path: "loading",
        element: <LoadingPage />,
      },
      {
        element: <RequierAuthPanel allowedRole={["admin", "coach", "super"]} />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },

          {
            path: "user",
            element: <UserIndex />,
          },
          {
            element: <RequierAuthPanel allowedRole={["super"]} />,
            children: [
              {
                path: "gym",
                element: <GymIndex />,
              },
              {
                path: "requestAdmin",
                element: <RequestAdmin />,
              },
              {
                path: "service",
                element: <ServiceIndex />,
              },
              {
                path: "service/update/:id",
                element: <ServiceUpdate />,
              },
              {
                path: "gym/update/:id",
                element: <GymUpdate />,
              },
              {
                path: "ServiceForm",
                element: <ServiceForm />,
              },
              {
                path: "GymForm",
                element: <GymForm />,
              },
              {
                path: "service/DetailsService/:id",
                element: <DetailsService />,
              },
              {
                path: "gym/DetailsGym/:id",
                element: <DetailsGym />,
              },
            ],
          },
          {
            element: <RequierAuthPanel allowedRole={["coach", "super"]} />,
            children: [
              {
                path: "category",
                element: <Category />,
              },
              {
                path: "meal",
                element: <Meal />,
              },
              {
                path: "goal",
                element: <GoalIndex />,
              },

              {
                path: "exercise",
                element: <Exercise />,
              },
              {
                path: "plan",
                element: <Plan />,
              },
              {
                path: "goal/plan/:id",
                element: <PlanIndex />,
              },
              {
                path: "goal/plan/:id/exercises/:id",
                element: <ExerciseIndex />,
              },

              {
                path: "plan/DetailsPlan/:id",
                element: <DetailsPlan />,
              },
              {
                path: "meal/DetailsMeal/:id",
                element: <DetailsMeal />,
              },
              {
                path: "exercise/DetailsExercise/:id",
                element: <DetailsExercise />,
              },
              {
                path: "goal/DetailsGoal/:id",
                element: <DetailsGoal />,
              },
            ],
          },
          {
            element: <RequierAuthPanel allowedRole={["coach"]} />,
            children: [
              {
                path: "chat",
                element: <DChat />,
              },
              {
                path: "requestGoals",
                element: <RequestGoals />,
              },
              {
                path: "goal/update/:id",
                element: <GoalUpdate />,
              },
              {
                path: "meal/update/:id",
                element: <MealUpdate />,
              },

              {
                path: "plan/update/:id",
                element: <PlanUpdate />,
              },
              {
                path: "exercise/update/:id",
                element: <ExerciseUpdate />,
              },

              {
                path: "category/update/:id",
                element: <CategoryUpdate />,
              },
              {
                path: "PlanForm",
                element: <PlanForm />,
              },
              {
                path: "CategoryForm",
                element: <CategoryForm />,
              },
              {
                path: "MealForm",
                element: <MealForm />,
              },
              {
                path: "GoalForm",
                element: <GoalForm />,
              },
              {
                path: "ExerciseForm",
                element: <ExerciseForm />,
              },
            ],
          },
          {
            element: <RequierAuthPanel allowedRole={["admin"]} />,
            children: [
              {
                path: "requestCoach",
                element: <RequestCoach />,
              },
            ],
          },

          {
            path: "user/DetailsUser/:id",
            element: <DetailsUser />,
          },
          {
            path: "bar",
            element: <Bar />,
          },
          {
            path: "pie",
            element: <Pie />,
          },
          {
            path: "line",
            element: <Line />,
          },
          {
            path: "faq",
            element: <FAQ />,
          },
          {
            path: "calendar",
            element: <Calendar />,
          },
          {
            path: "geography",
            element: <Geography />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    errorElement: <E404 />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },

      {
        index: true,
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Auth />
          </Suspense>
        ),
      },

      {
        path: "goalDetails/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <GoalDetails />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (!regex.test(params.id)) {
            throw new Response("bad request", {
              statusText: "goal not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "services/chat/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Chat />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (!regex.test(params.id)) {
            throw new Response("bad request", {
              statusText: "chat not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "exerciseDetails/:id/:plan_id",
        element: (
          <Suspense fallback={<Loading />}>
            <ExerciseDetails />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (!regex.test(params.id)) {
            throw new Response("bad request", {
              statusText: "exercise not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "exerciseDetails/:id/:plan_id/workout",
        element: (
          <Suspense fallback={<Loading />}>
            <Workout />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (!regex.test(params.id)) {
            throw new Response("bad request", {
              statusText: "exercise not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "myProfile",
        element: (
          <Suspense fallback={<Loading />}>
            <ProfileUser />
          </Suspense>
        ),
      },
      {
        path: "requestAdmin",
        element: <SendRequestAdmin />,
      },
      {
        path: "requestCoach",
        element: <SendRequestCoach />,
      },
      {
        path: "target",
        element: (
          <Suspense fallback={<Loading />}>
            <Target />
          </Suspense>
        ),
      },
      {
        path: "sleep",
        element: (
          <Suspense fallback={<Loading />}>
            <Sleep />
          </Suspense>
        ),
      },
      {
        path: "myProfile/edit",
        element: (
          <Suspense fallback={<Loading />}>
            <EditProfile />
          </Suspense>
        ),
      },
      {
        path: "myProfile/editScheduling",
        element: (
          <Suspense fallback={<Loading />}>
            <EditScheduling />
          </Suspense>
        ),
      },
      {
        path: "mealDetails/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <DetailsFood />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (!regex.test(params.id)) {
            throw new Response("bad request", {
              statusText: "meal not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "/services/profileCoach/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProfileCoach />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (!regex.test(params.id)) {
            throw new Response("bad request", {
              statusText: "coach not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "food/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Food />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (!regex.test(params.id)) {
            throw new Response("bad request", {
              statusText: "food not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        element: (
          <Suspense fallback={<Loading />}>
            <RequierAuth />
          </Suspense>
        ),
        children: [
          {
            path: "user",
            element: (
              <Suspense fallback={<Loading />}>
                <DashBoard />
              </Suspense>
            ),
          },
          {
            path: "gym",
            element: (
              <Suspense fallback={<Loading />}>
                <Gym />
              </Suspense>
            ),
          },
          {
            path: "services",
            element: (
              <Suspense fallback={<Loading />}>
                <Services />
              </Suspense>
            ),
          },
          {
            path: "services/payment",
            element: (
              <Suspense fallback={<Loading />}>
                <Payment />
              </Suspense>
            ),
          },
          {
            path: "gymDetails/:id",
            element: (
              <Suspense fallback={<Loading />}>
                <GymDetails />
              </Suspense>
            ),
            loader: ({ params }) => {
              if (!regex.test(params.id)) {
                throw new Response("bad request", {
                  statusText: "gym not found",
                  status: 400,
                });
              }
              return true;
            },
          },
          {
            path: "planDetails/:id",
            element: (
              <Suspense fallback={<Loading />}>
                <PlanDetails />
              </Suspense>
            ),
            loader: ({ params }) => {
              if (!regex.test(params.id)) {
                throw new Response("bad request", {
                  statusText: "plan not found",
                  status: 400,
                });
              }
              return true;
            },
          },
          {
            path: "planDetails/:id/dashboard/:week/:day",
            element: (
              <Suspense fallback={<Loading />}>
                <DashboardPlan />
              </Suspense>
            ),
            loader: ({ params }) => {
              if (!regex.test(params.id)) {
                throw new Response("bad request", {
                  statusText: "plan not found",
                  status: 400,
                });
              }
              return true;
            },
          },
          {
            path: "information",
            element: (
              <Suspense fallback={<Loading />}>
                <Information />
              </Suspense>
            ),
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
              thred: "hsl(294.74deg 16.89% 62.04%)",
              shadow: "rgba(0,0,0,0.1)",
            },
          }
        : {
            background: {
              paper: "hsl(210, 26%, 11%)",
              default: "hsl(210, 26%, 11%)",
            },
            primary: {
              bg: "hsl(210, 26%, 11%)",
              main: "hsl(210, 26%, 11%)",
              light: "hsl(210, 26%, 11%)",
              contrastText: "hsl(214, 15%, 62%)",
              title: "#fff",
              secondy: "hsl(0, 0%, 100%, 0.1)",
              thred: "hsl(294.74deg 16.89% 62.04%)",
              shadow: "rgba(0,0,0,0)",
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
