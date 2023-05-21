import Mainpage from "../mainpage/Mainpage";

export default function signup() {
  return (
    <Mainpage>
      <div>
        <h1 className="absolute top-[260px] left-[832px] text-2xl">Sign Up</h1>
        <p className="absolute top-[309px] left-[832px] font-lato">
          Create account
        </p>
      </div>

      <div className="absolute top-[354px] left-[832px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        </div>
        <a className="absolute top-[8px] left-[43px] cursor-pointer">
          Sign Up with Google
        </a>
        <img
          className="absolute top-[8px] left-[19px] w-3.5 h-3.5 overflow-hidden"
          alt=""
          src="/googleicon-1.svg"
        />
      </div>
      <div className="absolute top-[354px] left-[1037px] w-[180px] h-[30px] text-center text-xs text-secondary-text">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        </div>
        <a className="absolute top-[8px] left-[46px] cursor-pointer">
          Sign up with Apple
        </a>
        <img
          className="absolute top-[7px] left-[24px] w-[11.5px] h-3.5 overflow-hidden"
          alt=""
          src="/apple-1.svg"
        />
      </div>

      <div className="absolute top-[409px] left-[832px] w-[385px] h-[356px] font-lato">
        <div className="absolute top-[0px] left-[0px] w-[385px] h-[317px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div className="absolute top-[59px] left-[30px] w-[325px] h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-background" />
        </div>
        <div className="absolute h-[11.24%] w-[84.42%] top-[41.57%] right-[7.79%] bottom-[47.19%] left-[7.79%] rounded-3xs bg-field-color-darker" />
        <div className="absolute h-[5.34%] w-[0.26%] top-[44.52%] right-[68.7%] bottom-[50.14%] left-[31.04%] box-border border-r-[1px] border-solid border-icon" />
        <form>
          <label className="absolute top-[30px] left-[30px]">
            Email address
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            placeholder="Type your email.."
            className="absolute top-[69px] left-[45px] bg-inherit focus:outline-none"
          />
          <label className="absolute top-[119px] left-[30px]">Password</label>
          <br />
          <input
            type="password"
            placeholder="Type your password.."
            className="absolute top-[44.38%] left-[11.69%] bg-inherit focus:outline-none"
          />
        </form>
        <div className="absolute top-[247px] left-[30px] w-[325px] h-10 text-center text-white font-montserrat">
          <div className="absolute top-[0px] left-[0px] w-[325px] h-10">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-black" />
          </div>
          <b className="absolute top-[9px] left-[112.58px] inline-block w-[101.96px] h-[21.71px]">
            Sign In
          </b>
        </div>
      </div>
    </Mainpage>
  );
}
