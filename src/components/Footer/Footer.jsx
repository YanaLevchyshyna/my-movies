import { Logo } from 'components/Logo/Logo';
import { FooterSection } from './Footer.styled';

function Footer() {
  return (
    <FooterSection>
      <div>
        <Logo to="/" />
      </div>
    </FooterSection>
  );
}

export default Footer;
