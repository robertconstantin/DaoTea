import React, { useState } from 'react';
import Link from "next/link";
import Layout from "../components/Layout";
import { collection, addDoc } from "firebase/firestore";
import  {db } from '../firebaseConfig';

const IndexPage = () => {

  interface Form {
    [k: string]: any;
  }
  const [email, setEmail] = useState("")
  //   Form validation
  let [errors, setErrors] = useState<Form>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (!validateEmail(email)) {
      tempErrors["email"] = true;
      isValid = false;
    }

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };
   
  const addEmail = async (e) => {
      e.preventDefault();        
      let isValidForm = handleValidation();

      if (isValidForm) {
        try {
          const docRef = await addDoc(collection(db, "emails"), {
            email: email,    
          });
          console.log("Document written with ID: ", docRef.id);
          setEmail('');
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 10000);
        } catch (e) {
          setShowSuccessMessage(false);
          console.error("Error adding document: ", e);
        }
      }
  }

  return (
    <Layout title="DaoTea.ro | Probabil cel mai aprecial magazin online de Yerba Mate din Romania">
  
      <img
        src="/images/yerba-mate.svg"
        alt="Yerba Mate Romania"
        className="absolute left-1/2 lg:left-auto max-w-sm h-36 lg:h-96 top-12 -right-0 lg:right-20 lg:top-1/3 animate-blob"
      />
      <img
        src="/images/shapes.svg"
        alt="hero"
        className="absolute left-0 bottom-24 animate-blob2"
      />
      <div className="relative z-10 py-6 space-y-8 md:space-y-16 lg:space-y-32 text-gray-900">
        <div className="text-center space-y-10 flex-col items-center flex">
          {/* <h3 className="font-light text-xl uppercase tracking-wider">
            Coming soon
          </h3> */}
          <img
            src="/images/daotea.svg"
            alt="hero"
            className="lg:max-w-1/2 max-w-60"
          />
          <h1 className="text-4xl lg:text-9xl font-extrabold text-black">Tea you soon!</h1>
          <p className="text-md text-black lg:text-l tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
            Lucram la cea mai frumoasa comunitate de iubitori de ceai, spiritualitate si viata sanatoasa din Romania, alatura-te si tu!
          </p>
        </div>
        <form className="mt-8">
          <div className="relative z-10 mx-10 lg:max-w-xl lg:mx-auto">
            <input
              type="text"
              placeholder="salut@daotea.ro"
              className="w-full text-md lg:text-2xl font-light text-gray-900 placeholder-gray-500 py-5 pl-5 pr-36 lg:pr-44 rounded-xl"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            
            <button className="absolute top-1 right-1 bottom-1 px-4 lg:px-10 text-md font-semibold bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-green bg-black text-white" onClick={addEmail}>
              Notifica-ma!
            </button>
          </div>
          <div className="text-center space-y-1">
          {errors?.email && (
              <p className="text-red text-md lg:text-lg">Va rog sa adaugati un email valid!</p>
          )}
          {showSuccessMessage && (
                <p className="text-brown text-md font-semibold text-xl my-2">
                    Felicitari, acum faci parte si tu din comunitatea noastra!
                </p>
            )}
          </div>
        </form>
      </div>
      <div className="absolute bottom-5 items-center flex flex-col">
        <ul className="flex space-x-3">
          <li>
            <Link href="https://instagram.com/daotea.ro/">
              <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-green hover:text-white hover:shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/groups/908608130222912">
              <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-green hover:text-white hover:shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://facebook.com/daotearo">
              <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-green hover:text-white hover:shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
        </ul>
        <p className="text-xs text-black">Powered by <Link href="https://seacoders.com"><a className="hover:text-green" target="_blank">SeaCoders</a></Link> </p>
      </div>
  
  
    </Layout>
  );

} 

export default IndexPage;
