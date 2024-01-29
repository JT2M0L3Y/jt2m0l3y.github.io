import { SocialIcon } from './socialIcon';

export const Footer = () => {
  return (
    <div className='font-mono flex justify-between items-center bg-[#3c7459] fixed h-[10%] w-full border-t-[0.2rem] left-[0] bottom-[0]'>
      <div className="flex justify-center items-center ml-[2.5%]">
        <p className="text-[15px] text-[#f2dbd1] font-bold self-center">
          <a className="no-underline [transition:0.5s]" href='https://www.github.com/JT2M0L3Y'>
            © 2024 Jonathan Smoley
          </a>
        </p>
      </div>
      <div className="flex justify-center items-center h-1/2 mr-[2.0%]">
        <SocialIcon type='linkedin' />
        <SocialIcon type='instagram' />
        <SocialIcon type='facebook' />
      </div>
    </div>
  )
}