import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px 0;
  margin-top:2.5rem
`;

const Center = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Center>
        <Wrapper>
          <div>
            <FooterLink href='/'>E-Commerce</FooterLink>
          </div>
          <div>
            <FooterLink href='/'>Github</FooterLink>
          </div>
        </Wrapper>
      </Center>
    </StyledFooter>
  );
}
