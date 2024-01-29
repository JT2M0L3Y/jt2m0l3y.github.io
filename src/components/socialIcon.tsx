import { useState, useEffect } from 'react';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook
} from 'react-icons/ai';

export const SocialIcon = ({ type }: { type: string }) => {
  const [icon, setIcon] = useState<any>(null);
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    switch (type) {
      case 'linkedin':
        setIcon(<AiFillLinkedin />);
        setLink('https://www.linkedin.com/in/jonathansmoley/');
        break;
      case 'instagram':
        setIcon(<AiFillInstagram />);
        setLink('https://www.instagram.com/jonathan.smoley/');
        break;
      case 'facebook':
        setIcon(<AiFillFacebook />);
        setLink('https://www.facebook.com/jonathan.smoley.1/');
        break;
      default:
        setIcon(null);
        setLink('');
        break;
    }
  }, [type]);

  return (
    <a href={link}
      target='_blank'
      rel='noreferrer'
      className="mx-[10px] my-[0] text-[#f2dbd1] text-[22px] bg-[linear-gradient(45deg,_#f2dbd1_50%,_transparent_50%)] [background-size:350%_100%] bg-right-bottom [transition:background-position_0.5s_ease] rounded-[2px] hover:bg-left-top hover:text-[#3c7459] hover:[transition:0.5s] active:[transition:0.5s]">
      {icon}
    </a>
  );
}