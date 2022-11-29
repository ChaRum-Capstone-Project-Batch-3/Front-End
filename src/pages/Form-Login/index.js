import { Col, Row, Image, Button } from "antd";
import './FormLogin.css';
import { useForm } from "react-hook-form";
import newSvg from './../../Group_277.svg'

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="box">
        <Row className="row-main">
          <Col span={11} className="col-1">
            <Image 
            preview={false}
            style={{ width: "39vw", height: "35vw"}}
            src={ newSvg }
            />
          </Col>
          <Col span={13} className="col-2">
            <div className="title">
              <h1>Welcome Back!</h1>
              <p>
                Don't have any account?
                <a> Sign up</a>
              </p>
            </div>
            <div className="form-input">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="username">
                  <h3>Username</h3>
                </div>
                <input
                  {...register("userName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z ]+$/i,
                  })}
                  placeholder="Email or phone number"
                  type="text"
                />
                {errors?.userName?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.userName?.type === "maxLength" && (
                  <p>First name cannot exceed 20 characters</p>
                )}
                <div className="password">
                  <h3>Password</h3>
                </div>
                <input
                  {...register("passWord", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z0-9]+$/i,
                  })}
                  placeholder="Enter your password"
                  type="password"
                />
                {errors?.passWord?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.passWord?.type === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}
                <div className="check-box">
                  <input {...register("checkbox")} type="checkbox" id="checkbox" value={true} />
                  <span>Keep me signed in</span>
                </div>
                <input type="submit" value="SIGN IN"></input>
                <div className="forgot-password">
                  <span>Forgot Password? <a>Reset Password</a></span>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        {/* Login */}
      </div>
    </>
  );
};
