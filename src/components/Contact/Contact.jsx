import { useRef, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)

        emailjs
            .sendForm('service_c7ktmse', 'template_qhhliy8', form.current, {
                publicKey: 'LPFcyMcmsBm28G_qW',
            })
            .then(
                () => {
                    setIsLoading(false)
                    toast.success('Sent successfully', {
                        position: 'top-right',
                        style: {
                            marginTop: '70px',
                        },
                        duration: 5000
                    });
                },
                (error) => {
                    setIsLoading(false)
                    toast.error('FAILED...', error.text);
                },
            );
    };

    const handleUrlSocial = (type) => {
        switch (type) {
            case 'facebook':
                window.open('https://www.facebook.com/nmnam2003', '_blank')
                break
            case 'instagram':
                window.open('https://www.instagram.com/binn.jsx/', '_blank')
                break
            case 'linkedin':
                window.open('https://www.linkedin.com/in/namnguyen2003/', '_blank')
                break
            case 'github':
                window.open('https://github.com/nnguyennam2003', '_blank')
                break
        }
    }

    return (
        <>
            <section id='contact'>
                <div className='contact-container'>
                    <h2>Contact</h2>
                    <div className='contact-content'>
                        <div className='contact-info'>
                            <div onClick={() => handleUrlSocial('facebook')}>
                                <FaFacebook />
                            </div>
                            <div onClick={() => handleUrlSocial('instagram')}>
                                <RiInstagramFill />
                            </div>
                            <div onClick={() => handleUrlSocial('linkedin')}>
                                <FaLinkedin />
                            </div>
                            <div onClick={() => handleUrlSocial('github')}>
                                <FaGithub />
                            </div>
                        </div>
                        <div className='contact-form'>
                            <form ref={form} className="form-wrapper" onSubmit={sendEmail}>
                                <div>
                                    <input type="text" placeholder="Your name" name="name" />
                                    <input type="text" placeholder="City" name="city" />
                                </div>
                                <input type="email" placeholder="Your email" name="email" />
                                <textarea placeholder="Message" name="message"></textarea>
                                <button type="submit">{isLoading ? 'Sending...' : 'Send'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Toaster />
        </>
    )
}
