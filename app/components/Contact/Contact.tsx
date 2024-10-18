import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';

const Contact: React.FC = () => {
  return (
    <section className='bg-secondary text-primary py-16 px-8 text-center'>
      <h2 className='text-4xl font-semibold mb-6'>Get in Touch</h2>
      <p className='mb-6 text-lg'>
        Reach out to us on our social media platforms or send us a message!
      </p>
      <div className='flex justify-center space-x-10 text-4xl'>
        <a
          href='https://www.linkedin.com/company/app-paddle/'
          target='_blank'
          aria-label='LinkedIn'
          className='hover:text-gray-600'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=61556173684887'
          target='_blank'
          aria-label='Facebook'
          className='hover:text-gray-600'
        >
          <FaMeta />
        </a>
        <a
          href='https://www.instagram.com/apppaddle/'
          target='_blank'
          aria-label='Instagram'
          className='hover:text-gray-600'
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
