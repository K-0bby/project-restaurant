import React, {useState} from 'react';
import Background from '/images/loginBack.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Login = () => {
    const [pin, setPin] = useState('')
    const [password, setPassword] = useState('')
    const [activeInput, setActiveInput] = useState('pin')

    const handleClick = (value) => {
        if (activeInput === 'pin' && pin.length < 4) {
            setPin(pin + value);
        } else if (activeInput === 'password' && password.length < 6) {
            setPassword(password + value);
        }
    };

    const handleClear = () => {
        if (activeInput === 'pin'){
            setPin('');
        } else {
            setPassword('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (pin.length === 4 && password.length >= 4) {
          // Do something with the pin and password (e.g., call an API)
          console.log("PIN:", pin);
          console.log("Password:", password);
        } else {
          alert('Please enter a valid 4-digit PIN and password');
        }
      };
    

    // const handleDelete = () => {
    //     if (activeInput === 'pin'){
    //         setPin(pin.slice(0, -1))
    //     } else {
    //         setPassword(password.slice(0, -1))
    //     }
    // };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center' style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover'
    }}>
        <div data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="50"  data-aos-duration="1200" className='bg-white p-8 rounded shadow-md w-72'>
            <h2 className="text-center text-xl font-bold mb-6">Login</h2>

            {/* PIN Input */}
            <div className="mb-4">
            <label htmlFor="pin" className="block text-sm font-bold mb-1">
                Enter PIN:
            </label>
            <input
                id="pin"
                type="password"
                value={pin}
                onFocus={() => setActiveInput('pin')}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                readOnly
                placeholder="Enter 4-digit PIN"
            />
            </div>
            
            {/* Password Input */}
            <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-1">
                Enter Password:
            </label>
            <input
                id="password"
                type="password"
                value={password}
                onFocus={() => setActiveInput('password')}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                readOnly
                placeholder="Enter Password"
            />
            </div>

            {/* Number Keypad */}
            <div className="grid grid-cols-3 gap-1 mb-4">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num, index) => (
                <button
                key={index}
                onClick={() => handleClick(num)}
                className="bg-gray-200 p-4 rounded-md text-lg font-bold hover:bg-gray-300"
                >
                {num}
                </button>
            ))}
            </div>

            {/* Clear, Delete and submit Buttons */}
            <div className="flex justify-between mt-4">
            <button
                onClick={handleClear}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
                Clear
            </button>
            <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
            {/* <button
                onClick={handleDelete}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            >
                Delete
            </button> */}
            </div>
        </div>
    </div>
  )
}

export default Login