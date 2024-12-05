import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
`;

export const Banner = styled.div`
  width: 100%;
  height: 65vh;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  background: rgba(49, 125, 178, 0.8);
  width: 100%;
  height: 65vh;
  position: absolute;
  top: 0;
`;

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1090px) {
    .contact-main-inner {
      width: 85%;
    }
  }
`;

export const InnerContainer = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TextElement = styled.div`
  h1 {
    font-size: 3rem;
    color: white;
  }

  p {
    font-size: 1.2rem;
    color: white;
    margin-top: 1rem;
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
      margin-top: 1rem;
      width: 80%;
      margin-bottom: 2rem;
    }
  }
`;

export const ContactWindow = styled.div`
  height: 22rem;
  width: 100%;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    min-height: 28rem;
    flex-direction: column;
    position: relative;
  }
`;

export const ContactWindowLeft = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem 5rem 2rem 3rem;
  }

  h4{
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: var(--reggreen);
  }

  @media screen and (max-width: 768px) {
    height: 21rem;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: relative;
`;

export const Input = styled.input`
  margin-bottom: 0.5rem;
  border: none !important;
  border-bottom: 1px solid rgb(221, 221, 221) !important;
  padding: 0.8rem 0.5rem;
  font-size: 0.8rem;

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  margin-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 0.8rem 0.5rem;
  font-size: 0.8rem;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: var(--reggreen);
  color: white;
  padding: 6px 20px;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  position: absolute;
  top: -3.4rem;
  right: -5.5rem;
`;

export const ContactWindowRight = styled.div`
  height: 100%;
  width: 35%;
  background: #194c70;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    min-height: 8rem;
    height: fit-content;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
  }

  @media screen and (max-width: 660px) {
    padding: 1rem 0 1rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContactDetails = styled.div`
  width: 80%;

  h4 {
    color: white;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ContactMethods = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    height: fit-content;
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;
    gap: 0.7rem;
    align-items: start;
    justify-content: start;
    height: fit-content;
  }
`;

export const SocialLink = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    margin-right: 0.5rem;
    font-size: 20px;
    color: white;
    flex-shrink: 0;
  }

  p {
    color: white;
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
    word-break: break-word;
  }
`;
