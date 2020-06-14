// modules
import React from "react";
import { createGlobalStyle } from "styled-components";

// component
import { Main } from "./components/pages/main";

//constants
import colors from "./constants/colors";

const App = () => {
  return (
    <section className="App">
      <ResetCSS />
      <Main />
    </section>
  );
};

const ResetCSS = createGlobalStyle`
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,rem,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font:inherit;font-size:16px;vertical-align:baseline}html{line-height:1}ol,ul{list-style:none}table{border-collapse:collapse;border-spacing:0}caption,th,td{text-align:left;font-weight:normal;vertical-align:middle}q,blockquote{quotes:none}q:before,q:after,blockquote:before,blockquote:after{content:"";content:none}a img{border:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}

  html {
    font-size: 14px;
  }

  body {
    background: ${colors.BACKGROUND};
    color: ${colors.NORMAL_FONT};
    line-height: 1.6;
    box-sizing: border-box;
    font-family: "Roboto", "Noto Sans JP", sans-serif;
  }

  body.modal-open {
    overflow: hidden;
  }

  p {
    font-size: 1rem;
  }
`;

export default App;
