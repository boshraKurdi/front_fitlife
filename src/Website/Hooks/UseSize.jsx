const UseSize = ({ setBox, state, setState, form, setForm }) => {
    const regex = /^[0-9]+$/;
    function ChangeSetting(e) {
      e.preventDefault();
      let flag = false;
      let errors = {};
      setState({ ...state, loading: false });
      if (!regex.test(form.width) || !regex.test(form.height)) {
        if (form.width === "") {
          errors.widthError = "the width is required";
        } else if (!regex.test(form.width)) {
          errors.widthError = "the width must be numbers";
        }
        if (form.height === "") {
          errors.heightError = "the height is required";
        } else if (!regex.test(form.height)) {
          errors.heightError = "the height must be numbers";
        }
      }
  
      if (Object.keys(errors).length > 0) {
        setForm({
          ...form,
          ...errors,
        });
        flag = true;
      } else {
        flag = false;
      }
      if (!flag) {
        setBox((prev) => !prev);
      }
    }
    function HandelInput(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  
    return {ChangeSetting , HandelInput , regex}
}
export default UseSize