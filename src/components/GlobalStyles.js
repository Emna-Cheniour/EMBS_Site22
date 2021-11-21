import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   
   *{
    transition: color 0.25s linear,background-color 0.25s linear;
   }
   html > *{
    background:${({ theme }) => theme.bg};
   }
   .Feedback{
    background:${({ theme }) => theme.bgFeedback};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    object-fit: cover;
    }
    ${"" /* For all the titles */}
    .title{
        color:${({ theme }) => theme.title};
    }
    ${"" /* For all titles descriptions */}
    .paragraph{
        color:${({ theme }) => theme.paragraph};
    }
    ${"" /*For all paragraphs in footer and titles in nav */}
    .footerNav{
        color:${({ theme }) => theme.footerNav};
    }
    ${"" /* Backgrounds */}
    .team-section, 
    .training-section, .charity-section{
        background-color:${({ theme }) => theme.bg1};
    }
    .sponsors-section {
        background-color:${({ theme }) => theme.bg5};
   }
    .event-section , .visits-section, .collab-section{
        background-color:${({ theme }) => theme.bg3}
    }
    .about-section, .contact-section{
        background-color:${({ theme }) => theme.bgContact};
    }

    .footer-section{
        background-color:${({ theme }) => theme.bg4};
    }
    ${"" /* Navbar 7el l Navbar ligne 19 badel men ghadi */}
    ${"" /* Hover effect for boxes */}
    .team-boxes:hover , .collab-box:hover,
    .act-boxes:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    ${"" /* team-boxes + Collaboration */}
    .team-boxes , .collab-box{
      background-color:${({ theme }) => theme.bg2};
    }
    .team-boxes .name{
        color:${({ theme }) => theme.text1}
    }
    .team-boxes .post ,.collab-box h2{
        color:${({ theme }) => theme.text2};
    }

    .social-icon  {
        color:${({ theme }) => theme.teamSocialColor};
    }

    .social-icon:hover {
        color:${({ theme }) => theme.teamSocialColorHover};
    }

    ${"" /* Border in trainings */}
    .training-section .main-row > div {
        border: 1px solid ${({ theme }) => theme.bg3};
    }

    ${"" /* Activities Boxes + charity boxes*/}
    .act-boxes,.char-box{
        ${"" /* background-color: #fff; */}
        background-color:${({ theme }) => theme.bg1};
    }
   
    .act-boxes .date,
    .act-boxes .training-date{
        ${"" /* color: #546e7a; */}
        color:${({ theme }) => theme.text3};
    }
    .act-boxes .desc , 
    .act-boxes .training-title{
        ${"" /* color:#222; */}
        color:${({ theme }) => theme.text2};
    }
    .act-boxes .training-desc{
        ${"" /* color: #5e6d74; */}
        color:${({ theme }) => theme.text3};
    }

    .training-icon{
        color:${({ theme }) => theme.text3};
    }

    .act-boxes:hover  .training-icon{
        background: ${({ theme }) => theme.bg3};
    }
    ${"" /* Charity boxes */}
    .char-box h2, .char-box p{
        ${"" /* color: #546e7a; */}
        color:${({ theme }) => theme.text3};
    }
    .box2 h3{
        ${"" /* color: #263238; */}
        color:${({ theme }) => theme.text1};
    }
    .char-box p:nth-child(odd) {
        background-color: ${({ theme }) => theme.charityOdd};
    }
    ${"" /*social footer  */}
    .social-footer a {
        background-color: ${({ theme }) => theme.socialFooterbg};
        color:${({ theme }) => theme.socialFooterColor};
    }
    .social-footer a:hover {
         background-color: ${({ theme }) => theme.socialFooterColorHover};
    }
    ${"" /* COntact page */}
    .input::placeholder {
        color: ${({ theme }) => theme.placeholder};
    }
    input,
    textarea {
         color: ${({ theme }) => theme.inputColor};
    }
    .btn-contact{
        background-color:${({ theme }) => theme.btnCntact} !important;
        border-color:${({ theme }) => theme.btnCntact} !important;
    }
`;

export default GlobalStyle;
