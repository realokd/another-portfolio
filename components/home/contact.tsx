import { Button, HeaderSmall } from '@shared-components';
import { useState } from 'react';
import { BASE_URL } from '@utils/apiService';

export default function Contact(): JSX.Element {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    msg: ''
  });

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(formValues);
    const { status } = await fetch(`${BASE_URL}TheCV/contactus/`, {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (status === 200) {
      setFormValues({
        name: '',
        email: '',
        msg: ''
      });
      // alert("Email Sent Succesfully!")
    }
  };

  const [state, setState] = useState({
    overlay: false
  });
  // const router = useRouter();
  return (
    <>
      <div className="relative h-auto py-10 lg:py-10" id="connect">
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 relative">
              <HeaderSmall text="Meet and Greet!" />
              <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Impressed Already? <span className="text-pink">Schedule</span> a call with him.
                {/* Gender specific????? */}
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Let’s grab a cup of coffee.
              </h1>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:mt-0">
            <img src="/images/vectors/contact.svg" alt="" className="w-3/4" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full z-30">
          <Button
            type="solid"
            text="Let's Connect! 🚀 "
            onClickHandler={() => setState((prev) => ({ ...prev, overlay: true }))}
          />
        </div>
      </div>
      {state.overlay ? (
        <div
          className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen backdrop-blur z-50"
          style={{ backdropFilter: 'blur(2px)' }}
          // onClick={() => setState((prev) => ({ ...prev, overlay: false }))}
        >
          <div
            className="md:w-8/12 w-10/12 relative rounded-lg shadow-light-3xl flex flex-col justify-center items-center"
            style={{ background: '#232946' }}>
            <h4 className="text-4xl text-gray-200 font-extrabold mt-5">Email Me!</h4>
            <span
              role="button"
              tabIndex={0}
              className="absolute top-5 right-5 font-extrabold text-lg text-white cursor-pointer"
              onClick={() => setState((prev) => ({ ...prev, overlay: false }))}
              onKeyDown={() => {
                console.log('h');
              }}>
              X
            </span>
            <form className="md:w-8/12 w-10/12" onSubmit={(e) => submitForm(e)}>
              <div className="my-6 w-full">
                <label htmlFor="name" className="block mb-2 text-lg text-gray-200 font-bold">
                  Name
                  <br />
                  <input
                    type="text"
                    value={formValues.name}
                    onChange={(e) => setFormValues((prev) => ({ ...prev, name: e.target.value }))}
                    id="name"
                    className="bg-gray-50 border placeholder-gray-800 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Enter your name"
                    required
                  />
                </label>
              </div>
              <div className="my-6 w-full">
                <label htmlFor="email" className="block mb-2 text-lg text-gray-200 font-bold">
                  Email
                  <input
                    type="email"
                    value={formValues.email}
                    onChange={(e) => setFormValues((prev) => ({ ...prev, email: e.target.value }))}
                    id="email"
                    className="bg-gray-50 border placeholder-gray-800 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Enter your Email"
                    required
                  />
                </label>
              </div>
              <div className="my-6 w-full">
                <label htmlFor="message" className="block mb-2 text-lg text-gray-200 font-bold">
                  Message
                  <textarea
                    value={formValues.msg}
                    onChange={(e) => setFormValues((prev) => ({ ...prev, msg: e.target.value }))}
                    id="message"
                    className="bg-gray-50 placeholder-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Enter your Message"
                    required
                  />
                </label>
              </div>
              <button
                className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400 self-start items my-5 "
                type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
