import LogoIcon from '../../assets/images/logo.svg';;

export default function Logo() {
  return (
    <a href="/" className="logo">
      <img src={LogoIcon} alt="crowdfund logo" />
    </a>
  );
}