import Button from "../shared/Button";
import { activityLevelData } from "../constants";

const RegisterForm = () => {
  return (
    <form className="flex flex-wrap justify-between items-center space-y-4  w-[580px] p-8 shadow-2xl  ">
      {/* First Name */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="firstname"
          className="text-[14px] font-[600] text-[#011C34] leading-normal"
        >
          First Name
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="firstname"
            type="text"
            placeholder="Enter first name"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6] sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Lastname */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="lastname"
          className="text-[14px] font-[600] text-[#011C34] leading-normal"
        >
          Last Name
        </label>

        <div className="pt-1 rounded-md">
          <input
            id="lastname"
            type="text"
            placeholder="Enter last name"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Gender */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="gender"
          className="text-[14px] font-[600] text-[#011C34] leading-normal"
        >
          Gender
        </label>

        <div className="pt-1 rounded-md">
          <select
            required
            id="gender"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
          >
            <option value="" disabled selected>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      {/* Date of Birth */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="dob"
          className="text-[14px] font-[600] text-[#011C34] leading-normal"
        >
          Date of Birth
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="dob"
            type="date"
            placeholder="Enter your date of birth"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Weight */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor=" weight"
          className="text-[14px] font-[600] text-[#011C34] leading-normal"
        >
          Weight (KG)
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="weight"
            type="text"
            placeholder=" Enter Weight"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Height */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor=" height"
          className="text-[14px] font-[600] text-[#011C34] leading-normal"
        >
          Height (CM)
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="height"
            type="text"
            placeholder=" Enter Height Here"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Activity Level */}
      <div className="rounded-md w-full sm:w-[100%]">
        <label
          htmlFor="country"
          className="text-[14px] font-[600] text-[#011C34] leading-normal"
        >
          Activity Level
        </label>

        <div className="pt-1 rounded-md">
          <select
            required
            id="country"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
          >
            <option value="" disabled selected className="text-[#737373]">
              Select here
            </option>

            {activityLevelData.map((activity) => (
              <option value={activity.value} key={activity.value}>
                {activity.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Password */}
      <div className="rounded-md w-full sm:w-[100%]">
        <label
          htmlFor="password"
          className="text-[14px] font-[600] text-[#011C34] leading-normal"
        >
          Password
        </label>

        <div className="pt-1 rounded-md">
          <input
            id="password"
            type="password"
            placeholder=""
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Agree to terms and condition */}
      <div>
        <p className="text-[#000000] text-[14px] font-[500]">
          By clicking Register, you agree to our{" "}
          <span className="text-[#2EC4B6] font-semibold"> Terms of Use </span>{" "}
          and our{" "}
          <span className="text-[#2EC4B6] font-semibold">
            {" "}
            Privacy Policy.{" "}
          </span>{" "}
        </p>
      </div>

      {/* Button */}
      <div className="w-full">
        <button
          type="submit"
          text="Register"
          className="w-full bg-[#2EC4B6] text-white h-[48px]"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
