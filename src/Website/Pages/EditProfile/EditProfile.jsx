import { useDispatch, useSelector } from "react-redux";
import "../DashboardPlan/DashboardPlan.css";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import UseEditProfile from "../../Hooks/UseEditProfile";
import ButtonLoading from "../../Components/Loading/ButtonLoading/ButtonLoading";
import { useEffect } from "react";
import { useSnackbar } from 'notistack';
import { ResetMessages } from "../../../Redux/User/UserSlice";
export default function EditProfile() {
  const { enqueueSnackbar } = useSnackbar();

  const { value } = useSelector((state) => state.mode);
  const { user } = useSelector((state) => state.auth);
  const { message , type , data } = useSelector((state) => state.user);
  const { register, handleSubmit, onSubmit, errors, loading } =
    UseEditProfile();
    const dispatch = useDispatch()
       useEffect(() => {
              if (message) {
                enqueueSnackbar(`${message}`, { variant: `${type}` });
                dispatch(ResetMessages());
              }
            }, [message, type, dispatch, enqueueSnackbar , data]);
  return (
    <div style={{ marginTop: "10rem" }} className={`profile ${value}`}>
      <div className="container_profile">
        <div className="container-body">
          <div className="main-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="headtittle">
                <div>
                  <span className="greeeting">Edit Profile</span>
                  <h2 style={{ display: "flex", alignItems: "center" }}>
                    hello boshra
                  </h2>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    disabled={loading === "pending" ? true : false}
                    className="btn_profile"
                  >
                    edit profile{" "}
                    {loading === "pending" ? <ButtonLoading /> : <EditIcon />}
                  </button>
                </div>
              </div>

              <div className="cards">
                <div
                  style={{
                    width: "100%",
                    marginBottom: "3rem",
                    justifyContent: "center",
                  }}
                  className="row_profile_2 row-1"
                >
                  <div
                    style={{ background: "transparent", width: "45%" }}
                    className="col"
                  >
                    <TextField
                      fullWidth
                      id="outlined-required"
                      label="Name"
                      helperText={errors.name ? errors.name?.message : ""}
                      error={errors.name ? true : false}
                      FormHelperTextProps={{
                        sx: { fontSize: "1rem" }, // هنا يمكنك تعديل حجم الخط
                      }}
                      {...register("name")}
                      defaultValue={user.name}
                      InputProps={{
                        sx: { fontSize: "1.5rem", width: "100%" },
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: "1.6rem",
                          color: value === "dark" ? "#fff" : "#000",
                          "&.Mui-focused": {
                            color: value === "dark" ? "#fff" : "#000",
                          },
                        },
                      }}
                    />
                  </div>
                  <div
                    style={{ background: "transparent", width: "45%" }}
                    className="col"
                  >
                    <TextField
                      fullWidth
                      id="outlined-required"
                      label="Age"
                      helperText={errors.age ? errors.age?.message : ""}
                      error={errors.age ? true : false}
                      FormHelperTextProps={{
                        sx: { fontSize: "1rem" }, // هنا يمكنك تعديل حجم الخط
                      }}
                      {...register("age")}
                      defaultValue={user.age}
                      InputProps={{
                        sx: { fontSize: "1.5rem", width: "100%" },
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: "1.6rem",
                          color: value === "dark" ? "#fff" : "#000",
                          "&.Mui-focused": {
                            color: value === "dark" ? "#fff" : "#000",
                          },
                        },
                      }}
                    />
                  </div>
                  <div
                    style={{ background: "transparent", width: "45%" }}
                    className="col"
                  >
                    <TextField
                      fullWidth
                      id="outlined-required"
                      label="Wdith"
                      helperText={errors.width ? errors.width?.message : ""}
                      error={errors.width ? true : false}
                      FormHelperTextProps={{
                        sx: { fontSize: "1rem" }, // هنا يمكنك تعديل حجم الخط
                      }}
                      {...register("width")}
                      defaultValue={user.width}
                      InputProps={{
                        sx: { fontSize: "1.5rem", width: "100%" },
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: "1.6rem",
                          color: value === "dark" ? "#fff" : "#000",
                          "&.Mui-focused": {
                            color: value === "dark" ? "#fff" : "#000",
                          },
                        },
                      }}
                    />
                  </div>
                  <div
                    style={{ background: "transparent", width: "45%" }}
                    className="col"
                  >
                    <TextField
                      fullWidth
                      id="outlined-required"
                      label="Height"
                      helperText={errors.height ? errors.height?.message : ""}
                      error={errors.height ? true : false}
                      FormHelperTextProps={{
                        sx: { fontSize: "1rem" }, // هنا يمكنك تعديل حجم الخط
                      }}
                      {...register("height")}
                      defaultValue={user.height}
                      InputProps={{
                        sx: { fontSize: "1.5rem", width: "100%" },
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: "1.6rem",
                          color: value === "dark" ? "#fff" : "#000",
                          "&.Mui-focused": {
                            color: value === "dark" ? "#fff" : "#000",
                          },
                        },
                      }}
                    />
                  </div>
                  <div
                    style={{ background: "transparent", width: "45%" }}
                    className="col"
                  >
                    <TextField
                      fullWidth
                      id="outlined-required"
                      label="Address"
                      helperText={errors.address ? errors.address?.message : ""}
                      error={errors.address ? true : false}
                      FormHelperTextProps={{
                        sx: { fontSize: "1rem" }, // هنا يمكنك تعديل حجم الخط
                      }}
                      {...register("address")}
                      defaultValue={user.address}
                      InputProps={{
                        sx: { fontSize: "1.5rem", width: "100%" },
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: "1.6rem",
                          color: value === "dark" ? "#fff" : "#000",
                          "&.Mui-focused": {
                            color: value === "dark" ? "#fff" : "#000",
                          },
                        },
                      }}
                    />
                  </div>
                  <div
                    style={{ background: "transparent", width: "45%" }}
                    className="col"
                  >
                    <TextField
                      fullWidth
                      {...register("gender")}
                      id="outlined-required"
                      label="Gender"
                      defaultValue={user.gender}
                      InputProps={{
                        sx: { fontSize: "1.5rem", width: "100%" },
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: "1.6rem",
                          color: value === "dark" ? "#fff" : "#000",
                          "&.Mui-focused": {
                            color: value === "dark" ? "#fff" : "#000",
                          },
                        },
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginlLeft: "1rem",
                      background: "transparent",
                      width: "92%",
                    }}
                    className="col"
                  >
                    <TextField
                      fullWidth
                      id="outlined-required"
                      label="Illness"
                      {...register("illness")}
                      defaultValue={user.illness}
                      InputProps={{
                        sx: { fontSize: "1.5rem", width: "100%" },
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: "1.6rem",
                          color: value === "dark" ? "#fff" : "#000",
                          "&.Mui-focused": {
                            color: value === "dark" ? "#fff" : "#000",
                          },
                        },
                      }}
                    />
                  </div>
                  <div style={{ display: "none" }}>
                    <TextField
                      id="outlined-required"
                      type="hidden"
                      {...register("lon")}
                      defaultValue={user.lon}
                    />

                    <TextField
                      type="hidden"
                      id="outlined-required"
                      {...register("lat")}
                      defaultValue={user.lat}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
