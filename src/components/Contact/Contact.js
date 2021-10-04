import React from 'react';
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
        <div>
            <SectionHeaders pageTitle="Contact Us"></SectionHeaders>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 form-container py-24 px-12">
                <div className="col-span-2">
                {/* Contact form  */}
                    <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-password">
                            Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text" />
                        
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-password">
                            E-mail
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
                        
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                        <button class="shadow bg-blue-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Send
                        </button>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                    </form>
                </div>
                <div>
                    <div className="flex items-center mb-12 mt-8">
                        <FontAwesomeIcon icon={faBuilding} size="2x" color="gray"></FontAwesomeIcon>
                        <span className="text-xl font-normal ml-4">Buttonwood, California.</span>
                    </div>
                    <div className="flex items-center mb-12">
                        <FontAwesomeIcon icon={faMobile} size="2x" color="gray"></FontAwesomeIcon>
                        <span className="text-xl font-normal ml-4">+1 253 565 2365</span>
                    </div>
                    <div className="flex items-center mb-12">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" color="gray"></FontAwesomeIcon>
                        <span className="text-xl font-normal ml-4">support@onlineedu.com</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;