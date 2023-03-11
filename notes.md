<input
className="w-full p-3 text-sm font-light transition-all ease-in-out bg-gray-800 text-light-gray focus:text-white"
placeholder={placeholder}
type={type}
name={name}
onChange={onChange}
required={required ? true : false}

> </input>

<button
aria-label="login"
disabled={disabled}
name="loginBtn"
type="submit"
className={`py-3 font-bold text-white w-40 mx-auto rounded-md ${
disabled
    ? "bg-med-gray disabled:"
    : "bg-blue-cement  hover:bg-blue-700 hover:shadow-lg"
}`}
onClick={handleLogin}

> Login
> </button>

### error

<p
className="mx-auto mt-4 text-sm text-center text-red-700"
style={{ opacity: `${showErr ? 1 : 0}` }}
>
Please enter a valid email and password.
</p>

search

        className="w-full p-4 font-light text-white transition ease-in-out bg-transparent border-none focus:bg-gray-500 focus:border-none focus:outline-none group"

.
